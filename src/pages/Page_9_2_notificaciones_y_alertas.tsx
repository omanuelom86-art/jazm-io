import React from 'react';

const Page_9_2_notificaciones_y_alertas: React.FC = () => {
    return (
        <div className="w-full">
            

{/*  Notification Settings Bento Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl">
{/*  Main Controls Column  */}
<div className="lg:col-span-8 space-y-6">
{/*  Section: Leads & Sales  */}
<section className="bg-surface-container-low rounded-[2rem] p-8 shadow-sm">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined">rocket_launch</span>
</div>
<div>
<h3 className="text-xl font-headline font-bold">Leads y Ventas</h3>
<p className="text-sm text-on-surface-variant">Gestión de captación en tiempo real</p>
</div>
</div>
<div className="space-y-6">
{/*  Switch Item 1  */}
<div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors group">
<div className="flex flex-col">
<span className="font-semibold text-on-surface">Nuevos Leads Detectados</span>
<span className="text-sm text-on-surface-variant">Alerta inmediata cuando un prospecto entra al funnel.</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
{/*  Switch Item 2  */}
<div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors group">
<div className="flex flex-col">
<span className="font-semibold text-on-surface">Mensajes de WhatsApp</span>
<span className="text-sm text-on-surface-variant">Notificaciones de nuevos chats o respuestas pendientes.</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
{/*  Switch Item 3  */}
<div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors group">
<div className="flex flex-col">
<span className="font-semibold text-on-surface">Cierre de Tratos</span>
<span className="text-sm text-on-surface-variant">Notificar cuando un lead cambia a estado 'Ganado'.</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</section>
{/*  Section: AI Agents  */}
<section className="bg-surface-container-low rounded-[2rem] p-8 shadow-sm border border-transparent hover:border-primary/10 transition-all">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined">psychology</span>
</div>
<div>
<h3 className="text-xl font-headline font-bold">Agentes IA</h3>
<p className="text-sm text-on-surface-variant">Rendimiento y estados de automatización</p>
</div>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors">
<div className="flex flex-col">
<span className="font-semibold text-on-surface">Alertas de Bajo Rendimiento</span>
<span className="text-sm text-on-surface-variant">Avisa si un agente IA no está convirtiendo como se esperaba.</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="flex items-center justify-between p-4 hover:bg-surface-container rounded-2xl transition-colors">
<div className="flex flex-col">
<span className="font-semibold text-on-surface">Solicitud de Intervención Humana</span>
<span className="text-sm text-on-surface-variant">Cuando la IA requiere ayuda manual con un lead complejo.</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</section>
</div>
{/*  Secondary Channels & Summary Column  */}
<div className="lg:col-span-4 space-y-6">
{/*  Channel Preferences Card  */}
<div className="bg-surface-container-highest rounded-[2rem] p-8">
<h3 className="text-lg font-headline font-bold mb-6 text-on-surface">Canales de Entrega</h3>
<div className="space-y-4">
<div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-xl">
<span className="material-symbols-outlined text-primary">notifications_active</span>
<span className="text-sm font-medium flex-1">Push Notifications</span>
<span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-bold">ACTIVE</span>
</div>
<div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-xl">
<span className="material-symbols-outlined text-primary">mail</span>
<span className="text-sm font-medium flex-1">Email Digest</span>
<span className="text-xs bg-outline-variant/30 text-on-surface-variant px-2 py-1 rounded-full font-bold">WEEKLY</span>
</div>
<div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-xl">
<span className="material-symbols-outlined text-primary">chat</span>
<span className="text-sm font-medium flex-1">WhatsApp Business</span>
<span className="text-xs bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full font-bold">PRO</span>
</div>
</div>
</div>
{/*  AI Insights Mini-Card  */}
<div className="relative overflow-hidden bg-primary text-on-primary rounded-[2rem] p-8 shadow-xl shadow-primary/20">
<div className="relative z-10">
<span className="material-symbols-outlined text-3xl mb-4">auto_awesome</span>
<h4 className="font-headline font-bold text-lg mb-2">Optimización Inteligente</h4>
<p className="text-primary-fixed/80 text-sm leading-relaxed">
                                JAZM.IO ha detectado que recibes demasiadas alertas de WhatsApp por la mañana. ¿Quieres que las agrupemos en un resumen a las 9:00 AM?
                            </p>
<button className="mt-6 px-4 py-2 bg-white text-primary text-xs font-bold rounded-full hover:scale-105 transition-transform">
                                APLICAR CAMBIO
                            </button>
</div>
<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-container/30 rounded-full blur-2xl"></div>
</div>
{/*  Task Reminders Section  */}
<section className="bg-surface-container-low rounded-[2rem] p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 bg-tertiary-fixed text-on-tertiary-fixed rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined">event_available</span>
</div>
<h3 className="text-lg font-headline font-bold">Tareas</h3>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="flex-1 text-sm font-medium">Recordatorios 15m antes</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div className="flex items-center gap-4">
<div className="flex-1 text-sm font-medium">Daily Briefing (Email)</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</section>
</div>
</div>
{/*  Global Footer Actions  */}
<div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-slate-200">
<div className="flex items-center gap-4">
<button className="px-6 py-3 rounded-xl font-headline font-bold text-primary hover:bg-surface-container-high transition-colors">
                        Restablecer Predeterminados
                    </button>
<button className="px-8 py-3 bg-primary text-on-primary rounded-xl font-headline font-bold shadow-lg shadow-primary/30 hover:translate-y-[-2px] active:scale-95 transition-all">
                        Guardar Configuración
                    </button>
</div>
<div className="text-on-surface-variant text-sm italic">
                    Última actualización: Hoy, 14:32
                </div>
</div>

        </div>
    );
};

export default Page_9_2_notificaciones_y_alertas;


