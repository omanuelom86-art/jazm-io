import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const Page_1_dashboard_ia: React.FC = () => {
    const [leads, setLeads] = useState<any[]>([]);
    const [currency, setCurrency] = useState('EUR'); // El usuario prefiere Euros usualmente

    useEffect(() => {
        const fetchLeads = async () => {
            const { data } = await supabase.from('leads').select('*');
            if (data) setLeads(data);
        };
        fetchLeads();
    }, []);

    const totalVentas = leads.filter(l => l.status === 'Ganado').reduce((acc, l) => acc + (Number(l.value) || 0), 0);
    const clientesGanados = leads.filter(l => l.status === 'Ganado').length;
    const totalLeads = leads.length;
    const tasaConv = totalLeads > 0 ? ((clientesGanados / totalLeads) * 100).toFixed(1) : '0.0';

    const sNuevo = leads.filter(l => l.status === 'Nuevo').length;
    const sContacto = leads.filter(l => l.status === 'Contactado').length;
    const sNegociacion = leads.filter(l => l.status === 'En Negociación').length;
    const formatMoney = (val: number) => new Intl.NumberFormat('es-ES', { style: 'currency', currency, maximumFractionDigits: 0 }).format(val);
    return (
        <div className="w-full">

            {/*  Dynamic Island TopAppBar  */}

            {/*  Content Spacer  */}
            <div className="h-24"></div>
            {/*  Dashboard Header with Currency Selector  */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                    <h2 className="text-4xl font-extrabold text-on-surface tracking-tight font-headline">1. Dashboard IA</h2>
                    <p className="text-on-surface-variant mt-1">Bienvenido de nuevo. Aquí está lo que está pasando hoy.</p>
                </div>
                <div className="flex items-center gap-3 bg-surface-container-low p-1.5 rounded-xl self-start">
                    <button onClick={() => setCurrency('USD')} className={`px-4 py-1.5 rounded-lg text-xs font-bold ${currency === 'USD' ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-on-surface-variant'}`}>USD</button>
                    <button onClick={() => setCurrency('EUR')} className={`px-4 py-1.5 rounded-lg text-xs font-bold ${currency === 'EUR' ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-on-surface-variant'}`}>EUR</button>
                    <button onClick={() => setCurrency('MXN')} className={`px-4 py-1.5 rounded-lg text-xs font-bold ${currency === 'MXN' ? 'bg-surface-container-lowest shadow-sm text-primary' : 'text-on-surface-variant'}`}>MXN</button>
                </div>
            </div>
            {/*  Bento Grid Layout  */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/*  1.1 Resumen de Metas (Wide)  */}
                <section className="md:col-span-8 bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold font-headline text-on-surface">Progreso de Metas Mensuales</h3>
                        <span className="text-secondary font-bold text-sm bg-secondary-container/20 px-3 py-1 rounded-full">+12.5% vs mes anterior</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <p className="text-sm font-medium text-on-surface-variant">Ventas Cerradas</p>
                            <div className="text-3xl font-black text-on-surface tracking-tighter">{formatMoney(totalVentas)}</div>
                            <div className="w-full bg-surface-container rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full w-[75%]"></div>
                            </div>
                            <p className="text-xs text-on-surface-variant font-medium">Meta Dinámica</p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-sm font-medium text-on-surface-variant">Total Leads (Pipeline)</p>
                            <div className="text-3xl font-black text-on-surface tracking-tighter">{totalLeads}</div>
                            <div className="w-full bg-surface-container rounded-full h-2">
                                <div className="bg-secondary h-2 rounded-full w-[88%]"></div>
                            </div>
                            <p className="text-xs text-on-surface-variant font-medium">Volumen Activo</p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-sm font-medium text-on-surface-variant">Tasa de Conversión</p>
                            <div className="text-3xl font-black text-on-surface tracking-tighter">{tasaConv}%</div>
                            <div className="w-full bg-surface-container rounded-full h-2">
                                <div className="bg-tertiary h-2 rounded-full" style={{ width: `${Math.min(Number(tasaConv), 100)}%` }}></div>
                            </div>
                            <p className="text-xs text-on-surface-variant font-medium">Sobre {clientesGanados} ganados</p>
                        </div>
                    </div>
                </section>
                {/*  1.4 Panel de Insights con IA (Tall Asymmetric)  */}
                <section className="md:col-span-4 bg-primary text-on-primary rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
                    {/*  Abstract Texture Decor  */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container rounded-full opacity-20 blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-secondary-fixed" data-icon="auto_awesome">auto_awesome</span>
                            <h3 className="text-lg font-bold font-headline">Insights de IA</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-primary-container/30 rounded-2xl p-4 backdrop-blur-sm border border-white/5">
                                <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Oportunidad Detectada</p>
                                <p className="text-sm leading-relaxed">Hay un pico de interés en el sector inmobiliario de Madrid. Considera reasignar 3 agentes a esa zona hoy.</p>
                            </div>
                            <div className="bg-primary-container/30 rounded-2xl p-4 backdrop-blur-sm border border-white/5">
                                <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Riesgo de Churn</p>
                                <p className="text-sm leading-relaxed">El cliente "Global Corp" no ha interactuado en 10 días. Sugerimos llamada de seguimiento prioritaria.</p>
                            </div>
                        </div>
                    </div>
                    <button className="relative z-10 mt-8 w-full bg-white text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                        Ver Informe Completo
                        <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                    </button>
                </section>
                {/*  1.2 Embudo de Ventas en Tiempo Real (Large Center)  */}
                <section className="md:col-span-7 bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-xl font-bold font-headline text-on-surface">Embudo de Ventas</h3>
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                            <span className="w-3 h-3 rounded-full bg-primary/40"></span>
                            <span className="w-3 h-3 rounded-full bg-primary"></span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-4">
                            <div className="w-24 text-right text-xs font-bold text-on-surface-variant uppercase">Nuevo</div>
                            <div className="flex-1 bg-primary/10 rounded-r-full h-10 flex items-center px-4 overflow-hidden">
                                <div className="bg-primary h-10 rounded-r-full flex items-center justify-end px-4 text-xs font-bold text-white" style={{ width: `${Math.max((sNuevo / totalLeads) * 100, 5)}%` }}>{sNuevo}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-24 text-right text-xs font-bold text-on-surface-variant uppercase">Contactado</div>
                            <div className="flex-1 bg-primary/10 rounded-r-full h-10 flex items-center px-4 overflow-hidden">
                                <div className="bg-primary/80 h-10 rounded-r-full flex items-center justify-end px-4 text-xs font-bold text-white" style={{ width: `${Math.max((sContacto / totalLeads) * 100, 5)}%` }}>{sContacto}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-24 text-right text-xs font-bold text-on-surface-variant uppercase">Negociación</div>
                            <div className="flex-1 bg-primary/10 rounded-r-full h-10 flex items-center px-4 overflow-hidden">
                                <div className="bg-primary/40 h-10 rounded-r-full flex items-center justify-end px-4 text-xs font-bold text-white" style={{ width: `${Math.max((sNegociacion / totalLeads) * 100, 5)}%` }}>{sNegociacion}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-24 text-right text-xs font-bold text-on-surface-variant uppercase">Ganado</div>
                            <div className="flex-1 bg-primary/10 rounded-r-full h-10 flex items-center px-4 overflow-hidden">
                                <div className="bg-secondary h-10 rounded-r-full flex items-center justify-end px-4 text-xs font-bold text-white" style={{ width: `${Math.max((clientesGanados / totalLeads) * 100, 5)}%` }}>{clientesGanados}</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  1.3 Estadísticas de Leads (Detailed Card)  */}
                <section className="md:col-span-5 bg-surface-container-low rounded-3xl p-8">
                    <h3 className="text-xl font-bold font-headline text-on-surface mb-6">Canales de Origen</h3>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined" data-icon="language">language</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-on-surface">Web Directo</p>
                                    <p className="text-xs text-on-surface-variant">420 leads este mes</p>
                                </div>
                            </div>
                            <span className="text-sm font-black text-on-surface">45%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined" data-icon="campaign">campaign</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-on-surface">Ads &amp; Redes</p>
                                    <p className="text-xs text-on-surface-variant">310 leads este mes</p>
                                </div>
                            </div>
                            <span className="text-sm font-black text-on-surface">32%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined" data-icon="person_add">person_add</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-on-surface">Referidos</p>
                                    <p className="text-xs text-on-surface-variant">150 leads este mes</p>
                                </div>
                            </div>
                            <span className="text-sm font-black text-on-surface">18%</span>
                        </div>
                    </div>
                    <div className="mt-10 p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/10">
                        <p className="text-xs font-bold text-on-surface-variant mb-4 uppercase tracking-widest">Actividad Reciente</p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                                <img className="w-full h-full object-cover" data-alt="professional portrait of a manager smiling in office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJH8mi22mHZ-KJ2I58vF1pZxzqI7c7446I1X1fmFBUQJy_pNgKuRz-Dr8W2MhiyAO6CVcsDU-gmEz6fPKDWNHk6d27XoaodoyQluNJG1UCV6w1ixd5dmMXGqbWB9Y6r3SD0e3YOOOtE_jSk72y9GbMpHudXbVhckIDhf5yW0dk52o_LAkN-8nGWWHuJ5eIPyWyO6H09wwPfRH4F9y-zrTyndKl5i8oqzwJ9EvHnBk4-6HIrtiDXKxAs8E4yXbCCToKvF0lRfpwRGa2" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs font-bold text-on-surface">Carlos R. convirtió un Lead</p>
                                <p className="text-[10px] text-on-surface-variant">Hace 4 minutos</p>
                            </div>
                            <div className="text-xs font-bold text-secondary">+$1,200</div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Page_1_dashboard_ia;


