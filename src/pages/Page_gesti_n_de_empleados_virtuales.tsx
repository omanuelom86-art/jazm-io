import React from 'react';

const Page_gesti_n_de_empleados_virtuales: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  TopAppBar (Dynamic Island Style)  */}

{/*  Content Padding for Header  */}
<div className="pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
{/*  Page Header Area  */}
<div className="mb-10">
<h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Empleados Virtuales</h1>
<p className="text-on-surface-variant max-w-2xl">Configura cerebros artificiales especializados para cada etapa de tu negocio. Tus agentes no duermen, no olvidan y aprenden de cada interacción.</p>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/*  Left Column: Creation/Edit Panel (Asymmetric focus)  */}
<section className="lg:col-span-7 flex flex-col gap-6">
<div className="bg-surface-container-low rounded-xl p-8 shadow-sm">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl font-bold text-primary flex items-center gap-2">
<span className="material-symbols-outlined">edit_note</span>
                                Configurar Perfil IA
                            </h3>
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full uppercase">Borrador</span>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Nombre del Agente</label>
<input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 text-on-surface" placeholder="Ej: Sofía" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Tipo de Especialidad</label>
<select className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 text-on-surface appearance-none">
<option>Ventas y Cierre</option>
<option>Soporte Técnico</option>
<option>Calificación de Leads</option>
<option>Atención al Cliente</option>
</select>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Tono de Comunicación</label>
<span className="text-xs text-primary font-semibold">Cercano &amp; Profesional</span>
</div>
<input className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" type="range"/>
<div className="flex justify-between text-[10px] font-bold text-outline uppercase tracking-tighter">
<span>Formal / Rígido</span>
<span>Neutral</span>
<span>Empático / Amistoso</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Conocimiento Base (URL o PDF)</label>
<div className="flex gap-2">
<div className="flex-1 relative">
<input className="w-full bg-surface-container-high border-none rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary/40 text-on-surface" placeholder="jazm.io/docs/precios-2024" type="text"/>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">link</span>
</div>
<button className="bg-surface-container-highest p-3 rounded-xl hover:bg-outline-variant/30 transition-colors" type="button">
<span className="material-symbols-outlined text-on-surface">upload_file</span>
</button>
</div>
</div>
<div className="space-y-4">
<label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Etapas del Embudo Asignadas</label>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full border-2 border-primary text-primary text-xs font-bold" type="button">Primer Contacto</button>
<button className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-medium" type="button">Seguimiento</button>
<button className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-medium" type="button">Cierre</button>
<button className="px-4 py-2 rounded-full border-2 border-primary text-primary text-xs font-bold" type="button">Post-Venta</button>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">smart_toy</span>
                                    Activar Empleado Virtual
                                </button>
</div>
</form>
</div>
</section>
{/*  Right Column: Active Staff List (Tonal depth)  */}
<section className="lg:col-span-5 flex flex-col gap-6">
<div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
<h3 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">verified_user</span>
                            Staff Activo
                        </h3>
