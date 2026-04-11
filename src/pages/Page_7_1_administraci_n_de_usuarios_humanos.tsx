import React from 'react';

const Page_7_1_administraci_n_de_usuarios_humanos: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Dynamic Island (Top Center)  */}
<div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] min-w-[280px]">
<div className="bg-surface-container-highest/80 backdrop-blur-2xl rounded-full px-6 py-2 flex items-center justify-center gap-4 shadow-2xl border border-white/20">
<div className="relative flex items-center justify-center w-8 h-8">
<div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
<span className="material-symbols-outlined text-primary text-xl" style={{fontVariationSettings: '\'FILL\' 1'}}>monitoring</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest font-bold text-primary/70 leading-none">Estado de Red</span>
<span className="text-sm font-bold text-on-surface">Monitoreando Equipo</span>
</div>
<div className="w-px h-6 bg-outline-variant/30 ml-2"></div>
<span className="text-xs font-mono text-on-surface-variant">Live</span>
</div>
</div>
{/*  Top Header Actions  */}

{/*  Search & Filters (Asymmetric Layout)  */}
<section className="px-12 mb-8 flex flex-col md:flex-row gap-6">
<div className="flex-1 bg-surface-container-low rounded-2xl p-2 flex items-center gap-4">
<span className="material-symbols-outlined ml-4 text-on-surface-variant">search</span>
<input className="bg-transparent border-none focus:ring-0 w-full text-sm font-medium placeholder:text-outline italic" placeholder="Buscar por nombre o correo..." type="text"/>
</div>
<div className="flex gap-3">
<div className="group relative">
<button className="bg-surface-container-low hover:bg-surface-container-high transition-colors px-6 py-3 rounded-2xl flex items-center gap-2 text-sm font-semibold">
<span className="material-symbols-outlined text-sm">filter_alt</span>
                        Rol: Todos
                    </button>
</div>
<div className="group relative">
<button className="bg-surface-container-low hover:bg-surface-container-high transition-colors px-6 py-3 rounded-2xl flex items-center gap-2 text-sm font-semibold">
<span className="material-symbols-outlined text-sm">radio_button_checked</span>
                        Estado: Activo
                    </button>
