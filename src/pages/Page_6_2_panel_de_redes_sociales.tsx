import React from 'react';

const Page_6_2_panel_de_redes_sociales: React.FC = () => {
    return (
        <div className="w-full">
            
<div className="p-8 max-w-7xl mx-auto">
{/*  Header Section  */}
<div className="flex justify-between items-end mb-10">
<div>
<h1 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight">Social Hub</h1>
<p className="text-slate-500 mt-2">Gestiona tus interacciones de Facebook e Instagram desde un solo lugar.</p>
</div>
<button className="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-md">
<span className="material-symbols-outlined" data-icon="add">add</span>
                    Conectar Nueva Cuenta
                </button>
</div>
{/*  Dashboard Grid (Asymmetric Bento Style)  */}
<div className="grid grid-cols-12 gap-6">
{/*  Facebook Card  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-low rounded-xl p-6 transition-all hover:bg-surface-container">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="facebook">social_leaderboard</span>
</div>
<div>
<h3 className="font-bold text-on-surface">JAZM.IO Official</h3>
<p className="text-xs text-slate-500">Facebook Page</p>
</div>
</div>
<span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full text-[10px] font-bold">ACTIVE</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white/50 p-4 rounded-xl">
<p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Pendientes</p>
<p className="text-2xl font-extrabold text-on-surface">12</p>
</div>
<div className="bg-white/50 p-4 rounded-xl">
<p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Seguidores</p>
<p className="text-2xl font-extrabold text-secondary">+2.4k</p>
</div>
</div>
<button className="w-full py-2 border-2 border-outline-variant/20 rounded-xl text-sm font-semibold hover:bg-white/40 transition-colors">
                        Ver Detalles
                    </button>
</div>
{/*  Instagram Card  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-low rounded-xl p-6 transition-all hover:bg-surface-container">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="camera">camera</span>
</div>
<div>
<h3 className="font-bold text-on-surface">@jazm_ai</h3>
<p className="text-xs text-slate-500">Instagram Business</p>
</div>
</div>
<span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full text-[10px] font-bold">ACTIVE</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white/50 p-4 rounded-xl">
<p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Pendientes</p>
<p className="text-2xl font-extrabold text-on-surface">43</p>
</div>
<div className="bg-white/50 p-4 rounded-xl">
<p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Engagement</p>
<p className="text-2xl font-extrabold text-secondary">4.8%</p>
</div>
</div>
<button className="w-full py-2 border-2 border-outline-variant/20 rounded-xl text-sm font-semibold hover:bg-white/40 transition-colors">
                        Ver Detalles
                    </button>
</div>
{/*  Quick Stats / Empty State Bento  */}
<div className="col-span-12 lg:col-span-4 bg-slate-900 text-white rounded-xl p-6 flex flex-col justify-between overflow-hidden relative">
<div className="relative z-10">
<h3 className="font-headline text-xl font-bold mb-2">Omni-Analytics</h3>
<p className="text-slate-400 text-sm">Crecimiento consolidado en las últimas 24 horas.</p>
</div>
<div className="mt-8 flex items-end gap-2 relative z-10">
<div className="h-16 w-3 bg-sky-400/20 rounded-t-sm"></div>
<div className="h-24 w-3 bg-sky-400/40 rounded-t-sm"></div>
<div className="h-32 w-3 bg-sky-400/60 rounded-t-sm"></div>
<div className="h-20 w-3 bg-sky-400/80 rounded-t-sm"></div>
<div className="h-28 w-3 bg-sky-400 rounded-t-sm"></div>
<div className="ml-4">
<p className="text-3xl font-extrabold text-sky-400">+12%</p>
<p className="text-[10px] uppercase text-slate-500 tracking-tighter">vs ayer</p>
</div>
</div>
{/*  Decorative background glow  */}
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-600 blur-[80px] opacity-30"></div>
</div>
{/*  Recent Interactions List  */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-8">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline text-lg font-bold">Últimas Interacciones</h3>
<a className="text-sky-600 text-sm font-semibold hover:underline" href="#">Ver todo</a>
</div>
<div className="space-y-4">
{/*  Interaction 1  */}
<div className="flex items-center justify-between p-4 bg-white/40 rounded-xl hover:bg-white transition-colors group">
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-12 h-12 rounded-full" data-alt="close-up portrait of a man with a beard and intense eyes in a moody architectural setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4O3a6ziDII0bokQa54YPbj-SZYV-w4JUifOmALOkyanRjzLZ72YShDs1WQuTw1Vm6B6fPiLeVmOfoH4GtasJmZjkGJDjPB1_KYEKTlhcDdFDpYQZErF17i7Fvr1z96MP0UtSeYeDzE8DuRQ58Qb1N_DUL9hjtXT6VBqCmrsOVi43H5N4A99rvfGUVcv8psF2PVYJf7RZKJ8zv7O78rNqllgBFMzror395Csc6cRSqYW5XFbk2Mgwq0bMYdKbUlZwksCh1r3AqwwIF"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#1877F2] rounded-full border-2 border-white flex items-center justify-center">
<span className="material-symbols-outlined text-white text-[10px]" data-icon="facebook">social_leaderboard</span>
</div>
</div>
<div>
<p className="font-bold text-on-surface">Marco Polo <span className="font-normal text-slate-500 text-sm">comentó en tu post</span></p>
<p className="text-sm text-slate-600 line-clamp-1 italic">"¡Increíble servicio! ¿Hacen envíos a México?"</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-slate-400">Hace 2m</span>
<button className="opacity-0 group-hover:opacity-100 bg-surface-container-high p-2 rounded-lg transition-all">
<span className="material-symbols-outlined text-on-surface text-[18px]" data-icon="reply">reply</span>
</button>
</div>
</div>
{/*  Interaction 2  */}
<div className="flex items-center justify-between p-4 bg-white/40 rounded-xl hover:bg-white transition-colors group">
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-12 h-12 rounded-full" data-alt="professional corporate headshot of a woman smiling confidently against a minimalist grey background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6NfxqkykuMc0KXewFjRSDosiCoLOkcXmAa8drgV96QlU_knzgd765V6LpblYFqyU64qGHk89VSJw9IImTk2uvFYVTyGeHSaCBxqWIFt7mXovvSXYdbXuy-hZUghB_gL-Km8KQgoVZb2CycMz1w5KzkdSzPFXmHWm_0GBBoFBNoGQzS4s-2ALcHez9Ye97ds5dISmAcfJiJ9cy5U4ZjvYtBIUk0d3hP0T9IP8RME3r3m2qjG2pySH_DyvfiDypGDYwXTlFYHMy7qFB"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center text-[10px]">
<span className="material-symbols-outlined text-white text-[10px]" data-icon="camera">camera</span>
</div>
</div>
<div>
<p className="font-bold text-on-surface">Sofía Chen <span className="font-normal text-slate-500 text-sm">te envió un mensaje directo</span></p>
<p className="text-sm text-slate-600 line-clamp-1 font-medium">"Hola, estoy interesada en la integración de IA..."</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-slate-400">Hace 15m</span>
<button className="opacity-0 group-hover:opacity-100 bg-surface-container-high p-2 rounded-lg transition-all">
<span className="material-symbols-outlined text-on-surface text-[18px]" data-icon="chat_bubble">chat_bubble</span>
</button>
</div>
</div>
{/*  Interaction 3  */}
<div className="flex items-center justify-between p-4 bg-white/40 rounded-xl hover:bg-white transition-colors group">
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
<span className="material-symbols-outlined text-slate-500" data-icon="person">person</span>
</div>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center text-[10px]">
<span className="material-symbols-outlined text-white text-[10px]" data-icon="favorite" style={{fontVariationSettings: '\'FILL\' 1'}}>favorite</span>
</div>
</div>
<div>
<p className="font-bold text-on-surface">Alex Rivera <span className="font-normal text-slate-500 text-sm">le dio Like a tu historia</span></p>
<p className="text-xs text-slate-400 mt-1">Historia: "Nuevas funcionalidades Octubre"</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-slate-400">Hace 1h</span>
</div>
</div>
</div>
</div>
{/*  Secondary Insights  */}
<div className="col-span-12 lg:col-span-4 space-y-6">
<div className="bg-tertiary-fixed text-on-tertiary-fixed p-6 rounded-xl">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
<h4 className="font-bold">AI Insight</h4>
</div>
<p className="text-sm leading-relaxed mb-4">
                            Tus seguidores de **Instagram** están más activos a las **8:00 PM**. Considera programar un post hoy para maximizar el alcance.
                        </p>
<button className="text-sm font-bold underline hover:no-underline">Programar contenido</button>
</div>
<div className="bg-surface-container-low p-6 rounded-xl">
<h4 className="font-headline font-bold text-on-surface mb-4">Estado de Conexión</h4>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-600">Facebook API</span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="text-xs font-bold text-secondary">ESTABLE</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-600">Instagram API</span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="text-xs font-bold text-secondary">ESTABLE</span>
</div>
</div>
<div className="pt-4 border-t border-outline-variant/20">
<p className="text-[10px] text-slate-500 text-center uppercase tracking-widest">Última sincronización: Hace 3 min</p>
</div>
</div>
</div>
</div>
</div>
</div>

        </div>
    );
};

export default Page_6_2_panel_de_redes_sociales;
