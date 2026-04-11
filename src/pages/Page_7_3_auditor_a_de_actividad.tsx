import React from 'react';

const Page_7_3_auditor_a_de_actividad: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Dynamic Island (Signature Component)  */}
<div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
<div className="glass-island px-6 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 flex items-center gap-4 animate-pulse">
<div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#006190]"></div>
<span className="text-sm font-headline font-bold tracking-tight text-on-surface">Escaneando Logs de Actividad</span>
<span className="material-symbols-outlined text-primary text-sm" data-icon="analytics">analytics</span>
</div>
</div>
{/*  Header Section  */}

{/*  Bento Grid Layout  */}
<div className="grid grid-cols-12 gap-6">
{/*  Filters & Insights (Left Column)  */}
<div className="col-span-12 lg:col-span-4 space-y-6">
{/*  Circular Activity Chart Card  */}
<div className="bg-surface-container-low rounded-[2rem] p-8">
<h3 className="text-lg font-headline font-bold mb-6 flex items-center justify-between">
                        Actividad por Usuario
                        <span className="material-symbols-outlined text-on-surface-variant" data-icon="pie_chart">pie_chart</span>
</h3>
<div className="relative aspect-square flex items-center justify-center mb-8">
{/*  Custom SVG Donut Chart  */}
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" strokeWidth="3"></path>
<path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="45, 100" strokeLinecap="round" strokeWidth="4"></path>
<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="30, 100" stroke-dashoffset="-45" strokeLinecap="round" strokeWidth="4"></path>
<path className="text-tertiary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="15, 100" stroke-dashoffset="-75" strokeLinecap="round" strokeWidth="4"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl font-headline font-black text-on-surface">1.2k</span>
<span className="text-xs font-body text-on-surface-variant uppercase tracking-widest">Acciones</span>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="text-sm font-body font-medium">Juan Pérez</span>
</div>
<span className="text-sm font-headline font-bold">45%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-secondary"></div>
<span className="text-sm font-body font-medium">María López</span>
</div>
<span className="text-sm font-headline font-bold">30%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-tertiary"></div>
<span className="text-sm font-body font-medium">Soporte Tech</span>
</div>
<span className="text-sm font-headline font-bold">15%</span>
</div>
</div>
</div>
{/*  Filters Card  */}
<div className="bg-surface-container-highest/30 rounded-[2rem] p-8">
<h3 className="text-lg font-headline font-bold mb-6">Filtros Avanzados</h3>
<div className="space-y-6">
<div className="space-y-2">
<label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-wider">Usuario</label>
<select className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 text-sm font-body focus:ring-2 focus:ring-primary/20 appearance-none">
<option>Todos los usuarios</option>
<option>Juan Pérez</option>
<option>María López</option>
<option>Carlos Ruiz</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-headline font-bold text-on-surface-variant uppercase tracking-wider">Rango de Fechas</label>
<div className="grid grid-cols-2 gap-2">
<input className="bg-surface-container-lowest border-none rounded-xl px-4 py-3 text-xs font-body focus:ring-2 focus:ring-primary/20" type="date"/>
<input className="bg-surface-container-lowest border-none rounded-xl px-4 py-3 text-xs font-body focus:ring-2 focus:ring-primary/20" type="date"/>
</div>
</div>
<button className="w-full bg-on-surface text-surface py-3 rounded-xl font-body font-bold text-sm transition-transform active:scale-95">
                            Aplicar Filtros
                        </button>
