import React from 'react';

const Page_8_2_personalizaci_n_visual: React.FC = () => {
    return (
        <div className="w-full">
            

{/*  Asymmetric Layout: Editor & Preview  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
{/*  Customization Controls (Column 1-7)  */}
<div className="xl:col-span-7 space-y-8">
{/*  Section: Branding  */}
<section className="bg-surface-container-low rounded-xl p-8 transition-all">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">palette</span>
</div>
<h2 className="text-xl font-bold">Identidad de Marca</h2>
</div>
<div className="space-y-6">
{/*  Logo Upload  */}
<div className="flex flex-col md:flex-row md:items-center gap-6 p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
<div className="w-24 h-24 rounded-xl bg-surface-container-high border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-on-surface-variant cursor-pointer hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-3xl">cloud_upload</span>
<span className="text-[10px] font-bold mt-1 uppercase">Subir Logo</span>
</div>
<div className="flex-1">
<h3 className="font-bold text-on-surface">Logotipo del Widget</h3>
<p className="text-sm text-on-surface-variant mb-4">Se mostrará en la cabecera de la ventana de chat. Formatos PNG, SVG.</p>
<button className="px-4 py-2 rounded-lg bg-surface-container-highest text-sm font-bold hover:bg-outline-variant/20 transition-all">Seleccionar Archivo</button>
</div>
</div>
{/*  Color Pickers  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-3">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Color Primario</label>
<div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10">
<div className="w-8 h-8 rounded-full bg-[#006190]"></div>
<input className="flex-1 bg-transparent border-none focus:ring-0 font-mono text-sm uppercase" type="text" value="#006190"/>
</div>
</div>
<div className="space-y-3">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Color Secundario</label>
<div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10">
<div className="w-8 h-8 rounded-full bg-[#006d36]"></div>
<input className="flex-1 bg-transparent border-none focus:ring-0 font-mono text-sm uppercase" type="text" value="#006D36"/>
</div>
</div>
</div>
</div>
</section>
{/*  Section: Typography  */}
<section className="bg-surface-container-low rounded-xl p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">text_fields</span>
</div>
<h2 className="text-xl font-bold">Tipografía y Textos</h2>
</div>
<div className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-3">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Fuente Principal</label>
<select className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 text-on-surface font-medium">
<option>Inter (Recomendada)</option>
<option>Manrope</option>
<option>Outfit</option>
<option>Roboto</option>
</select>
</div>
<div className="space-y-3">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Tamaño de Cuerpo</label>
<div className="flex items-center gap-4 px-4 py-2 bg-surface-container-lowest rounded-xl">
<input className="flex-1 h-2 bg-surface-container rounded-full appearance-none cursor-pointer accent-primary" type="range"/>
<span className="text-sm font-bold font-mono">14px</span>
</div>
</div>
</div>
<div className="space-y-3">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Mensaje de Bienvenida</label>
<textarea className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 text-on-surface h-24 leading-relaxed" placeholder="Escribe el primer mensaje que verán tus usuarios...">¡Hola! 👋 Soy el asistente inteligente de JAZM. ¿En qué puedo ayudarte hoy?</textarea>
</div>
<div className="space-y-3">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Placeholder del Input</label>
<input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 text-on-surface" type="text" value="Escribe tu mensaje aquí..."/>
</div>
</div>
</section>
{/*  Section: UI Elements  */}
<section className="bg-surface-container-low rounded-xl p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">toggle_on</span>
</div>
<h2 className="text-xl font-bold">Elementos de la Interfaz</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-white transition-all group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">person</span>
<span className="font-medium text-sm">Mostrar nombre del agente</span>
</div>
<div className="w-10 h-6 bg-primary rounded-full relative flex items-center px-1">
<div className="w-4 h-4 bg-white rounded-full translate-x-4"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-white transition-all group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">keyboard_double_arrow_right</span>
<span className="font-medium text-sm">Indicador de escritura</span>
</div>
<div className="w-10 h-6 bg-primary rounded-full relative flex items-center px-1">
<div className="w-4 h-4 bg-white rounded-full translate-x-4"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-white transition-all group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">schedule</span>
<span className="font-medium text-sm">Marcas de tiempo</span>
</div>
<div className="w-10 h-6 bg-surface-container-highest rounded-full relative flex items-center px-1">
<div className="w-4 h-4 bg-white rounded-full translate-x-0"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl hover:bg-white transition-all group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">mood</span>
<span className="font-medium text-sm">Selector de Emojis</span>
</div>
<div className="w-10 h-6 bg-primary rounded-full relative flex items-center px-1">
<div className="w-4 h-4 bg-white rounded-full translate-x-4"></div>
</div>
</div>
</div>
</section>
<div className="flex justify-end gap-4 pb-12">
<button className="px-8 py-3 rounded-xl font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors">Descartar</button>
<button className="px-10 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/25 hover:scale-105 transition-transform">Guardar Cambios</button>
</div>
</div>
{/*  Live Preview (Column 8-12)  */}
<div className="xl:col-span-5 relative">
<div className="sticky top-28 space-y-6">
<div className="flex items-center justify-between px-2">
<h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                            Vista Previa en Vivo
                        </h3>
<div className="flex gap-2">
<span className="material-symbols-outlined text-primary cursor-pointer">smartphone</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer opacity-50">laptop</span>
</div>
</div>
{/*  Chat Window Mockup  */}
<div className="aspect-[9/16] max-h-[700px] w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[12px] border-surface-container-highest relative">
{/*  Chat Header  */}
<div className="bg-[#006190] p-6 text-white flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>smart_toy</span>
</div>
<div>
<p className="font-headline font-bold text-sm">Asistente JAZM</p>
<p className="text-[10px] opacity-80 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span>
                                        En línea
                                    </p>
</div>
</div>
<span className="material-symbols-outlined text-lg">close</span>
</div>
{/*  Chat Messages Container  */}
<div className="p-4 flex flex-col gap-4 h-full bg-slate-50 overflow-y-auto">
{/*  System Time  */}
<p className="text-[10px] text-center text-on-surface-variant font-bold uppercase tracking-tighter opacity-50 my-2">Hoy, 14:20</p>
{/*  Incoming Message  */}
<div className="flex flex-col gap-1 max-w-[85%]">
<div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-on-surface leading-relaxed">
                                    ¡Hola! 👋 Soy el asistente inteligente de JAZM. ¿En qué puedo ayudarte hoy?
                                </div>
<span className="text-[10px] text-on-surface-variant ml-1">Asistente • 14:20</span>
</div>
{/*  Typing Indicator  */}
<div className="flex items-center gap-2 max-w-[85%] opacity-70">
<div className="bg-white p-3 rounded-full shadow-sm flex gap-1">
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
</div>
</div>
{/*  Spacer to push to bottom  */}
<div className="flex-1"></div>
{/*  Input Area  */}
<div className="mt-auto -mx-2 -mb-2 p-4 bg-white border-t border-slate-100 flex items-center gap-3">
<div className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm text-slate-500">
                                    Escribe tu mensaje aquí...
                                </div>
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
<span className="material-symbols-outlined text-sm">send</span>
</div>
</div>
</div>
{/*  Home Indicator Bar  */}
<div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-200 rounded-full"></div>
</div>
<div className="bg-surface-container-highest/30 p-6 rounded-2xl border border-dashed border-outline-variant/30 text-center">
<p className="text-xs text-on-surface-variant font-medium">Los cambios se aplican automáticamente en esta vista previa para facilitar la edición visual.</p>
</div>
</div>
</div>
</div>

        </div>
    );
};

export default Page_8_2_personalizaci_n_visual;


