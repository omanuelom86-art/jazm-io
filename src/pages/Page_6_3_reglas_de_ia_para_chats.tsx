import React from 'react';

const Page_6_3_reglas_de_ia_para_chats: React.FC = () => {
    return (
        <div className="w-full">
            

{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl">
{/*  Welcome Script Editor  */}
<section className="md:col-span-8 bg-surface-container-low rounded-xl p-8 flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">auto_awesome</span>
</div>
<div>
<h2 className="text-lg font-bold text-on-surface">Welcome Script</h2>
<p className="text-xs text-slate-500">El primer mensaje que la IA enviará al detectar un nuevo lead.</p>
</div>
</div>
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full">ACTIVE</span>
</div>
<div className="flex-1 bg-surface-container-high rounded-xl p-6 relative">
<textarea className="w-full bg-transparent border-none focus:ring-0 text-on-surface leading-relaxed resize-none min-h-[160px]" placeholder="Escribe el guion aquí...">¡Hola! 👋 Soy Jazm, tu asistente virtual en JAZM.IO. He recibido tu mensaje y estoy aquí para ayudarte de inmediato. ¿En qué puedo apoyarte hoy?</textarea>
<div className="absolute bottom-4 right-4 flex gap-2">
<button className="p-2 bg-surface-container-lowest rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
<span className="material-symbols-outlined text-sm">magic_button</span>
</button>
<button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg shadow-md">
                            Guardar Script
                        </button>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container text-slate-600 text-[11px] font-medium rounded-full cursor-pointer hover:bg-surface-container-highest transition-colors">{nombre_cliente}</span>
<span className="px-3 py-1 bg-surface-container text-slate-600 text-[11px] font-medium rounded-full cursor-pointer hover:bg-surface-container-highest transition-colors">{nombre_empresa}</span>
<span className="px-3 py-1 bg-surface-container text-slate-600 text-[11px] font-medium rounded-full cursor-pointer hover:bg-surface-container-highest transition-colors">{hora_actual}</span>
</div>
</section>
{/*  Business Hours  */}
<section className="md:col-span-4 bg-surface-container-low rounded-xl p-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">schedule</span>
</div>
<h2 className="text-lg font-bold text-on-surface">Horario de Atención</h2>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-xl">
<span className="text-sm font-medium text-slate-600">Lunes a Viernes</span>
<span className="text-sm font-bold text-primary">09:00 - 18:00</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-xl">
<span className="text-sm font-medium text-slate-600">Sábado</span>
<span className="text-sm font-bold text-primary">10:00 - 14:00</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-lowest opacity-60 rounded-xl">
<span className="text-sm font-medium text-slate-600">Domingo</span>
<span className="text-sm font-bold text-slate-400">Cerrado</span>
</div>
<button className="w-full mt-4 py-3 text-xs font-bold text-primary hover:bg-sky-50 rounded-xl transition-all uppercase tracking-widest">
                        Editar Calendario
                    </button>
</div>
</section>
{/*  Trigger Keywords  */}
<section className="md:col-span-6 bg-surface-container-low rounded-xl p-8">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">key</span>
</div>
<h2 className="text-lg font-bold text-on-surface">Palabras Clave</h2>
</div>
<button className="text-primary hover:bg-sky-50 p-2 rounded-full transition-colors">
<span className="material-symbols-outlined">add</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="p-4 bg-surface-container-highest/50 rounded-xl border-l-4 border-primary">
<div className="text-xs font-bold text-primary mb-1 uppercase tracking-tighter">Ventas</div>
<div className="text-sm text-slate-700 font-medium italic">"Precio", "Costo", "Info"</div>
</div>
<div className="p-4 bg-surface-container-highest/50 rounded-xl border-l-4 border-secondary">
<div className="text-xs font-bold text-secondary mb-1 uppercase tracking-tighter">Soporte</div>
<div className="text-sm text-slate-700 font-medium italic">"Error", "Fallo", "Ayuda"</div>
</div>
<div className="p-4 bg-surface-container-highest/50 rounded-xl border-l-4 border-tertiary">
<div className="text-xs font-bold text-tertiary mb-1 uppercase tracking-tighter">Citas</div>
<div className="text-sm text-slate-700 font-medium italic">"Agendar", "Reunión", "Mañana"</div>
</div>
<div className="p-4 bg-surface-container-highest/50 rounded-xl border-l-4 border-slate-400">
<div className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-tighter">Despedida</div>
<div className="text-sm text-slate-700 font-medium italic">"Gracias", "Adiós", "Bye"</div>
</div>
</div>
</section>
{/*  Automatic Actions  */}
<section className="md:col-span-6 bg-surface-container-low rounded-xl p-8">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<span className="material-symbols-outlined">bolt</span>
</div>
<h2 className="text-lg font-bold text-on-surface">Acciones Automáticas</h2>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl group hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
<span className="material-symbols-outlined text-primary">filter_list</span>
</div>
<div className="flex-1">
<h4 className="text-sm font-bold text-on-surface">Asignar a Embudo</h4>
<p className="text-xs text-slate-500">Mueve el chat al pipeline de 'Nuevos Leads'</p>
</div>
<div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
</div>
</div>
<div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl group hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary">confirmation_number</span>
</div>
<div className="flex-1">
<h4 className="text-sm font-bold text-on-surface">Crear Ticket</h4>
<p className="text-xs text-slate-500">Genera ticket en HelpDesk automáticamente</p>
</div>
<div className="w-12 h-6 bg-surface-container-highest rounded-full relative p-1 cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full absolute left-1"></div>
</div>
</div>
<div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-xl group hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">person_add</span>
</div>
<div className="flex-1">
<h4 className="text-sm font-bold text-on-surface">Notificar Agente</h4>
<p className="text-xs text-slate-500">Alerta al equipo de soporte humano</p>
</div>
<div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
</div>
</div>
</div>
</section>
</div>
{/*  Featured Resource Section (Asymmetric)  */}
<div className="mt-12 flex flex-col md:flex-row gap-8 items-stretch max-w-7xl">
<div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white relative overflow-hidden min-h-[300px]">
<div className="relative z-10 max-w-sm">
<h2 className="text-3xl font-extrabold mb-4 leading-tight">Optimización con IA Generativa</h2>
<p className="text-slate-300 mb-6 text-sm leading-relaxed">Nuestra IA ahora entiende el contexto emocional del cliente. Activa el modo de 'Empatía Mejorada' para respuestas más humanas y efectivas.</p>
<button className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold text-sm shadow-xl hover:scale-105 transition-transform">
                        Explorar Funciones
                    </button>
</div>
<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-500/20 rounded-full blur-[80px]"></div>
<div className="absolute right-12 top-12 opacity-40">
<span className="material-symbols-outlined text-[120px]" style={{fontVariationSettings: '\'wght\' 200'}}>rocket_launch</span>
</div>
</div>
<div className="w-full md:w-80 bg-white rounded-3xl p-8 border border-slate-100 flex flex-col justify-center text-center">
<div className="mb-4">
<div className="inline-block p-4 rounded-full bg-sky-50 mb-4">
<span className="material-symbols-outlined text-primary text-4xl">analytics</span>
</div>
<h3 className="text-xl font-bold text-on-surface mb-2">Tasa de Resolución</h3>
<p className="text-4xl font-extrabold text-primary">84.2%</p>
<p className="text-xs font-bold text-secondary mt-2 flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-xs">trending_up</span> +12% este mes
                    </p>
</div>
<div className="h-1 bg-slate-100 rounded-full w-full overflow-hidden mt-6">
<div className="h-full bg-primary w-[84%]"></div>
</div>
</div>
</div>

        </div>
    );
};

export default Page_6_3_reglas_de_ia_para_chats;


