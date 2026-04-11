import React from 'react';

const Page_1_2_an_lisis_de_embudo: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Dynamic Island Header  */}

{/*  Content Content  */}
<div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
<div className="mb-10">
<h2 className="text-4xl headline font-extrabold text-on-background tracking-tight">Análisis de Embudo</h2>
<p className="text-on-surface-variant font-medium mt-2">Visión en tiempo real del rendimiento de ventas</p>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Main Funnel Visualization (Large Area)  */}
<section className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-sm">
<div className="flex justify-between items-end mb-12">
<div>
<h3 className="text-xl headline font-bold text-primary">Embudo de Conversión</h3>
<p className="text-sm text-on-surface-variant">Últimos 30 días • Global</p>
</div>
<div className="flex gap-2">
<span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +12% vs mes anterior
                            </span>
</div>
</div>
{/*  Modern Funnel Visualization  */}
<div className="space-y-4">
{/*  Stage 1: Contacto  */}
<div className="group relative">
<div className="w-full bg-sky-900 h-20 rounded-xl flex items-center justify-between px-8 text-white relative z-10 overflow-hidden shadow-lg shadow-sky-900/10 transition-transform hover:-translate-y-1">
<div className="flex items-center gap-4">
<span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">1</span>
<span className="font-bold headline tracking-wide">Contacto</span>
</div>
<div className="text-right">
<p className="text-2xl font-black headline">2,450</p>
<p className="text-[10px] opacity-70 uppercase tracking-widest">Leads Entrantes</p>
</div>
</div>
</div>
{/*  Transition Arrow  */}
<div className="flex justify-center -my-2 relative z-20">
<div className="w-8 h-8 bg-surface-container-high rounded-full flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-primary text-[18px]">expand_more</span>
</div>
</div>
{/*  Stage 2: Cualificado  */}
<div className="group relative">
<div className="w-[85%] mx-auto bg-primary h-20 rounded-xl flex items-center justify-between px-8 text-white relative z-10 overflow-hidden shadow-lg shadow-primary/10 transition-transform hover:-translate-y-1">
<div className="flex items-center gap-4">
<span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">2</span>
<span className="font-bold headline tracking-wide">Cualificado</span>
</div>
<div className="text-right">
<p className="text-2xl font-black headline">1,120</p>
<p className="text-[10px] opacity-70 uppercase tracking-widest">45.7% Conversión</p>
</div>
</div>
</div>
{/*  Transition Arrow  */}
<div className="flex justify-center -my-2 relative z-20">
<div className="w-8 h-8 bg-surface-container-high rounded-full flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-primary text-[18px]">expand_more</span>
</div>
</div>
{/*  Stage 3: Propuesta  */}
<div className="group relative">
<div className="w-[70%] mx-auto bg-primary-container h-20 rounded-xl flex items-center justify-between px-8 text-white relative z-10 overflow-hidden shadow-lg shadow-primary-container/10 transition-transform hover:-translate-y-1">
<div className="flex items-center gap-4">
<span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">3</span>
<span className="font-bold headline tracking-wide">Propuesta</span>
</div>
<div className="text-right">
<p className="text-2xl font-black headline">480</p>
<p className="text-[10px] opacity-70 uppercase tracking-widest">42.8% Conversión</p>
</div>
</div>
</div>
{/*  Transition Arrow  */}
<div className="flex justify-center -my-2 relative z-20">
<div className="w-8 h-8 bg-surface-container-high rounded-full flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-primary text-[18px]">expand_more</span>
</div>
</div>
{/*  Stage 4: Negociación  */}
<div className="group relative">
<div className="w-[55%] mx-auto bg-sky-400 h-20 rounded-xl flex items-center justify-between px-8 text-sky-950 relative z-10 overflow-hidden shadow-lg shadow-sky-400/10 transition-transform hover:-translate-y-1">
<div className="flex items-center gap-4">
<span className="w-8 h-8 rounded-full bg-sky-900/20 flex items-center justify-center text-xs font-bold">4</span>
<span className="font-bold headline tracking-wide">Negociación</span>
</div>
<div className="text-right">
<p className="text-2xl font-black headline">185</p>
<p className="text-[10px] opacity-70 uppercase tracking-widest">38.5% Conversión</p>
</div>
</div>
</div>
</div>
</section>
{/*  Sidebar Insights  */}
<aside className="md:col-span-4 space-y-6">
{/*  Key Metric Card  */}
<div className="bg-primary text-white p-6 rounded-xl shadow-lg shadow-primary/20 relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
<h4 className="text-xs uppercase tracking-widest font-bold opacity-80 mb-2">Ingresos Proyectados</h4>
<p className="text-4xl headline font-black">$245,800</p>
<div className="mt-4 flex items-center gap-2 text-sm">
<span className="bg-white/20 px-2 py-0.5 rounded-full">+18.5%</span>
<span className="opacity-70">vs meta mensual</span>
</div>
</div>
{/*  AI Insights List  */}
<div className="bg-surface-container-low p-6 rounded-xl border-0">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '\'FILL\' 1'}}>auto_awesome</span>
<h4 className="font-bold headline text-primary tracking-tight">AI Insights</h4>
</div>
<ul className="space-y-4">
<li className="p-3 bg-surface-container-lowest rounded-lg group hover:bg-primary-container hover:text-white transition-colors duration-300">
<p className="text-xs font-bold uppercase mb-1 opacity-60">Cuello de Botella</p>
<p className="text-sm font-medium">La etapa de "Propuesta" tiene una demora de 4.2 días superior a la media.</p>
</li>
<li className="p-3 bg-surface-container-lowest rounded-lg group hover:bg-primary-container hover:text-white transition-colors duration-300">
<p className="text-xs font-bold uppercase mb-1 opacity-60">Oportunidad</p>
<p className="text-sm font-medium">Leads de canales orgánicos tienen un 15% más de probabilidad de cierre.</p>
</li>
</ul>
</div>
{/*  Top Performers Card  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
<h4 className="font-bold headline mb-4 text-on-surface">Top Agentes</h4>
<div className="space-y-4">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" data-alt="professional male business executive in suit smiling in office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9QA6HCWBnbPwC8VfgdVq9T04lOBhYx-NgHYZTFh1lWz00_JgZZK0l2NzMnsFECRElMaBFB8mrBREQ5mfImW4YTrBmKBL3XH1Y0DBW4TxHpOBUw0Gx0sk_loZhqXyRDFhtQlzVLvIBf-Zh1qNfDCpbXDfLohRp1yLDLFfaZMj4C-x8udOUJ144eV6Lq8tQiVXQHsrLgub3n9XuvYfeERtMx6nXRP5Km2zUg8PolWFWRcxEZ0zGnG_i_guiEHK6s3kERiqJ-9tyiD41"/>
<div className="flex-1">
<p className="text-sm font-bold">Carlos Méndez</p>
<p className="text-[10px] text-on-surface-variant">42 cierres este mes</p>
</div>
<div className="text-emerald-600">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
</div>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" data-alt="confident female leader in professional attire with friendly expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-CSeLabHtGa3l50o94_LUOM3NvUIBsNE9bB6v3OsW4qF-o3LD7MO5UNnT6SAch8xj528iHaXXsAtYeegzn4ewYG63kIc0O-PXvp5Va2na-ghIwqaaG3etBOEum8us2rns5q8ePcu00PsUqJ5qOXkw0J7PSeV8hOA2_ye8OJi7ZvDbM9ATuHiOcd28DvzyPUwjH0lx5jCr5qabl0ZEcBGY3SQLe8iWkmFk5yXB-8tayIiJzsllbVhQ5zXcVpQcDN4vyf7U4wRSUtzw"/>
<div className="flex-1">
<p className="text-sm font-bold">Elena Rivas</p>
<p className="text-[10px] text-on-surface-variant">38 cierres este mes</p>
</div>
<div className="text-emerald-600">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
</div>
</div>
</div>
</aside>
{/*  Bottom Detailed Data Grid  */}
<section className="md:col-span-12 bg-surface-container-lowest p-8 rounded-xl shadow-sm">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<h3 className="text-xl headline font-bold text-on-surface">Detalle de Operaciones Recientes</h3>
<div className="flex items-center bg-surface-container p-1 rounded-full w-full md:w-auto">
<input className="bg-transparent border-0 focus:ring-0 text-sm px-4 py-1 w-full md:w-64" placeholder="Buscar transacción..." type="text"/>
<button className="bg-primary text-white p-2 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">search</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-xs font-bold uppercase text-on-surface-variant border-b-0">
<th className="pb-4 px-4">Cliente</th>
<th className="pb-4 px-4">Etapa</th>
<th className="pb-4 px-4">Valor</th>
<th className="pb-4 px-4">Probabilidad</th>
<th className="pb-4 px-4">Último Contacto</th>
<th className="pb-4 px-4"></th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-4">
<div className="font-bold">Tecnologías Innova S.A.</div>
<div className="text-[11px] text-on-surface-variant">Software ERP</div>
</td>
<td className="py-4 px-4">
<span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-[11px] font-bold">Negociación</span>
</td>
<td className="py-4 px-4 font-bold text-primary">$45,000</td>
<td className="py-4 px-4">
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: '85%'}}></div>
</div>
<span className="text-[10px] mt-1 block">85%</span>
</td>
<td className="py-4 px-4 text-on-surface-variant">Hace 2 horas</td>
<td className="py-4 px-4 text-right">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-4 border-t-0">
<div className="font-bold">Logística Global</div>
<div className="text-[11px] text-on-surface-variant">Consultoría</div>
</td>
<td className="py-4 px-4 border-t-0">
<span className="bg-primary-container text-white px-3 py-1 rounded-full text-[11px] font-bold">Propuesta</span>
</td>
<td className="py-4 px-4 border-t-0 font-bold text-primary">$12,500</td>
<td className="py-4 px-4 border-t-0">
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: '40%'}}></div>
</div>
<span className="text-[10px] mt-1 block">40%</span>
</td>
<td className="py-4 px-4 border-t-0 text-on-surface-variant">Hace 5 horas</td>
<td className="py-4 px-4 border-t-0 text-right">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 px-4 border-t-0">
<div className="font-bold">Alimentos Frescos Ltd.</div>
<div className="text-[11px] text-on-surface-variant">Distribución</div>
</td>
<td className="py-4 px-4 border-t-0">
<span className="bg-primary text-white px-3 py-1 rounded-full text-[11px] font-bold">Cualificado</span>
</td>
<td className="py-4 px-4 border-t-0 font-bold text-primary">$8,900</td>
<td className="py-4 px-4 border-t-0">
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: '20%'}}></div>
</div>
<span className="text-[10px] mt-1 block">20%</span>
</td>
<td className="py-4 px-4 border-t-0 text-on-surface-variant">Ayer, 16:45</td>
<td className="py-4 px-4 border-t-0 text-right">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</div>
{/*  Mobile Bottom Nav  */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-50/90 backdrop-blur-lg px-8 py-4 flex justify-between items-center z-50 border-0 shadow-[0_-10px_30px_rgba(0,97,144,0.05)]">
<button className="flex flex-col items-center gap-1 text-sky-700 font-bold">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px]">Panel</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500">
<span className="material-symbols-outlined">groups</span>
<span className="text-[10px]">CRM</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500">
<span className="material-symbols-outlined">smart_toy</span>
<span className="text-[10px]">Agentes</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500">
<span className="material-symbols-outlined">admin_panel_settings</span>
<span className="text-[10px]">Admin</span>
</button>
</nav>

        </div>
    );
};

export default Page_1_2_an_lisis_de_embudo;


