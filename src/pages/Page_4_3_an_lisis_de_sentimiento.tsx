import React from 'react';

const Page_4_3_an_lisis_de_sentimiento: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Header Section  */}

{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  CSAT Heatmap - Large Section  */}
<section className="md:col-span-8 bg-surface-container-lowest p-8 rounded-3xl shadow-sm">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-xl font-bold">Mapa de Calor: Satisfacción (CSAT)</h3>
<p className="text-sm text-on-surface-variant">Intensidad de satisfacción por hora y día de la semana.</p>
</div>
<div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-lg">
<div className="w-3 h-3 rounded-sm bg-secondary opacity-20"></div>
<div className="w-3 h-3 rounded-sm bg-secondary opacity-60"></div>
<div className="w-3 h-3 rounded-sm bg-secondary"></div>
<span className="text-[10px] font-bold text-on-surface-variant uppercase ml-2">Nivel CSAT</span>
</div>
</div>
{/*  Heatmap Visualization Mockup  */}
<div className="grid grid-cols-13 gap-1">
{/*  Days Labels  */}
<div className="col-span-1 grid grid-rows-7 gap-1 text-[10px] font-bold text-slate-400 py-6">
<div>LUN</div><div>MAR</div><div>MIÉ</div><div>JUE</div><div>VIE</div><div>SÁB</div><div>DOM</div>
</div>
{/*  The Grid  */}
<div className="col-span-12 grid grid-cols-12 gap-2">
{/*  Simulated heat map cells (using Emerald palette from DS)  */}
<div className="space-y-2 col-span-12 grid grid-cols-24 gap-1">
{/*  Rows generated manually for visual effect  */}
<div className="contents">
{/*  Repeated blocks of colors to simulate data patterns  */}
<div className="bg-secondary-container h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-40"></div><div className="bg-secondary-fixed h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-90"></div><div className="bg-secondary h-8 rounded-sm opacity-20"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-30"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-50"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary-container h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-40"></div><div className="bg-secondary-fixed h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-90"></div><div className="bg-secondary h-8 rounded-sm opacity-20"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-30"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-50"></div><div className="bg-secondary h-8 rounded-sm"></div>
<div className="bg-secondary h-8 rounded-sm opacity-40"></div><div className="bg-secondary-fixed h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-90"></div><div className="bg-secondary h-8 rounded-sm opacity-20"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-30"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-50"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary-container h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-40"></div><div className="bg-secondary-fixed h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-90"></div><div className="bg-secondary h-8 rounded-sm opacity-20"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-30"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm opacity-50"></div><div className="bg-secondary h-8 rounded-sm"></div><div className="bg-secondary-container h-8 rounded-sm"></div><div className="bg-secondary h-8 rounded-sm"></div>
</div>
</div>
</div>
</div>
<div className="mt-6 flex justify-between text-[10px] font-bold text-slate-400">
<span>00:00 AM</span>
<span>12:00 PM</span>
<span>11:59 PM</span>
</div>
</section>
{/*  Sentiment Cloud - Squareish  */}
<section className="md:col-span-4 bg-surface-container-low p-8 rounded-3xl flex flex-col">
<div className="mb-6">
<h3 className="text-xl font-bold">Nube de Sentimientos</h3>
<p className="text-sm text-on-surface-variant">Tópicos recurrentes detectados.</p>
</div>
<div className="flex-grow flex flex-wrap gap-3 items-center justify-center content-center py-4">
<span className="text-primary text-3xl font-extrabold hover:scale-110 transition-transform cursor-default">Excelente</span>
<span className="text-secondary text-xl font-bold opacity-80">Rápido</span>
<span className="text-tertiary text-lg font-medium opacity-60">Espera</span>
<span className="text-primary-container text-2xl font-bold">Resolutivo</span>
<span className="text-on-surface-variant text-sm font-semibold">Tardío</span>
<span className="text-primary text-4xl font-black">Eficiente</span>
<span className="text-error text-lg font-bold">Frustrado</span>
<span className="text-on-surface-variant text-base">Amable</span>
<span className="text-secondary text-2xl font-extrabold">Gratitud</span>
<span className="text-primary-container text-xl font-medium">Soporte</span>
</div>
<div className="mt-6 grid grid-cols-3 gap-2">
<div className="bg-surface-container-highest p-3 rounded-2xl text-center">
<div className="text-secondary font-bold text-lg">78%</div>
<div className="text-[10px] font-bold text-on-surface-variant uppercase">Positivo</div>
</div>
<div className="bg-surface-container-highest p-3 rounded-2xl text-center">
<div className="text-on-surface-variant font-bold text-lg">15%</div>
<div className="text-[10px] font-bold text-on-surface-variant uppercase">Neutral</div>
</div>
<div className="bg-surface-container-highest p-3 rounded-2xl text-center">
<div className="text-error font-bold text-lg">7%</div>
<div className="text-[10px] font-bold text-on-surface-variant uppercase">Negativo</div>
</div>
</div>
</section>
{/*  AI Alerts / Critical Cases  */}
<section className="md:col-span-5 bg-surface-container-highest p-8 rounded-3xl">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-error" style={{fontVariationSettings: '\'FILL\' 1'}}>warning</span>
<h3 className="text-xl font-bold">Alertas de Frustración</h3>
</div>
<div className="space-y-4">
{/*  Alert Item 1  */}
<div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-error flex items-start justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-bold text-error">NIVEL CRÍTICO</span>
<span className="text-[10px] text-slate-400 font-medium">Hace 2 min</span>
</div>
<h4 className="font-bold text-sm">Cliente: Roberto Sánchez</h4>
<p className="text-xs text-on-surface-variant mt-1 line-clamp-1">"He intentado cancelar tres veces y el sistema no me deja..."</p>
</div>
<button className="text-primary font-bold text-xs hover:underline">Intervenir</button>
</div>
{/*  Alert Item 2  */}
<div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-error flex items-start justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-bold text-error">REPETICIÓN DETECTADA</span>
<span className="text-[10px] text-slate-400 font-medium">Hace 15 min</span>
</div>
<h4 className="font-bold text-sm">Cliente: María González</h4>
<p className="text-xs text-on-surface-variant mt-1 line-clamp-1">"Ya hablé con tres agentes y nadie me da respuesta..."</p>
</div>
<button className="text-primary font-bold text-xs hover:underline">Intervenir</button>
</div>
{/*  Alert Item 3  */}
<div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-tertiary-container flex items-start justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-bold text-tertiary-container">TONO PASIVO AGRESIVO</span>
<span className="text-[10px] text-slate-400 font-medium">Hace 42 min</span>
</div>
<h4 className="font-bold text-sm">Cliente: Carlos Ruiz</h4>
<p className="text-xs text-on-surface-variant mt-1 line-clamp-1">"Vaya, que gran servicio me están dando hoy..."</p>
</div>
<button className="text-primary font-bold text-xs hover:underline">Revisar</button>
</div>
</div>
</section>
{/*  Satisfaction Breakdown - Modern Graph Simulation  */}
<section className="md:col-span-7 bg-primary text-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between">
<div className="relative z-10">
<h3 className="text-2xl font-bold mb-2">KPI Satisfacción Global</h3>
<p className="text-primary-fixed opacity-90 text-sm max-w-xs">El promedio de CSAT ha subido un 4.2% respecto a la semana anterior.</p>
</div>
<div className="relative z-10 flex items-end gap-12 mt-12">
<div className="text-center">
<div className="text-5xl font-black mb-1">4.8</div>
<div className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed">Puntaje CSAT</div>
</div>
<div className="flex-grow grid grid-cols-6 gap-2 items-end h-32">
{/*  Bars  */}
<div className="bg-primary-fixed/20 h-1/2 rounded-t-lg"></div>
<div className="bg-primary-fixed/40 h-3/4 rounded-t-lg"></div>
<div className="bg-primary-fixed/60 h-2/3 rounded-t-lg"></div>
<div className="bg-primary-fixed/80 h-[90%] rounded-t-lg"></div>
<div className="bg-primary-fixed h-full rounded-t-lg relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold">HOY</div>
</div>
<div className="bg-primary-fixed/50 h-3/4 rounded-t-lg border-2 border-white/20 border-dashed"></div>
</div>
</div>
{/*  Abstract Decorative Background  */}
<div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-container rounded-full blur-3xl opacity-50"></div>
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-6xl opacity-20">trending_up</span>
</div>
</section>
</div>
{/*  Recent Activity Table (No lines as per rule)  */}
<div className="mt-12">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold">Últimos Chats Analizados</h3>
<button className="text-primary font-bold text-sm flex items-center gap-1 hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-all">
                    Ver todo <span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>
