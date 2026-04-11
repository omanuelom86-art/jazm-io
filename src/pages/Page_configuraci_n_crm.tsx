import React from 'react';

const Page_configuraci_n_crm: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  TopAppBar / Dynamic Island  */}
<div className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[480px] rounded-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-sky-900/5 px-6 py-3 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="text-sky-900 dark:text-sky-100 font-bold tracking-tight">JAZM.IO</span>
</div>
<div className="flex items-center gap-6">
<button className="text-slate-500 dark:text-slate-400 hover:bg-sky-100/50 transition-colors p-1 rounded-full flex items-center">
<span className="material-symbols-outlined">search</span>
</button>
<button className="text-slate-500 dark:text-slate-400 hover:bg-sky-100/50 transition-colors p-1 rounded-full flex items-center">
<span className="material-symbols-outlined">account_circle</span>
</button>
<button className="text-slate-500 dark:text-slate-400 hover:bg-sky-100/50 transition-colors p-1 rounded-full flex items-center">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
</div>
{/*  Dashboard Content Header  */}

{/*  Bento Grid Configuration Layout  */}
<div className="grid grid-cols-12 gap-6">
{/*  Column 1: Pipeline & Stages (Left Focus)  */}
<div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
{/*  Pipeline Builder  */}
<section className="bg-surface-container-low rounded-xl p-8">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-bold flex items-center gap-3">
<span className="material-symbols-outlined text-primary">account_tree</span>
                            Embudo de Ventas (Pipeline)
                        </h3>
<button className="text-primary font-semibold text-sm hover:underline">Añadir Etapa</button>
</div>
<div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
{/*  Stage Card  */}
<div className="min-w-[240px] bg-surface-container-lowest p-5 rounded-xl shadow-sm">
<div className="flex justify-between items-center mb-4">
<span className="bg-secondary-container text-on-secondary-container text-[10px] font-black px-2 py-1 rounded">01</span>
<span className="material-symbols-outlined text-outline-variant cursor-grab">drag_indicator</span>
</div>
<h4 className="font-bold text-on-surface mb-1">Primer Contacto</h4>
<p className="text-xs text-on-surface-variant mb-4">Lead recién ingresado</p>
<div className="flex gap-2">
<button className="p-2 rounded-lg bg-surface-container-low text-outline hover:text-primary"><span className="material-symbols-outlined text-sm">edit</span></button>
<button className="p-2 rounded-lg bg-surface-container-low text-outline hover:text-error"><span className="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
{/*  Stage Card  */}
<div className="min-w-[240px] bg-surface-container-lowest p-5 rounded-xl shadow-sm">
<div className="flex justify-between items-center mb-4">
<span className="bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-black px-2 py-1 rounded">02</span>
<span className="material-symbols-outlined text-outline-variant cursor-grab">drag_indicator</span>
</div>
<h4 className="font-bold text-on-surface mb-1">Calificación</h4>
<p className="text-xs text-on-surface-variant mb-4">Validación de interés</p>
<div className="flex gap-2">
<button className="p-2 rounded-lg bg-surface-container-low text-outline hover:text-primary"><span className="material-symbols-outlined text-sm">edit</span></button>
<button className="p-2 rounded-lg bg-surface-container-low text-outline hover:text-error"><span className="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
{/*  Stage Card  */}
<div className="min-w-[240px] bg-surface-container-lowest p-5 rounded-xl shadow-sm border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-outline-variant">
<span className="material-symbols-outlined text-4xl mb-2">add_circle</span>
<span className="text-xs font-bold uppercase">Nueva Etapa</span>
</div>
</div>
</section>
{/*  Field Customization & Records (Fichas)  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<section className="bg-surface-container-low rounded-xl p-6">
<h3 className="text-lg font-bold mb-4 flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">contact_page</span>
                            Fichas y Campos
                        </h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">text_fields</span>
<span className="text-sm font-medium">Nombre Completo</span>
</div>
<span className="text-[10px] font-bold text-outline uppercase">Requerido</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">mail</span>
<span className="text-sm font-medium">Correo Electrónico</span>
</div>
<span className="text-[10px] font-bold text-outline uppercase">Único</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">phone</span>
<span className="text-sm font-medium">Teléfono WhatsApp</span>
</div>
<span className="text-[10px] font-bold text-primary uppercase">Editable</span>
</div>
<button className="w-full py-2 border-2 border-dashed border-outline-variant rounded-lg text-xs font-bold text-outline-variant hover:border-primary hover:text-primary transition-all">
                                + CREAR CAMPO PERSONALIZADO
                            </button>
</div>
</section>
<section className="bg-surface-container-low rounded-xl p-6">
<h3 className="text-lg font-bold mb-4 flex items-center gap-3">
<span className="material-symbols-outlined text-primary">description</span>
                            Auto-llenado (Machotes)
                        </h3>
<p className="text-xs text-on-surface-variant mb-4">Plantillas inteligentes para documentos automáticos.</p>
<div className="space-y-3">
<div className="p-3 bg-surface-container-lowest rounded-lg flex items-center gap-3 group cursor-pointer hover:bg-primary/5 transition-colors">
<div className="w-10 h-10 rounded bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
<span className="material-symbols-outlined">article</span>
</div>
<div>
<h4 className="text-sm font-bold">Contrato de Servicios</h4>
<p className="text-[10px] text-on-surface-variant">PDF • Actualizado ayer</p>
</div>
</div>
<div className="p-3 bg-surface-container-lowest rounded-lg flex items-center gap-3 group cursor-pointer hover:bg-primary/5 transition-colors">
<div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
<span className="material-symbols-outlined">receipt_long</span>
</div>
<div>
<h4 className="text-sm font-bold">Cotización Estándar</h4>
<p className="text-[10px] text-on-surface-variant">Docx • 5 Variables activas</p>
</div>
</div>
</div>
</section>
</div>
</div>
{/*  Column 2: Questionnaire Generator (Right Insight)  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
<section className="bg-inverse-surface text-inverse-on-surface rounded-xl p-8 relative overflow-hidden">
{/*  Glassy Background Accent  */}
<div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
<h3 className="text-xl font-bold mb-2 flex items-center gap-3 relative z-10">
<span className="material-symbols-outlined text-secondary-fixed">quiz</span>
                        Generador de Cuestionarios
                    </h3>
