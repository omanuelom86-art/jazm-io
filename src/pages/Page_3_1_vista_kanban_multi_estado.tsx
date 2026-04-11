import React from 'react';

const Page_3_1_vista_kanban_multi_estado: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  TopNavBar (Integrated with Dynamic Island)  */}

{/*  Kanban Toolbar  */}
<section className="px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-6">
<div>
<span className="text-[10px] uppercase tracking-widest text-outline font-bold">Valor Total</span>
<p className="text-xl font-headline font-extrabold text-primary">€1.420.500</p>
</div>
<div className="h-8 w-px bg-outline-variant"></div>
<div>
<span className="text-[10px] uppercase tracking-widest text-outline font-bold">Leads Activos</span>
<p className="text-xl font-headline font-extrabold text-on-surface">42</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high text-on-surface text-sm font-medium hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
<span>Filtros</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high text-on-surface text-sm font-medium hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="view_column">view_column</span>
<span>Gestionar Etapas</span>
</button>
</div>
</section>
{/*  Kanban Board  */}
<section className="flex-1 overflow-x-auto px-8 pb-8 flex gap-6">
{/*  Prospección  */}
<div className="flex-shrink-0 w-80 flex flex-col">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<h3 className="font-headline font-bold text-sm">Prospección</h3>
<span className="text-xs font-medium text-outline bg-surface-container px-2 py-0.5 rounded-full">12</span>
</div>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">more_horiz</span>
</button>
</div>
<div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
{/*  Lead Card 1  */}
<div className="group bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/10">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-bold text-secondary-fixed-dim bg-secondary/10 px-2 py-0.5 rounded uppercase tracking-tighter">Nueva Oportunidad</span>
<div className="flex items-center gap-1 text-secondary font-bold text-xs">
<span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '\'FILL\' 1'}}>bolt</span>
<span>94</span>
</div>
</div>
<h4 className="font-headline font-bold text-on-surface mb-1 leading-tight">Soluciones Tech S.L.</h4>
<p className="text-xs text-outline mb-4">Suscripción Anual Enterprise</p>
<div className="flex items-center justify-between pt-3 border-t border-surface-container">
<p className="font-bold text-sm text-primary">€45.000</p>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-surface-container-lowest"></div>
<div className="w-6 h-6 rounded-full bg-primary-fixed-dim border-2 border-surface-container-lowest flex items-center justify-center text-[8px] font-bold">+2</div>
</div>
</div>
</div>
{/*  Lead Card 2  */}
<div className="group bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/10">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-bold text-outline bg-surface-container px-2 py-0.5 rounded uppercase tracking-tighter">Seguimiento</span>
<div className="flex items-center gap-1 text-primary font-bold text-xs">
<span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '\'FILL\' 1'}}>bolt</span>
<span>72</span>
</div>
</div>
<h4 className="font-headline font-bold text-on-surface mb-1 leading-tight">Distribuidora Norte</h4>
<p className="text-xs text-outline mb-4">Mantenimiento Flota</p>
<div className="flex items-center justify-between pt-3 border-t border-surface-container">
<p className="font-bold text-sm text-primary">€12.800</p>
<div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-surface-container-lowest"></div>
</div>
</div>
<button className="w-full py-3 border-2 border-dashed border-outline-variant rounded-xl text-outline hover:text-primary hover:border-primary/40 transition-all text-xs font-bold flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">add</span>
<span>Añadir Lead</span>
</button>
</div>
</div>
{/*  Cualificación  */}
<div className="flex-shrink-0 w-80 flex flex-col">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<h3 className="font-headline font-bold text-sm">Cualificación</h3>
<span className="text-xs font-medium text-outline bg-surface-container px-2 py-0.5 rounded-full">8</span>
</div>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">more_horiz</span>
</button>
</div>
<div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
{/*  Lead Card 3  */}
<div className="group bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/10">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-bold text-error bg-error-container px-2 py-0.5 rounded uppercase tracking-tighter">Prioridad Alta</span>
<div className="flex items-center gap-1 text-secondary font-bold text-xs">
<span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '\'FILL\' 1'}}>bolt</span>
<span>88</span>
</div>
</div>
<h4 className="font-headline font-bold text-on-surface mb-1 leading-tight">Grupo Inmobiliario Global</h4>
<p className="text-xs text-outline mb-4">Consultoría Estratégica</p>
<div className="flex items-center justify-between pt-3 border-t border-surface-container">
<p className="font-bold text-sm text-primary">€120.000</p>
<div className="w-6 h-6 rounded-full bg-primary-container border-2 border-surface-container-lowest"></div>
</div>
</div>
</div>
</div>
{/*  Propuesta  */}
<div className="flex-shrink-0 w-80 flex flex-col">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<h3 className="font-headline font-bold text-sm">Propuesta</h3>
<span className="text-xs font-medium text-outline bg-surface-container px-2 py-0.5 rounded-full">5</span>
</div>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">more_horiz</span>
</button>
</div>
<div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
{/*  Lead Card 4  */}
<div className="group bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/10">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-bold text-primary bg-primary-fixed px-2 py-0.5 rounded uppercase tracking-tighter">Esperando Firma</span>
<div className="flex items-center gap-1 text-secondary font-bold text-xs">
<span className="material-symbols-outlined text-xs" style={{fontVariationSettings: '\'FILL\' 1'}}>bolt</span>
<span>91</span>
</div>
</div>
<h4 className="font-headline font-bold text-on-surface mb-1 leading-tight">Manufacturas del Sur</h4>
<p className="text-xs text-outline mb-4">Proyecto Automatización</p>
<div className="flex items-center justify-between pt-3 border-t border-surface-container">
<p className="font-bold text-sm text-primary">€310.500</p>
<div className="w-6 h-6 rounded-full bg-secondary-fixed-dim border-2 border-surface-container-lowest"></div>
</div>
</div>
</div>
</div>
{/*  Negociación  */}
<div className="flex-shrink-0 w-80 flex flex-col">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<h3 className="font-headline font-bold text-sm">Negociación</h3>
<span className="text-xs font-medium text-outline bg-surface-container px-2 py-0.5 rounded-full">3</span>
</div>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">more_horiz</span>
</button>
</div>
<div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
<div className="flex flex-col items-center justify-center h-48 bg-surface-container-low rounded-xl border border-dashed border-outline-variant opacity-60">
<span className="material-symbols-outlined text-3xl mb-2">move_to_inbox</span>
<p className="text-xs font-medium">Arrastra leads aquí</p>
</div>
</div>
</div>
{/*  Hidden / Add Stage Column Placeholder  */}
<div className="flex-shrink-0 w-12 flex flex-col items-center pt-2">
<button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-outline hover:text-primary transition-all hover:rotate-90">
<span className="material-symbols-outlined">add</span>
</button>
<div className="mt-4 h-full w-px bg-outline-variant/30"></div>
</div>
</section>
{/*  Bottom Floating Insight Card (IA Suggestion)  */}
<div className="absolute bottom-8 right-8 w-80 glass-island p-5 rounded-2xl shadow-2xl border border-white/40 z-50">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white shrink-0">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>psychology</span>
</div>
<div>
<h5 className="text-sm font-headline font-extrabold text-on-surface">Insight de IA</h5>
<p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                            "Manufacturas del Sur" tiene un 85% de probabilidad de cierre esta semana si envías el recordatorio de firma hoy.
                        </p>
<button className="mt-3 text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                            Ejecutar acción sugerida
                            <span className="material-symbols-outlined text-xs">arrow_forward</span>
</button>
</div>
</div>
</div>

        </div>
    );
};

export default Page_3_1_vista_kanban_multi_estado;