</div>
<div className="bg-surface-container-lowest rounded-3xl overflow-hidden">
<div className="grid grid-cols-12 px-8 py-4 bg-surface-container-low text-[10px] font-bold text-slate-400 uppercase tracking-widest">
<div className="col-span-4">Usuario</div>
<div className="col-span-3">Sentimiento Predominante</div>
<div className="col-span-3">Puntuación</div>
<div className="col-span-2 text-right">Acción</div>
</div>
{/*  Table Rows  */}
<div className="divide-y divide-transparent">
{/*  Row 1  */}
<div className="grid grid-cols-12 px-8 py-6 items-center hover:bg-surface-container-low transition-colors group">
<div className="col-span-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="Close-up portrait of a friendly man with short beard in professional attire, soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDO6VTYtsZSb8NfDmVFvqhsLEkIHfb5oNX3XiTsxWzz8fykiq28zCgGC2IxTCQzl-3P97oA6ydEV8ieySNL-6Z4gP0BdHUdNwlKXAcftsUvmfqATSvYJ_eNtsloFt37y_wbgrHCGwEbf8FwFzoqS0IPitHf_y3s8f6g59TpykE5KmEn-JFSMufS03865mzsEL_Oy9kohK-TTSdBOJ6ucQVMGuoVNRDOUIVaSkOYMu7CCwXr7FOSkSCma30iMvVjNFxu_OdcWnc7RIM"/>
</div>
<div>
<div className="text-sm font-bold">Ana Belén Martínez</div>
<div className="text-[11px] text-on-surface-variant">ID: #8829-X</div>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>sentiment_very_satisfied</span>
                                Positivo
                            </span>
