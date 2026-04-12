import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

type Lead = {
    id: string;
    column_id: string;
    title: string;
    subtitle: string;
    amount: string;
    tag_text: string;
    tag_class: string;
    energy: number;
    energy_color: string;
};

const COLUMNS = [
    { id: 'prospeccion', name: 'Prospección', colorClass: 'bg-primary-container' },
    { id: 'cualificacion', name: 'Cualificación', colorClass: 'bg-primary' },
    { id: 'propuesta', name: 'Propuesta', colorClass: 'bg-secondary' },
    { id: 'negociacion', name: 'Negociación', colorClass: 'bg-tertiary' }
];

const Page_3_1_vista_kanban_multi_estado: React.FC = () => {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [draggedLeadId, setDraggedLeadId] = useState<string | null>(null);
    const [totalValue, setTotalValue] = useState(0);

    // Cargar datos en vivo!
    useEffect(() => {
        const fetchLeads = async () => {
            setLoading(true);
            const { data, error } = await supabase.from('leads').select('*');
            if (error) {
                console.error("Error cargando leads:", error);
            } else if (data) {
                setLeads(data);
                calcularTotal(data);
            }
            setLoading(false);
        };
        fetchLeads();
    }, []);

    const calcularTotal = (data: Lead[]) => {
        const total = data.reduce((acc, curr) => {
            const num = parseInt(curr.amount.replace(/[^0-9]/g, '')) || 0;
            return acc + num;
        }, 0);
        setTotalValue(total);
    };

    const handleAddLead = async (columnId: string) => {
        const title = prompt('Nombre de la Empresa / Nuevo Trato:');
        if (!title) return;
        const amountInput = prompt('Monto del contrato (Escribe sólo números, ej. 45000):');
        const subtitle = prompt('Descripción Corta del Servicio:');

        const { data: userResponse } = await supabase.auth.getUser();

        if (!userResponse.user) {
            alert('Debes iniciar sesión real primero.');
            return;
        }

        const newLead = {
            title,
            subtitle: subtitle || 'Suscripción o Servicio Nuevo',
            amount: amountInput ? `€${amountInput}` : '€0',
            column_id: columnId,
            tag_text: 'Reciente',
            tag_class: 'text-primary bg-primary-fixed',
            energy: Math.floor(Math.random() * (99 - 50 + 1) + 50),
            energy_color: 'text-secondary',
            user_id: userResponse.user.id
        };

        const { data, error } = await supabase.from('leads').insert([newLead]).select();
        if (error) {
            alert('Error guardando en Supabase: ' + error.message);
        } else if (data) {
            const updatedLeads = [...leads, ...data];
            setLeads(updatedLeads);
            calcularTotal(updatedLeads);
        }
    };

    const onDragStart = (e: React.DragEvent, id: string) => {
        setDraggedLeadId(id);
        e.dataTransfer.effectAllowed = 'move';
    };

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const onDrop = async (e: React.DragEvent, columnId: string) => {
        e.preventDefault();
        if (!draggedLeadId) return;

        // Actualización Optimista Visual (Instantáneo para el usuario)
        const updatedLeads = leads.map(lead => lead.id === draggedLeadId ? { ...lead, column_id: columnId } : lead);
        setLeads(updatedLeads);
        setDraggedLeadId(null);

        // Impacto en Base de Datos Real (Automático y sigiloso)
        const { error } = await supabase.from('leads').update({ column_id: columnId }).eq('id', draggedLeadId);
        if (error) {
            alert('Oh no! Hubo un error de sincronización de Supabase: ' + error.message);
        }
    };

    return (
        <div className="w-full h-full flex flex-col">
            {/* Toolbar Inteligente */}
            <section className="px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div>
                        <span className="text-[10px] uppercase tracking-widest text-outline font-bold">Valor Total Real</span>
                        <p className="text-xl font-headline font-extrabold text-primary">
                            €{totalValue.toLocaleString('es-ES')}
                        </p>
                    </div>
                    <div className="h-8 w-px bg-outline-variant"></div>
                    <div>
                        <span className="text-[10px] uppercase tracking-widest text-outline font-bold">Leads Activos en Servidor</span>
                        <p className="text-xl font-headline font-extrabold text-on-surface">
                            {loading ? '...' : leads.length}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => alert('Función de Filtros lista para enlazarse.')} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high text-on-surface text-sm font-medium hover:bg-surface-container-highest transition-colors active:scale-95">
                        <span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
                        <span>Filtros</span>
                    </button>
                    <button onClick={() => alert('Administración de etapas lista.')} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high text-on-surface text-sm font-medium hover:bg-surface-container-highest transition-colors active:scale-95">
                        <span className="material-symbols-outlined text-sm" data-icon="view_column">view_column</span>
                        <span>Gestionar Etapas</span>
                    </button>
                </div>
            </section>

            {/* Kanban Board - VIVO Y CONECTADO */}
            <section className="flex-1 overflow-x-auto px-8 pb-8 flex gap-6">
                {COLUMNS.map(col => {
                    const colLeads = leads.filter(l => l.column_id === col.id);
                    return (
                        <div
                            key={col.id}
                            className="flex-shrink-0 w-80 flex flex-col"
                            onDragOver={onDragOver}
                            onDrop={(e) => onDrop(e, col.id)}
                        >
                            <div className="flex items-center justify-between mb-4 px-2">
                                <div className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${col.colorClass}`}></span>
                                    <h3 className="font-headline font-bold text-sm">{col.name}</h3>
                                    <span className="text-xs font-medium text-outline bg-surface-container px-2 py-0.5 rounded-full">{colLeads.length}</span>
                                </div>
                                <button onClick={() => alert('Opciones de Etapa en Supabase.')} className="text-outline hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-sm">more_horiz</span>
                                </button>
                            </div>

                            <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar min-h-[300px] pb-10">
                                {colLeads.map(lead => (
                                    <div
                                        key={lead.id}
                                        draggable="true"
                                        onDragStart={(e) => onDragStart(e, lead.id)}
                                        className={`group bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/40 cursor-grab active:cursor-grabbing ${draggedLeadId === lead.id ? 'opacity-50 scale-105 shadow-xl border-primary' : 'opacity-100'}`}
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter ${lead.tag_class}`}>{lead.tag_text}</span>
                                            <div className={`flex items-center gap-1 font-bold text-xs ${lead.energy_color}`}>
                                                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                                                <span>{lead.energy}</span>
                                            </div>
                                        </div>
                                        <h4 className="font-headline font-bold text-on-surface mb-1 leading-tight">{lead.title}</h4>
                                        <p className="text-xs text-outline mb-4">{lead.subtitle}</p>
                                        <div className="flex items-center justify-between pt-3 border-t border-surface-container">
                                            <p className="font-bold text-sm text-primary">{lead.amount}</p>
                                        </div>
                                    </div>
                                ))}

                                {colLeads.length === 0 && !loading && (
                                    <div className="flex flex-col items-center justify-center h-48 bg-surface-container-low rounded-xl border border-dashed border-outline-variant opacity-60">
                                        <span className="material-symbols-outlined text-3xl mb-2">move_to_inbox</span>
                                        <p className="text-xs font-medium">Arrastre Real Aquí</p>
                                    </div>
                                )}

                                <button onClick={() => handleAddLead(col.id)} className="w-full py-3 border-2 border-dashed border-outline-variant rounded-xl text-outline hover:text-primary-container hover:bg-surface-container-highest hover:border-primary/40 transition-all text-xs font-bold flex items-center justify-center gap-2 mt-4 active:scale-95 shadow-sm">
                                    <span className="material-symbols-outlined text-sm">add</span>
                                    <span>Crear Lead Real Aquí</span>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Page_3_1_vista_kanban_multi_estado;