<div className="space-y-4">
{/*  Card 1  */}
<div className="group bg-surface-container rounded-xl p-4 transition-all hover:bg-surface-container-high cursor-pointer border-l-4 border-secondary">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover" data-alt="close-up of a high-tech robotic face with glowing blue ocular sensors and a friendly humanoid design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr1Luh0jnzp-VOzye3niUML2qPfb3XxsLJBCAARYmQ53YscGMBSahX_8l38QiXCVc884k1ImhvS2rb36h6UjMVVTSmlVmEIrNUhebgvWvgCM3I9t4kUX5Rph8l2vGgsoYMMHWrfb4MIE3do6AHf7fmqCzGOHeSQKZrBnW320AnzJdOmC7vH5-00SZLE6DZVYYsGtD03ai0ci9B44SVZQTV3Ikb6j--rq5CA9MNhHELL59-AXt5xz5tSEO1wNrGBTdM8hIYmhB2aiHc"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-on-surface text-sm">Elena (Ventas)</h4>
<p className="text-xs text-on-surface-variant">Activa en: WhatsApp, Web</p>
</div>
<div className="text-right">
<div className="text-secondary font-black text-sm">98%</div>
<div className="text-[10px] text-outline uppercase font-bold">Éxito</div>
</div>
</div>
<div className="mt-3 flex gap-2 overflow-x-auto pb-1">
<span className="px-2 py-0.5 bg-secondary-container/40 text-[10px] font-bold text-on-secondary-container rounded">Tone: Friendly</span>
<span className="px-2 py-0.5 bg-primary-fixed/30 text-[10px] font-bold text-on-primary-fixed-variant rounded">Lead Scoring</span>
</div>
</div>
{/*  Card 2  */}
<div className="group bg-surface-container rounded-xl p-4 transition-all hover:bg-surface-container-high cursor-pointer border-l-4 border-primary">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover" data-alt="sleek minimalist robotic arm holding a digital tablet against a clean white laboratory background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWArnZHi_T7zAe6GtJy6a80CiswPy9YBjSNtW5HAtamOCHHKR0Yf2GeCocI84YhrA6RsNRraLADPyR2K8mOOk9qlF8h4CDS2GvB59ZTJVDFqRuS8gGbQRYJXx1xKcIxa7kmVpHgoXM2CkOghdpwx_gnnN4MOJi0DXV6YRI5G2Lq_vWUVliAegYRcJsmSvxltMdGB2ueUl_qU4cK1vH7WlgfFPMQRuGV_gAX3hAt39lC0LItJ3suwyXKr4GS0Hbxw6IZOkk9IuBpKhL"/>
</div>
<div className="flex-1">
<h4 className="font-bold text-on-surface text-sm">Marcos (Soporte)</h4>
<p className="text-xs text-on-surface-variant">Activa en: Email, CRM</p>
</div>
<div className="text-right">
<div className="text-primary font-black text-sm">1.2m</div>
<div className="text-[10px] text-outline uppercase font-bold">Resp. Prom</div>
</div>
</div>
<div className="mt-3 flex gap-2">
<span className="px-2 py-0.5 bg-secondary-container/40 text-[10px] font-bold text-on-secondary-container rounded">Tone: Expert</span>
<span className="px-2 py-0.5 bg-primary-fixed/30 text-[10px] font-bold text-on-primary-fixed-variant rounded">Technical</span>
</div>
</div>
{/*  Card 3  */}
<div className="group bg-surface-container/50 rounded-xl p-4 border border-dashed border-outline-variant opacity-60">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-outline">add_circle</span>
</div>
<div className="flex-1">
<h4 className="font-bold text-on-surface text-sm">Nuevo Agente</h4>
<p className="text-xs text-on-surface-variant">Expandir equipo</p>
</div>
</div>
</div>
</div>
</div>
{/*  AI Insights Mini-Card  */}
<div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-6 text-on-primary shadow-xl">
<div className="flex items-start gap-4 mb-4">
<div className="bg-white/20 p-2 rounded-lg">
<span className="material-symbols-outlined text-white">lightbulb</span>
</div>
<div>
<h5 className="font-bold text-white">Recomendación IA</h5>
<p className="text-xs text-white/80 leading-relaxed">Elena está recibiendo muchas consultas técnicas. ¿Quieres clonarla y asignar una versión especializada en Soporte?</p>
</div>
</div>
<button className="w-full py-2 bg-white text-primary text-xs font-bold rounded-xl hover:bg-opacity-90 transition-opacity">Clonar Agente</button>
</div>
</section>
</div>
</div>
{/*  FAB (Only on relevant screens - Mandate)  */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-secondary text-on-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform md:hidden">
<span className="material-symbols-outlined">add</span>
</button>

        </div>
    );
};

export default Page_gesti_n_de_empleados_virtuales;


