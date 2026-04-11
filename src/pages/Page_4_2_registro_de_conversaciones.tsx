import React from 'react';

const Page_4_2_registro_de_conversaciones: React.FC = () => {
    return (
        <div className="w-full">
            
<div className="max-w-7xl mx-auto">
{/*  Header Section  */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Registro de Conversaciones</h1>
<p className="text-on-surface-variant max-w-xl">Supervisa las interacciones en tiempo real y gestiona el aprendizaje continuo de tus agentes virtuales.</p>
</div>
{/*  Filters Bar  */}
<div className="flex items-center gap-3 bg-surface-container-low p-2 rounded-2xl">
<div className="relative">
<select className="appearance-none bg-surface-container-lowest border-none rounded-xl px-4 py-2 pr-10 text-sm font-medium focus:ring-2 focus:ring-primary/20 cursor-pointer">
<option>Todos los Agentes</option>
<option>Ventas-Bot v2</option>
<option>Soporte Técnico</option>
<option>Asistente Legal</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-lg">expand_more</span>
</div>
<div className="relative">
<button className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-xl text-sm font-medium hover:bg-white transition-colors">
<span className="material-symbols-outlined text-lg">calendar_today</span>
<span>Últimos 7 días</span>
</button>
</div>
<button className="bg-primary text-on-primary px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                        Filtrar
                    </button>
</div>
</div>
{/*  Dashboard Layout (Asymmetric)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Left Column: Recent Chats List (4 cols)  */}
<div className="lg:col-span-4 flex flex-col gap-4">
<h3 className="text-sm font-bold text-primary uppercase tracking-widest px-2">Recientes</h3>
{/*  Chat Card 1 (Active)  */}
<div className="bg-surface-container-highest p-4 rounded-2xl cursor-pointer ring-2 ring-primary relative group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover" data-alt="portrait of a young smiling professional woman for user avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtB2YW5vJuTK1BSnT43DbXpKkALqDNCkgcpAiSFkK_kDGTJ5Qx4K65a7rukT4q5UBMvf8z1DPgEhihNRw8hBmY8dwwy5wc5T89uHQgzqcF3MdbPkkHfmzSyLaxgVNXkHjU4Rm7Dz1t4UAI6JYb7jFpTeN7rYvHkfPC-8TXkr3oU74CSety7bEUFIYOlRVWZACPj7TS11DgbTLiBk137zqWdtEZsgKG5ZiwB8moU1GSG87Z0nAlG0yhXoMLmVeqAOD6t9iA33fyikUp"/>
</div>
<div>
<p className="text-sm font-bold">Lucía Martínez</p>
<p className="text-[11px] text-slate-500">ID: #49202</p>
</div>
</div>
<span className="text-[10px] font-medium text-slate-400">Hace 2m</span>
</div>
<p className="text-xs text-on-surface-variant line-clamp-1 mb-3">"Quisiera saber el estado de mi envío..."</p>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold">Resuelto</span>
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary text-[10px] font-bold">Ventas-Bot</span>
</div>
<div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-primary">chevron_right</span>
</div>
</div>
{/*  Chat Card 2  */}
<div className="bg-surface-container-low p-4 rounded-2xl cursor-pointer hover:bg-surface-container-high transition-colors group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover" data-alt="close up headshot of a mature businessman with a warm professional expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKLnRe-ZEoIFvKNrPmlAS8Cy9zppuNcJzAvq9bkqNDH3n4njArGT-a74flKEhonzxyZUwXe-9nt05t8zYC92AEwy7yJPhkpW_pVB5SiavL2t5LNxK0yLAwOz3ZZuf65gRptWyNZRkD7F6smGyWy3E29HVsgpEsjf1fs9dc2aVok7nTeWtiFHnmg7emCwBcylTgIFVNNOwtUy1c_r5rni7z0QBUtMAlrnMx4JKisz0xP_xhQDqQcC5Oyyy5odKc9ISZq4Faug-0-547"/>
</div>
<div>
<p className="text-sm font-bold">Carlos Ruiz</p>
<p className="text-[11px] text-slate-500">ID: #49198</p>
</div>
</div>
<span className="text-[10px] font-medium text-slate-400">Hace 15m</span>
</div>
<p className="text-xs text-on-surface-variant line-clamp-1 mb-3">"No puedo acceder a mi cuenta corporativa..."</p>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold">Escalado</span>
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary text-[10px] font-bold">Soporte</span>
</div>
</div>
{/*  Chat Card 3  */}
<div className="bg-surface-container-low p-4 rounded-2xl cursor-pointer hover:bg-surface-container-high transition-colors group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover" data-alt="profile portrait of a creative professional woman in a bright modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE1UkEuxo2JG9ObyLQIfaLo56-W563BBA0HJe9cw8fMA8mCndY47jqFywCqmdKR3APRoFICA5pngU5wD6Tzg727zitmh_0IPqMZs9wC0jqryjs2T5l_tmNmsJkqSa6SL33H7HIIR0GW1t6tPzkzFVJPd7Koe7XpI3AiovAFXIZQlJAJYaif-wyalfi2blJtkkBSj-K83fV4CTW0smfsLv9mDG40Gt3ezisksr-woFrXSh3Q4nSuhEVFLXoo8TVybf3dQwob75YPEaf"/>
</div>
<div>
<p className="text-sm font-bold">Elena Soler</p>
<p className="text-[11px] text-slate-500">ID: #49195</p>
</div>
</div>
<span className="text-[10px] font-medium text-slate-400">Hace 42m</span>
</div>
<p className="text-xs text-on-surface-variant line-clamp-1 mb-3">"¿Tienen planes para empresas de más de 50..."</p>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold">Resuelto</span>
<span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary text-[10px] font-bold">Ventas-Bot</span>
</div>
</div>
</div>
{/*  Right Column: Detail & Transcription (8 cols)  */}
<div className="lg:col-span-8 space-y-8">
{/*  Chat Transcription Canvas  */}
<div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-10 pb-6 border-b border-surface-container">
<div className="flex items-center gap-4">
<div className="bg-primary-container p-3 rounded-2xl">
<span className="material-symbols-outlined text-white">forum</span>
</div>
<div>
<h2 className="text-xl font-bold">Transcripción del Chat</h2>
<p className="text-xs text-slate-500">Sesión iniciada el 24 de Oct, 10:32 AM</p>
</div>
</div>
<button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">
<span className="material-symbols-outlined text-lg">download</span>
<span>Exportar PDF</span>
</button>
</div>
{/*  Conversation Thread  */}
<div className="space-y-6 mb-12">
<div className="flex flex-col items-start max-w-[80%]">
<div className="bg-surface-container-low px-5 py-3 rounded-2xl rounded-tl-none">
<p className="text-sm leading-relaxed">Hola, quisiera saber el estado de mi envío con número de guía <span className="font-bold text-primary">JAZM-8822</span>. No se ha actualizado desde ayer.</p>
</div>
<span className="text-[10px] text-slate-400 mt-1 ml-1">Usuario • 10:32 AM</span>
</div>
<div className="flex flex-col items-end ml-auto max-w-[80%]">
<div className="bg-primary text-on-primary px-5 py-3 rounded-2xl rounded-tr-none shadow-md">
<p className="text-sm leading-relaxed">Hola Lucía. Consultando en nuestro sistema... El paquete JAZM-8822 se encuentra actualmente en el centro de distribución regional de Madrid. Se espera que salga a reparto mañana a primera hora.</p>
</div>
<span className="text-[10px] text-slate-400 mt-1 mr-1">Ventas-Bot v2 • 10:33 AM</span>
</div>
<div className="flex flex-col items-start max-w-[80%]">
<div className="bg-surface-container-low px-5 py-3 rounded-2xl rounded-tl-none">
<p className="text-sm leading-relaxed">¿Puedo cambiar la dirección de entrega ahora que está ahí?</p>
</div>
<span className="text-[10px] text-slate-400 mt-1 ml-1">Usuario • 10:34 AM</span>
</div>
<div className="flex flex-col items-end ml-auto max-w-[80%]">
<div className="bg-primary text-on-primary px-5 py-3 rounded-2xl rounded-tr-none shadow-md">
<p className="text-sm leading-relaxed">Lamentablemente, una vez que el paquete entra en fase de "Distribución Regional", no es posible modificar la dirección desde mi interfaz por seguridad. Te recomiendo contactar a soporte humano para una excepción manual. ¿Te conecto con ellos?</p>
</div>
<span className="text-[10px] text-slate-400 mt-1 mr-1">Ventas-Bot v2 • 10:35 AM</span>
</div>
</div>
</div>
</div>
{/*  Feedback de Aprendizaje (Editorial Style)  */}
<div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-xl shadow-slate-900/20 relative overflow-hidden">
<div className="absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none">
<img className="w-full h-full object-cover" data-alt="abstract artistic visualization of neural networks and data connections with neon blue glowing lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBls9lumdTfTj7ZCyTNCigQhalqXL2Mo-DijnTEnDkyGo4ns3N4d_WsZY1uygmP5uQJO20zTehG1E3CWa2xk9NgTHWO6NYLGzzopj--nAUxirRWlX_pzLvkeQwlvpag2tyb66PC-s0S7pmcehU252AhO4HtDhPYAK_iOIO46Tmf9CNsjD1-wGUsF9QBG6zaGJ_QiK7SqDPIvW-Eq_3F61hmSgIsyxd-FkOzSaxUrPCbYaJoYobSkPyQNOxToMGC0-tFNYYtpLCiMTIE"/>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '\'FILL\' 1'}}>psychology</span>
<h2 className="text-xl font-bold tracking-tight">Feedback de Aprendizaje IA</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-sky-400 text-sm">auto_awesome</span>
<span className="text-xs font-bold uppercase tracking-widest text-sky-300">Detección de Patrón</span>
</div>
<p className="text-sm text-slate-200 leading-relaxed">El usuario consultó sobre cambios de dirección en última milla. Se identificó una frustración común en este punto del embudo.</p>
</div>
<div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-emerald-400 text-sm">add_task</span>
<span className="text-xs font-bold uppercase tracking-widest text-emerald-300">Nueva Skill</span>
</div>
<p className="text-sm text-slate-200 leading-relaxed">IA ha aprendido a priorizar la opción de "Recogida en Punto Pack" como alternativa cuando la dirección ya no es editable.</p>
</div>
</div>
<div className="flex flex-col justify-center">
<div className="p-6 bg-primary-container rounded-3xl text-center">
<span className="text-4xl font-black mb-2 block">94%</span>
<p className="text-xs font-bold uppercase text-sky-100 mb-4">Confianza de Respuesta</p>
<div className="w-full bg-white/20 h-2 rounded-full mb-6">
<div className="bg-white h-full rounded-full w-[94%] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
</div>
<button className="w-full bg-white text-primary py-3 rounded-xl font-bold text-sm hover:bg-sky-50 transition-colors">
                                            Validar Conocimiento
                                        </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

        </div>
    );
};

export default Page_4_2_registro_de_conversaciones;


