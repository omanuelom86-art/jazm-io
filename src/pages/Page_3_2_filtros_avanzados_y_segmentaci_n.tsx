import React from 'react';

const Page_3_2_filtros_avanzados_y_segmentaci_n: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Dynamic Island (Signature Component)  */}
<div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
<div className="glass-island px-6 py-2 rounded-full flex items-center gap-4 shadow-2xl border border-white/20">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
<span className="text-xs font-bold text-primary tracking-tight">AI ETHER</span>
</div>
<div className="h-4 w-[1px] bg-outline-variant/30"></div>
<span className="text-xs font-medium text-on-surface-variant">Analizando 1,240 leads potenciales...</span>
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-surface" data-alt="Portrait of a young professional woman with a confident expression in a bright office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGyiNsa3hnXtWrco8GVqkyNHILIbHCztVTm9trIcFrmzCc2GKd_6Kq0WMXvGxgd-5mLxZRxnIs1WNVtrbzp5tqM2t4zYjkWhNoO50ebKw36EOUVgyMN2j0u3X5USgNAFvqD17IlNDDiw1RFkyzQjAeyXAx0EErVqne5Irghn1N3Fzwt2badKC-sptao-MfdT7CjchB5mD-o_CohIu7dSk7nY5tOVWKGM6nlmxzbtDIWX_czW9PODJrANUkWqyS-Z6Qov8wONIS5jCI"/>
<img className="w-6 h-6 rounded-full border-2 border-surface" data-alt="Portrait of a professional man with glasses and a friendly smile against a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5JqIQDqdTesRway4vhUev6q55zZyigsT9tt5T2qDq_51-2n7NaJ4Bnho_QJihDOwtleQGwOgdQT-S1AgmyAM7rcAAPFa7br8FLCnYtnzycUdDZP1dxIca6eMzQTL-Zp6we3-RJIsgUwWX9FSrE1qGtEd5jEAMr0BG2KMhaC25GWzKHplMd098BQYiv0T8L3b6m27R5GejhPTfW0lHXuheyP7Gc5bV_3_hqmNjb2m83Tk3WwauaZhK2yrekDaBxwASN1mOa9BJ7F4N"/>
</div>
</div>
</div>
{/*  Content Canvas  */}
<div className="flex-1 overflow-y-auto pt-20 pb-10 px-8">
{/*  Header Section  */}

<div className="grid grid-cols-12 gap-8">
{/*  Filters Column (Asymmetric Layout)  */}
<section className="col-span-12 lg:col-span-3 space-y-6">
<div className="bg-surface-container-low rounded-xl p-6 space-y-8">
<h3 className="font-headline font-bold text-lg text-primary">Parámetros de Filtro</h3>
{/*  Filter Group: Date  */}
<div className="space-y-3">
<label className="text-xs font-bold uppercase tracking-widest text-outline">Rango de Fecha</label>
<div className="space-y-2">
<button className="w-full text-left px-4 py-3 bg-surface-container-highest rounded-xl text-sm flex justify-between items-center group">
<span>Últimos 30 días</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="calendar_today">calendar_today</span>
</button>
</div>
</div>
{/*  Filter Group: Source  */}
<div className="space-y-3">
<label className="text-xs font-bold uppercase tracking-widest text-outline">Origen del Lead</label>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-primary text-on-primary rounded-full text-xs font-semibold cursor-pointer">Web Site</span>
<span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-semibold cursor-pointer hover:bg-surface-container-high">Linkedin</span>
<span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-semibold cursor-pointer hover:bg-surface-container-high">Referido</span>
<span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-semibold cursor-pointer hover:bg-surface-container-high">Cold Email</span>
</div>
</div>
{/*  Filter Group: IA Score (Range)  */}
<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-xs font-bold uppercase tracking-widest text-outline">IA Ether Score</label>
<span className="text-xs font-bold text-secondary">85+</span>
</div>
<div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden relative">
<div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-r from-secondary to-secondary-fixed-dim"></div>
</div>
<p className="text-[10px] text-on-surface-variant italic">Filtrando prospectos con alta probabilidad de cierre.</p>
</div>
{/*  Filter Group: Assigned Agent  */}
<div className="space-y-3">
<label className="text-xs font-bold uppercase tracking-widest text-outline">Agente Asignado</label>
<div className="relative">
<select className="w-full appearance-none px-4 py-3 bg-surface-container-highest rounded-xl text-sm border-none focus:ring-2 focus:ring-primary/40">
<option>Todos los agentes</option>
<option>Ana Martinez</option>
<option>Carlos Ruiz</option>
<option>Elena Sanchis</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline" data-icon="expand_more">expand_more</span>
</div>
</div>
{/*  Filter Group: Value  */}
<div className="space-y-3">
<label className="text-xs font-bold uppercase tracking-widest text-outline">Valor de Oportunidad</label>
<div className="grid grid-cols-2 gap-2">
<div className="bg-surface-container-highest p-3 rounded-xl">
<span className="text-[10px] block text-outline font-bold">MIN</span>
<span className="text-sm font-bold">$2,500</span>
</div>
<div className="bg-surface-container-highest p-3 rounded-xl">
<span className="text-[10px] block text-outline font-bold">MAX</span>
<span className="text-sm font-bold">$50,000</span>
</div>
</div>
</div>
<button className="w-full py-4 bg-surface-container-highest text-primary font-bold rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-300">
                            Limpiar Filtros
                        </button>
