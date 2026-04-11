import React from 'react';

const Page_1_4_insights_predictivos_ia: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Dynamic Island (TopAppBar)  */}

{/*  Insights Dashboard Section  */}
<div className="mt-16 md:mt-20">
<div className="flex flex-col mb-10">
<h2 className="text-4xl font-extrabold text-on-background font-headline tracking-tighter mb-2">Insights Predictivos</h2>
<p className="text-on-surface-variant max-w-2xl text-lg font-light leading-relaxed">Analizamos millones de puntos de datos para ofrecerte las mejores estrategias de venta en tiempo real.</p>
</div>
{/*  Bento Grid Layout  */}
<div className="bento-grid">
{/*  Main Insight: Oportunidad de Cierre  */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden group">
<div className="flex-1 space-y-6">
<div className="inline-flex items-center px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase">
                            Prioridad Alta
                        </div>
<h3 className="text-3xl font-bold font-headline text-on-background">Oportunidad de cierre detectada</h3>
<p className="text-on-surface-variant leading-relaxed">El lead <span className="font-semibold text-primary">Rodrigo Valdivia</span> ha interactuado con la propuesta de precios 4 veces en las últimas 2 horas. Probabilidad de cierre: <span className="text-secondary font-bold">94%</span>.</p>
<div className="flex gap-4 pt-4">
<button className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">Llamar Ahora</button>
<button className="px-8 py-3 bg-surface-container-highest text-on-surface rounded-xl font-bold text-sm hover:bg-surface-variant transition-colors">Ver Perfil</button>
</div>
</div>
<div className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Modern high-tech data visualization showing glowing blue neural network connections and floating analytical charts in a dark digital space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8nm9mHUwziefbkxhunng_KkCLVn3OtjgIuLGdTYPk4Y-ZQkXXlEWf6DNVttmsWz8WI5B49YKg6648RlTGAdajadnXOUJxEzoE7JdYCypmG-9P58EgF7iO_g5wh1PW5x3sIdy0j-UFkLJu1s24SEOxnerTc6CtlviSf1YlQ53i_NF07yA1buIswh3Xk5p5pq5IoWt2rKM5if71lfRNDg8jaKlij0H9j5CrgnQFEuRF753l3-urep4pa6qGnZ9iDEpV0ahLfYMB2mne"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
</div>
</div>
{/*  Secondary Insight: Mejor Horario  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-lowest rounded-3xl p-8 shadow-sm flex flex-col justify-between border border-outline-variant/10">
<div className="mb-6">
<div className="w-12 h-12 bg-tertiary-fixed text-on-tertiary-fixed rounded-2xl flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-3xl">schedule</span>
</div>
<h3 className="text-xl font-bold font-headline mb-3">Mejor horario para contactar</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">Tus leads de la industria <span className="font-medium text-on-surface">Tecnología</span> responden un 45% más entre las <span className="font-bold">14:00 y 16:00</span>.</p>
</div>
<div className="p-4 bg-surface-container-low rounded-2xl">
<div className="flex justify-between items-end h-24 gap-2">
<div className="w-full bg-outline-variant/30 h-1/3 rounded-t-lg"></div>
<div className="w-full bg-outline-variant/30 h-2/3 rounded-t-lg"></div>
<div className="w-full bg-primary h-full rounded-t-lg shadow-lg shadow-primary/20"></div>
<div className="w-full bg-outline-variant/30 h-3/4 rounded-t-lg"></div>
<div className="w-full bg-outline-variant/30 h-1/2 rounded-t-lg"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] font-bold text-outline uppercase tracking-tighter">
<span>Mañana</span>
<span>Tarde</span>
<span>Noche</span>
</div>
</div>
</div>
{/*  Alert Insight: Riesgo de Pérdida  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-error-container/20 rounded-3xl p-8 border border-error-container/40 flex flex-col">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-error text-white rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '\'FILL\' 1'}}>warning</span>
</div>
<span className="text-[10px] font-bold text-error uppercase tracking-widest bg-white/50 px-3 py-1 rounded-full">Crítico</span>
</div>
<h3 className="text-xl font-bold font-headline mb-3 text-on-error-container">Riesgo de pérdida de lead</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-1">
                        7 leads han estado inactivos por más de <span className="font-bold">10 días</span>. Se recomienda enviar una campaña de reactivación automatizada hoy mismo.
                    </p>
<button className="w-full py-3 bg-error text-white rounded-xl font-bold text-sm shadow-lg shadow-error/20 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-base">auto_fix_high</span>
                        Lanzar Campaña IA
                    </button>
</div>
{/*  Mini Insight 1: Lead Score  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-high rounded-3xl p-8 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-primary text-4xl mb-4">trending_up</span>
<h3 className="text-xl font-bold font-headline mb-2">Lead Scoring Automático</h3>
<p className="text-sm text-on-surface-variant">Calidad promedio de entrada esta semana aumentó un <span className="text-secondary font-bold">12%</span>.</p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-4 border-surface-container-high overflow-hidden">
<img data-alt="Close-up portrait of a professional man smiling warmly in a bright modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5L2XmxerKXEywNl2daQOsqMzeckj6Mubt9eVeEDq-mHfSC9RrFXlsNytbuvGFRcZyD_F9h9gIi1_ZQxU4I3iNWJesopmsVqMuuHlpNERANlYk1eneJ_booqgeTq7rlM5BR_yfOLHtJObhxlLrmKTSgnnGwEANi-4UNlTCIhHnWqXpVRS_JQqBzBFksI4JA3Rm2LkeDV9w8gD0ZGQY4P28jFgHvonTzXRbgbk34FdhrUXykth0vwK30Hi5W7E9u7wPLcQYvSib2IZT"/>
</div>
<div className="w-10 h-10 rounded-full border-4 border-surface-container-high overflow-hidden">
<img data-alt="Portrait of a confident young businesswoman with soft natural lighting and blurred greenery background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRlGk8ahXaEcR6yV-9JrJC1CiAlFQ9qHbgSG5dluQnsZRKldRMZoeaT1lUbMNBvdaYXjcv1lb2nat4PQ_iEe9XxDs9umHuH-QhiQ8mztNcxBqqd42fLxj_EsijXmOf_nl5ZXBsnvaUonCRMfGMYU60OjtrEHoABMqYSmf8GnMYF7soZDNkLwumGbRSfveTUxT5SmFabtgYWnK7Y0f109_hT4-XpqDSB9IGJzFONlHHPhDlon3VOVpNM2E1Qh5IhsjK8DNr6wuVUuLk"/>
</div>
<div className="w-10 h-10 rounded-full border-4 border-surface-container-high overflow-hidden">
<img data-alt="Modern professional headshot of a person with stylish glasses against a clean neutral wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeI5Xdg_vH5WRw5YviMcMxb4EGjHwusldDIhbPT4y26NdCANQIfxrdztTk_pFRU4lvZWE5ufvxMn-9G1gegylXPmtacCvmwrnaPt2tYWFGWRTHmLkXhLYGrU93kxsuBBXmtTdkuUUjSGmGwbOKpcQ0d-E0S-zvz4rzLMCFscvUyzkSVxxrc-OqFjVU4SSoqVlZOXq5GsCyGQ-r_AB7diao2qXpJkf-00PMtQ_5aVCZROI9krRLQAzgCy83gNP0r8NtTzJ8_M22NDlM"/>
</div>
</div>
<span className="text-xs font-bold text-on-surface-variant">+42 Nuevos</span>
</div>
</div>
{/*  Analytics Summary  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-primary text-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative">
<div className="relative z-10">
<h3 className="text-lg font-bold font-headline opacity-80 mb-1">Conversión Proyectada</h3>
<div className="text-5xl font-black font-headline">€42,850</div>
<p className="text-xs mt-4 opacity-70 font-medium">+18.4% respecto al mes anterior</p>
</div>
<div className="absolute -right-10 -bottom-10 opacity-20 transform -rotate-12">
<span className="material-symbols-outlined text-[160px]">insights</span>
</div>
<div className="mt-8 z-10">
<button className="text-sm font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                             Descargar Reporte Predictivo
                             <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
{/*  Floating Action Button Contextual (IA Chat)  */}
<div className="fixed bottom-8 right-8 z-50">
<button className="w-16 h-16 bg-white shadow-2xl rounded-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform group">
<span className="material-symbols-outlined text-4xl group-hover:hidden">smart_toy</span>
<span className="material-symbols-outlined text-4xl hidden group-hover:block" style={{fontVariationSettings: '\'FILL\' 1'}}>chat_bubble</span>
</button>
</div>

        </div>
    );
};

export default Page_1_4_insights_predictivos_ia;


