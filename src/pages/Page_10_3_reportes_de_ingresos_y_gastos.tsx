import React from 'react';

const Page_10_3_reportes_de_ingresos_y_gastos: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  TopNavBar / Dynamic Island (JSON Derived)  */}

{/*  Dashboard Canvas  */}
<div className="p-8 pt-24 max-w-7xl mx-auto w-full">
{/*  Page Header  */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Reportes Financieros</h2>
<p className="text-on-surface-variant font-medium">Análisis detallado de ingresos recurrentes y costos operativos de JAZM.IO</p>
</div>
<div className="flex gap-3">
<div className="bg-surface-container-high rounded-xl px-4 py-2 flex items-center gap-2">
<span className="material-symbols-outlined text-outline">calendar_today</span>
<span className="text-sm font-semibold">Últimos 30 días</span>
</div>
<button className="bg-primary text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-primary/20">
<span className="material-symbols-outlined text-sm">download</span>
                        Exportar
                    </button>
</div>
</div>
{/*  Bento Grid Stats  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
{/*  MRR Card  */}
<div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between shadow-sm border border-outline-variant/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-primary">trending_up</span>
</div>
<div>
<p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Monthly Recurring Revenue</p>
<h3 className="text-4xl font-headline font-extrabold text-on-surface">$124,500 <span className="text-sm font-medium text-on-surface-variant">USD</span></h3>
</div>
<div className="mt-6 flex items-center gap-2">
<span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-bold flex items-center">
<span className="material-symbols-outlined text-xs mr-1">arrow_upward</span> 12.4%
                        </span>
<span className="text-xs text-on-surface-variant font-medium">vs mes anterior</span>
</div>
</div>
{/*  Expenses Card  */}
<div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between shadow-sm border border-outline-variant/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-tertiary">account_balance_wallet</span>
</div>
<div>
<p className="text-sm font-bold text-tertiary uppercase tracking-widest mb-1">Gastos Operativos</p>
<h3 className="text-4xl font-headline font-extrabold text-on-surface">$34,210 <span className="text-sm font-medium text-on-surface-variant">USD</span></h3>
</div>
<div className="mt-6 flex items-center gap-2">
<span className="bg-tertiary/10 text-tertiary px-2 py-1 rounded text-xs font-bold flex items-center">
<span className="material-symbols-outlined text-xs mr-1">arrow_upward</span> 4.2%
                        </span>
<span className="text-xs text-on-surface-variant font-medium">Infraestructura &amp; AI</span>
</div>
</div>
{/*  Net Profit Card  */}
<div className="bg-gradient-to-br from-primary-container to-primary p-8 rounded-xl flex flex-col justify-between shadow-2xl shadow-primary/20 text-white relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
<div>
<p className="text-sm font-bold text-white/70 uppercase tracking-widest mb-1">Beneficio Neto</p>
<h3 className="text-4xl font-headline font-extrabold">$90,290 <span className="text-sm font-medium text-white/60">USD</span></h3>
</div>
<div className="mt-6">
<div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary-fixed w-[72%] h-full rounded-full"></div>
</div>
<p className="text-xs font-medium mt-2 text-white/80">72.5% margen de beneficio</p>
</div>
</div>
</div>
{/*  Revenue Chart & Breakdowns  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
{/*  Bar Chart Section  */}
<div className="lg:col-span-2 bg-surface-container-low p-8 rounded-xl flex flex-col border border-outline-variant/5">
<div className="flex justify-between items-center mb-10">
<div>
<h4 className="text-xl font-bold font-headline">Crecimiento de Ingresos</h4>
<p className="text-xs text-on-surface-variant">Histórico de los últimos 6 meses</p>
</div>
<div className="flex gap-2">
<span className="flex items-center gap-1.5 text-xs font-semibold"><span className="w-2 h-2 rounded-full bg-primary"></span> MRR</span>
<span className="flex items-center gap-1.5 text-xs font-semibold"><span className="w-2 h-2 rounded-full bg-primary-fixed"></span> Suscripciones</span>
</div>
</div>
{/*  Mock Bar Chart  */}
<div className="flex-grow flex items-end justify-between gap-4 h-64 pt-4">
<div className="flex flex-col items-center flex-1 h-full justify-end group">
<div className="w-full bg-primary-fixed/30 rounded-t-lg h-[40%] mb-1 transition-all group-hover:bg-primary-fixed"></div>
<div className="w-full bg-primary/40 rounded-t-lg h-[60%] transition-all group-hover:bg-primary"></div>
<span className="text-[10px] font-bold text-on-surface-variant mt-4">ENE</span>
</div>
<div className="flex flex-col items-center flex-1 h-full justify-end group">
<div className="w-full bg-primary-fixed/30 rounded-t-lg h-[45%] mb-1 transition-all group-hover:bg-primary-fixed"></div>
<div className="w-full bg-primary/40 rounded-t-lg h-[65%] transition-all group-hover:bg-primary"></div>
<span className="text-[10px] font-bold text-on-surface-variant mt-4">FEB</span>
</div>
<div className="flex flex-col items-center flex-1 h-full justify-end group">
<div className="w-full bg-primary-fixed/30 rounded-t-lg h-[50%] mb-1 transition-all group-hover:bg-primary-fixed"></div>
<div className="w-full bg-primary/40 rounded-t-lg h-[75%] transition-all group-hover:bg-primary"></div>
<span className="text-[10px] font-bold text-on-surface-variant mt-4">MAR</span>
</div>
<div className="flex flex-col items-center flex-1 h-full justify-end group">
<div className="w-full bg-primary-fixed/30 rounded-t-lg h-[55%] mb-1 transition-all group-hover:bg-primary-fixed"></div>
<div className="w-full bg-primary/40 rounded-t-lg h-[82%] transition-all group-hover:bg-primary"></div>
<span className="text-[10px] font-bold text-on-surface-variant mt-4">ABR</span>
</div>
<div className="flex flex-col items-center flex-1 h-full justify-end group">
<div className="w-full bg-primary-fixed/30 rounded-t-lg h-[62%] mb-1 transition-all group-hover:bg-primary-fixed"></div>
<div className="w-full bg-primary/40 rounded-t-lg h-[88%] transition-all group-hover:bg-primary"></div>
<span className="text-[10px] font-bold text-on-surface-variant mt-4">MAY</span>
</div>
<div className="flex flex-col items-center flex-1 h-full justify-end group">
<div className="w-full bg-primary-fixed/40 rounded-t-lg h-[70%] mb-1 transition-all group-hover:bg-primary-fixed"></div>
<div className="w-full bg-primary rounded-t-lg h-[95%] transition-all"></div>
<span className="text-[10px] font-bold text-primary mt-4 font-headline">JUN</span>
</div>
</div>
</div>
{/*  AI Insights / Distribution  */}
<div className="bg-surface-container-highest p-8 rounded-xl border border-outline-variant/10">
<h4 className="text-xl font-bold font-headline mb-6">Análisis de Costos</h4>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs font-bold mb-2">
<span>INFRAESTRUCTURA (AWS)</span>
<span>45%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full">
<div className="bg-primary-container w-[45%] h-full rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-bold mb-2">
<span>MODELOS IA (OPENAI/CLAUDE)</span>
<span>38%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full">
<div className="bg-tertiary-container w-[38%] h-full rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-bold mb-2">
<span>ALMACENAMIENTO VECTORIAL</span>
<span>12%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full">
<div className="bg-secondary w-[12%] h-full rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-bold mb-2">
<span>OTROS</span>
<span>5%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full">
<div className="bg-outline w-[5%] h-full rounded-full"></div>
</div>
</div>
<div className="mt-10 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
<p className="text-xs font-bold text-primary mb-1 uppercase tracking-tight">Insight de IA</p>
<p className="text-sm text-on-surface italic leading-relaxed">"El gasto en modelos de IA ha crecido un 18% este mes, pero ha mejorado el tiempo de respuesta promedio en un 30%."</p>
</div>
</div>
</div>
</div>
{/*  Detailed Transactions / List  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/*  Recent Subscriptions  */}
<div className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/5">
<div className="px-8 py-6 flex justify-between items-center border-b border-outline-variant/10">
<h4 className="font-headline font-extrabold text-lg">Suscripciones Recientes</h4>
<button className="text-xs font-bold text-primary hover:underline">Ver todas</button>
</div>
<div className="divide-y divide-outline-variant/10">
<div className="px-8 py-4 flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-4">
<img alt="Logo Cliente" className="w-10 h-10 rounded-full bg-surface-container-highest p-2" data-alt="Corporate building icon in minimalist material style with neutral gray and white tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNZocogFtE63XqesnYs3k3ZmITG-a5hjwTeSz_fV8xTr47t0J-E2D2L4zmSq6k7_Wl2HzRzKEGg3Aff17NDxocyBSCAiGCBq2YHAqa6WmNKTvA8Rr_46CtEpqacNLW3e8Ps3GigJZ6oSOB3fXVaK8pMagYBnQEiEPkPRbdRq7kg3E-igYgQUh8eMNP-wnPytXLA6WZol_k702mWHPjj4FCrslNHH40via6R4rD7DeEkfHDiCsnvQK6Sxvnqc4VbuYp2MQSe_yJeBu_"/>
<div>
<p className="text-sm font-bold">TechFlow Corp</p>
<p className="text-xs text-on-surface-variant">Plan Enterprise</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-secondary">+$2,499.00</p>
<p className="text-[10px] text-on-surface-variant">Hace 2 horas</p>
</div>
</div>
<div className="px-8 py-4 flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-4">
<img alt="Logo Cliente" className="w-10 h-10 rounded-full bg-surface-container-highest p-2" data-alt="Rocket ship icon representing a startup company in material design style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeX8kFgo81gYiirfofiekOs7n_ss5GrVWanJUQsXZVsmLb1W5dVrxa9hxcXxOZNNPtMsZnVOy5vipIjP747n3Lj98SJxd7kLN9pmghabIwsj0Cs1Jcl6APTPrb53LaseCIQm5MmI_eJ3eaRcAGeixoqT0jbl8W8vPKtCUmkn7knCvzPy0XTQGWYIIrQq0_vI5mVlM6_CsYisqYiFqc595MQjPSShERthSNWqiV6o_JyHWS5JCek46bP-LmPAKuPIQf6ExJHrW7UfoL"/>
<div>
<p className="text-sm font-bold">NexGen AI</p>
<p className="text-xs text-on-surface-variant">Plan Pro Monthly</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-secondary">+$499.00</p>
<p className="text-[10px] text-on-surface-variant">Hace 5 horas</p>
</div>
</div>
<div className="px-8 py-4 flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-4">
<img alt="Logo Cliente" className="w-10 h-10 rounded-full bg-surface-container-highest p-2" data-alt="Palette icon representing a creative agency in material design style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa_Z0-FLpB2S34Q2ZtZDpV2F42cbdZ2Ugfya-TNZDMUKkgbbz9no0bEK1bXWvYcQN44YSFk6a25sYqXCg51ePuidYB3R8wFCgq5I-85cBDzjXpVVWgXJnb_8BdAeuMlzXWF6bD8utly-0pk0dDApHdPoqgSSUCTolixmdIuVDpnueZ9bYpySgC7CTWretbh13krrP0QWOIJYKdLhZ2rhZErKeJxn4L0unjXH1Lno0EHjxTw3wTQlDlIrz9-yW_2DN_cUQiydxNByAb"/>
<div>
<p className="text-sm font-bold">Creative Sphere</p>
<p className="text-xs text-on-surface-variant">Plan Starter Yearly</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-secondary">+$1,200.00</p>
<p className="text-[10px] text-on-surface-variant">Ayer</p>
</div>
</div>
</div>
</div>
{/*  Infrastructure Bills  */}
<div className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/5">
<div className="px-8 py-6 flex justify-between items-center border-b border-outline-variant/10">
<h4 className="font-headline font-extrabold text-lg">Facturas de Infraestructura</h4>
<button className="text-xs font-bold text-primary hover:underline">Gestionar Pagos</button>
</div>
<div className="divide-y divide-outline-variant/10">
<div className="px-8 py-4 flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined w-10 h-10 flex items-center justify-center rounded-full bg-tertiary-fixed text-tertiary">cloud</span>
<div>
<p className="text-sm font-bold">Amazon Web Services</p>
<p className="text-xs text-on-surface-variant">Compute &amp; Storage (us-east-1)</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-tertiary">-$12,450.00</p>
<p className="text-[10px] text-on-surface-variant">Vence en 3 días</p>
</div>
</div>
<div className="px-8 py-4 flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined w-10 h-10 flex items-center justify-center rounded-full bg-tertiary-fixed text-tertiary">smart_toy</span>
<div>
<p className="text-sm font-bold">OpenAI API</p>
<p className="text-xs text-on-surface-variant">GPT-4 Turbo Usage (800M Tokens)</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-tertiary">-$8,230.50</p>
<p className="text-[10px] text-on-surface-variant">Pagado el 15/06</p>
</div>
</div>
<div className="px-8 py-4 flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined w-10 h-10 flex items-center justify-center rounded-full bg-tertiary-fixed text-tertiary">database</span>
<div>
<p className="text-sm font-bold">Pinecone Vector DB</p>
<p className="text-xs text-on-surface-variant">Serverless Tier - Prod Index</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-tertiary">-$2,100.00</p>
<p className="text-[10px] text-on-surface-variant">Pagado el 12/06</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Footer Space  */}
<footer className="mt-12 mb-8 text-center text-[10px] text-on-surface-variant font-bold uppercase tracking-widest opacity-50">
            JAZM.IO Enterprise Financial Suite • v10.3.0 • Powered by Ether Admin
        </footer>

        </div>
    );
};

export default Page_10_3_reportes_de_ingresos_y_gastos;
