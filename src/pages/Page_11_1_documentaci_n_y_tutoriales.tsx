import React from 'react';

const Page_11_1_documentaci_n_y_tutoriales: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Dynamic Island  */}
<div className="flex justify-center mb-12">
<div className="bg-surface-container-highest px-8 py-3 rounded-full flex items-center space-x-4 shadow-sm border border-outline-variant/10">
<div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
<span className="font-headline font-bold text-on-surface-variant tracking-tight">Centro de Ayuda</span>
<span className="text-xs font-medium text-primary px-2 py-0.5 bg-primary/10 rounded-full">AI Live</span>
</div>
</div>
{/*  Search Section  */}
<section className="max-w-4xl mx-auto mb-16 text-center">
<h1 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">¿Cómo podemos ayudarte hoy?</h1>
<div className="relative group">
<div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors" data-icon="search">search</span>
</div>
<input className="w-full pl-16 pr-6 py-6 bg-surface-container-low border-none rounded-full text-lg shadow-xl shadow-blue-500/5 focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-slate-400" placeholder="Busca tutoriales, guías o funciones del CRM..." type="text"/>
</div>
<div className="mt-6 flex flex-wrap justify-center gap-2">
<span className="text-sm text-slate-500 mr-2 self-center">Tendencias:</span>
<button className="bg-surface-container-high px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all">Integrar WhatsApp</button>
<button className="bg-surface-container-high px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all">Crear Agente IA</button>
<button className="bg-surface-container-high px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all">Automatizar Embudos</button>
</div>
</section>
{/*  Bento Grid Categories  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
{/*  CRM Card  */}
<div className="md:col-span-1 bg-surface-container-low p-8 rounded-xl flex flex-col justify-between group hover:bg-surface-container transition-colors">
<div>
<div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-3xl" data-icon="hub">hub</span>
</div>
<h3 className="text-2xl font-bold mb-2">CRM Gestión</h3>
<p className="text-slate-600 text-sm mb-6">Aprende a gestionar tus contactos, pipeline de ventas y etiquetas personalizadas.</p>
</div>
<a className="text-primary font-bold flex items-center group-hover:translate-x-2 transition-transform" href="#">
                    Explorar guías <span className="material-symbols-outlined ml-1" data-icon="chevron_right">chevron_right</span>
</a>
</div>
{/*  Agentes IA Card (Highlight)  */}
<div className="md:col-span-2 bg-gradient-to-br from-primary to-primary-container p-8 rounded-xl text-white relative overflow-hidden flex flex-col justify-between">
<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-4">NUEVA FUNCIÓN</div>
<h3 className="text-3xl font-extrabold mb-2">Agentes IA</h3>
<p className="text-blue-50 max-w-md">Domina la creación de clones digitales entrenados con tu conocimiento para atención 24/7.</p>
</div>
<div className="mt-8 relative z-10">
<button className="bg-white text-primary px-6 py-3 rounded-xl font-bold active:scale-95 transition-transform">Configurar mi primer Agente</button>
</div>
{/*  Abstract visual element  */}
<div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
</div>
{/*  Embudos Card  */}
<div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors">
<div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-3xl" data-icon="filter_alt">filter_alt</span>
</div>
<h3 className="text-2xl font-bold mb-2">Embudos</h3>
<p className="text-slate-600 text-sm mb-4">Automatización de flujos de trabajo y marketing omnicanal.</p>
<div className="space-y-3 mt-6">
<div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-secondary w-2/3"></div>
</div>
<span className="text-[10px] font-bold text-slate-400">7/12 MÓDULOS COMPLETADOS</span>
</div>
</div>
{/*  Webinars Card  */}
<div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors">
<div className="w-12 h-12 bg-tertiary-container/10 text-tertiary rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-3xl" data-icon="videocam">videocam</span>
</div>
<h3 className="text-2xl font-bold mb-2">Webinars</h3>
<p className="text-slate-600 text-sm">Sesiones en vivo semanales con expertos de la industria.</p>
</div>
{/*  API Card  */}
<div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors">
<div className="w-12 h-12 bg-on-surface-variant/10 text-on-surface-variant rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-3xl" data-icon="code">code</span>
</div>
<h3 className="text-2xl font-bold mb-2">API Docs</h3>
<p className="text-slate-600 text-sm">Para desarrolladores: integra JAZM.IO en tu propia infraestructura.</p>
</div>
</section>
{/*  Video Tutorials Section  */}
<section className="mb-16">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-3xl font-extrabold tracking-tight">Tutoriales Destacados</h2>
<p className="text-slate-500">Aprende visualmente con nuestras guías paso a paso.</p>
</div>
<button className="text-primary font-bold flex items-center hover:underline">
                    Ver todos los videos <span className="material-symbols-outlined ml-1" data-icon="open_in_new">open_in_new</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Video Item 1  */}