<p className="text-sm text-surface-container-highest/80 mb-8 relative z-10">Convierte tus formularios de entrada en procesos de auto-perfilamiento.</p>
<div className="space-y-4 relative z-10">
<div className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
<label className="block text-[10px] font-bold uppercase tracking-wider mb-2 opacity-60">Título del Cuestionario</label>
<input className="w-full bg-transparent border-none p-0 text-lg font-bold focus:ring-0 text-white placeholder-white/30" placeholder="Nombre..." type="text" value="Perfilamiento Inmobiliario"/>
</div>
<div className="bg-white/5 rounded-xl p-4 border border-white/5">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-bold">Preguntas (4)</span>
<span className="material-symbols-outlined text-sm">settings</span>
</div>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-xs p-2 bg-white/5 rounded">
<span className="material-symbols-outlined text-xs opacity-50">drag_handle</span>
<span>Presupuesto estimado?</span>
</li>
<li className="flex items-center gap-3 text-xs p-2 bg-white/5 rounded">
<span className="material-symbols-outlined text-xs opacity-50">drag_handle</span>
<span>Ubicación de interés?</span>
</li>
<li className="flex items-center gap-3 text-xs p-2 bg-white/10 border-l-2 border-secondary rounded">
<span className="material-symbols-outlined text-xs text-secondary">check_circle</span>
<span>¿Busca crédito bancario?</span>
</li>
</ul>
<button className="mt-4 w-full py-2 bg-white/10 rounded-lg text-xs font-bold hover:bg-white/20 transition-colors">+ Añadir Pregunta IA</button>
</div>
<div className="pt-4">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium">Asignación Automática</span>
<div className="w-10 h-5 bg-secondary rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<p className="text-[10px] opacity-60 italic">Los leads se asignarán al Agente IA según las respuestas del cliente.</p>
</div>
</div>
</section>
<section className="bg-surface-container-low rounded-xl p-6">
<h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Estado del Sistema</h3>
<div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
<img alt="CRM Visualization" className="w-full h-full object-cover" data-alt="high-tech abstract visualization of a network nodes connecting on a clean surgical blue and white background with subtle depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDundz8sgiQxP4GgZoqO6sDkXFuTBJh8hQj3p3jszSUd05u2dGzDwIR85RyUTqfZtTbW5f_tHSfPV3UGQkuWdcbONK9PFSoKQfUdgzIVvQZDMxghn1FFI0G3FVGBf2QUFg3XqsgFzNnex82Cb7ZRy5WXFW0qlMz72K_3q3U6nqmdh6gBphU3uBPQ0jNLw__ezTL1PcheVV6gQYfBJ0D8jsHVI8Wtjr-LDZLRqdoYAfK-aptU30alTJzbkNz_xhsqGwPJv80lYjoYvH"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
<div>
<p className="text-white text-xs font-bold">Optimización de Pipeline</p>
<p className="text-white/70 text-[10px]">94% de eficiencia en la captura de leads</p>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-secondary"></div>
</div>
<span className="text-[10px] font-bold">85%</span>
</div>
</section>
</div>
</div>

        </div>
    );
};

export default Page_configuraci_n_crm;


