import React from 'react';

const Page_10_1_gesti_n_de_instancias_y_empresas: React.FC = () => {
    return (
        <div className="w-full">

            {/*  TopNavBar (Dynamic Island Implementation)  */}

            {/*  Content Area  */}
            <div className="flex-1 overflow-y-auto pt-24 px-8 pb-12">
                {/*  Page Header & Filters  */}
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Empresas e Instancias</h2>
                        <p className="text-on-surface-variant max-w-xl">Supervisa y administra el acceso a todas las organizaciones activas en la infraestructura Ether Admin.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="bg-surface-container-high px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
                            <span className="material-symbols-outlined text-[20px]" data-icon="filter_list">filter_list</span>
                            Filtros
                        </button>
                        <button className="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                            Nueva Instancia
                        </button>
                    </div>
                </div>
                {/*  Search Bar - Integrated Editorial Style  */}
                <div className="mb-8 relative group">
                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-on-surface-variant">
                        <span className="material-symbols-outlined" data-icon="search">search</span>
                    </div>
                    <input className="w-full bg-surface-container-low border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary/40 text-on-surface placeholder:text-on-surface-variant/60 transition-all duration-300" placeholder="Buscar por nombre de empresa, dominio o administrador..." type="text" />
                </div>
                {/*  Dashboard Bento Grid / List Hybrid  */}
                <div className="space-y-4">
                    {/*  Instance Row 1  */}
                    <div className="group bg-surface-container-lowest p-6 rounded-2xl flex flex-wrap lg:flex-nowrap items-center gap-8 hover:bg-surface-container-low transition-all duration-300">
                        <div className="flex items-center gap-5 flex-1 min-w-[300px]">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl">
                                NV
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-on-surface">Nova Ventures</h3>
                                <p className="text-sm text-on-surface-variant font-medium">nova-ventures.ethercrm.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-32">
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Plan</span>
                            <span className="text-sm font-bold text-primary">Enterprise AI</span>
                        </div>
                        <div className="flex flex-col gap-1 w-32">
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Usuarios</span>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm" data-icon="group">group</span>
                                <span className="text-sm font-bold">1,240</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-32">
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Estado</span>
                            <div className="flex items-center gap-1.5 text-secondary font-bold text-sm">
                                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                Activo
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <button className="bg-surface-container-high text-on-surface px-5 py-2.5 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2">
                                Ingresar a Instancia
                                <span className="material-symbols-outlined text-[18px]" data-icon="login">login</span>
                            </button>
                        </div>
                    </div>
                    {/*  Instance Row 2  */}
                    <div className="group bg-surface-container-lowest p-6 rounded-2xl flex flex-wrap lg:flex-nowrap items-center gap-8 hover:bg-surface-container-low transition-all duration-300">
                        <div className="flex items-center gap-5 flex-1 min-w-[300px]">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold text-xl">
                                GL
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-on-surface">Global Logistics S.A.</h3>
                                <p className="text-sm text-on-surface-variant font-medium">logistics-global.ethercrm.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-32">
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Plan</span>
                            <span className="text-sm font-bold text-on-surface-variant">Business Plus</span>
                        </div>
                        <div className="flex flex-col gap-1 w-32">
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Usuarios</span>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm" data-icon="group">group</span>
                                <span className="text-sm font-bold">450</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-32">
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Estado</span>
                            <div className="flex items-center gap-1.5 text-error font-bold text-sm">
                                <span className="w-2 h-2 rounded-full bg-error"></span>
                                Suspendido
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <button className="bg-surface-container-high text-on-surface px-5 py-2.5 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2">
                                Ingresar a Instancia
                                <span className="material-symbols-outlined text-[18px]" data-icon="login">login</span>
                            </button>
                        </div>
                    </div>
                    {/*  Instance Row 3  */}
                    <div className="group bg-surface-container-lowest p-6 rounded-2xl flex flex-wrap lg:flex-nowrap items-center gap-8 hover:bg-surface-container-low transition-all duration-300">
                        <div className="flex items-center gap-5 flex-1 min-w-[300px]">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 font-bold text-xl">
                                ZK
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-on-surface">Zenith Marketing</h3>
                                <p className="text-sm text-on-surface-variant font-medium">zenith.ethercrm.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-32">
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Plan</span>
                            <span className="text-sm font-bold text-primary">Pro Tier</span>
                        </div>
                        <div className="flex flex-col gap-1 w-32">
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Usuarios</span>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm" data-icon="group">group</span>
                                <span className="text-sm font-bold">85</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-32">
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Estado</span>
                            <div className="flex items-center gap-1.5 text-secondary font-bold text-sm">
                                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                Activo
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <button className="bg-surface-container-high text-on-surface px-5 py-2.5 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2">
                                Ingresar a Instancia
                                <span className="material-symbols-outlined text-[18px]" data-icon="login">login</span>
                            </button>
                        </div>
                    </div>
                    {/*  Instance Row 4  */}
                    <div className="group bg-surface-container-lowest p-6 rounded-2xl flex flex-wrap lg:flex-nowrap items-center gap-8 hover:bg-surface-container-low transition-all duration-300">
                        <div className="flex items-center gap-5 flex-1 min-w-[300px]">
                            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 font-bold text-xl">
                                AT
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-on-surface">Atlas Tech</h3>
                                <p className="text-sm text-on-surface-variant font-medium">atlas-corp.ethercrm.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-32">
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Plan</span>
                            <span className="text-sm font-bold text-on-surface-variant">Starter</span>
                        </div>
                        <div className="flex flex-col gap-1 w-32">
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Usuarios</span>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm" data-icon="group">group</span>
                                <span className="text-sm font-bold">12</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-32">
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-bold">Estado</span>
                            <div className="flex items-center gap-1.5 text-secondary font-bold text-sm">
                                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                Activo
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <button className="bg-surface-container-high text-on-surface px-5 py-2.5 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2">
                                Ingresar a Instancia
                                <span className="material-symbols-outlined text-[18px]" data-icon="login">login</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/*  Footer Pagination / Editorial Note  */}
                <div className="mt-12 flex items-center justify-between">
                    <p className="text-sm text-on-surface-variant font-medium">Mostrando 1-10 de 24 instancias totales</p>
                    <div className="flex items-center gap-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors disabled:opacity-30" disabled>
                            <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-bold">1</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-bold">2</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-bold">3</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors">
                            <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
            {/*  Asymmetric Floating Insight Column  */}
            <aside className="absolute top-24 right-8 w-72 hidden xl:block space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-blue-500/5 border border-white/20">
                    <h4 className="font-headline text-lg font-extrabold mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary" data-icon="insights">insights</span>
                        Resumen de Salud
                    </h4>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-on-surface-variant font-medium">Uptime Promedio</span>
                            <span className="text-sm font-bold text-secondary">99.98%</span>
                        </div>
                        <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-secondary w-[99%]"></div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-sm text-on-surface-variant font-medium">Uso de API</span>
                            <span className="text-sm font-bold">72%</span>
                        </div>
                        <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[72%]"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-primary text-white p-6 rounded-2xl shadow-2xl shadow-primary/20 relative overflow-hidden group">
                    <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <span className="material-symbols-outlined text-9xl" data-icon="shield">shield</span>
                    </div>
                    <h4 className="font-headline text-lg font-extrabold mb-2">Seguridad Global</h4>
                    <p className="text-xs text-white/80 leading-relaxed mb-4">Todas las instancias están bajo el protocolo de cifrado Ether-Shield v2.1.</p>
                    <button className="text-xs font-bold py-2 px-4 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors">Ver Reporte</button>
                </div>
            </aside>

        </div>
    );
};

export default Page_10_1_gesti_n_de_instancias_y_empresas;


