import React from 'react';

const Page_2_3_campos_y_etiquetas: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Header Section  */}

{/*  Bento Layout for Fields & Tags  */}
<div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
{/*  Left Column: Custom Fields Management  */}
<section className="col-span-12 lg:col-span-8 space-y-6">
<div className="bg-surface-container-low rounded-xl p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-bold font-headline flex items-center gap-2">
<span className="material-symbols-outlined text-sky-600">view_list</span>
                            Configuración de Campos
                        </h3>
<div className="flex items-center bg-white/50 rounded-lg px-3 py-1 border border-outline-variant/20">
<span className="text-xs text-on-surface-variant font-medium">8 campos activos</span>
</div>
</div>
{/*  Drag & Drop Interface Simulation  */}
<div className="space-y-3">
{/*  Field Row 1  */}
<div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow group cursor-move">
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">drag_indicator</span>
<div className="flex-1 grid grid-cols-3 gap-4">
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Nombre del Campo</p>
<p className="font-semibold">Presupuesto Estimado</p>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Tipo de Dato</p>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold border border-sky-100">
<span className="material-symbols-outlined text-[14px]">monetization_on</span>
                                        Moneda
                                    </span>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Requerido</p>
<div className="w-10 h-5 bg-primary rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-2 hover:bg-error-container/20 rounded-lg text-error transition-colors">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
{/*  Field Row 2  */}
<div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group cursor-move border-l-4 border-transparent">
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">drag_indicator</span>
<div className="flex-1 grid grid-cols-3 gap-4">
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Nombre del Campo</p>
<p className="font-semibold">Fecha de Lanzamiento</p>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Tipo de Dato</p>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
<span className="material-symbols-outlined text-[14px]">calendar_today</span>
                                        Fecha
                                    </span>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Requerido</p>
<div className="w-10 h-5 bg-surface-container-highest rounded-full relative">
<div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-2 hover:bg-error-container/20 rounded-lg text-error transition-colors">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
{/*  Field Row 3  */}
<div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group cursor-move border-l-4 border-transparent">
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">drag_indicator</span>
<div className="flex-1 grid grid-cols-3 gap-4">
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Nombre del Campo</p>
<p className="font-semibold">Fuente de Origen</p>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Tipo de Dato</p>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
<span className="material-symbols-outlined text-[14px]">arrow_drop_down_circle</span>
                                        Dropdown
                                    </span>
</div>
<div>
<p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Requerido</p>
<div className="w-10 h-5 bg-primary rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-2 hover:bg-error-container/20 rounded-lg text-error transition-colors">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
{/*  Empty Slot for Drop  */}
<div className="border-2 border-dashed border-outline-variant/30 rounded-xl py-6 flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high/30 transition-all cursor-pointer">
<span className="material-symbols-outlined text-3xl mb-2">add_circle</span>
<p className="text-sm font-semibold">Arrastra un nuevo componente aquí</p>
</div>
</div>
</div>
</section>
{/*  Right Column: Tags & AI Segmentation  */}
<section className="col-span-12 lg:col-span-4 space-y-6">
{/*  Etiquetas Block  */}
<div className="bg-surface-container-low rounded-xl p-6">
<h3 className="text-lg font-bold font-headline mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">label</span>
                        Etiquetas Dinámicas
                    </h3>
<div className="space-y-4">
<div className="relative">
<input className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 shadow-sm" placeholder="Buscar o crear etiqueta..." type="text"/>
<button className="absolute right-2 top-2 p-1.5 bg-primary text-white rounded-lg">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                                Prioridad Alta
                                <button className="hover:bg-on-secondary-container/10 rounded-full p-0.5"><span className="material-symbols-outlined text-[14px]">close</span></button>
</span>
<span className="px-3 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-xs font-bold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                                Re-marketing
                                <button className="hover:bg-tertiary/10 rounded-full p-0.5"><span className="material-symbols-outlined text-[14px]">close</span></button>
</span>
<span className="px-3 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-bold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-sky-600"></span>
                                Nuevo Lead
                                <button className="hover:bg-sky-600/10 rounded-full p-0.5"><span className="material-symbols-outlined text-[14px]">close</span></button>
</span>
<span className="px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-bold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-outline"></span>
                                Inactivo
                                <button className="hover:bg-outline/10 rounded-full p-0.5"><span className="material-symbols-outlined text-[14px]">close</span></button>
</span>
</div>
</div>
</div>
{/*  AI Insight Card  */}
<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white overflow-hidden relative group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-sky-500/20 blur-3xl rounded-full"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-sky-400" style={{fontVariationSettings: '\'FILL\' 1'}}>auto_awesome</span>
<h4 className="text-sm font-bold uppercase tracking-widest">AI Suggestion</h4>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-4 italic">
                            "He notado que segmentas mucho por presupuesto. ¿Te gustaría que cree una etiqueta automática de 'Ballena' para leads con +50k USD?"
                        </p>
<button className="w-full py-2 bg-sky-600 hover:bg-sky-500 rounded-lg text-xs font-bold transition-all">
                            Implementar Sugerencia
                        </button>
</div>
</div>
{/*  Preview Section  */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6">
<h4 className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-tighter">Vista previa del Formulario</h4>
<div className="space-y-4">
<div className="h-10 bg-surface-container-high rounded-lg w-full"></div>
<div className="h-10 bg-surface-container-high rounded-lg w-full"></div>
<div className="grid grid-cols-2 gap-4">
<div className="h-10 bg-surface-container-high rounded-lg"></div>
<div className="h-10 bg-primary-container/20 border border-primary/20 rounded-lg flex items-center px-3">
<div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></div>
<span className="text-[10px] text-primary font-bold">NUEVO CAMPO</span>
</div>
</div>
</div>
</div>
</section>
</div>

        </div>
    );
};

export default Page_2_3_campos_y_etiquetas;