</div>
</section>
{/*  Results Column (Bento Grid Style)  */}
<section className="col-span-12 lg:col-span-9 space-y-6">
{/*  Quick Stats Row  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between">
<span className="text-outline text-xs font-bold uppercase tracking-wider">Leads Encontrados</span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl font-headline font-extrabold text-on-surface">42</span>
<span className="text-secondary text-xs font-bold flex items-center">
<span className="material-symbols-outlined text-xs" data-icon="arrow_upward">arrow_upward</span>
                                    12%
                                </span>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col justify-between">
<span className="text-outline text-xs font-bold uppercase tracking-wider">Valor Segmento</span>
<div className="mt-4">
<span className="text-4xl font-headline font-extrabold text-on-surface">$1.2M</span>
</div>
</div>
<div className="bg-primary text-on-primary p-6 rounded-2xl flex flex-col justify-between shadow-xl shadow-primary/20">
<span className="opacity-70 text-xs font-bold uppercase tracking-wider">IA Confidence</span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-4xl font-headline font-extrabold">94%</span>
<span className="material-symbols-outlined text-xl" data-icon="auto_awesome">auto_awesome</span>
</div>
</div>
</div>
{/*  Results List  */}
<div className="bg-surface-container-low rounded-2xl overflow-hidden">
<div className="px-8 py-6 border-b border-outline-variant/10 flex justify-between items-center">
<h4 className="font-headline font-bold text-xl">Resultados Filtrados</h4>
<div className="flex gap-2">
<button className="p-2 bg-surface-container-highest rounded-lg text-primary">
<span className="material-symbols-outlined" data-icon="view_list">view_list</span>
</button>
<button className="p-2 text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
</button>
</div>
</div>
<div className="divide-y divide-outline-variant/10">
{/*  Lead Row 1  */}
<div className="px-8 py-6 flex items-center justify-between hover:bg-surface-container-high/40 transition-colors group">
<div className="flex items-center gap-6">
<div className="relative">
<img className="w-14 h-14 rounded-2xl object-cover" data-alt="Portrait of a female corporate executive with a neutral background, sharp business attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGN2q6tEEqd2hb7kzAozCi1wC2BIUUF_Y4C9Q3obrARA93kEmHwY0ltEXO0urqGdt9ZAqbtrB0mkR9E2fQ0QXA_RfTb4uznS_d5GwkJc-qrtICQ80ibQM7WiMS_cRMAVoAQMlm9DEPf3Q6ffoXZSWETkK0AhY0yk61zXAtk0XKpKdMW0sVBKIlRI4BQXy5E74EIrtKqCjJrshij4XP6fI6AhE-18_3IzF_eKrERFlWcSmv6nUdLys9tYbyBYLvwTRhNUKkk5PZWzGe"/>
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary-fixed text-on-secondary-fixed rounded-full flex items-center justify-center text-[10px] font-black border-2 border-surface">
                                            98
                                        </div>
</div>
<div>
<h5 className="font-bold text-lg text-on-surface">Soluciones Logísticas Globales</h5>
<p className="text-sm text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="person">person</span>
                                            Beatriz Mendoza • Directora de Ops
                                        </p>
