import React from 'react';

const Page_1_1_resumen_de_metas: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Dynamic Island: TopAppBar  */}

{/*  Page Content Canvas  */}
<div className="pt-24 px-6 pb-12 max-w-7xl mx-auto w-full">
{/*  Header Section: Asymmetric  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-4xl font-extrabold text-on-background tracking-tight mb-2">Metas y Objetivos</h2>
<p className="text-on-surface-variant text-lg">Visualiza el rendimiento de tu embudo de ventas y la eficiencia de tus agentes de IA en tiempo real.</p>
</div>
<div className="flex gap-3">
<div className="bg-surface-container-low px-4 py-2 rounded-xl flex items-center gap-2">
<span className="material-symbols-outlined text-primary">calendar_today</span>
<span className="text-sm font-semibold text-on-surface">Este Trimestre</span>
</div>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Main Goal: Ventas Cerradas (Large Card)  */}
<div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between shadow-sm border-0">
<div className="flex justify-between items-start mb-12">
<div>
<h3 className="text-xl font-bold text-on-surface mb-1">Progreso de Ventas</h3>
<p className="text-on-surface-variant text-sm">Meta: $2,500,000 MXN</p>
</div>
<div className="text-right">
<span className="text-3xl font-black text-primary">$1,845,000</span>
<p className="text-secondary text-sm font-bold flex items-center justify-end gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span> +12.4%
                            </p>
</div>
</div>
{/*  Soft Bar Chart  */}
<div className="relative w-full h-48 flex items-end justify-between gap-2">
<div className="w-full bg-surface-container-high h-4 rounded-full overflow-hidden absolute bottom-0">
<div className="h-full bg-gradient-to-r from-primary to-primary-container w-[74%] rounded-full"></div>
</div>
{/*  Individual monthly bars  */}
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-primary/10 rounded-t-lg transition-all duration-300 group-hover:bg-primary/20 h-24"></div>
<span className="text-[10px] font-bold text-slate-400">ENE</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-primary/10 rounded-t-lg transition-all duration-300 group-hover:bg-primary/20 h-32"></div>
<span className="text-[10px] font-bold text-slate-400">FEB</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-primary/10 rounded-t-lg transition-all duration-300 group-hover:bg-primary/20 h-40"></div>
<span className="text-[10px] font-bold text-slate-400">MAR</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-primary rounded-t-lg h-28"></div>
<span className="text-[10px] font-bold text-primary">ABR</span>
</div>
</div>
</div>
{/*  Secondary Metric: Nuevos Clientes (Vertical Card)  */}
<div className="md:col-span-4 bg-primary-container text-on-primary-container rounded-xl p-8 flex flex-col shadow-lg shadow-sky-900/5 relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-xl font-bold mb-1">Nuevos Clientes</h3>
<p className="opacity-80 text-sm mb-8">Adquisición del mes</p>
<div className="text-5xl font-black mb-4">482</div>
<div className="bg-white/20 backdrop-blur-md rounded-lg p-3 inline-flex items-center gap-2">
<span className="material-symbols-outlined text-sm">groups</span>
<span className="text-sm font-semibold">92% de la meta</span>
</div>
</div>
{/*  Decorative Circle Progress  */}
<div className="absolute -right-12 -bottom-12 w-48 h-48 border-[12px] border-white/10 rounded-full"></div>
<div className="absolute -right-8 -bottom-8 w-40 h-40 border-[12px] border-white/20 rounded-full border-t-transparent -rotate-45"></div>
</div>
{/*  Conversion Rate (Small Bento)  */}
<div className="md:col-span-4 bg-surface-container-low rounded-xl p-6 flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<div className="p-2 bg-white rounded-lg">
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Conversión</span>
</div>
<div>
<div className="text-3xl font-bold text-on-surface mb-1">24.8%</div>
<p className="text-on-surface-variant text-sm">Tasa de cierre actual</p>
</div>
<div className="mt-4 pt-4 border-t border-slate-200">
<div className="flex justify-between text-xs font-semibold text-on-surface mb-2">
<span>Eficiencia IA</span>
<span className="text-secondary">Óptima</span>
</div>
<div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[85%]"></div>
</div>
</div>
</div>
{/*  AI Insights (Wide Bento)  */}
<div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center border-0 shadow-sm">
<div className="flex-shrink-0 relative">
<img className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-surface" data-alt="close-up of futuristic transparent glass sculpture with soft cyan and lavender light refraction representing digital intelligence" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFTh_6jRdGEl-yWMccCgbgEdH_PK3-Y_i-EJzHQtkBjx2kZLNJDrDJ7oCHksUnqr-XN1_Bmfm17reQ65AJm632FfDkc1LdYq0YJ-3KoEZqgpCHtkGVMj6wTjIFsF15mkcUU54Wx2JFdSvTAs4y4R1dNMi_RcFuVAiL7x6wpMrDaJZXwsrpNJHSl7JGoxGmfeOUtqKTHbMbwRPWxarRXMqKs0_3IKFJn4rjyRRHFfAcqBqSW59iDX76AYCLchXsAk18tBYKep0qi3DK"/>
<div className="absolute -top-2 -right-2 bg-secondary text-on-secondary text-[10px] font-black px-2 py-1 rounded-full uppercase">IA Activa</div>
</div>
<div>
<h4 className="text-lg font-bold text-on-surface mb-2">Análisis Predictivo de Jazmín</h4>
<p className="text-on-surface-variant text-sm leading-relaxed mb-4 italic">"Basado en el volumen actual de leads calificados, proyectamos un cierre trimestral de <strong>$2.1M</strong>. Sugiero enfocar los agentes en el segmento 'Enterprise' para maximizar el ROI."</p>
<button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                            Ver detalles de proyección <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
{/*  Detail List (Asymmetric Bottom Row)  */}
<div className="md:col-span-12 mt-4">
<h3 className="text-xl font-bold text-on-surface mb-6">Desglose por Agente</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Agent Card 1  */}
<div className="bg-surface-container-low/50 p-5 rounded-xl flex items-center gap-4 hover:bg-surface-container-low transition-colors group">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined">smart_toy</span>
</div>
<div className="flex-1">
<p className="text-sm font-bold text-on-surface">Agente Ventas_Alpha</p>
<p className="text-xs text-on-surface-variant">42 leads cerrados</p>
</div>
<div className="text-right">
<span className="text-xs font-black text-secondary">88%</span>
</div>
</div>
{/*  Agent Card 2  */}
<div className="bg-surface-container-low/50 p-5 rounded-xl flex items-center gap-4 hover:bg-surface-container-low transition-colors group">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined">smart_toy</span>
</div>
<div className="flex-1">
<p className="text-sm font-bold text-on-surface">Agente Soporte_Beta</p>
<p className="text-xs text-on-surface-variant">12 upsells cerrados</p>
</div>
<div className="text-right">
<span className="text-xs font-black text-secondary">74%</span>
</div>
</div>
{/*  Agent Card 3  */}
<div className="bg-surface-container-low/50 p-5 rounded-xl flex items-center gap-4 hover:bg-surface-container-low transition-colors group">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined">smart_toy</span>
</div>
<div className="flex-1">
<p className="text-sm font-bold text-on-surface">Agente Retencion_Gamma</p>
<p className="text-xs text-on-surface-variant">95% tasa retención</p>
</div>
<div className="text-right">
<span className="text-xs font-black text-secondary">92%</span>
</div>
</div>
</div>
</div>
</div>
</div>

        </div>
    );
};

export default Page_1_1_resumen_de_metas;