</div>
</div>
</div>
{/*  Activity Logs (Right Column)  */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm">
<div className="flex items-center justify-between mb-10">
<h3 className="text-xl font-headline font-bold">Historial Cronológico</h3>
<div className="flex items-center gap-2 text-primary font-headline text-sm font-bold">
<span className="material-symbols-outlined text-sm" data-icon="history">history</span>
                        Últimos 15 minutos
                    </div>
</div>
<div className="space-y-4">
{/*  Log Item 1  */}
<div className="group flex items-start gap-6 p-6 rounded-2xl hover:bg-surface-container-low transition-all duration-300">
<div className="relative">
<img alt="User profile" className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="professional portrait of a middle-aged man with short beard in a studio setting with clean gray background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmMoNHuk5uRmU4E6vpDkQsyOIdHIkIs0NMFoh4IO2_EiBkWcmdwFxwuzGQFARE_f_Ya2N-ISqBWzqziB-D0vT_JK354JLdijlCyqwkmeVff3WtS_se5ZId0km8_SYUPrwMFJcaFcfLOBmpBtaxIdUnknbEwBm2dN13mVi9E-mjn-h-ckB48V6qZhWUjt_9MCKiL8cUwcwmRTUx4fA23Vle3BTzk4L7ing3aYE8ZW4DtNvhHsIJ0CbKa7pJkPD7Hn7VDvkSfkDtDDx7"/>
<div className="absolute -bottom-1 -right-1 bg-error-container text-on-error-container w-6 h-6 rounded-full flex items-center justify-center ring-2 ring-white">
<span className="material-symbols-outlined text-xs" data-icon="delete">delete</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<p className="font-headline font-bold text-on-surface">Juan Pérez <span className="font-normal text-on-surface-variant ml-1">eliminó un lead</span></p>
<p className="text-sm font-body text-primary font-semibold">"Tech Solutions Ltd."</p>
</div>
<span className="text-xs font-body font-medium text-on-surface-variant bg-surface-container px-2 py-1 rounded-full">Hace 2 min</span>
</div>
<div className="flex gap-4 items-center">
<div className="flex items-center gap-1 text-[10px] font-body text-on-surface-variant/70 uppercase tracking-widest">
<span className="material-symbols-outlined text-[12px]" data-icon="computer">computer</span>
                                    192.168.1.45 • Chrome OSX
                                </div>
<div className="w-1 h-1 rounded-full bg-outline-variant"></div>
<div className="flex items-center gap-1 text-[10px] font-body text-on-surface-variant/70 uppercase tracking-widest">
<span className="material-symbols-outlined text-[12px]" data-icon="schedule">schedule</span>
                                    14:32:01
                                </div>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary" data-icon="more_vert">more_vert</span>
</button>
</div>
{/*  Log Item 2  */}
<div className="group flex items-start gap-6 p-6 rounded-2xl hover:bg-surface-container-low transition-all duration-300">
<div className="relative">
<img alt="User profile" className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="portrait of a confident professional woman with a warm smile in a brightly lit office space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA71spxO5K5LX2HaBl0TjkO7V1hjO3rSY2vsTWoOdGxWZx-5d2WGJELvFAw_pSASe8tv-1ubHvZ4Ag-FeRwLDENW6hkBBEAyo8Zo-3PPkMTYvL-emiXaaV5H3ucafOkzRNJRHQEWxAlMEeGaDlYU0LKQg_uHOWupUBuIkixBnjr-SpGSKa15PtB3LVjuOr5PnjQk7dnc8PBwae84_p00YZUF0YYEaPuiSkzg5QapCNMIXJGFQfP-Ew_JKvxTl44Vue_xApqXnJwL5Sm"/>
<div className="absolute -bottom-1 -right-1 bg-secondary-container text-on-secondary-container w-6 h-6 rounded-full flex items-center justify-center ring-2 ring-white">
<span className="material-symbols-outlined text-xs" data-icon="smart_toy">smart_toy</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<p className="font-headline font-bold text-on-surface">María López <span className="font-normal text-on-surface-variant ml-1">creó un nuevo agente IA</span></p>
<p className="text-sm font-body text-secondary font-semibold">"Customer Support v2.1"</p>
</div>
<span className="text-xs font-body font-medium text-on-surface-variant bg-surface-container px-2 py-1 rounded-full">Hace 12 min</span>
</div>
<div className="flex gap-4 items-center">
<div className="flex items-center gap-1 text-[10px] font-body text-on-surface-variant/70 uppercase tracking-widest">
<span className="material-symbols-outlined text-[12px]" data-icon="smartphone">smartphone</span>
                                    10.0.0.12 • App v4.5.0
                                </div>
<div className="w-1 h-1 rounded-full bg-outline-variant"></div>
<div className="flex items-center gap-1 text-[10px] font-body text-on-surface-variant/70 uppercase tracking-widest">
<span className="material-symbols-outlined text-[12px]" data-icon="schedule">schedule</span>
                                    14:22:15
                                </div>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary" data-icon="more_vert">more_vert</span>
</button>
</div>
{/*  Log Item 3  */}
<div className="group flex items-start gap-6 p-6 rounded-2xl hover:bg-surface-container-low transition-all duration-300">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-headline font-bold">CR</div>
<div className="absolute -bottom-1 -right-1 bg-primary-fixed text-on-primary-fixed w-6 h-6 rounded-full flex items-center justify-center ring-2 ring-white">
<span className="material-symbols-outlined text-xs" data-icon="settings">settings</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<p className="font-headline font-bold text-on-surface">Carlos Ruiz <span className="font-normal text-on-surface-variant ml-1">modificó configuración global</span></p>
<p className="text-sm font-body text-on-surface-variant italic">Configuración de seguridad: 2FA obligatorio</p>
</div>
<span className="text-xs font-body font-medium text-on-surface-variant bg-surface-container px-2 py-1 rounded-full">Hace 45 min</span>
</div>
<div className="flex gap-4 items-center">
<div className="flex items-center gap-1 text-[10px] font-body text-on-surface-variant/70 uppercase tracking-widest">
<span className="material-symbols-outlined text-[12px]" data-icon="public">public</span>
                                    185.34.22.10 • IP Fija Oficina
                                </div>
<div className="w-1 h-1 rounded-full bg-outline-variant"></div>
<div className="flex items-center gap-1 text-[10px] font-body text-on-surface-variant/70 uppercase tracking-widest">
<span className="material-symbols-outlined text-[12px]" data-icon="schedule">schedule</span>
                                    13:49:58
                                </div>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary" data-icon="more_vert">more_vert</span>
</button>
</div>
{/*  Log Item 4  */}
<div className="group flex items-start gap-6 p-6 rounded-2xl hover:bg-surface-container-low transition-all duration-300">
<div className="relative">
<img alt="User profile" className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="headshot of a smiling young man with tidy hair in a casual business attire with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDJ7c4wRiy7vhb5EoGuNtgQe9RRNWEAysQgr1vkwgW4MnGo8qX2u62fXVVbiRtYcKnlN2Ap6kzyrPis_BMsPGZy0iIli0Z4W5AzIMLEid1gsRRFgRF7puZdVoU8xZWGoqRPJ7XE4GU2G7gmKO5pvGC4VNm9jBNnYhqep8hXuXMDP73qkayTrnBzwDqVjJkAdew_TCmR-qy1jUHmCw0eEmt9bUjUZQX06g0f6jK0mjPy6p0q-0W4zORhGUdwfWUtAzEQEDZt8qHVCVd"/>
<div className="absolute -bottom-1 -right-1 bg-tertiary-fixed text-on-tertiary-fixed w-6 h-6 rounded-full flex items-center justify-center ring-2 ring-white">
<span className="material-symbols-outlined text-xs" data-icon="cloud_download">cloud_download</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<div>
<p className="font-headline font-bold text-on-surface">Soporte Tech <span className="font-normal text-on-surface-variant ml-1">exportó base de datos completa</span></p>
<p className="text-sm font-body text-tertiary font-semibold">Respaldo Mensual Automático</p>
</div>
<span className="text-xs font-body font-medium text-on-surface-variant bg-surface-container px-2 py-1 rounded-full">Hace 1 hora</span>
</div>
<div className="flex gap-4 items-center">
<div className="flex items-center gap-1 text-[10px] font-body text-on-surface-variant/70 uppercase tracking-widest">
<span className="material-symbols-outlined text-[12px]" data-icon="dns">dns</span>
                                    8.8.8.8 • Cloud Service
                                </div>
<div className="w-1 h-1 rounded-full bg-outline-variant"></div>
<div className="flex items-center gap-1 text-[10px] font-body text-on-surface-variant/70 uppercase tracking-widest">
<span className="material-symbols-outlined text-[12px]" data-icon="schedule">schedule</span>
                                    13:30:00
                                </div>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
{/*  Footer Pagination-like state  */}
<div className="mt-8 pt-8 border-t border-outline-variant/10 flex justify-center">
<button className="text-primary font-headline font-bold text-sm hover:underline">Ver todo el historial de 2023</button>
</div>
</div>
</div>

        </div>
    );
};

export default Page_7_3_auditor_a_de_actividad;


