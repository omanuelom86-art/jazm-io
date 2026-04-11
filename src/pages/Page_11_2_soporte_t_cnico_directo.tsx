import React from 'react';

const Page_11_2_soporte_t_cnico_directo: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
{/*  Left Column: Chat & Interaction (Large)  */}
<div className="md:col-span-8 flex flex-col gap-6">
{/*  AI & Human Chat Interface  */}
<section className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col h-[600px]">
<div className="p-6 bg-surface-container flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-weight="fill">smart_toy</span>
</div>
<div>
<h2 className="font-headline font-bold text-lg leading-tight">Chat Inteligente Ether</h2>
<p className="text-sm text-slate-500">Actualmente: IA Avanzada + Soporte Humano</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-bold px-2 py-1 bg-secondary-container text-on-secondary-container rounded-full">Tiempo de espera: 2 min</span>
</div>
</div>
<div className="flex-grow p-6 overflow-y-auto space-y-6 bg-surface-container-low/30">
{/*  Message Received  */}
<div className="flex gap-3 max-w-[80%]">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-xs">smart_toy</span>
</div>
<div className="bg-surface-container-highest p-4 rounded-2xl rounded-tl-none">
<p className="text-sm">¡Hola! Soy tu asistente Ether. He detectado que tienes una duda sobre la integración de APIs. ¿Te gustaría que te guíe paso a paso o prefieres hablar con un agente humano?</p>
<span className="text-[10px] text-slate-400 mt-2 block">10:45 AM</span>
</div>
</div>
{/*  Message Sent  */}
<div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-xs text-primary">person</span>
</div>
<div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none">
<p className="text-sm">Hola Ether, me gustaría conectar con un agente humano para revisar un error de facturación específico.</p>
<span className="text-[10px] text-blue-100 mt-2 block">10:46 AM</span>
</div>
</div>
{/*  System Message  */}
<div className="flex justify-center">
<span className="text-[11px] font-medium bg-surface-container-high px-4 py-1 rounded-full text-slate-500">Conectando con Carlos del Equipo de Soporte...</span>
</div>
</div>
{/*  Input Area  */}
<div className="p-6 bg-surface-container-lowest border-t border-surface-container">
<div className="flex items-center gap-4 bg-surface-container-low rounded-xl px-4 py-3">
<button className="material-symbols-outlined text-slate-400">attach_file</button>
<input className="bg-transparent border-none focus:ring-0 w-full text-sm placeholder:text-slate-400" placeholder="Escribe tu mensaje aquí..." type="text"/>
<button className="bg-primary text-white p-2 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined">send</span>
</button>
</div>
</div>
</section>
{/*  History Section (Horizontal List)  */}
<section>
<h3 className="font-headline font-bold text-xl mb-4 px-2">Historial de Tickets</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-5 bg-surface-container-lowest rounded-xl hover:bg-surface-container transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<span className="text-xs font-bold text-primary">#TK-8921</span>
<span className="text-[10px] uppercase font-bold text-secondary bg-secondary-container px-2 py-0.5 rounded">Resuelto</span>
</div>
<h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">Error en carga de base de datos</h4>
<p className="text-xs text-slate-500 line-clamp-1">La sincronización con el CRM externo falló el pasado martes...</p>
<div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
<span>Hace 3 días</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">chat_bubble</span> 12 mensajes</span>
</div>
</div>
<div className="p-5 bg-surface-container-lowest rounded-xl hover:bg-surface-container transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<span className="text-xs font-bold text-primary">#TK-8854</span>
<span className="text-[10px] uppercase font-bold text-tertiary bg-tertiary-container/10 px-2 py-0.5 rounded">En Proceso</span>
</div>
<h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">Duda sobre plan Enterprise</h4>
<p className="text-xs text-slate-500 line-clamp-1">Solicitud de información sobre límites de tokens AI y usuarios...</p>
<div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
<span>Hace 1 semana</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">chat_bubble</span> 4 mensajes</span>
</div>
</div>
</div>
</section>
</div>
{/*  Right Column: Form & Actions (Narrow)  */}
<aside className="md:col-span-4 flex flex-col gap-6">
{/*  Direct Support Form  */}
<section className="bg-surface-container-high/50 p-6 rounded-xl border border-outline-variant/15">
<h3 className="font-headline font-bold text-xl mb-6">Nuevo Ticket</h3>
<form className="space-y-4">
<div>
<label className="text-xs font-bold text-slate-500 mb-1.5 block">Categoría de Consulta</label>
<select className="w-full bg-surface-container-lowest border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 h-12 px-4">
<option>Error Técnico</option>
<option>Facturación y Pagos</option>
<option>Consulta sobre IA</option>
<option>Sugerencia de Mejora</option>
</select>
</div>
<div>
<label className="text-xs font-bold text-slate-500 mb-1.5 block">Asunto</label>
<input className="w-full bg-surface-container-lowest border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 h-12 px-4" placeholder="Resumen corto del problema" type="text"/>
</div>
<div>
<label className="text-xs font-bold text-slate-500 mb-1.5 block">Descripción Detallada</label>
<textarea className="w-full bg-surface-container-lowest border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 p-4 resize-none" placeholder="Cuéntanos más para ayudarte mejor..." rows={4}></textarea>
</div>
<button className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 active:scale-95 transition-all" type="submit">
                            Enviar Requerimiento
                        </button>
