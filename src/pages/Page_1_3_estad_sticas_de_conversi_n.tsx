import React from 'react';

const Page_1_3_estad_sticas_de_conversi_n: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  TopAppBar / Dynamic Island (The Signature)  */}
<div className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[480px] h-14 rounded-full glass-island z-50 shadow-2xl shadow-sky-900/10 flex items-center justify-between px-6 border border-white/20">
<div className="flex items-center gap-3">
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
<div className="w-1.5 h-1.5 rounded-full bg-secondary opacity-40"></div>
</div>
<span className="text-xs font-bold text-on-surface tracking-tight">IA Analizando Conversiones...</span>
</div>
<div className="flex items-center gap-4">
<div className="h-4 w-px bg-slate-300"></div>
<span className="material-symbols-outlined text-sky-700 text-lg">account_circle</span>
<span className="material-symbols-outlined text-slate-500 text-lg">settings</span>
</div>
</div>
<div className="p-8 mt-16 max-w-7xl mx-auto">
{/*  Header Section  */}

{/*  Bento Grid Stats  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
{/*  Main Metric  */}
<div className="md:col-span-2 row-span-1 bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-1">Tasa de Conversión Total</p>
<h3 className="text-5xl font-black text-on-surface">24.8%</h3>
</div>
<div className="bg-secondary-container/30 text-secondary px-3 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="text-xs font-bold">+4.2%</span>
</div>
</div>
<div className="mt-8 flex items-end gap-2 h-16">
<div className="flex-1 bg-primary/10 rounded-t-lg h-[40%]"></div>
<div className="flex-1 bg-primary/10 rounded-t-lg h-[60%]"></div>
<div className="flex-1 bg-primary/10 rounded-t-lg h-[45%]"></div>
<div className="flex-1 bg-primary/10 rounded-t-lg h-[80%]"></div>
<div className="flex-1 bg-primary/10 rounded-t-lg h-[65%]"></div>
<div className="flex-1 bg-primary rounded-t-lg h-[95%]"></div>
</div>
</div>
{/*  Secondary Metric: WhatsApp  */}
<div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-outline-variant/10">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>chat</span>
</div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Conversión WhatsApp</p>
<h3 className="text-3xl font-bold text-on-surface mt-1">32.1%</h3>
<p className="text-[10px] text-slate-400 mt-2 font-medium">Canal con mayor efectividad</p>
</div>
{/*  Secondary Metric: Time  */}
<div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-outline-variant/10">
<div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
<span className="material-symbols-outlined">schedule</span>
</div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tiempo de Cierre</p>
<h3 className="text-3xl font-bold text-on-surface mt-1">4.2 días</h3>
<p className="text-[10px] text-error mt-2 font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[10px]">trending_up</span>
                        +0.5d vs mes anterior
                    </p>
