import React from 'react';

const Page_5_2_personalizaci_n_de_caracter_sticas: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Dynamic Island Header  */}

<div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
{/*  Page Header Title  */}
<div className="mb-10 space-y-1">
<h2 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">Configuración del Agente</h2>
<p className="text-on-surface-variant max-w-xl">Define el comportamiento, conocimientos y flujos de trabajo de tu inteligencia artificial para optimizar la conversión.</p>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Section: Personalidad y Tono  */}
<div className="md:col-span-7 bg-surface-container-low rounded-3xl p-8 transition-all hover:bg-surface-container flex flex-col gap-8">
<div className="flex items-center gap-3">
<div className="p-3 bg-primary/10 rounded-2xl text-primary">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
</div>
<h3 className="font-headline text-xl font-bold">Personalidad y Tono</h3>
</div>
<div className="space-y-10">
<div className="space-y-4">
<div className="flex justify-between items-end">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Formalidad</label>
<span className="text-xs font-semibold text-primary px-2 py-1 bg-primary/10 rounded-lg">Equilibrado</span>
</div>
<div className="relative flex items-center">
<span className="text-[10px] font-bold text-slate-400 absolute -bottom-6 left-0">INFORMAL</span>
<input className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" value="50"/>
<span className="text-[10px] font-bold text-slate-400 absolute -bottom-6 right-0">FORMAL</span>
</div>
</div>
<div className="space-y-4 pt-4">
<div className="flex justify-between items-end">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Empatía</label>
<span className="text-xs font-semibold text-secondary px-2 py-1 bg-secondary/10 rounded-lg">Cálido</span>
</div>
<div className="relative flex items-center">
<span className="text-[10px] font-bold text-slate-400 absolute -bottom-6 left-0">SERIO</span>
<input className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary" max="100" min="0" type="range" value="80"/>
<span className="text-[10px] font-bold text-slate-400 absolute -bottom-6 right-0">AMISTOSO</span>
</div>
</div>
</div>
<div className="mt-auto pt-8 border-t border-outline-variant/10">
<p className="text-xs text-on-surface-variant italic leading-relaxed">
                            "Basado en esta configuración, el agente saludará de forma profesional pero cercana, usando lenguaje claro y evitando tecnicismos excesivos."
                        </p>
</div>
</div>
{/*  Section: Tiempos de Respuesta  */}
<div className="md:col-span-5 bg-surface-container-high rounded-3xl p-8 flex flex-col gap-6">
<div className="flex items-center gap-3">
<div className="p-3 bg-tertiary/10 rounded-2xl text-tertiary">
<span className="material-symbols-outlined" data-icon="schedule">schedule</span>
</div>
<h3 className="font-headline text-xl font-bold">Tiempos de Respuesta</h3>
</div>
<p className="text-sm text-on-surface-variant">Simula un comportamiento humano añadiendo un retardo en las respuestas.</p>
<div className="space-y-4">
<label className="block text-xs font-bold text-on-surface-variant uppercase">Retardo Simulado</label>
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<input className="w-full bg-surface-container-highest border-none rounded-2xl py-4 px-5 text-lg font-bold text-on-surface focus:ring-2 focus:ring-primary/20" type="text" value="30s"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">MIN</span>
</div>
<div className="relative">
<input className="w-full bg-surface-container-highest border-none rounded-2xl py-4 px-5 text-lg font-bold text-on-surface focus:ring-2 focus:ring-primary/20" type="text" value="2m"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">MAX</span>
</div>
</div>
<div className="flex items-center gap-2 px-1">
<span className="material-symbols-outlined text-sm text-on-surface-variant" data-icon="info">info</span>
<span className="text-[10px] font-medium text-on-surface-variant">El agente variará aleatoriamente entre estos rangos.</span>
</div>
</div>
</div>
{/*  Section: Base de Conocimientos  */}
<div className="md:col-span-8 bg-surface-container-lowest rounded-3xl p-8 border border-surface-container-high relative overflow-hidden group">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-3">
<div className="p-3 bg-primary/10 rounded-2xl text-primary">
<span className="material-symbols-outlined" data-icon="database">database</span>
</div>
<h3 className="font-headline text-xl font-bold">Base de Conocimientos</h3>
</div>
<button className="bg-primary text-on-primary text-xs font-bold px-5 py-2.5 rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/20">
                            Subir Archivos
                        </button>