</form>
</section>
{/*  Knowledge Base Card  */}
<section className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
<h4 className="font-bold text-sm mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">lightbulb</span>
                        ¿Sabías que...?
                    </h4>
<p className="text-xs text-slate-500 mb-4 leading-relaxed">
                        El 80% de las dudas sobre facturación se resuelven en nuestra sección de preguntas frecuentes autogestionadas.
                    </p>
<a className="text-primary font-bold text-xs flex items-center gap-1 hover:underline" href="#">
                        Ir al Centro de Ayuda
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</section>
{/*  Team Status Card  */}
<section className="bg-inverse-surface text-inverse-on-surface p-6 rounded-xl relative overflow-hidden">
<div className="relative z-10">
<h4 className="font-headline font-bold text-lg mb-2">Estamos para ti</h4>
<p className="text-xs opacity-70 mb-4">Nuestro equipo humano está disponible de Lunes a Viernes, 9am - 6pm (GMT-5).</p>
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full border-2 border-inverse-surface object-cover" data-alt="face of a happy customer support man latino modern lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBCR31XlveM3oWU4pIwraveb4ezD_vTeHVF3HKXh21uLx8LV3mAOghqN6HXC3f6FTQlry8dShw5ar2R3pmBm0lIJ73_9wi6b-YLJoFWa38SUylkiPlI36P2gz61BOwyuNnktrfH7F46J3guo4tdPWdtkmY7-bdbtGee97Jo13W-BJFy0Up6piIkOoaenbVrYO2oC-on4zIQA7rN5J_yG5-qUG_hq4q_Ijn_Q7CpIkl0oZKYFjQJ4V9Bz7djkZtfIZ2jPanT4cf5QpG"/>
<img className="w-8 h-8 rounded-full border-2 border-inverse-surface object-cover" data-alt="face of a young woman tech support professional minimalist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB72pMTh6PO3Q4nncB02xravZTlT3ObXhes9o8UEoAeuuaSPq7g5EyW4iHHYYLCzUYfAdFoGCeQzIkD9bnfT-7kWVzhqtJXI9Lm5n2ZBdR7WytgY58Rv8V_LVc5S6nj0dCjkHduJeALj39nPFiWPQJr67JIb_ADa9zUxMlhS6XgyR_Sg5Vb2dCjGiAzZvASxH2NhTJ8LDI9cccjIJ6NBmFWHkGRz_KGqE_mT4bukBBNXJ5BsCigAF7GLZDTJImUx5EsNYoiapUXLwTo"/>
<img className="w-8 h-8 rounded-full border-2 border-inverse-surface object-cover" data-alt="face of a smiling specialist man tech environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADGlgTogLkwz6ISOXQs5srfg5xdabpb3UwjQHUR5VxnyMvGeZ2tV5C6GTjSPK9Q5mTENg09aF93MOjrGFzYOYzUnNiLuf_D2xLFrhiU5XTQjyKrZkLnIRSv1jgj8k0pCQiikdm-iRx4lzDabhFEKPFBmpGD5tJQeq3PbGu81BD5PhcoxYQzh5PFptt1ZIEah4zAeeScd7QultNsl3RMw8ey4Iolfz3ypwc_wZvvEeF0Hxy8IL4cpta5EJ4HpnYGJkp6kDPlop8zdHk"/>
<div className="w-8 h-8 rounded-full border-2 border-inverse-surface bg-surface-container-highest text-[10px] flex items-center justify-center text-on-surface font-bold">+5</div>
</div>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-8xl" style={{fontVariationSettings: '\'FILL\' 1'}}>support_agent</span>
</div>
</section>
</aside>
</div>

        </div>
    );
};

export default Page_11_2_soporte_t_cnico_directo;


