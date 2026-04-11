import React from 'react';

const Page_7_2_definici_n_de_permisos_por_rol: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Dynamic Island Header  */}
<div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit">
<div className="glass-island px-8 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-4 border border-outline-variant/15">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span className="text-sm font-semibold text-primary tracking-tight">Editando Permisos de Gerente</span>
</div>
<div className="h-4 w-px bg-outline-variant/30"></div>
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-surface" data-alt="professional male profile avatar for user management interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLGAeD6QfsLSI9guH7hN8YtXiCl4MoNV4DmsO0BlxCNgogZkarQpS0Krly0P9BbAQ68lSJzFWoXAzoFangFxigb_5S8trtwE9Z8DYoPCMeBipBArOrKjOQswjHDyKq763Vd89Yz_ZdI83QPJrPefUk8N2rWq1st7mNsdiNPy8Y2E_qQVLOtm-PR3BHh-3cfmFpkOimTTvamYO6eM86zA3ZHaC9G9Zvmgfw6QaN3NJl_RtDoQrkM9kNEwC6dHwv1r07jk6zEokArbdv"/>
<div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-container border-2 border-surface">EA</div>
</div>
</div>
</div>
{/*  Page Header  */}

{/*  Role Selector Bento Section  */}
<section className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
{/*  Role Card: Admin  */}
<button className="group relative overflow-hidden bg-surface-container-low p-6 rounded-2xl flex flex-col text-left transition-all hover:bg-surface-container-high ring-2 ring-transparent">
<div className="mb-4 text-primary">
<span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
</div>
<span className="font-headline font-bold text-lg block mb-1">Admin</span>
<span className="text-sm text-on-surface-variant leading-relaxed">Control total del sistema y gestión de facturación.</span>
</button>
{/*  Role Card: Gerente (Active)  */}
<button className="group relative overflow-hidden bg-white p-6 rounded-2xl flex flex-col text-left transition-all ring-2 ring-primary shadow-sm">
<div className="mb-4 text-primary">
<span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '\'FILL\' 1'}}>manage_accounts</span>
</div>
<span className="font-headline font-bold text-lg block mb-1">Gerente</span>
<span className="text-sm text-on-surface-variant leading-relaxed">Supervisión de equipos y reportes avanzados de CRM.</span>
<div className="absolute top-4 right-4 text-primary">
<span className="material-symbols-outlined text-xl">check_circle</span>
</div>
</button>
{/*  Role Card: Vendedor  */}
<button className="group relative overflow-hidden bg-surface-container-low p-6 rounded-2xl flex flex-col text-left transition-all hover:bg-surface-container-high">
<div className="mb-4 text-primary/60 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-3xl">trending_up</span>
</div>
<span className="font-headline font-bold text-lg block mb-1">Vendedor</span>
<span className="text-sm text-on-surface-variant leading-relaxed">Gestión de prospectos, embudos y tareas diarias.</span>
</button>
{/*  Role Card: Soporte  */}
<button className="group relative overflow-hidden bg-surface-container-low p-6 rounded-2xl flex flex-col text-left transition-all hover:bg-surface-container-high">
<div className="mb-4 text-primary/60 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-3xl">contact_support</span>
</div>
<span className="font-headline font-bold text-lg block mb-1">Soporte</span>
<span className="text-sm text-on-surface-variant leading-relaxed">Atención al cliente y resolución de tickets técnicos.</span>
</button>
</section>
{/*  Permissions Matrix  */}
<section className="bg-surface-container-lowest rounded-3xl p-1 shadow-sm border border-outline-variant/10">
<div className="overflow-hidden rounded-[calc(1.5rem-4px)]">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-surface-container-highest">
<th className="px-8 py-6 text-sm font-bold text-on-surface uppercase tracking-wider">Categoría de Módulo</th>
<th className="px-8 py-6 text-sm font-bold text-on-surface uppercase tracking-wider text-center">Ver</th>
<th className="px-8 py-6 text-sm font-bold text-on-surface uppercase tracking-wider text-center">Editar</th>
<th className="px-8 py-6 text-sm font-bold text-on-surface uppercase tracking-wider text-center">Eliminar</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">
{/*  Dashboard  */}
<tr className="hover:bg-surface-bright transition-colors group">
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<div className="p-2.5 rounded-xl bg-secondary-container/20 text-secondary">
<span className="material-symbols-outlined">dashboard</span>
</div>
<div>
<div className="font-bold text-on-surface">Dashboard</div>
<div className="text-xs text-on-surface-variant">Visualización de métricas globales y KPIS.</div>
</div>
</div>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
</tr>
{/*  CRM  */}
<tr className="hover:bg-surface-bright transition-colors group">
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<div className="p-2.5 rounded-xl bg-primary-container/20 text-primary">
<span className="material-symbols-outlined">contacts</span>
</div>
<div>
<div className="font-bold text-on-surface">CRM</div>
<div className="text-xs text-on-surface-variant">Gestión de base de datos de clientes y contactos.</div>
</div>
</div>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
</tr>
{/*  IA Agents  */}
<tr className="hover:bg-surface-bright transition-colors group">
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<div className="p-2.5 rounded-xl bg-tertiary-container/10 text-tertiary">
<span className="material-symbols-outlined">auto_awesome</span>
</div>
<div>
<div className="font-bold text-on-surface">IA Agents</div>
<div className="text-xs text-on-surface-variant">Configuración de bots y automatización inteligente.</div>
</div>
</div>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
</tr>
{/*  Equipos  */}
<tr className="hover:bg-surface-bright transition-colors group">
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<div className="p-2.5 rounded-xl bg-on-primary-fixed-variant/10 text-on-primary-fixed-variant">
<span className="material-symbols-outlined">group</span>
</div>
<div>
<div className="font-bold text-on-surface">Equipos</div>
<div className="text-xs text-on-surface-variant">Asignación de territorios y estructura organizacional.</div>
</div>
</div>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
</tr>
{/*  Configuración  */}
<tr className="hover:bg-surface-bright transition-colors group">
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<div className="p-2.5 rounded-xl bg-outline/10 text-on-surface">
<span className="material-symbols-outlined">settings_suggest</span>
</div>
<div>
<div className="font-bold text-on-surface">Configuración</div>
<div className="text-xs text-on-surface-variant">Parámetros técnicos y preferencias del sistema.</div>
</div>
</div>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
<td className="px-8 py-6 text-center">
<label className="inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="relative w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  Bottom Floating Action  */}
<div className="mt-12 flex items-center justify-between p-6 bg-primary-container/5 rounded-2xl border border-primary/10">
<div className="flex items-center gap-3 text-primary">
<span className="material-symbols-outlined">info</span>
<p className="text-sm font-medium">Los cambios afectarán a 14 usuarios con el rol de <strong>Gerente</strong> actualmente activos.</p>
</div>
<div className="flex items-center gap-4">
<button className="text-on-surface font-semibold px-6 py-3 hover:bg-surface-container-high rounded-xl transition-all">Descartar</button>
<button className="bg-primary text-white px-10 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/25 hover:brightness-110 active:scale-95 transition-all">Guardar cambios</button>
</div>
</div>

        </div>
    );
};

export default Page_7_2_definici_n_de_permisos_por_rol;
