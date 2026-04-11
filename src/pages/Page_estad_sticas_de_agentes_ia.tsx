import React from 'react';

const Page_estad_sticas_de_agentes_ia: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  TopAppBar / Dynamic Island  */}
<div className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[460px] glass-island bg-slate-50/80 rounded-full z-50 flex justify-between items-center px-6 py-3 shadow-2xl shadow-sky-900/5">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-secondary-fixed-dim ring-2 ring-white flex items-center justify-center">
<span className="material-symbols-outlined text-[14px] text-on-secondary-fixed" style={{fontVariationSettings: '\'FILL\' 1'}}>bolt</span>
</div>
<div className="w-6 h-6 rounded-full bg-primary ring-2 ring-white flex items-center justify-center">
<span className="material-symbols-outlined text-[14px] text-white" style={{fontVariationSettings: '\'FILL\' 1'}}>smart_toy</span>
</div>
</div>
<span className="text-sm font-bold text-sky-900">Rendimiento Activo</span>
</div>
<div className="flex items-center gap-4">
<div className="h-4 w-px bg-slate-300"></div>
<div className="flex gap-3 text-slate-500">
<span className="material-symbols-outlined text-xl hover:text-sky-700 cursor-pointer transition-colors" data-icon="account_circle">account_circle</span>
<span className="material-symbols-outlined text-xl hover:text-sky-700 cursor-pointer transition-colors" data-icon="settings">settings</span>
</div>
</div>
</div>
<div className="pt-24 px-6 md:px-12 pb-12 max-w-7xl mx-auto">
{/*  Header Section  */}

{/*  Bento Grid Stats  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
{/*  Main Stat Card  */}
<div className="md:col-span-2 bg-surface-container-low rounded-[2rem] p-8 relative overflow-hidden group">
<div className="relative z-10">
<h3 className="text-on-surface-variant font-bold text-sm mb-6 uppercase tracking-widest">Tasa de Conversión Global</h3>
<div className="flex items-baseline gap-4 mb-4">
<span className="text-6xl font-black text-on-background tracking-tighter">68.4%</span>
<span className="text-secondary font-bold flex items-center text-lg">
<span className="material-symbols-outlined">arrow_upward</span>
                                12%
                            </span>
