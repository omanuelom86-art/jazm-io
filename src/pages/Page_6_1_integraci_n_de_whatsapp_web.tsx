import React from 'react';

const Page_6_1_integraci_n_de_whatsapp_web: React.FC = () => {
    return (
        <div className="w-full">
            

<div className="grid grid-cols-12 gap-6">
{/*  QR Connection Panel  */}
<section className="col-span-12 lg:col-span-8 bg-white rounded-xl p-8 shadow-sm ring-1 ring-black/[0.03]">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="relative p-4 bg-surface-container-low rounded-xl ring-1 ring-outline-variant/20">
{/*  QR Simulation  */}
<div className="w-64 h-64 bg-white p-2 rounded-lg relative overflow-hidden">
<div className="w-full h-full bg-slate-900 rounded-sm opacity-5 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl">qr_code_2</span>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/95 p-4 rounded-xl shadow-xl flex flex-col items-center">
<div className="w-48 h-48 bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center rounded-lg border-2 border-dashed border-slate-300">
<span className="material-symbols-outlined text-4xl text-slate-400">sync</span>
</div>
<p className="text-[10px] text-slate-400 mt-2 uppercase font-bold tracking-widest">Generando Código...</p>
</div>
</div>
</div>
<div className="absolute -top-3 -right-3 bg-primary text-white text-[10px] px-3 py-1 rounded-full font-bold shadow-lg">PASO 1</div>
</div>
<div className="flex-1 space-y-6">
<div className="space-y-2">
<h2 className="text-2xl font-headline font-bold text-on-surface">Escanea el código QR</h2>
<p className="text-on-surface-variant leading-relaxed">Abre WhatsApp en tu teléfono, ve a Menú o Configuración y selecciona Dispositivos vinculados.</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low transition-all">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-secondary-container text-sm">check</span>
</div>
<div>
<p className="text-sm font-semibold text-on-surface">Estado: Desconectado</p>
<p className="text-xs text-on-surface-variant">Esperando sincronización de socket...</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex-1 flex items-center gap-3 p-3 border border-outline-variant/30 rounded-xl">
<span className="material-symbols-outlined text-primary">cloud_download</span>
<div className="flex-1">
<p className="text-xs font-bold text-on-surface">Importar Contactos</p>
<p className="text-[10px] text-on-surface-variant">Sincronización automática activa</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Sync Stats Panel  */}
<section className="col-span-12 lg:col-span-4 flex flex-col gap-6">
<div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/[0.03]">
<h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Métricas de Enlace</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-xl border border-slate-100">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">group</span>
<span className="text-sm font-medium">Contactos</span>
</div>
<span className="text-lg font-bold">1,284</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-xl border border-slate-100">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">bolt</span>
<span className="text-sm font-medium">Latencia API</span>
</div>
<span className="text-lg font-bold">42ms</span>
</div>
</div>
</div>
<div className="bg-slate-900 rounded-xl p-6 text-white overflow-hidden relative shadow-lg">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-secondary-fixed">verified</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-secondary-fixed">Enterprise Shield</span>
</div>
<h3 className="text-lg font-bold mb-1">Cifrado de Extremo a Extremo</h3>
<p className="text-xs text-slate-400 mb-4 leading-relaxed">Tus mensajes y contactos están protegidos bajo protocolos de seguridad bancaria.</p>
<button className="text-xs font-bold bg-white/10 hover:bg-white/20 py-2 px-4 rounded-lg transition-all">Ver Certificados</button>
</div>
<div className="absolute -right-10 -bottom-10 opacity-10">
<span className="material-symbols-outlined text-[160px]">security</span>
</div>
</div>
</section>
{/*  History Bento Section  */}
<section className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/[0.03]">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-headline font-bold text-on-surface">Historial de Sincronización</h3>
<button className="text-primary text-xs font-bold hover:underline">Limpiar log</button>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0 hover:bg-surface-container-low px-2 rounded-lg transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<span className="material-symbols-outlined text-slate-500">devices</span>
</div>
<div>
<p className="text-sm font-bold">iPhone 14 Pro - CDMX</p>
<p className="text-xs text-slate-500">Última sesión finalizada por el usuario</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-bold">12 Oct, 2023</p>
<p className="text-[10px] text-slate-400">14:22 PM</p>
</div>
</div>
<div className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0 hover:bg-surface-container-low px-2 rounded-lg transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">sync_saved_locally</span>
</div>
<div>
<p className="text-sm font-bold">Importación Masiva</p>
<p className="text-xs text-slate-500">452 contactos nuevos añadidos al CRM</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-bold">11 Oct, 2023</p>
<p className="text-[10px] text-slate-400">09:10 AM</p>
</div>
</div>
</div>
</div>
<div className="bg-surface-container rounded-xl p-6 relative overflow-hidden">
<h3 className="text-lg font-headline font-bold text-on-surface mb-4">¿Necesitas ayuda?</h3>
<p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Si tienes problemas para escanear, asegúrate de tener una conexión a internet estable en ambos dispositivos.</p>
<div className="space-y-3">
<a className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm hover:scale-[1.02] transition-transform" href="#">
<span className="text-xs font-bold">Guía de solución</span>
<span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
</a>
<a className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm hover:scale-[1.02] transition-transform" href="#">
<span className="text-xs font-bold">Contactar Soporte</span>
<span className="material-symbols-outlined text-primary text-sm">chat_bubble</span>
</a>
</div>
<div className="mt-8 flex justify-center">
<img className="w-full h-32 object-cover rounded-xl grayscale opacity-30" data-alt="vibrant illustrations of people collaborating digitally in a clean minimal corporate style with blue and green accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd0RpJ7EaVKQmzr3CKeqvg5bejZODx2B26LNhcSwaHPIiAsGOXNCtzGG78ItJuMxvPhs7G-qGxUadX40vArb3-KOX6TBUhxqftEfWHB6q_WUwJfFBh6zFjgnjZbuutkwMFPquwMPLfsKdD9dA3vYvq-sA5k8nbpugS0o1na5SqmXc6sdPcJVqzTcTTT8P16SdzJ2uo4BGOxQ-O7smbEMCyq9NAytOn1ZhnaJcGEP1Kom_aCW5p9XusqP1gBRZh0wwpEOnLY-19WP9M"/>
</div>
</div>
</section>
</div>

        </div>
    );
};

export default Page_6_1_integraci_n_de_whatsapp_web;
