import React from 'react';

const Page_5_1_selecci_n_de_perfil_de_empleado: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  TopAppBar / Dynamic Island  */}

{/*  Content Area  */}
<section className="max-w-6xl mx-auto w-full px-8 pt-28 pb-12">
<div className="mb-12">
<h1 className="font-headline text-4xl font-extrabold text-on-background tracking-tight mb-2">Selección de Perfil de Empleado</h1>
<p className="text-on-surface-variant max-w-2xl leading-relaxed">Define el núcleo de inteligencia de tu nuevo agente. Cada perfil tiene capacidades cognitivas optimizadas para tareas específicas.</p>
</div>
{/*  Bento-Inspired Grid for Profiles  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Agente de Ventas  */}
<div className="group relative flex flex-col bg-surface-container-low rounded-[2rem] p-8 transition-all hover:bg-surface-container-highest shadow-sm hover:shadow-xl hover:-translate-y-1">
<div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '\'FILL\' 1'}}>rocket_launch</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Agente de Ventas</h3>
<div className="space-y-4 mb-10 flex-1">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-lg mt-1">genetics</span>
<div>
<p className="text-sm font-bold text-on-surface mb-1">DNA de Persuasión</p>
<p className="text-sm text-on-surface-variant">Experto en cierre de tratos, manejo de objeciones y psicología de ventas.</p>
</div>
</div>
<div className="pt-4 space-y-2">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Capacidades</span>
<div className="flex flex-wrap gap-2">
<span className="bg-white/50 px-3 py-1 rounded-full text-xs font-medium border border-outline-variant/30">Negociación</span>
<span className="bg-white/50 px-3 py-1 rounded-full text-xs font-medium border border-outline-variant/30">Upselling</span>
<span className="bg-white/50 px-3 py-1 rounded-full text-xs font-medium border border-outline-variant/30">Cold Outreach</span>
</div>
</div>
</div>
<button className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                        Seleccionar Perfil
                    </button>
</div>
{/*  Agente de Soporte  */}
<div className="group relative flex flex-col bg-surface-container-low rounded-[2rem] p-8 transition-all hover:bg-surface-container-highest shadow-sm hover:shadow-xl hover:-translate-y-1">
<div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '\'FILL\' 1'}}>volunteer_activism</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Agente de Soporte</h3>
<div className="space-y-4 mb-10 flex-1">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-lg mt-1">genetics</span>
<div>
<p className="text-sm font-bold text-on-surface mb-1">DNA Empático</p>
<p className="text-sm text-on-surface-variant">Resolución ágil de conflictos con un tono humano y orientado a la satisfacción.</p>
</div>
</div>
<div className="pt-4 space-y-2">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Capacidades</span>
<div className="flex flex-wrap gap-2">
<span className="bg-white/50 px-3 py-1 rounded-full text-xs font-medium border border-outline-variant/30">Troubleshooting</span>
<span className="bg-white/50 px-3 py-1 rounded-full text-xs font-medium border border-outline-variant/30">Ticket Management</span>
<span className="bg-white/50 px-3 py-1 rounded-full text-xs font-medium border border-outline-variant/30">Soft Skills</span>
</div>
</div>
</div>
<button className="w-full bg-on-surface text-surface py-4 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-black/5 hover:brightness-125 transition-all">
                        Seleccionar Perfil
                    </button>
</div>
{/*  Agente Administrativo  */}
<div className="group relative flex flex-col bg-surface-container-low rounded-[2rem] p-8 transition-all hover:bg-surface-container-highest shadow-sm hover:shadow-xl hover:-translate-y-1">
<div className="w-14 h-14 bg-tertiary/10 rounded-2xl flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '\'FILL\' 1'}}>account_tree</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Agente Administrativo</h3>
<div className="space-y-4 mb-10 flex-1">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-lg mt-1">genetics</span>
<div>
<p className="text-sm font-bold text-on-surface mb-1">DNA de Estructura</p>
<p className="text-sm text-on-surface-variant">Altamente organizado, enfocado en procesos repetitivos y gestión de datos.</p>
</div>
</div>
<div className="pt-4 space-y-2">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Capacidades</span>
<div className="flex flex-wrap gap-2">
<span className="bg-white/50 px-3 py-1 rounded-full text-xs font-medium border border-outline-variant/30">Scheduling</span>
<span className="bg-white/50 px-3 py-1 rounded-full text-xs font-medium border border-outline-variant/30">Data Entry</span>
<span className="bg-white/50 px-3 py-1 rounded-full text-xs font-medium border border-outline-variant/30">Reporting</span>
</div>
</div>
</div>
<button className="w-full bg-surface-container-highest text-on-surface-variant py-4 rounded-2xl font-bold text-sm tracking-wide hover:bg-outline-variant/40 transition-all border border-outline-variant/30">
                        Seleccionar Perfil
                    </button>
</div>
</div>
{/*  Contextual Insight Footer (Asymmetric)  */}
<div className="mt-16 flex flex-col md:flex-row items-center gap-10 bg-gradient-to-br from-primary-container/20 to-transparent p-10 rounded-[3rem]">
<div className="w-full md:w-1/2">
<h4 className="font-headline text-xl font-bold mb-4">¿No encuentras el perfil ideal?</h4>
<p className="text-on-surface-variant leading-relaxed mb-6">Nuestra IA puede ser entrenada de forma personalizada utilizando los documentos de tu empresa. Puedes elegir una base y luego cargar manuales específicos.</p>
<button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                        Explorar entrenamiento avanzado
                        <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="w-full md:w-1/2 flex justify-center">
<div className="relative w-64 h-64">
<div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
<img alt="AI Brain abstraction" className="w-full h-full object-contain relative z-10" data-alt="Futuristic floating neural network visualization with blue glowing nodes and delicate light threads on a clean white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRMg5XUISjXeAw7F8HAP8QGYdojdY8Ad4SOTO3Hh7uoum8hI8of0SJKGLfah4MvX4lYNhuy-qY2HtmP5lx4YPsg5wuWPSofGnmWe9va_-xH3sOtR_6m_zq7E6Ym8yKAy-WRY-4EcYFpqEoTWuDukTqSoe7shUbDbDvLKkUwf1DKqqpvXCp-8wRN7ahHkoEfTzIN9H8CePbg3kFDk_JcR51itPoppofwMq8CroUqn8MCVoVfm-qanMT9qvlPQ0Qrnznw-_PvnPlXaVM"/>
</div>
</div>
</div>
</section>
{/*  Bottom Navigation for Mobile  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-6 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-lg border-t border-slate-200/20 z-50">
<div className="flex flex-col items-center justify-center text-slate-400">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-semibold">Inicio</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400">
<span className="material-symbols-outlined">person_search</span>
<span className="text-[10px] font-semibold">Perfiles</span>
</div>
<div className="flex flex-col items-center justify-center bg-blue-100 text-blue-700 rounded-xl px-3 py-1">
<span className="material-symbols-outlined">psychology_alt</span>
<span className="text-[10px] font-semibold">Ajustes AI</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[10px] font-semibold">Métricas</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-400">
<span className="material-symbols-outlined">account_circle</span>
<span className="text-[10px] font-semibold">Perfil</span>
</div>
</nav>

        </div>
    );
};

export default Page_5_1_selecci_n_de_perfil_de_empleado;


