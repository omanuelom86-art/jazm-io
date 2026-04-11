import React from 'react';

const Page_4_1_estad_sticas_de_efectividad: React.FC = () => {
    return (
        <div className="w-full">
            
<div className="max-w-7xl mx-auto">
{/*  Header Section  */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-4xl font-extrabold text-on-surface tracking-tight leading-tight">Estadísticas de Efectividad</h2>
<p className="text-on-surface-variant mt-2 text-lg">Análisis profundo del rendimiento cognitivo de tus agentes IA.</p>
</div>
<div className="flex items-center gap-3">
<div className="bg-surface-container-high px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium text-on-surface-variant">
<span className="material-symbols-outlined text-lg">calendar_today</span>
                        Últimos 30 días
                    </div>
<button className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
<span className="material-symbols-outlined">download</span>
                        Exportar Informe
                    </button>
</div>
</div>
{/*  Bento Grid Metrics  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
{/*  Metric 1  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 group hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/5 rounded-lg text-primary">
<span className="material-symbols-outlined">speed</span>
</div>
<span className="text-secondary text-xs font-bold bg-secondary-container px-2 py-0.5 rounded-full">-12% vs KPI</span>
</div>
<p className="text-on-surface-variant text-sm font-medium">Tiempo de Respuesta</p>
<h3 className="text-3xl font-black text-on-surface mt-1">1.4s</h3>
<div className="mt-4 h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{width: '85%'}}></div>
</div>
</div>
{/*  Metric 2  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 group hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-secondary/5 rounded-lg text-secondary">
<span className="material-symbols-outlined">task_alt</span>
</div>
<span className="text-secondary text-xs font-bold bg-secondary-container px-2 py-0.5 rounded-full">+4.2%</span>
</div>
<p className="text-on-surface-variant text-sm font-medium">Tasa de Resolución</p>
<h3 className="text-3xl font-black text-on-surface mt-1">94.8%</h3>
<div className="mt-4 flex gap-1">
<div className="h-4 w-1 bg-secondary rounded-full"></div>
<div className="h-6 w-1 bg-secondary rounded-full"></div>
<div className="h-3 w-1 bg-secondary rounded-full opacity-40"></div>
<div className="h-8 w-1 bg-secondary rounded-full"></div>
<div className="h-5 w-1 bg-secondary rounded-full"></div>
</div>
</div>
{/*  Metric 3  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 group hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-tertiary-container/10 rounded-lg text-tertiary">
<span className="material-symbols-outlined">forum</span>
</div>
<span className="text-on-surface-variant text-xs font-medium bg-surface-container px-2 py-0.5 rounded-full">Meta: 15k</span>
</div>
<p className="text-on-surface-variant text-sm font-medium">Volumen Mensual</p>
<h3 className="text-3xl font-black text-on-surface mt-1">12,840</h3>
<p className="text-xs text-on-surface-variant mt-2">Chats procesados con éxito</p>
</div>
{/*  Metric 4  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 group hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/5 rounded-lg text-primary">
<span className="material-symbols-outlined">sentiment_very_satisfied</span>
</div>
<span className="text-secondary text-xs font-bold bg-secondary-container px-2 py-0.5 rounded-full">Excelente</span>
</div>
<p className="text-on-surface-variant text-sm font-medium">CSAT (Satisfacción)</p>
<h3 className="text-3xl font-black text-on-surface mt-1">4.9/5</h3>
<div className="flex gap-0.5 mt-4 text-secondary">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
</div>
</div>
</div>
{/*  Charts & Details  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Main Effiency Trend  */}
<div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-bold text-on-surface">Tendencias de Eficiencia</h3>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-primary"></span>
<span className="text-xs font-semibold text-on-surface-variant">Resolución AI</span>
</div>
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-outline-variant"></span>
<span className="text-xs font-semibold text-on-surface-variant">KPI Objetivo</span>
</div>
</div>
</div>
{/*  Line Chart Visualization (Placeholder)  */}
<div className="relative h-64 w-full flex items-end justify-between px-2">
<div className="absolute inset-0 flex flex-col justify-between py-1 border-l border-b border-outline-variant/20">
<div className="w-full h-px bg-outline-variant/10"></div>
<div className="w-full h-px bg-outline-variant/10"></div>
<div className="w-full h-px bg-outline-variant/10"></div>
<div className="w-full h-px bg-outline-variant/10"></div>
</div>
{/*  Decorative SVG Line  */}
<svg className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 800 250">
<path d="M0,200 Q100,180 200,100 T400,120 T600,60 T800,80" fill="none" stroke="#006190" strokeWidth="3"></path>
<path d="M0,220 Q150,215 300,210 T600,205 T800,200" fill="none" stroke="#c1c6d7" stroke-dasharray="8 4" strokeWidth="2"></path>
</svg>
{/*  Tooltip Placeholder  */}
<div className="absolute left-1/2 top-10 -translate-x-1/2 bg-on-surface text-surface text-[10px] px-2 py-1 rounded-md shadow-xl">
                            Pico: 98.2% Resolución
                        </div>
{/*  Labels  */}
<div className="absolute -bottom-8 w-full flex justify-between text-[10px] font-bold text-slate-400 px-4">
<span>LUN</span><span>MAR</span><span>MIE</span><span>JUE</span><span>VIE</span><span>SAB</span><span>DOM</span>
</div>
</div>
<div className="mt-12 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
<p className="text-sm text-primary font-medium">Insight AI: La efectividad aumentó un 15% tras la última actualización del modelo cognitivo el pasado jueves.</p>
</div>
</div>
{/*  Agent Comparison  */}
<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
<h3 className="text-xl font-bold text-on-surface mb-6">Líderes de Desempeño</h3>
<div className="space-y-6">
{/*  Agent 1  */}
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">A1</div>
<div className="flex-1">
<div className="flex justify-between items-end mb-1">
<span className="text-sm font-bold text-on-surface">Asistente Ventas</span>
<span className="text-xs font-semibold text-secondary">98%</span>
</div>
<div className="h-1.5 w-full bg-surface-container-highest rounded-full">
<div className="h-full bg-secondary rounded-full" style={{width: '98%'}}></div>
</div>
</div>
</div>
{/*  Agent 2  */}
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold">S2</div>
<div className="flex-1">
<div className="flex justify-between items-end mb-1">
<span className="text-sm font-bold text-on-surface">Soporte Técnico</span>
<span className="text-xs font-semibold text-primary">82%</span>
</div>
<div className="h-1.5 w-full bg-surface-container-highest rounded-full">
<div className="h-full bg-primary rounded-full" style={{width: '82%'}}></div>
</div>
</div>
</div>
{/*  Agent 3  */}
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold">L3</div>
<div className="flex-1">
<div className="flex justify-between items-end mb-1">
<span className="text-sm font-bold text-on-surface">Logística Global</span>
<span className="text-xs font-semibold text-primary">75%</span>
</div>
<div className="h-1.5 w-full bg-surface-container-highest rounded-full">
<div className="h-full bg-primary rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>
</div>
<div className="mt-8">
<img alt="Dashboard Analytics" className="w-full h-32 object-cover rounded-xl opacity-60 mix-blend-multiply grayscale hover:grayscale-0 transition-all cursor-pointer" data-alt="close-up of digital dashboard screen showing colorful data visualizations and analytics with soft bokeh lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfDKa4A7ATmipbmsp0sMBKPOD7yPFOIIyCl3WqSB6F-gjrhfYbmuASL-igdHa1ULVJJxSoorE2jGgHWBBYyUDDPLsDvVFu1vhieJI96SLQu-vsBHqJWwUTHpottJ0DqsjTSilmlM7Ab4v-ZljBKlFl4v2R1IZI23fyOB5x4bhhyq6UkDASMXuaAFke2OlS05k99VYlAPh_FtMwsxlF-dajydZ-6e4ifVee9wKZwfg6Ag_hYRlQva9kUf9shepzGSjmeDXSC8gPh_ux"/>
</div>
<button className="w-full mt-6 py-3 border border-outline-variant/30 text-on-surface-variant font-bold text-sm rounded-xl hover:bg-surface-container-highest transition-colors">
                        Ver Todos los Agentes
                    </button>
</div>
</div>
{/*  Detailed Breakdown Table  */}
<div className="mt-8 bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10">
<div className="px-8 py-6 border-b border-outline-variant/10">
<h3 className="text-xl font-bold text-on-surface">Desglose de Operaciones</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant text-[10px] font-black uppercase tracking-widest">
<th className="px-8 py-4">Categoría de Consulta</th>
<th className="px-8 py-4">Volumen</th>
<th className="px-8 py-4">Efectividad</th>
<th className="px-8 py-4">Tiempo Prom.</th>
<th className="px-8 py-4 text-right">Estado</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="px-8 py-4 font-semibold text-on-surface">Reclamos y Devoluciones</td>
<td className="px-8 py-4 text-sm">2,450</td>
<td className="px-8 py-4 text-sm font-bold text-secondary">92%</td>
<td className="px-8 py-4 text-sm">2.1s</td>
<td className="px-8 py-4 text-right">
<span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full">OPTIMIZADO</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="px-8 py-4 font-semibold text-on-surface">Consultas de Stock</td>
<td className="px-8 py-4 text-sm">5,120</td>
<td className="px-8 py-4 text-sm font-bold text-primary">88%</td>
<td className="px-8 py-4 text-sm">0.8s</td>
<td className="px-8 py-4 text-right">
<span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold rounded-full">ESTABLE</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="px-8 py-4 font-semibold text-on-surface">Soporte Nivel 2</td>
<td className="px-8 py-4 text-sm">980</td>
<td className="px-8 py-4 text-sm font-bold text-tertiary">74%</td>
<td className="px-8 py-4 text-sm">4.5s</td>
<td className="px-8 py-4 text-right">
<span className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold rounded-full">REVISAR</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

        </div>
    );
};

export default Page_4_1_estad_sticas_de_efectividad;


