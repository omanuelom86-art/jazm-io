import React from 'react';

const Page_8_1_configuraci_n_de_widget: React.FC = () => {
    return (
        <div className="w-full">
            
<div className="max-w-6xl mx-auto p-8">
{/*  Header Section  */}
<div className="flex justify-between items-end mb-10">
<div>
<h1 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight">Configuración de Widget</h1>
<p className="text-on-surface-variant mt-2 text-lg">Define cómo interactúa tu marca en el "Intelligent Ether".</p>
</div>
<div className="flex items-center gap-3 bg-surface-container-lowest p-2 rounded-xl shadow-sm">
<span className="text-sm font-medium px-3 text-on-surface-variant">Estado del Widget</span>
<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-secondary">
<span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
</button>
<span className="text-xs font-bold text-secondary uppercase tracking-wider px-2">Activo</span>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-12 gap-6">
{/*  Installation Section (Wide)  */}
<section className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="code">code</span>
</div>
<h3 className="font-headline text-xl font-bold">Instalación Directa</h3>
</div>
<p className="text-on-surface-variant mb-6 text-sm">Copia este fragmento de código y pégalo justo antes de cerrar la etiqueta <code className="bg-surface-container-high px-1 rounded">&lt;/head&gt;</code> de tu sitio web.</p>
<div className="relative group">
<pre className="bg-on-background text-surface-bright p-6 rounded-xl text-sm font-mono overflow-x-auto leading-relaxed border border-outline-variant/20">&lt;script src="https://cdn.jazm.io/widget/v1/loader.js" 
        data-jazm-id="JZ-882-991-AI" 
        async defer&gt;
&lt;/script&gt;</pre>
<button className="absolute top-4 right-4 bg-primary-container text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-sm" data-icon="content_copy">content_copy</span>
                            Copiar Código
                        </button>
</div>
</section>
{/*  Agent Assignment (Asymmetric Column)  */}
<section className="col-span-12 lg:col-span-4 bg-surface-container p-8 rounded-xl flex flex-col">
<h3 className="font-headline text-xl font-bold mb-6">Asignación Inteligente</h3>
<div className="space-y-4 flex-1">
<label className="block">
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Agente Responsable</span>
<div className="relative">
<select className="w-full bg-surface-container-lowest border-none rounded-xl py-3 pl-4 pr-10 appearance-none text-sm focus:ring-2 focus:ring-primary/20 transition-all">
<option>IA Agent: Ether-Alpha (Default)</option>
<option>Equipo: Soporte Ventas</option>
<option>Agente Humano: Javier M.</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
</label>
<div className="p-4 bg-secondary-container/20 rounded-xl mt-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="auto_awesome">auto_awesome</span>
<p className="text-xs text-on-secondary-container leading-relaxed">
<strong>Recomendación AI:</strong> Ether-Alpha ha resuelto el 94% de las consultas en widgets similares esta semana.
                                </p>
</div>
</div>
</div>
</section>
{/*  Launcher Style (Left)  */}
<section className="col-span-12 lg:col-span-5 bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
<h3 className="font-headline text-xl font-bold mb-6">Estilo del Lanzador</h3>
<div className="space-y-6">
<div>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4 block">Icono de Acceso</span>
<div className="flex gap-4">
<button className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
<span className="material-symbols-outlined text-2xl" data-icon="chat_bubble" data-weight="fill">chat_bubble</span>
</button>
<button className="w-14 h-14 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-2xl" data-icon="message">message</span>
</button>
<button className="w-14 h-14 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-2xl" data-icon="add_reaction">add_reaction</span>
</button>
<div className="w-14 h-14 rounded-full bg-surface-container-low border-2 border-dashed border-outline-variant flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
<span className="material-symbols-outlined text-outline" data-icon="upload">upload</span>
</div>
</div>
</div>
<div>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 block">Texto de Bienvenida (Label)</span>
<input className="w-full bg-surface-container border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" type="text" value="Habla con nosotros"/>
</div>
</div>
</section>
{/*  Positioning (Right)  */}
<section className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<h3 className="font-headline text-xl font-bold">Posicionamiento</h3>
<div className="flex bg-surface-container rounded-lg p-1">
<button className="px-4 py-1.5 bg-surface-container-lowest rounded-md text-xs font-bold shadow-sm">Bottom-Right</button>
<button className="px-4 py-1.5 text-on-surface-variant text-xs font-medium hover:text-on-surface transition-colors">Bottom-Left</button>
</div>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-on-surface-variant">Margen Lateral (Offset X)</span>
<span className="text-xs font-bold text-primary">24px</span>
</div>
<input className="w-full accent-primary h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer" type="range"/>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-on-surface-variant">Margen Inferior (Offset Y)</span>
<span className="text-xs font-bold text-primary">32px</span>
</div>
<input className="w-full accent-primary h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer" type="range"/>
</div>
</div>
</div>
<div className="bg-surface-container-low rounded-xl h-40 border border-outline-variant/10 relative">
{/*  Visual representation of positioning  */}
<div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center">
<span className="material-symbols-outlined text-white text-lg" data-icon="chat_bubble" data-weight="fill">chat_bubble</span>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-[10px] text-outline-variant uppercase font-bold tracking-tighter opacity-50">Vista Previa Web</span>
</div>
</div>
</div>
</section>
{/*  Preview Area (Floating Mockup)  */}
<section className="col-span-12 mt-4">
<div className="bg-white/40 backdrop-blur-md rounded-2xl p-12 border border-white/50 flex flex-col items-center text-center">
<img alt="mockup of a modern website bottom corner showing the chat widget launcher" className="w-full max-w-2xl rounded-2xl shadow-2xl mb-8 grayscale hover:grayscale-0 transition-all duration-700" data-alt="minimalist website interface showing a clean layout with a blue chat bubble widget at the bottom right corner in a studio lighting setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnZihX6YjBIv4cll4x0W4ShTwldhSeJtvcUB4xnA7zFCZ2UttgjhuZFxqVeaeu_v7f1keszTklE1gjGpKGK2ur_o5lVRAIOPYjRiZ1O7zyIzBkpXUqGQORDmWumxUoe__hD4uFvb0DGmOnytCzCJAFdwE1MwXXirbz_RO7nAtbpL07_D5ovBWpiU-yp4g91Upwaid8d0zaebYUrgVXEOtCTzL_LWWj4cH687sryAePjUobYPrSaPFJ3YnbORe0CNU9qOTFnHYka6x9"/>
<div className="flex gap-4">
<button className="bg-surface-container-highest text-on-surface px-8 py-3 rounded-full font-bold transition-all hover:bg-surface-dim">
                                Cancelar Cambios
                            </button>
<button className="bg-primary text-white px-12 py-3 rounded-full font-bold shadow-xl shadow-primary/30 transition-transform active:scale-95">
                                Publicar Configuración
                            </button>
</div>
</div>
</section>
</div>
</div>

        </div>
    );
};

export default Page_8_1_configuraci_n_de_widget;