<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="professional dashboard UI on a laptop screen with warm soft studio lighting and bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO6GjWAiDtzcOFFM9pXWsrJhK8rAC6_imFccbcP1xBCyA6kMGFZ-kVBwkN23eoXV8e0OUiJMB5isKy1c5RY9UO7wqVTzlcIcKTAo7jmHXnXiBeVPSu_FxUOhbKldv2zse9nlIah-4BBJctaou1N3ajkv9W_9jNuwL3U9Drj8atf1hPuEQeGt6rcEyRhW4iEv7LYvvMUgsxwt_Vgj4EQuDkkQeWKfjciOmrsZqqSP9t359jkjYMaFaFQAQfKI-lusOjDlRBwqnXiXz4"/>
<div className="absolute inset-0 bg-on-surface/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="play_arrow" style={{fontVariationSettings: '\'FILL\' 1'}}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-2 right-2 bg-on-surface/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">12:45</div>
</div>
<h4 className="font-bold text-on-surface leading-tight mb-1 group-hover:text-primary transition-colors">Configuración Inicial del CRM</h4>
<p className="text-xs text-slate-500">Por Maria Gonzalez • 2.4k vistas</p>
</div>
{/*  Video Item 2  */}
<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="futuristic digital brain illustration with glowing neural connections in tech blue and emerald green palette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaLLO_r5GuYytyZQo4U86-HZv4YlO5DL5crfHMV2LX5JaRITnwukTpFp7XtD_CIve1V53kKIBisIZSkmYP9nvxB4yPsO0Hn5t2QS_tAoNH93f_827cHPriwEzv8hoo31_x2GE94_GBx0CdaAHR1ay1CPE-VZjySxoHcsFyc1lzpyq0qMmGgp636dpOmlVaKl2uuo6XIlB3lrGnfkzRva3ZWk1-JTENwKFk4mSRrS_rwack2dGj5cGN4mTzeIehaNG3pPKMwqUUpI87"/>
<div className="absolute inset-0 bg-on-surface/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="play_arrow" style={{fontVariationSettings: '\'FILL\' 1'}}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-2 right-2 bg-on-surface/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">08:12</div>
</div>
<h4 className="font-bold text-on-surface leading-tight mb-1 group-hover:text-primary transition-colors">Entrenando a tu Primer Agente AI</h4>
<p className="text-xs text-slate-500">Por David Tech • 5.1k vistas</p>
</div>
{/*  Video Item 3  */}
<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="clean minimal workplace with smartphone showing a marketing funnel flowchart and natural sunlight shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBtpHYo1asx8YTy1JWWu-z_Nttt68C-N9epwKN9UgO5qcAMqAdWl9qFefeuo0J1OKwCq8X3KOrps4p_yd4b5Y-W3d_qS_AuRf4hut7J6PQh5JsX9ti9jFJmGAqNVoES-GaJ2fw8jQFKprO75c1Vyr6ta2Isu52QorEisAM1y4BPiFPjBvjWlUSsFWDBtiEYUNFFn81GPpwyTKTFLpFOuJiV0QfTuu2XkczZpvCetEm4ZLYTn19Mb5TBc0OTElYlQFpjgs-dVkzKR_q"/>
<div className="absolute inset-0 bg-on-surface/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="play_arrow" style={{fontVariationSettings: '\'FILL\' 1'}}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-2 right-2 bg-on-surface/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">15:30</div>
</div>
<h4 className="font-bold text-on-surface leading-tight mb-1 group-hover:text-primary transition-colors">Automatización de Embudos PRO</h4>
<p className="text-xs text-slate-500">Por JAZM Team • 1.2k vistas</p>
</div>
{/*  Video Item 4  */}
<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="abstract close-up of interconnected data nodes glowing in a dark background representing seamless integration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPpQzS_sxk-qJdR2gBuqTtkbveZ2p0QjxoEaeiIS6le2Z0t3o-KgDm_4LKOKhQ6npNCOZrxj9Txo2l1yZ09avtkCjCJHlBU4-pkSiFw8fLJQTVixON_Hb573IjgvrBMkDYQJn6b8ydJyFudHxHFrBY4KCvazGmznj7i4UaUIHSTLa3BJkDnZbfeeI3YYRVA8dUHn19HatGSjB29QpruEwwB_o_a7bXFTi4--PAceeGfakoJm-sS_tCeuZXxbZuMCWGePBjQE3fiRcZ"/>
<div className="absolute inset-0 bg-on-surface/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="play_arrow" style={{fontVariationSettings: '\'FILL\' 1'}}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-2 right-2 bg-on-surface/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">05:45</div>
</div>
<h4 className="font-bold text-on-surface leading-tight mb-1 group-hover:text-primary transition-colors">Integración con Zapier y Webhooks</h4>
<p className="text-xs text-slate-500">Por Ana DevOps • 890 vistas</p>
</div>
</div>
</section>
{/*  Help Support Banner  */}
<section className="bg-surface-container-high rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between">
<div className="mb-8 md:mb-0">
<h2 className="text-3xl font-extrabold mb-4">¿No encuentras lo que buscas?</h2>
<p className="text-slate-600 max-w-lg">Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier configuración técnica o duda sobre tu cuenta.</p>
</div>
<div className="flex space-x-4">
<button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary/5 transition-colors">Chat en Vivo</button>
<button className="px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition-transform">Abrir Ticket</button>
</div>
</section>

        </div>
    );
};

export default Page_11_1_documentaci_n_y_tutoriales;