</div>
<p className="text-on-surface-variant text-sm font-medium">Promedio de cierre de leads calificados por IA vs Mes Anterior</p>
</div>
<div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/10 rounded-full -mr-12 -mb-12 blur-3xl group-hover:bg-secondary/20 transition-all"></div>
</div>
{/*  Effectiveness  */}
<div className="bg-surface-container-low rounded-[2rem] p-6 flex flex-col justify-between border-b-4 border-secondary/30">
<div>
<span className="material-symbols-outlined text-secondary text-3xl mb-4" style={{fontVariationSettings: '\'FILL\' 1'}}>task_alt</span>
<h3 className="text-on-surface font-bold">Efectividad</h3>
</div>
<div>
<div className="text-3xl font-black text-on-background mb-1">94.2%</div>
<p className="text-xs text-on-surface-variant">Respuestas correctas validadas</p>
</div>
</div>
{/*  Response Time  */}
<div className="bg-surface-container-low rounded-[2rem] p-6 flex flex-col justify-between border-b-4 border-primary-container/30">
<div>
<span className="material-symbols-outlined text-primary text-3xl mb-4" style={{fontVariationSettings: '\'FILL\' 1'}}>avg_time</span>
<h3 className="text-on-surface font-bold">Atención</h3>
</div>
<div>
<div className="text-3xl font-black text-on-background mb-1">1.2s</div>
<p className="text-xs text-on-surface-variant">Tiempo promedio de respuesta</p>
</div>
</div>
</div>
{/*  Main Analysis Area  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
{/*  Efficiency Chart Mockup  */}
<div className="lg:col-span-2 bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm">
<div className="flex justify-between items-start mb-10">
<div>
<h3 className="text-xl font-bold text-on-background">Flujo de Conversación vs Tiempo</h3>
<p className="text-sm text-on-surface-variant">Rendimiento por hora de los agentes activos</p>
</div>
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="w-3 h-3 rounded-full bg-secondary"></span>
</div>
</div>
<div className="h-64 flex items-end justify-between gap-2 px-2">
<div className="w-full bg-primary/10 rounded-t-lg relative group h-[40%]">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[80%] group-hover:h-[90%] transition-all"></div>
</div>
<div className="w-full bg-primary/10 rounded-t-lg relative group h-[60%]">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[70%] group-hover:h-[85%] transition-all"></div>
</div>
<div className="w-full bg-primary/10 rounded-t-lg relative group h-[85%]">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[90%] group-hover:h-[95%] transition-all"></div>
</div>
<div className="w-full bg-primary/10 rounded-t-lg relative group h-[70%]">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[65%] group-hover:h-[75%] transition-all"></div>
</div>
<div className="w-full bg-primary/10 rounded-t-lg relative group h-[95%]">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[85%] group-hover:h-[90%] transition-all"></div>
</div>
<div className="w-full bg-primary/10 rounded-t-lg relative group h-[50%]">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[40%] group-hover:h-[60%] transition-all"></div>
</div>
<div className="w-full bg-primary/10 rounded-t-lg relative group h-[75%]">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[70%] group-hover:h-[80%] transition-all"></div>
</div>
</div>
<div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
<span>08:00</span><span>10:00</span><span>12:00</span><span>14:00</span><span>16:00</span><span>18:00</span><span>20:00</span>
</div>
</div>
{/*  Learning Insight Sidebar  */}
<div className="bg-surface-container-high rounded-[2rem] p-8 flex flex-col">
<h3 className="text-xl font-bold text-on-background mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">psychology</span>
                        Aprendizaje de IA
                    </h3>
<div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
<div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-md uppercase">Nuevo Patrón</span>
<span className="text-[10px] text-on-surface-variant font-medium">Hace 12m</span>
</div>
<p className="text-sm font-semibold text-on-surface">Objeción de precio manejada con éxito en 45 chats.</p>
<p className="text-xs text-on-surface-variant mt-1 italic">"La IA aprendió a priorizar el valor del soporte 24/7."</p>
</div>
<div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 bg-tertiary-container text-white text-[10px] font-bold rounded-md uppercase">Refuerzo Requerido</span>
<span className="text-[10px] text-on-surface-variant font-medium">Hace 1h</span>
</div>
<p className="text-sm font-semibold text-on-surface">Confusión en política de devoluciones internacionales.</p>
<p className="text-xs text-on-surface-variant mt-1">Solicitando datos adicionales de logística.</p>
</div>
<div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm opacity-60">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 bg-primary-container text-white text-[10px] font-bold rounded-md uppercase">Optimizado</span>
<span className="text-[10px] text-on-surface-variant font-medium">Ayer</span>
</div>
<p className="text-sm font-semibold text-on-surface">Tono de voz ajustado a 'Empresarial Suave'.</p>
</div>
</div>
<button className="mt-8 py-3 bg-white text-primary border border-primary/20 rounded-xl font-bold text-sm hover:bg-primary/5 transition-colors">
                        Ver Log Completo
                    </button>