</div>
</div>
<div className="hidden md:flex flex-col items-end">
<span className="text-sm font-bold text-on-surface">$45,000</span>
<span className="text-[10px] text-outline font-bold uppercase">Potencial Estimado</span>
</div>
<div className="hidden lg:block">
<div className="flex items-center gap-2 px-4 py-1.5 bg-surface-container-highest rounded-full text-xs font-semibold text-on-surface-variant">
<span className="w-2 h-2 bg-secondary rounded-full"></span>
                                        Calificado por IA
                                    </div>
</div>
<button className="p-2 rounded-full hover:bg-primary/10 text-outline group-hover:text-primary transition-all">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
{/*  Lead Row 2  */}
<div className="px-8 py-6 flex items-center justify-between hover:bg-surface-container-high/40 transition-colors group">
<div className="flex items-center gap-6">
<div className="relative">
<div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center text-primary font-bold text-xl">
                                            TR
                                        </div>
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary-fixed text-on-secondary-fixed rounded-full flex items-center justify-center text-[10px] font-black border-2 border-surface">
                                            89
                                        </div>
</div>
<div>
<h5 className="font-bold text-lg text-on-surface">Tech Retail S.A.</h5>
<p className="text-sm text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="person">person</span>
                                            Roberto Gómez • CTO
                                        </p>
</div>
</div>
<div className="hidden md:flex flex-col items-end">
<span className="text-sm font-bold text-on-surface">$12,800</span>
<span className="text-[10px] text-outline font-bold uppercase">Potencial Estimado</span>
</div>
<div className="hidden lg:block">
<div className="flex items-center gap-2 px-4 py-1.5 bg-surface-container-highest rounded-full text-xs font-semibold text-on-surface-variant">
<span className="w-2 h-2 bg-secondary rounded-full"></span>
                                        Calificado por IA
                                    </div>
</div>
<button className="p-2 rounded-full hover:bg-primary/10 text-outline group-hover:text-primary transition-all">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
{/*  Lead Row 3  */}
<div className="px-8 py-6 flex items-center justify-between hover:bg-surface-container-high/40 transition-colors group">
<div className="flex items-center gap-6">
<div className="relative">
<img className="w-14 h-14 rounded-2xl object-cover" data-alt="Portrait of a male professional executive in a smart casual outfit, soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPmTJdKXv2eCbmtvNl-nAV7O1eW8J1n5bPwsQByGCUz1bcKtqTQbVXZwGEXZ1P2RDuQOuLo2hjF1Nio0_0r-zAWnwEXU24qE37Y-tkacjcF98_MD8SR1sc183PKjS1uNcnc148pyTgzNE6Sh5G1GMGbElirNwCYac47onMtVbk6HI74wluv3kFkxzIiMyHwGqW1dS76lnBZPG9lP5T9AM4lnFNMHG0jiC9U2AX3wY9DUk2tz2Fk7oadP73bNoAdP8B1uJOryCORcw9"/>
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary-fixed text-on-secondary-fixed rounded-full flex items-center justify-center text-[10px] font-black border-2 border-surface">
                                            92
                                        </div>
</div>
<div>
<h5 className="font-bold text-lg text-on-surface">Inversiones del Norte</h5>
<p className="text-sm text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="person">person</span>
                                            Mariano López • CEO
                                        </p>
</div>
</div>
<div className="hidden md:flex flex-col items-end">
<span className="text-sm font-bold text-on-surface">$28,500</span>
<span className="text-[10px] text-outline font-bold uppercase">Potencial Estimado</span>
</div>
<div className="hidden lg:block">
<div className="flex items-center gap-2 px-4 py-1.5 bg-surface-container-highest rounded-full text-xs font-semibold text-on-surface-variant">
<span className="w-2 h-2 bg-secondary rounded-full"></span>
                                        Calificado por IA
                                    </div>
</div>
<button className="p-2 rounded-full hover:bg-primary/10 text-outline group-hover:text-primary transition-all">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
<div className="p-6 bg-surface-container-low border-t border-outline-variant/10 flex justify-center">
<button className="text-primary font-bold text-sm flex items-center gap-2 hover:translate-y-[-2px] transition-transform">
                                Ver más resultados
                                <span className="material-symbols-outlined" data-icon="keyboard_arrow_down">keyboard_arrow_down</span>
</button>
</div>
</div>
</section>
</div>
</div>

        </div>
    );
};

export default Page_3_2_filtros_avanzados_y_segmentaci_n;


