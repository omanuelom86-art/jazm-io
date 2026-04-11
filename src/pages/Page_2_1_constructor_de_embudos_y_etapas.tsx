import React from 'react';

const Page_2_1_constructor_de_embudos_y_etapas: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  TopAppBar (Dynamic Island Style)  */}

{/*  Funnel Builder Canvas  */}
<section className="pt-28 px-12 pb-20">
<div className="flex justify-between items-end mb-12">
<div className="max-w-2xl">
<h2 className="text-4xl font-extrabold font-manrope text-on-surface tracking-tight leading-tight">2.1 Constructor de Embudos y Etapas</h2>
<p className="text-on-surface-variant mt-2 text-lg font-light leading-relaxed">
                        Optimiza tu flujo comercial arrastrando y configurando las etapas de tu pipeline inteligente.
                    </p>
</div>
<div className="flex gap-3">
<button className="px-6 py-2.5 bg-surface-container-high text-on-surface font-semibold rounded-xl text-sm hover:bg-surface-dim transition-colors">
                        Vista Previa
                    </button>
<button className="px-6 py-2.5 bg-primary text-white font-semibold rounded-xl text-sm shadow-md hover:bg-primary-container transition-all">
                        Guardar Cambios
                    </button>
</div>
</div>
{/*  Bento Grid - Funnel Stages  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
{/*  Stage 1: Prospección  */}
<div className="group relative bg-surface-container-low rounded-3xl p-6 transition-all hover:bg-surface-container hover:-translate-y-1">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-primary/10 text-primary rounded-2xl">
<span className="material-symbols-outlined" data-icon="search">search</span>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1 text-outline hover:text-on-surface transition-opacity">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
<h3 className="font-manrope font-bold text-lg mb-1">Prospección</h3>
<div className="flex items-center gap-2 text-secondary font-semibold text-sm mb-4">
<span className="material-symbols-outlined text-base" data-icon="trending_up">trending_up</span>
<span>42 Leads activos</span>
</div>
<div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-center">
<span className="text-[10px] font-bold text-outline uppercase tracking-wider">Etapa 01</span>
<span className="material-symbols-outlined text-outline cursor-grab" data-icon="drag_indicator">drag_indicator</span>
</div>
</div>
{/*  Stage 2: Cualificación  */}
<div className="group relative bg-surface-container-low rounded-3xl p-6 transition-all hover:bg-surface-container hover:-translate-y-1">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-secondary/10 text-secondary rounded-2xl">
<span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1 text-outline hover:text-on-surface transition-opacity">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
<h3 className="font-manrope font-bold text-lg mb-1">Cualificación</h3>
<div className="flex items-center gap-2 text-primary font-semibold text-sm mb-4">
<span className="material-symbols-outlined text-base" data-icon="group">group</span>
<span>28 Leads activos</span>
</div>
<div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-center">
<span className="text-[10px] font-bold text-outline uppercase tracking-wider">Etapa 02</span>
<span className="material-symbols-outlined text-outline cursor-grab" data-icon="drag_indicator">drag_indicator</span>
</div>
</div>
{/*  Stage 3: Propuesta  */}
<div className="group relative bg-surface-container-low rounded-3xl p-6 transition-all hover:bg-surface-container hover:-translate-y-1">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-tertiary/10 text-tertiary rounded-2xl">
<span className="material-symbols-outlined" data-icon="description">description</span>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1 text-outline hover:text-on-surface transition-opacity">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
<h3 className="font-manrope font-bold text-lg mb-1">Propuesta</h3>
<div className="flex items-center gap-2 text-tertiary font-semibold text-sm mb-4">
<span className="material-symbols-outlined text-base" data-icon="pending_actions">pending_actions</span>
<span>15 Leads activos</span>
</div>
<div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-center">
<span className="text-[10px] font-bold text-outline uppercase tracking-wider">Etapa 03</span>
<span className="material-symbols-outlined text-outline cursor-grab" data-icon="drag_indicator">drag_indicator</span>
</div>
</div>
{/*  Stage 4: Negociación  */}
<div className="group relative bg-surface-container-low rounded-3xl p-6 transition-all hover:bg-surface-container hover:-translate-y-1">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-primary-container/10 text-primary-container rounded-2xl">
<span className="material-symbols-outlined" data-icon="handshake">handshake</span>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1 text-outline hover:text-on-surface transition-opacity">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
<h3 className="font-manrope font-bold text-lg mb-1">Negociación</h3>
<div className="flex items-center gap-2 text-primary-container font-semibold text-sm mb-4">
<span className="material-symbols-outlined text-base" data-icon="request_quote">request_quote</span>
<span>9 Leads activos</span>
</div>
<div className="mt-auto pt-4 border-t border-outline-variant/10 flex justify-between items-center">
<span className="text-[10px] font-bold text-outline uppercase tracking-wider">Etapa 04</span>
<span className="material-symbols-outlined text-outline cursor-grab" data-icon="drag_indicator">drag_indicator</span>
</div>
</div>
{/*  Add New Stage Placeholder  */}
<button className="border-2 border-dashed border-outline-variant/40 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 text-outline hover:border-primary/40 hover:text-primary transition-all bg-white/20">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="add">add</span>
</div>
<span className="font-manrope font-bold text-sm">Añadir Nueva Etapa</span>
</button>
</div>
{/*  Editor Preview / Asymmetric Insights Column  */}
<div className="mt-16 grid grid-cols-12 gap-8">
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-[2rem] p-10 shadow-sm">
<div className="flex items-center justify-between mb-8">
<h4 className="font-manrope font-bold text-xl">Editor de Automatización de Etapa</h4>
<div className="flex items-center gap-2 px-4 py-1.5 bg-secondary/5 rounded-full">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-xs font-bold text-secondary uppercase tracking-tight">Activo</span>
</div>
</div>
<div className="space-y-6">
<div className="p-6 bg-surface-container-low rounded-2xl flex items-center gap-6">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</div>
<div className="flex-1">
<p className="font-bold text-on-surface">Email de Bienvenida</p>
<p className="text-sm text-outline">Enviar inmediatamente al entrar en 'Prospección'</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="p-6 bg-surface-container-low rounded-2xl flex items-center gap-6 opacity-60">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
</div>
<div className="flex-1">
<p className="font-bold text-on-surface">Puntuación de IA</p>
<p className="text-sm text-outline">Analizar perfil social del lead automáticamente</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
<div className="mt-8">
<button className="text-primary font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                            Añadir Trigger de Automatización
                        </button>