</div>
</div>
{/*  Active Agents Performance List  */}
<div className="bg-surface-container-low rounded-[2rem] p-8">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-bold text-on-background">Rendimiento por Agente</h3>
<div className="flex items-center gap-4">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">search</span>
<input className="bg-white border-0 rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 w-48" placeholder="Buscar IA..." type="text"/>
</div>
</div>
</div>
<div className="space-y-4">
{/*  Agent Item 1  */}
<div className="bg-surface-container-lowest p-6 rounded-2xl flex items-center gap-6 group hover:translate-x-2 transition-transform cursor-pointer">
<div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center relative overflow-hidden">
<img className="w-full h-full object-cover" data-alt="close-up of a futuristic high-tech humanoid robot head with subtle blue glowing circuitry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSU38QBXTRlYI6zemqxQyvTeEFWlIHmFwLcnFxj7K4ey7SU0roTMxnT813hIO23RAeZ719Akj9FgIBEyCKLPyq5_pnEJACi3K_C-nm0hgoz3Xs1h2NsaR0MHVTTNNmOn9RtYjBhBkhx7TLaBrfGT_uG-nEbVUxZJncGp3qbLfRe8pktwz5tnrCysk5WKzTo_ZcME1FaJWPcZo64H2bAfbqPXpsdPMqZkdd5oiIPdEjG1MX6I6TryZgF2hGQ0DxskOR8QyHO-Glzkng"/>
<div className="absolute bottom-0 right-0 w-4 h-4 bg-secondary rounded-full border-4 border-white"></div>
</div>
<div className="flex-1">
<h4 className="font-bold text-lg text-on-background">Agente Ventas_01</h4>
<div className="flex gap-4 mt-1">
<span className="text-xs font-medium text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">Español / Inglés</span>
<span className="text-xs font-medium text-secondary">Activo desde Ene 2024</span>
</div>
</div>
<div className="hidden md:grid grid-cols-3 gap-12 mr-12 text-center">
<div>
<div className="text-sm font-bold text-on-background">1,240</div>
<div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Chats hoy</div>
</div>
<div>
<div className="text-sm font-bold text-on-background">76%</div>
<div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Conversión</div>
</div>
<div>
<div className="text-sm font-bold text-on-background">4.9/5</div>
<div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Satisfacción</div>
</div>
</div>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
</div>
{/*  Agent Item 2  */}
<div className="bg-surface-container-lowest p-6 rounded-2xl flex items-center gap-6 group hover:translate-x-2 transition-transform cursor-pointer">
<div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center relative overflow-hidden">
<img className="w-full h-full object-cover opacity-80" data-alt="minimalist portrait of a small friendly domestic robot with round eyes and soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCieFV7xX4x8PBZ-lai1ShdDSFhzXlYVgBrTY3C9ksNdmT6eX-b9ZUzLHtCkfnbrNT2_yQlzM7dd6DDr3nLb4jfJdvZQx0R6KWpUxrsYCVC1vvoir1ZcWz0KdWs2gp_Hi-gh0mkzDUYSrm8Hjr4MysJ9y_sld8UPnpKOrJyqozRHcv9STEQ0Dnw0SdJZsiDZVoZnGOHPv89jF9-OSvp8IuwxSHpqGMqk2IDJSuRUsomSuqfPL7oVAMQqKKBH19fT_HkMLp1ZB8lfuHt"/>
<div className="absolute bottom-0 right-0 w-4 h-4 bg-secondary rounded-full border-4 border-white"></div>
</div>
<div className="flex-1">
<h4 className="font-bold text-lg text-on-background">Soporte_Tech_Beta</h4>
<div className="flex gap-4 mt-1">
<span className="text-xs font-medium text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">Multilenguaje</span>
<span className="text-xs font-medium text-secondary">Activo desde Feb 2024</span>
</div>
</div>
<div className="hidden md:grid grid-cols-3 gap-12 mr-12 text-center">
<div>
<div className="text-sm font-bold text-on-background">3,512</div>
<div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Chats hoy</div>
</div>
<div>
<div className="text-sm font-bold text-on-background">42%</div>
<div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Conversión</div>
</div>
<div>
<div className="text-sm font-bold text-on-background">4.7/5</div>
<div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Satisfacción</div>
</div>
</div>
<span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
</div>
</div>
</div>
</div>

        </div>
    );
};

export default Page_estad_sticas_de_agentes_ia;