</div>
{/*  File Upload Zone  */}
<div className="border-2 border-dashed border-outline-variant/30 rounded-3xl p-10 flex flex-col items-center justify-center gap-4 group-hover:border-primary/40 transition-colors">
<div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center text-primary/40 group-hover:scale-110 group-hover:text-primary transition-all duration-500">
<span className="material-symbols-outlined text-4xl" data-icon="cloud_upload">cloud_upload</span>
</div>
<div className="text-center">
<p className="font-bold text-on-surface">Suelta tus PDFs o documentos aquí</p>
<p className="text-sm text-on-surface-variant mt-1">Soporta .pdf, .docx, .txt (Máx 20MB)</p>
</div>
</div>
<div className="mt-8 flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
<div className="flex-shrink-0 flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-2xl border border-outline-variant/10">
<span className="material-symbols-outlined text-error" data-icon="picture_as_pdf">picture_as_pdf</span>
<div className="text-[10px]">
<p className="font-bold text-on-surface truncate w-32">FAQ_Inmuebles_2024.pdf</p>
<p className="text-on-surface-variant">2.4 MB • Analizado</p>
</div>
<span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer hover:text-error transition-colors" data-icon="close">close</span>
</div>
<div className="flex-shrink-0 flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-2xl border border-outline-variant/10">
<span className="material-symbols-outlined text-blue-500" data-icon="description">description</span>
<div className="text-[10px]">
<p className="font-bold text-on-surface truncate w-32">Scripts_Ventas.docx</p>
<p className="text-on-surface-variant">1.1 MB • Analizado</p>
</div>
<span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer hover:text-error transition-colors" data-icon="close">close</span>
</div>
</div>
</div>
{/*  Section: Asignación de Flujo  */}
<div className="md:col-span-4 bg-primary text-on-primary rounded-3xl p-8 flex flex-col gap-6 shadow-xl shadow-primary/20">
<div className="flex items-center gap-3">
<div className="p-3 bg-white/20 rounded-2xl">
<span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
</div>
<h3 className="font-headline text-xl font-bold">Asignación de Flujo</h3>
</div>
<p className="text-sm text-on-primary/80">Ubica a este agente dentro de tu embudo de ventas automático.</p>
<div className="space-y-4">
<div className="space-y-2">
<label className="text-[10px] font-black uppercase tracking-widest text-on-primary/60">Pipeline / Funnel</label>
<div className="relative">
<select className="w-full bg-white/10 border-none rounded-2xl py-3.5 px-4 text-sm font-bold appearance-none focus:ring-2 focus:ring-white/30 cursor-pointer">
<option className="text-on-surface">Ventas Propiedades Residenciales</option>
<option className="text-on-surface">Alquileres Comerciales</option>
<option className="text-on-surface">Inversiones Extranjeras</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
</div>
<div className="space-y-2 pt-2">
<label className="text-[10px] font-black uppercase tracking-widest text-on-primary/60">Etapa del Embudo</label>
<div className="relative">
<select className="w-full bg-white/10 border-none rounded-2xl py-3.5 px-4 text-sm font-bold appearance-none focus:ring-2 focus:ring-white/30 cursor-pointer">
<option className="text-on-surface">Cualificación Inicial</option>
<option className="text-on-surface">Seguimiento Post-Visita</option>
<option className="text-on-surface">Cierre de Negocio</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
</div>
</div>
<div className="mt-auto bg-white/5 p-4 rounded-2xl flex items-center gap-3">
<div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white">
<span className="material-symbols-outlined text-xl" data-icon="check_circle" style={{fontVariationSettings: '\'FILL\' 1'}}>check_circle</span>
</div>
<div>
<p className="text-[10px] font-black uppercase">Estado del Flujo</p>
<p className="text-xs font-bold">Activo y Vinculado</p>
</div>
</div>
</div>
</div>
{/*  Footer Actions  */}
<div className="mt-12 flex justify-end items-center gap-4">
<button className="px-8 py-4 font-headline font-bold text-on-surface-variant hover:text-on-surface transition-colors">
                    Descartar Cambios
                </button>
<button className="px-10 py-4 bg-primary text-on-primary rounded-2xl font-headline font-bold shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                    Guardar Configuración
                </button>
</div>
</div>

        </div>
    );
};

export default Page_5_2_personalizaci_n_de_caracter_sticas;


