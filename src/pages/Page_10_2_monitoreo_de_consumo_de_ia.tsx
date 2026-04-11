import React from 'react';

const Page_10_2_monitoreo_de_consumo_de_ia: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Header Section  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface mb-2">Métricas de IA</h2>
<p className="text-on-surface-variant font-medium">Monitoreo técnico de recursos y consumo global de tokens.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-xs font-bold font-label uppercase tracking-wider text-secondary">Sistema Operativo</span>
</div>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Card: Global Token Usage  */}
<div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col gap-6 group">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline text-xl font-bold">Consumo de Tokens Global</h3>
<p className="text-sm text-on-surface-variant">Uso agregado de GPT-4o y Claude 3.5</p>
</div>
<div className="flex items-center gap-2 text-secondary bg-secondary-container/30 px-3 py-1 rounded-full text-xs font-bold">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
                            +12.4% este mes
                        </div>
</div>
<div className="relative h-64 w-full flex items-end gap-2 overflow-hidden">
{/*  Mock Chart using div bars for technical aesthetic  */}
<div className="flex-1 bg-surface-container rounded-t-lg h-[40%] transition-all group-hover:h-[45%]"></div>
<div className="flex-1 bg-surface-container rounded-t-lg h-[55%] transition-all group-hover:h-[60%]"></div>
<div className="flex-1 bg-surface-container rounded-t-lg h-[45%] transition-all group-hover:h-[50%]"></div>
<div className="flex-1 bg-surface-container rounded-t-lg h-[70%] transition-all group-hover:h-[75%]"></div>
<div className="flex-1 bg-primary rounded-t-lg h-[85%] transition-all group-hover:h-[90%]"></div>
<div className="flex-1 bg-primary-container rounded-t-lg h-[95%] transition-all group-hover:h-[100%]"></div>
<div className="flex-1 bg-primary-container/60 rounded-t-lg h-[75%] transition-all group-hover:h-[80%]"></div>
<div className="flex-1 bg-surface-container rounded-t-lg h-[60%] transition-all group-hover:h-[65%]"></div>
<div className="flex-1 bg-surface-container rounded-t-lg h-[40%] transition-all group-hover:h-[45%]"></div>
<div className="flex-1 bg-surface-container rounded-t-lg h-[50%] transition-all group-hover:h-[55%]"></div>
</div>
<div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/30">
<div>
<p className="text-xs text-outline uppercase font-bold tracking-widest mb-1">Total Tokens</p>
<p className="font-headline text-lg font-bold">14.2M</p>
</div>
<div>
<p className="text-xs text-outline uppercase font-bold tracking-widest mb-1">Costo Estimado</p>
<p className="font-headline text-lg font-bold">$1,240.50</p>
</div>
<div>
<p className="text-xs text-outline uppercase font-bold tracking-widest mb-1">Eficiencia</p>
<p className="font-headline text-lg font-bold">98.2%</p>
</div>
</div>
</div>
{/*  Card: Storage Status  */}
<div className="md:col-span-4 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between">
<div>
<h3 className="font-headline text-xl font-bold mb-1">Almacenamiento</h3>
<p className="text-sm text-on-surface-variant">Uso total en la nube</p>
</div>
<div className="py-10 flex flex-col items-center">
<div className="relative w-40 h-40 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-variant" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="12"></circle>
<circle className="text-primary" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" stroke-dasharray="440" stroke-dashoffset="132" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-headline text-3xl font-extrabold">70%</span>
<span className="text-[10px] text-outline font-bold uppercase">Utilizado</span>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant font-medium">Empresas Cloud</span>
<span className="font-bold">1.4 TB</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant font-medium">Backup Logs</span>
<span className="font-bold">240 GB</span>
</div>
</div>
</div>
{/*  Card: API Frequency  */}
<div className="md:col-span-5 bg-surface-container-low rounded-xl p-8">
<div className="flex items-center justify-between mb-8">
<h3 className="font-headline text-xl font-bold">Frecuencia de API</h3>
<span className="material-symbols-outlined text-outline" data-icon="settings_input_component">settings_input_component</span>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="p-3 bg-white rounded-xl">
<span className="material-symbols-outlined text-primary" data-icon="bolt">bolt</span>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-sm font-bold">GET /insights</span>
<span className="text-xs font-medium text-outline">12.4k/min</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-4/5"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-3 bg-white rounded-xl">
<span className="material-symbols-outlined text-tertiary" data-icon="post_add">post_add</span>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-sm font-bold">POST /training</span>
<span className="text-xs font-medium text-outline">2.1k/min</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full w-1/3"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-3 bg-white rounded-xl">
<span className="material-symbols-outlined text-secondary" data-icon="api">api</span>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="text-sm font-bold">WEBSOCKET /sync</span>
<span className="text-xs font-medium text-outline">45.8k active</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-full"></div>
</div>
</div>
</div>
</div>
</div>
{/*  Card: Top Consuming Companies  */}
<div className="md:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col">
<div className="p-8 pb-4">
<h3 className="font-headline text-xl font-bold mb-1">Principales Consumidores</h3>
<p className="text-sm text-on-surface-variant">Empresas con mayor demanda de IA este ciclo</p>
</div>
<div className="px-8 pb-8 overflow-y-auto max-h-[300px] no-scrollbar">
<table className="w-full">
<thead className="sticky top-0 bg-surface-container-lowest">
<tr className="text-left border-b border-surface-variant">
<th className="py-4 text-xs font-bold uppercase tracking-widest text-outline">Empresa</th>
<th className="py-4 text-xs font-bold uppercase tracking-widest text-outline">Inferencia</th>
<th className="py-4 text-xs font-bold uppercase tracking-widest text-outline text-right">Costo</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-variant/30">
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center font-bold text-primary">N</div>
<div>
<p className="font-bold text-sm">Nexus Solutions</p>
<p className="text-xs text-outline">Plan Enterprise</p>
</div>
</td>
<td className="py-4">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">4.2M tokens</span>
<span className="text-[10px] bg-secondary-container text-on-secondary-container px-1.5 py-0.5 rounded">+5%</span>
</div>
</td>
<td className="py-4 text-right">
<p className="font-headline font-bold">$420.00</p>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 flex items-center gap-3">
<img alt="Logo Alpha" className="w-10 h-10 rounded-lg object-cover" data-alt="minimal geometric company logo with purple accents and sharp edges" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoG_iDzqNPwOABNDM4JbxcZa82yj7MbpHsAJN2GiI3MhrQYjCi7GoscBXQqEGuXKglvtK-NpJH4itAamzLv2nVQwoCA6A3adgHAk5xnYOIbEZdVOS-8DoKUUaruMKkfAPOlqaI1iOAel-k4EQwHvcIytjCahXbHB3VBQ-wcUgzfbMIG2Ey7QwH47_CNDZZxeqqe5kh64_GIzjXNdWxi2xLn-NeUNBp7iDSIdeMXC5bsUfi-A6l9Mu7fRSaN7lQmIoOydyWWzjbDcdN"/>
<div>
<p className="font-bold text-sm">Alpha Dynamics</p>
<p className="text-xs text-outline">Plan Scale</p>
</div>
</td>
<td className="py-4">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">3.8M tokens</span>
<span className="text-[10px] bg-tertiary-container text-on-tertiary-container px-1.5 py-0.5 rounded">-2%</span>
</div>
</td>
<td className="py-4 text-right">
<p className="font-headline font-bold">$380.12</p>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center font-bold text-secondary text-sm">VS</div>
<div>
<p className="font-bold text-sm">Vortex Systems</p>
<p className="text-xs text-outline">Plan Startup</p>
</div>
</td>
<td className="py-4">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">1.1M tokens</span>
<span className="text-[10px] bg-secondary-container text-on-secondary-container px-1.5 py-0.5 rounded">+18%</span>
</div>
</td>
<td className="py-4 text-right">
<p className="font-headline font-bold">$110.45</p>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  Bottom Floating Action Section (Optional, if context required but usually omitted for dashboards)  */}
{/*  We maintain cleanliness by focusing on the grid above  */}
<footer className="mt-12 flex justify-between items-center text-outline text-xs border-t border-outline-variant/20 pt-6">
<p>© 2024 Ether Admin - Inteligencia Operativa Global</p>
<div className="flex gap-4">
<a className="hover:text-primary transition-colors" href="#">Términos de API</a>
<a className="hover:text-primary transition-colors" href="#">Estado del Servidor</a>
</div>
</footer>

        </div>
    );
};

export default Page_10_2_monitoreo_de_consumo_de_ia;


