import React from 'react';

const Page_3_embudos_y_oportunidades: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Header Section with Currency and Filters  */}
<section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl font-extrabold headline tracking-tight text-on-surface">3. Embudos y Oportunidades</h2>
<p className="text-on-surface-variant">Visualización en tiempo real de oportunidades comerciales</p>
</div>
<div className="flex flex-wrap items-center gap-3">
{/*  Selección de Moneda  */}
<div className="flex items-center bg-surface-container-low rounded-full p-1 border border-outline-variant/10">
<button className="px-4 py-1.5 rounded-full text-xs font-bold bg-white shadow-sm text-primary">USD</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-on-surface-variant hover:bg-surface-container-high">MXN</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-on-surface-variant hover:bg-surface-container-high">EUR</button>
</div>
{/*  Filtros Avanzados (3.2)  */}
<button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-highest rounded-xl text-sm font-semibold hover:bg-outline-variant/30 transition-colors">
<span className="material-symbols-outlined text-lg" data-icon="tune">tune</span>
                        Filtros Avanzados
                    </button>
</div>
</section>
{/*  Kanban Content + Side Panel (3.3)  */}
<div className="flex flex-col lg:flex-row gap-6 h-full min-h-[600px]">
{/*  Kanban Board  */}
<div className="flex-1 flex gap-6 overflow-x-auto pb-4 kanban-scroll items-start">
{/*  Column: Nuevo Lead  */}
<div className="min-w-[320px] flex flex-col gap-4">
<div className="flex justify-between items-center px-2">
<h3 className="font-bold flex items-center gap-2 text-on-surface">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                                Nuevo Lead
                                <span className="text-xs bg-surface-container-high px-2 py-0.5 rounded-full text-on-surface-variant">12</span>
</h3>
<button className="text-primary hover:bg-primary-container/10 p-1 rounded">
<span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
</button>
</div>
<div className="flex flex-col gap-3">
{/*  Card 1  */}
<div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow group">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2 py-0.5 rounded">Prioridad Alta</span>
<span className="text-xs text-on-surface-variant font-mono">$12,500</span>
</div>
<h4 className="font-bold text-on-surface mb-1">Software Enterprise CRM</h4>
<p className="text-xs text-on-surface-variant mb-4 flex items-center gap-1">
<span className="material-symbols-outlined text-sm" data-icon="person">person</span>
                                    Roberto Valenzuela
                                </p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-white" data-alt="close-up portrait of a professional man in a blue shirt with a friendly smile, office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5JDbE5gnuvi-CnbebGgP65GIKss_jy13auG3oS7NDl_M7I8qWV7R1Jit-urN30j_byCoF2H3ebP4cTRZ9DoKMTffS9Qcdu4b9vKBJuDruiOk0UotRZxZphLEE5RELfuMrmg_b1HX_t-QP953YWA0iIEmKo4QtgTjoj8hEFen8o7xoMnjR7sPbadqVS_iHK-5Jxj5gKZc9VWNATjMuzPfB5-Xrtgze0CGEvjg6Et9fXv_ugIqwpVrqd9iu_wmAutmGSIPpQazyEYEp"/>
<div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center border-2 border-white">
<span className="text-[8px] text-white font-bold">AI</span>
</div>
</div>
<span className="text-[10px] text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span>
                                        hace 2h
                                    </span>
</div>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Seguimiento</span>
<span className="text-xs text-on-surface-variant font-mono">$4,200</span>
</div>
<h4 className="font-bold text-on-surface mb-1">Licencias Cloud Basic</h4>
<p className="text-xs text-on-surface-variant mb-4 flex items-center gap-1">
<span className="material-symbols-outlined text-sm" data-icon="person">person</span>
                                    María García Luna
                                </p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-white" data-alt="professional portrait of a young woman with dark hair, soft lighting, neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACpUvu5gAnMzlyOsB__Thko0mBQqzbETZz7GwYcftkuavZO6Mqlk5OgR7IVaP_eDYWS9ArzFZrm1cfm_5MO9oyB6dRhW8caMj2tVAqf1CFVmRaEHkyj4YD_6aPOlGJewRIkU0-NX9SVF5RS1tLVY3aJXHiIm4nnaY68fl3eDRHuzNlVxKXC4hU4yqQDP0rwPZAsK5AgGNCl-FsjcC9m1k0OupfVMo08DZj0ewHVk5xHknGRqtYYIwVTbVeYxuvhvzKWIMzMKnRVnJs"/>
</div>
<span className="text-[10px] text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="chat">chat</span>
                                        3 mensajes
                                    </span>
</div>
</div>
</div>
</div>
{/*  Column: Calificación  */}
<div className="min-w-[320px] flex flex-col gap-4">
<div className="flex justify-between items-center px-2">
<h3 className="font-bold flex items-center gap-2 text-on-surface">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                                Calificación
                                <span className="text-xs bg-surface-container-high px-2 py-0.5 rounded-full text-on-surface-variant">8</span>