</div>
</div>
{/*  Detailed Analysis Section  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Line Chart: Comparison with Previous Period  */}
<div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 overflow-hidden relative">
<div className="flex justify-between items-center mb-8">
<div>
<h4 className="text-xl font-bold text-on-surface">Tendencia de Conversión</h4>
<p className="text-xs text-slate-400 font-medium">Comparativa: Actual vs Periodo Anterior</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="text-[10px] font-bold text-slate-500">Actual</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<span className="text-[10px] font-bold text-slate-500">Anterior</span>
</div>
</div>
</div>
{/*  Line Chart Visual (Simplified SVG)  */}
<div className="relative h-64 w-full flex items-end">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
{/*  Previous Period Area  */}
<path d="M0 80 Q 50 85 100 60 T 200 70 T 300 50 T 400 65" fill="none" stroke="#e2e8f0" strokeWidth="2"></path>
{/*  Current Period Area  */}
<path d="M0 90 Q 50 70 100 75 T 200 40 T 300 30 T 400 20" fill="none" stroke="#006190" strokeWidth="3"></path>
<circle cx="400" cy="20" fill="#006190" r="4"></circle>
</svg>
</div>
<div className="flex justify-between mt-4 px-2">
<span className="text-[10px] font-bold text-slate-300">Sem 1</span>
<span className="text-[10px] font-bold text-slate-300">Sem 2</span>
<span className="text-[10px] font-bold text-slate-300">Sem 3</span>
<span className="text-[10px] font-bold text-slate-300">Sem 4</span>
</div>
</div>
{/*  Origin Breakdown Table (Clean)  */}
<div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
<h4 className="text-xl font-bold text-on-surface mb-6">Desglose por Origen</h4>
<div className="space-y-6">
{/*  WhatsApp  */}
<div>
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-sm font-semibold text-slate-600">WhatsApp</span>
</div>
<span className="text-sm font-bold text-on-surface">1,240 Leads</span>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full w-[65%]"></div>
</div>
<p className="text-[10px] text-slate-400 mt-1">Conversión: 32.1%</p>
</div>
{/*  Web Form  */}
<div>
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-sky-500"></span>
<span className="text-sm font-semibold text-slate-600">Web Directo</span>
</div>
<span className="text-sm font-bold text-on-surface">845 Leads</span>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-sky-500 rounded-full w-[40%]"></div>
</div>
<p className="text-[10px] text-slate-400 mt-1">Conversión: 18.4%</p>
</div>
{/*  Social Ads  */}
<div>
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-purple-500"></span>
<span className="text-sm font-semibold text-slate-600">Redes Sociales</span>
</div>
<span className="text-sm font-bold text-on-surface">612 Leads</span>
</div>
<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 rounded-full w-[25%]"></div>
</div>
<p className="text-[10px] text-slate-400 mt-1">Conversión: 12.2%</p>
</div>
</div>
</div>
</div>
{/*  Time Average Table  */}
<div className="mt-8 bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 overflow-x-auto">
<div className="flex justify-between items-center mb-8">
<h4 className="text-xl font-bold text-on-surface">Eficiencia de Cierre por Agente</h4>
<button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                        Ver informe completo
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
</button>
</div>
<table className="w-full text-left">
<thead>
<tr className="text-slate-400 uppercase text-[10px] tracking-widest font-bold">
<th className="pb-4">Agente</th>
<th className="pb-4 text-center">Leads Totales</th>
<th className="pb-4 text-center">Convertidos</th>
<th className="pb-4 text-center">T. Promedio</th>
<th className="pb-4 text-right">Rendimiento</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="py-4">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full" data-alt="portrait of a confident male sales professional in business casual attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVOKAV-OQcw0E2Swn-jPpBF_HrP5EHoZ7o4NnNPfobeJrjRXZ_YnOheEmNivaH0Dtucs-XMdbMX7msJ7YNfB93-jhyt6ZP4Pv_qDN8OyggLKFnBkTfmN_jCw_rjAv8bnjPuLtXhTlGALFAigKte9fK43eoYkEKB2COhBQRc4BRW_rZS-X3Fq0YpiGhjWjm0HarT5Th5RPt0907ymEVOJ51kgkELJTlo00x70ohRjnkZ8ZxPrsQ9UwklVYuqjsU5XPCu2nmFJBky68y"/>
<span className="text-sm font-bold text-slate-700">Carlos Méndez</span>
</div>
</td>
<td className="py-4 text-center text-sm font-medium">142</td>
<td className="py-4 text-center text-sm font-medium">48</td>
<td className="py-4 text-center text-sm font-medium">3.2 días</td>
<td className="py-4 text-right">
<span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-1 rounded-md">EXCELENTE</span>
</td>
</tr>
<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="py-4">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full" data-alt="professional woman smiling warmly at the camera in a bright creative studio space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhyiVozf9GovVI-SAH21nkTXlMPGax2rcnBx6qAxdq9YquqCVBQSjzqDMvFRtQY_0GPr7bbY6LGGGOwojCvCd7_c8iDhu08yDJsBfSAOcIZBVW-_bYuzS2nNgj3X9UizEpxzDfKhElImr2JhhGniQsu994kgmCPALfprVb12hQ-vXs5XB0Vpz7jwpKGHDjHmIAZYGx9SUiYoh7rnZLr4P9KhIoeIGgYV_A2jthMTO3d3vhQRwKDdmKdODL8n-fWG5mqb0nfSoRgff_"/>
<span className="text-sm font-bold text-slate-700">Elena Ríos</span>
</div>
</td>
<td className="py-4 text-center text-sm font-medium">98</td>
<td className="py-4 text-center text-sm font-medium">29</td>
<td className="py-4 text-center text-sm font-medium">4.5 días</td>
<td className="py-4 text-right">
<span className="bg-sky-100 text-sky-700 text-[10px] font-black px-2 py-1 rounded-md">ÓPTIMO</span>
</td>
</tr>
<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="py-4">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full" data-alt="young professional man looking towards the side with a serious yet engaged expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC22wwsr404bQ23mhMdT6i0qdI2JoNBmmxVYvi78O6ei1rwnk5l9G3tLd6OQ8S6l7MX9YXa8VZo0KycLd6qphSqIN6-018U_MX7AN8njtXAagsmksmNKUwG3AYBnmLI3RTrDyL5Dv2FUYSVR2bChPq1M84hoUuohgiNu6Ao_p5HU-_gqjtlkNcLZk8n4LOwFP3knes1G7HO19zHhiqz6NF7n3rFF2NitgqBabeXsQEg0t9-3TMj4q-TnDmwqfnM2Qr0pWrSFKUyEpvt"/>
<span className="text-sm font-bold text-slate-700">Javier Soto</span>
</div>
</td>
<td className="py-4 text-center text-sm font-medium">115</td>
<td className="py-4 text-center text-sm font-medium">18</td>
<td className="py-4 text-center text-sm font-medium">6.1 días</td>
<td className="py-4 text-right">
<span className="bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-1 rounded-md">MEJORABLE</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Floating Action Button (FAB) Suppression check: FAB suppressed as this is a Details/Stats page  */}

        </div>
    );
};

export default Page_1_3_estad_sticas_de_conversi_n;