</div>
</div>
</section>
{/*  Bento Grid User Table  */}
<section className="px-12 pb-12 flex-1">
<div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)]">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50">
<th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-on-surface-variant/60">Nombre</th>
<th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-on-surface-variant/60">Rol</th>
<th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-on-surface-variant/60">Estado</th>
<th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-on-surface-variant/60">Última Conexión</th>
<th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-on-surface-variant/60 text-right">Acciones</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">
{/*  User Row 1  */}
<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-8 py-4">
<div className="flex items-center gap-4">
<img className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white" data-alt="portrait of a professional male manager in a bright modern office setting with soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ0Rcx6L3gLZnQpyRJCGw2MI7Z9xKhAgUJWJmXeXyD8v7eDHbBlp8ZVAOJl5xH0EWE9X5Eo2LKfP4CYn9P1gOOuiOVeIBB4F98l1mtyE7_WuJEw5IxlJ6GAZ2gBnMri1e6X3TKRukQuXYZ68vjUiE52-ooUsuHEukXvn0tHlvPfwLiky28daJAyDmSTzC7QlKsCgIQPJZazMgVicnsunC9WRG4ufIbwJ0R2YiXq_p4LzDykQ_5ar5vHOsITABjsV63Khc0Dk-sxLON"/>
<div>
<div className="font-bold text-on-surface">Alejandro Valdés</div>
<div className="text-xs text-on-surface-variant">a.valdes@jazm.io</div>
</div>
</div>
</td>
<td className="px-8 py-4">
<span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tight">Administrador</span>
</td>
<td className="px-8 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
<span className="text-sm font-medium text-on-surface">Activo</span>
</div>
</td>
<td className="px-8 py-4 text-sm text-on-surface-variant font-medium">Hace 12 min</td>
<td className="px-8 py-4 text-right">
<button className="p-2 rounded-full hover:bg-surface-container-high text-outline-variant hover:text-on-surface transition-all">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</td>
</tr>
{/*  User Row 2  */}
<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-8 py-4">
<div className="flex items-center gap-4">
<img className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white" data-alt="headshot of a smiling female creative director with professional soft studio lighting and warm tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZAiiP79hqMapvb8OkoM0QHgt0uJ8DEFHC_nNwNfN0oSwyYh56oqkCzrpxZN5oRDten0u6MHpNaCOXkRKlEyvkbswuozR3vFA1XX-hjbgD9idDrVRx94zai_ctCzes9xI_vRsKdn29HH7Hgn_rgmfuo5KZvf5x28s1EZVEbLKqXQ-Rxqfk5SmdcPS257Rf7FvwWWpNCEvl5Cn1zjIFS97MiPInfjhPtsZe-NIPxmO4lij3ggfGVHMhPDy05F4pV5G0hmY4JxVfX8xX"/>
<div>
<div className="font-bold text-on-surface">Sofía Rivas</div>
<div className="text-xs text-on-surface-variant">s.rivas@jazm.io</div>
</div>
</div>
</td>
<td className="px-8 py-4">
<span className="bg-surface-container-high text-on-surface-variant text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tight">Editor</span>
</td>
<td className="px-8 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
<span className="text-sm font-medium text-on-surface">Activo</span>
</div>
</td>
<td className="px-8 py-4 text-sm text-on-surface-variant font-medium">Ayer, 18:30</td>
<td className="px-8 py-4 text-right">
<button className="p-2 rounded-full hover:bg-surface-container-high text-outline-variant hover:text-on-surface transition-all">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</td>
</tr>
{/*  User Row 3  */}
<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-8 py-4">
<div className="flex items-center gap-4">
<img className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white grayscale" data-alt="portrait of a young male software engineer in a clean tech environment with subtle blue highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJYNchtwmSI6N_rNjXCDTZhZQHELrNmLODtAM-5OY8G_5KDkj6usXYewHCzve_MR8_FQMr3A_LvFGKxNxZ3EarqBo5K0LbUM2g9Vp_syC217OjHqWmfU-GduGUlTr3utCID4ZFnX4v4cj73vNavw7ZgFxy1UZMf7rkrfoUSk14XQNOEe32FxqBCFObAevHLMphecWhqleisYi_alTym-Ksm6fetkAPgi2BJnBE3w3w_rUaXnsA2mXYeQqoP6XxMlUQL5YQwy4Gszwo"/>
<div>
<div className="font-bold text-on-surface">Mateo Salazar</div>
<div className="text-xs text-on-surface-variant">m.salazar@jazm.io</div>
</div>
</div>
</td>
<td className="px-8 py-4">
<span className="bg-surface-container-high text-on-surface-variant text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tight">Analista</span>
</td>
<td className="px-8 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-outline"></div>
<span className="text-sm font-medium text-on-surface-variant">Inactivo</span>
</div>
</td>
<td className="px-8 py-4 text-sm text-on-surface-variant font-medium">Hace 3 semanas</td>
<td className="px-8 py-4 text-right">
<button className="p-2 rounded-full hover:bg-surface-container-high text-outline-variant hover:text-on-surface transition-all">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</td>
</tr>
{/*  User Row 4  */}
<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-8 py-4">
<div className="flex items-center gap-4">
<img className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white" data-alt="confident professional woman in a sleek modern workspace with soft focus corporate background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWfBtMzmGI1-uv-yMtJIsEEow6hpHP9DcXRGYxLAxg3Mc_zgNbtY7IEZnoSJLLoRPg8yDwFU9LiDF5Nw0B7eE4MS9k1AtQMXdMb6ybqmgI7vs8PRH8e3Xox5AS9g6kXVHhS8gU3AD7hslfyKn4jitf1-OWQITzPPUFNZTNTyFqK7tNylNb30ZQ9uD_D0DGwhybKatISP62K_ZHXGjcoQyQ4yZGfgChkagFaKxog1V1MVaBgoZxJV-TPzz3iLr0Uu58KwOFeB-BRRkD"/>
<div>
<div className="font-bold text-on-surface">Isabella Conti</div>
<div className="text-xs text-on-surface-variant">i.conti@jazm.io</div>
</div>
</div>
</td>
<td className="px-8 py-4">
<span className="bg-tertiary/10 text-tertiary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tight">Finanzas</span>
</td>
<td className="px-8 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
<span className="text-sm font-medium text-on-surface">Activo</span>
</div>
</td>
<td className="px-8 py-4 text-sm text-on-surface-variant font-medium">Hoy, 09:15</td>
<td className="px-8 py-4 text-right">
<button className="p-2 rounded-full hover:bg-surface-container-high text-outline-variant hover:text-on-surface transition-all">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</td>
</tr>
</tbody>
</table>
{/*  Table Footer/Pagination  */}
<div className="px-8 py-6 bg-surface-container-low/20 flex items-center justify-between border-t border-surface-container-low">
<span className="text-xs font-semibold text-on-surface-variant">Mostrando 4 de 24 miembros</span>
<div className="flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white text-xs font-bold">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high text-xs font-bold">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high text-xs font-bold">3</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
{/*  Floating AI Insight Card (Asymmetry)  */}
<div className="fixed bottom-8 right-8 w-80">
<div className="bg-on-background text-surface rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
<div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl transition-transform group-hover:scale-150"></div>
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '\'FILL\' 1'}}>bolt</span>
<span className="text-xs font-black uppercase tracking-widest text-surface/50">Sugerencia AI</span>
</div>
<p className="text-sm leading-relaxed font-medium">
                    Detectamos 3 invitaciones pendientes enviadas hace más de 72h. ¿Deseas reenviar los correos de acceso?
                </p>
<div className="mt-6 flex items-center justify-between">
<button className="text-xs font-black uppercase text-secondary hover:underline">Gestionar</button>
<span className="text-[10px] text-surface/30">Justo ahora</span>
</div>
</div>
</div>

        </div>
    );
};

export default Page_7_1_administraci_n_de_usuarios_humanos;