</div>
<div className="col-span-3 flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-base" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-secondary text-base" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-secondary text-base" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-secondary text-base" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-secondary text-base" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
</div>
<div className="col-span-2 text-right">
<button className="p-2 rounded-full hover:bg-white transition-all opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-slate-400">visibility</span>
</button>
</div>
</div>
{/*  Row 2  */}
<div className="grid grid-cols-12 px-8 py-6 items-center hover:bg-surface-container-low transition-colors group">
<div className="col-span-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="Portrait of a young smiling professional woman with long hair, bright high-key lighting, corporate style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjzmsth78AvfoMGAmT69-bFErXe4N5_QTPA8s5SttpKhER2QseOGu2ReAycqUdQs3dhPHKVg2tSehJI1JNcjs28dcn1CVx0RYtyuhZc1AWFOCq8QSFWAoQxPtGJs-K_qgZOzncBQAvUcLDOQ1ke8aNe_W6a0pGqeHeMQ0DNVjSjHn-JbA1B1MJYBrspLL7gcV-d2mvApznvac_pu0rGwYXoIGxm5ovLpcrHxBZRVuzU33eJNsWCi3t4MEKF5o6ZYyZ8BHMzC7_6SDq"/>
</div>
<div>
<div className="text-sm font-bold">Julio César Vargas</div>
<div className="text-[11px] text-on-surface-variant">ID: #9102-Y</div>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-error-container text-on-error-container text-xs font-bold">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>sentiment_very_dissatisfied</span>
                                Frustrado
                            </span>
</div>
<div className="col-span-3 flex items-center gap-1">
<span className="material-symbols-outlined text-tertiary text-base" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-outline-variant text-base">star</span>
<span className="material-symbols-outlined text-outline-variant text-base">star</span>
<span className="material-symbols-outlined text-outline-variant text-base">star</span>
<span className="material-symbols-outlined text-outline-variant text-base">star</span>
</div>
<div className="col-span-2 text-right">
<button className="p-2 rounded-full hover:bg-white transition-all opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-slate-400">visibility</span>
</button>
</div>
</div>
{/*  Row 3  */}
<div className="grid grid-cols-12 px-8 py-6 items-center hover:bg-surface-container-low transition-colors group">
<div className="col-span-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="Close-up of a middle-aged man with glasses smiling gently, natural outdoor lighting with soft focus greenery background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiCx9x4qHWRKWZDRuL1i6cnm6_0DfyzC5V260_4d3K9ipDtqGdH2U4EQ6Z-Rdv2BKm5J5y5Kmh4UsQ48sQWx2M8YrzGmjo1sHFUydGennC2yh0CXfFc3hf6RItfFUll6qP2IJDKK5T7aVwQL2HVJ-pARflLqaOG-x0_hS2VfoqrNLQ_7p0kNl7QLG3a51LN-tdXXj4HSeVFIuk928J2PAMdfaSI0Zp_-Nq-hl-hXYKnqHhMu4MpKTUHpm5zXw34Efxj0djXZb7U0zv"/>
</div>
<div>
<div className="text-sm font-bold">Beatriz Soler</div>
<div className="text-[11px] text-on-surface-variant">ID: #7731-M</div>
</div>
</div>
<div className="col-span-3">
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-bold">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>sentiment_neutral</span>
                                Neutral
                            </span>
</div>
<div className="col-span-3 flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-base" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-secondary text-base" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-secondary text-base" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
<span className="material-symbols-outlined text-outline-variant text-base">star</span>
<span className="material-symbols-outlined text-outline-variant text-base">star</span>
</div>
<div className="col-span-2 text-right">
<button className="p-2 rounded-full hover:bg-white transition-all opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-slate-400">visibility</span>
</button>
</div>
</div>
</div>
</div>
</div>

        </div>
    );
};

export default Page_4_3_an_lisis_de_sentimiento;
