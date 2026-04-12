import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

type AIAgent = {
    id: string;
    name: string;
    role: string;
    status: string;
    avatar_icon: string;
    color_class: string;
};

const Page_gesti_n_de_empleados_virtuales: React.FC = () => {
    const [agents, setAgents] = useState<AIAgent[]>([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [role, setRole] = useState('Ventas y Cierre');
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        const fetchAgents = async () => {
            const { data, error } = await supabase.from('ai_agents').select('*');
            if (data) setAgents(data);
            setLoading(false);
        };
        fetchAgents();
    }, []);

    const handleCreateAgent = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        const { data: userResponse } = await supabase.auth.getUser();
        if (!userResponse.user) {
            alert('Inicia sesión real para agregar agentes.');
            setIsCreating(false);
            return;
        }

        const newAgent = {
            name,
            role,
            status: 'Activo',
            avatar_icon: role.includes('Ventas') ? 'rocket_launch' : 'support_agent',
            color_class: role.includes('Ventas') ? 'border-primary' : 'border-secondary',
            user_id: userResponse.user.id
        };

        const { data, error } = await supabase.from('ai_agents').insert([newAgent]).select();
        if (error) alert('Error: ' + error.message);
        else if (data) setAgents([...agents, ...data]);

        setIsCreating(false);
        setName('');
    };
    return (
        <div className="w-full">

            {/*  TopAppBar (Dynamic Island Style)  */}

            {/*  Content Padding for Header  */}
            <div className="pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
                {/*  Page Header Area  */}
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Empleados Virtuales</h1>
                    <p className="text-on-surface-variant max-w-2xl">Configura cerebros artificiales especializados para cada etapa de tu negocio. Tus agentes no duermen, no olvidan y aprenden de cada interacción.</p>
                </div>
                {/*  Bento Grid Layout  */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/*  Left Column: Creation/Edit Panel (Asymmetric focus)  */}
                    <section className="lg:col-span-7 flex flex-col gap-6">
                        <div className="bg-surface-container-low rounded-xl p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined">edit_note</span>
                                    Configurar Perfil IA
                                </h3>
                                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full uppercase">Borrador</span>
                            </div>
                            <form className="space-y-8" onSubmit={handleCreateAgent}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Nombre del Agente</label>
                                        <input required value={name} onChange={e => setName(e.target.value)} className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 text-on-surface" placeholder="Ej: Sofía" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Tipo de Especialidad</label>
                                        <select value={role} onChange={e => setRole(e.target.value)} className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 text-on-surface appearance-none">
                                            <option>Ventas y Cierre</option>
                                            <option>Soporte Técnico</option>
                                            <option>Calificación de Leads</option>
                                            <option>Atención al Cliente</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Tono de Comunicación</label>
                                        <span className="text-xs text-primary font-semibold">Cercano &amp; Profesional</span>
                                    </div>
                                    <input className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
                                    <div className="flex justify-between text-[10px] font-bold text-outline uppercase tracking-tighter">
                                        <span>Formal / Rígido</span>
                                        <span>Neutral</span>
                                        <span>Empático / Amistoso</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Conocimiento Base (URL o PDF)</label>
                                    <div className="flex gap-2">
                                        <div className="flex-1 relative">
                                            <input className="w-full bg-surface-container-high border-none rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary/40 text-on-surface" placeholder="jazm.io/docs/precios-2024" type="text" />
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">link</span>
                                        </div>
                                        <button className="bg-surface-container-highest p-3 rounded-xl hover:bg-outline-variant/30 transition-colors" type="button">
                                            <span className="material-symbols-outlined text-on-surface">upload_file</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Etapas del Embudo Asignadas</label>
                                    <div className="flex flex-wrap gap-2">
                                        <button className="px-4 py-2 rounded-full border-2 border-primary text-primary text-xs font-bold" type="button">Primer Contacto</button>
                                        <button className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-medium" type="button">Seguimiento</button>
                                        <button className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-medium" type="button">Cierre</button>
                                        <button className="px-4 py-2 rounded-full border-2 border-primary text-primary text-xs font-bold" type="button">Post-Venta</button>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <button disabled={isCreating} type="submit" className="w-full disabled:opacity-50 bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                                        <span className="material-symbols-outlined">smart_toy</span>
                                        {isCreating ? 'Entrenando Inteligencia...' : 'Activar Empleado Virtual'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                    {/*  Right Column: Active Staff List (Tonal depth)  */}
                    <section className="lg:col-span-5 flex flex-col gap-6">
                        <div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">verified_user</span>
                                Staff Activo
                            </h3>
                            <div className="space-y-4">
                                {loading ? <p className="text-center font-bold text-outline animate-pulse">Conectando con DB...</p> : null}
                                {agents.map(ag => (
                                    <div key={ag.id} className={`group bg-surface-container rounded-xl p-4 transition-all hover:bg-surface-container-high cursor-pointer border-l-4 ${ag.color_class}`}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center">
                                                <span className="material-symbols-outlined text-on-surface">{ag.avatar_icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-on-surface text-sm">{ag.name}</h4>
                                                <p className="text-xs text-on-surface-variant">{ag.role}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className={`text-sm font-black text-[10px] px-2 py-1 uppercase rounded ${ag.status === 'Activo' ? 'bg-primary-fixed/20 text-primary' : 'bg-error-container text-error'}`}>
                                                    {ag.status}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                                            <span className="px-2 py-0.5 bg-secondary-container/40 text-[10px] font-bold text-on-secondary-container rounded">IA JAZM.IO</span>
                                            <span className="px-2 py-0.5 bg-primary-fixed/30 text-[10px] font-bold text-on-primary-fixed-variant rounded">100% Memoria Libre</span>
                                        </div>
                                    </div>
                                ))}
                                {/*  Card 3  */}
                                <div className="group bg-surface-container/50 rounded-xl p-4 border border-dashed border-outline-variant opacity-60">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center">
                                            <span className="material-symbols-outlined text-outline">add_circle</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-on-surface text-sm">Nuevo Agente</h4>
                                            <p className="text-xs text-on-surface-variant">Expandir equipo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  AI Insights Mini-Card  */}
                        <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-6 text-on-primary shadow-xl">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-white/20 p-2 rounded-lg">
                                    <span className="material-symbols-outlined text-white">lightbulb</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-white">Recomendación IA</h5>
                                    <p className="text-xs text-white/80 leading-relaxed">Elena está recibiendo muchas consultas técnicas. ¿Quieres clonarla y asignar una versión especializada en Soporte?</p>
                                </div>
                            </div>
                            <button className="w-full py-2 bg-white text-primary text-xs font-bold rounded-xl hover:bg-opacity-90 transition-opacity">Clonar Agente</button>
                        </div>
                    </section>
                </div>
            </div>
            {/*  FAB (Only on relevant screens - Mandate)  */}
            <button className="fixed bottom-8 right-8 w-14 h-14 bg-secondary text-on-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform md:hidden">
                <span className="material-symbols-outlined">add</span>
            </button>

        </div>
    );
};

export default Page_gesti_n_de_empleados_virtuales;