</div>
</div>
<div className="col-span-12 lg:col-span-4 space-y-6">
<div className="bg-gradient-to-br from-primary to-primary-container p-8 rounded-[2rem] text-white shadow-xl shadow-primary/20">
<h4 className="font-manrope font-extrabold text-xl mb-2">Resumen de Conversión</h4>
<p className="text-white/70 text-sm mb-6">Basado en el rendimiento de los últimos 30 días.</p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-1 font-medium">
<span>Tasa de Cierre</span>
<span>24%</span>
</div>
<div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
<div className="bg-white h-full w-[24%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1 font-medium">
<span>Velocidad de Pipeline</span>
<span>12 días</span>
</div>
<div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
<div className="bg-secondary-fixed h-full w-[60%]"></div>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-low p-8 rounded-[2rem]">
<h4 className="font-manrope font-bold text-lg mb-4">Sugerencia de la IA</h4>
<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-primary text-xl" data-icon="psychology">psychology</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">
                                "La etapa de <strong>'Cualificación'</strong> presenta un cuello de botella. Considera añadir una automatización de calificación por formulario para agilizar el proceso."
                            </p>
</div>
<button className="mt-6 w-full py-3 bg-white text-on-surface font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
                            Aplicar Recomendación
                        </button>
</div>
</div>
</div>
</section>
{/*  Dynamic Island Action Floating Button  */}
<div className="fixed bottom-8 right-8 z-50">
<button className="w-16 h-16 bg-on-surface text-surface rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
<span className="material-symbols-outlined transition-transform group-hover:rotate-90" data-icon="add" style={{fontSize: '2rem'}}>add</span>
</button>
</div>

        </div>
    );
};

export default Page_2_1_constructor_de_embudos_y_etapas;