</h3>
<button className="text-primary hover:bg-primary-container/10 p-1 rounded">
<span className="material-symbols-outlined" data-icon="add">add</span>
</button>
</div>
<div className="flex flex-col gap-3">
<div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border-l-4 border-tertiary">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-bold uppercase tracking-wider text-tertiary bg-tertiary/5 px-2 py-0.5 rounded">Validando Presupuesto</span>
<span className="text-xs text-on-surface-variant font-mono">$28,000</span>
</div>
<h4 className="font-bold text-on-surface mb-1">Implementación ERP Logística</h4>
<p className="text-xs text-on-surface-variant mb-4">Industrial Tech Corp</p>
<div className="flex items-center justify-between">
<div className="px-2 py-1 bg-secondary-container/30 rounded text-[10px] font-bold text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="bolt">bolt</span>
                                        IA Sugiere: Demo
                                    </div>
<img className="w-6 h-6 rounded-full border-2 border-white" data-alt="professional headshot of a mature businessman with graying hair, serious but approachable expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl8vzp6rvTqjrByfTt6nmTIUx88ltfGf5CBP7h3Ce8XsuTTrSqUfBcU7lSSSfi_AOk1mw7dbhJkfdJQhWqErjt7lZT0nb1MuVU7_0QL7yAAa7U0pUPqK1SBYKaWqHQGXz9sDTvdlsXSZeGTdMCj06iOoM-qdhjJv7shKb23tKoq_TtCQch_vxZ4VKvLuerTPSPg3NDqfUdU3NkmIhinkpi_0uyHIuCEQDn78CxJCI-PylsX3BVEMZ0Y4POJtwrM_SQvhm_LvTlzXq6"/>
</div>
</div>
</div>
</div>
{/*  Column: Propuesta  */}
<div className="min-w-[320px] flex flex-col gap-4 opacity-75">
<div className="flex justify-between items-center px-2">
<h3 className="font-bold flex items-center gap-2 text-on-surface">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                                Propuesta
                                <span className="text-xs bg-surface-container-high px-2 py-0.5 rounded-full text-on-surface-variant">5</span>
</h3>
<button className="text-primary hover:bg-primary-container/10 p-1 rounded">
<span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
</button>
</div>
<div className="h-40 border-2 border-dashed border-outline-variant/30 rounded-2xl flex items-center justify-center">
<span className="text-xs text-on-surface-variant font-medium italic">Arrastra una tarjeta aquí</span>
</div>
</div>
</div>
{/*  Side Panel: Inventarios y Catálogos (3.3)  */}
<aside className="w-full lg:w-80 bg-surface-container-low rounded-3xl p-6 flex flex-col gap-6">
<div>
<h4 className="font-extrabold headline text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary" data-icon="inventory_2">inventory_2</span>
                            Centro de Recursos IA
                        </h4>
<p className="text-xs text-on-surface-variant mt-1">Material disponible para el agente</p>
</div>
<div className="space-y-4">
{/*  Inventario Section  */}
<div className="flex flex-col gap-3">
<h5 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Catálogos Activos</h5>
<div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3 group hover:bg-primary transition-all cursor-pointer">
<div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center group-hover:bg-white/20">
<span className="material-symbols-outlined text-primary group-hover:text-white" data-icon="menu_book">menu_book</span>
</div>
<div className="flex-1">
<p className="text-sm font-bold text-on-surface group-hover:text-white">Servicios 2024</p>
<p className="text-[10px] text-on-surface-variant group-hover:text-white/80">45 productos • PDF</p>
</div>
<span className="material-symbols-outlined text-sm text-outline group-hover:text-white" data-icon="chevron_right">chevron_right</span>
</div>
<div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3 group hover:bg-primary transition-all cursor-pointer">
<div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center group-hover:bg-white/20">
<span className="material-symbols-outlined text-primary group-hover:text-white" data-icon="database">database</span>
</div>
<div className="flex-1">
<p className="text-sm font-bold text-on-surface group-hover:text-white">Inventario Real-Time</p>
<p className="text-[10px] text-on-surface-variant group-hover:text-white/80">Sincronizado vía API</p>
</div>
<span className="material-symbols-outlined text-sm text-outline group-hover:text-white" data-icon="sync">sync</span>
</div>
</div>
{/*  AI Insights Section  */}
<div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary text-lg" data-icon="auto_awesome">auto_awesome</span>
<span className="text-xs font-bold text-primary">Sugerencia de IA</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">
                                El lead <b>Industrial Tech Corp</b> tiene un perfil similar a cierres exitosos del catálogo de <i>Logística Avanzada</i>. ¿Deseas enviar presentación automática?
                            </p>
<button className="mt-3 w-full bg-white border border-primary/20 text-primary text-[10px] font-bold py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                                Ejecutar Automatización
                            </button>
</div>
{/*  CTA Section  */}
<button className="w-full py-4 rounded-2xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-2 hover:bg-white transition-colors group">
<span className="material-symbols-outlined text-outline group-hover:text-primary" data-icon="upload_file">upload_file</span>
<span className="text-xs font-bold text-on-surface-variant group-hover:text-primary">Subir Nuevo Catálogo</span>
</button>
</div>
</aside>
</div>

        </div>
    );
};

export default Page_3_embudos_y_oportunidades;
