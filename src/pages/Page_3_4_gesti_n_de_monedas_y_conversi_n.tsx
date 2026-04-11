import React from 'react';

const Page_3_4_gesti_n_de_monedas_y_conversi_n: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  Dynamic Island  */}
<div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
<div className="glass-island px-6 py-2 rounded-full flex items-center gap-4 shadow-2xl shadow-primary/10 border border-white/20 pointer-events-auto">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
<span className="text-xs font-headline font-bold text-primary">Sincronizando Divisas</span>
</div>
<div className="h-4 w-[1px] bg-outline-variant/30"></div>
<div className="flex items-center gap-3">
<span className="text-[10px] font-label font-semibold text-on-surface-variant">USD/MXN 17.04</span>
<span className="material-symbols-outlined text-secondary text-sm">trending_up</span>
</div>
</div>
</div>
{/*  Content Area  */}
<div className="p-8 max-w-6xl mx-auto w-full pt-20">

{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Main Currency Configuration  */}
<section className="md:col-span-8 space-y-6">
<div className="bg-surface-container-low rounded-xl p-8 transition-all hover:bg-surface-container duration-300">
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-primary/10 rounded-xl">
<span className="material-symbols-outlined text-primary">payments</span>
</div>
<div>
<h3 className="font-headline font-bold text-xl">Divisas de Operación</h3>
<p className="text-sm text-on-surface-variant">Define cómo entra y cómo se visualiza el capital.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="space-y-4">
<label className="block text-sm font-semibold text-on-surface">Moneda de Entrada (Leads)</label>
<div className="relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline">input</span>
</div>
<select className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-xl appearance-none focus:ring-2 focus:ring-primary/40 font-medium text-on-surface transition-all">
<option value="USD">Dólar Estadounidense (USD)</option>
<option selected="" value="MXN">Peso Mexicano (MXN)</option>
<option value="EUR">Euro (EUR)</option>
<option value="GBP">Libra Esterlina (GBP)</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-outline">
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
<p className="text-[11px] text-on-surface-variant px-1">Esta moneda se usará por defecto al crear nuevos tratos.</p>
</div>
<div className="space-y-4">
<label className="block text-sm font-semibold text-on-surface">Moneda de Reporte (Global)</label>
<div className="relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline">monitoring</span>
</div>
<select className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-xl appearance-none focus:ring-2 focus:ring-primary/40 font-medium text-on-surface transition-all">
<option selected="" value="USD">Dólar Estadounidense (USD)</option>
<option value="MXN">Peso Mexicano (MXN)</option>
<option value="EUR">Euro (EUR)</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-outline">
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
<p className="text-[11px] text-on-surface-variant px-1">Todos los tableros de análisis se convertirán a esta divisa.</p>
</div>
</div>
</div>
{/*  Conversion Rate Tracker  */}
<div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
<div className="flex justify-between items-end mb-6">
<div>
<h3 className="font-headline font-bold text-xl mb-1">Seguimiento de Tasas</h3>
<p className="text-sm text-on-surface-variant">Referencia actual del mercado (Actualizado hace 5m)</p>
</div>
<button className="flex items-center gap-2 text-primary font-bold text-sm hover:bg-surface-container-low px-4 py-2 rounded-lg transition-colors">
<span className="material-symbols-outlined text-sm">sync</span>
                                Actualizar ahora
                            </button>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl group transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg font-bold shadow-sm">🇺🇸</div>
<div>
<p className="font-bold">USD → MXN</p>
<p className="text-xs text-on-surface-variant">Tipo de cambio medio</p>
</div>
</div>
<div className="text-right">
<p className="font-headline font-extrabold text-lg text-primary">17.0423</p>
<p className="text-[10px] text-secondary font-bold">+0.12% hoy</p>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl group transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg font-bold shadow-sm">🇪🇺</div>
<div>
<p className="font-bold">EUR → MXN</p>
<p className="text-xs text-on-surface-variant">Tipo de cambio medio</p>
</div>
</div>
<div className="text-right">
<p className="font-headline font-extrabold text-lg text-primary">18.4510</p>
<p className="text-[10px] text-error font-bold">-0.05% hoy</p>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl group transition-all opacity-60">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg font-bold shadow-sm">🇬🇧</div>
<div>
<p className="font-bold">GBP → MXN</p>
<p className="text-xs text-on-surface-variant">Tipo de cambio medio</p>
</div>
</div>
<div className="text-right">
<p className="font-headline font-extrabold text-lg text-primary">21.5582</p>
<p className="text-[10px] text-on-surface-variant font-bold">Estable</p>
</div>
</div>
</div>
</div>
</section>
{/*  Insights & Recommendations Side  */}
<aside className="md:col-span-4 space-y-6">
<div className="bg-primary p-8 rounded-2xl text-white relative overflow-hidden group">
{/*  Decorative glow  */}
<div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700"></div>
<span className="material-symbols-outlined text-secondary-fixed mb-4 block" style={{fontVariationSettings: '\'FILL\' 1'}}>auto_awesome</span>
<h4 className="font-headline font-bold text-lg mb-2">Ether Insight</h4>
<p className="text-sm text-primary-fixed/80 leading-relaxed mb-6">Hemos detectado una volatilidad del 2.4% en el par MXN/USD esta semana. Recomendamos fijar tasas de conversión para tus proyecciones del Q4.</p>
<button className="w-full bg-white text-primary font-bold py-3 rounded-xl shadow-xl shadow-black/20 text-sm hover:bg-primary-fixed transition-colors">
                            Optimizar Proyecciones
                        </button>
</div>
<div className="bg-surface-container-high rounded-xl p-6">
<h4 className="font-headline font-bold text-sm mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">history</span>
                            Actividad Reciente
                        </h4>
<ul className="space-y-4">
<li className="flex gap-3">
<div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 shrink-0"></div>
<div>
<p className="text-xs font-semibold">Tasa actualizada automáticamente</p>
<p className="text-[10px] text-on-surface-variant">Hace 5 minutos • Mercado API</p>
</div>
</li>
<li className="flex gap-3">
<div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></div>
<div>
<p className="text-xs font-semibold">Cambio de moneda de reporte</p>
<p className="text-[10px] text-on-surface-variant">Ayer • Por Admin (Rodrigo G.)</p>
</div>
</li>
</ul>
</div>
<div className="rounded-2xl overflow-hidden h-48 relative">
<img alt="Finanzas" className="w-full h-full object-cover" data-alt="Modern abstract stock market data visualization on a glass screen with soft blue and emerald lighting, professional financial aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4_NkV_fDV9YkyLBNYGuvkJ9QEmiZ0CjQrna0YfNzlAJSfnlJngoqY56qIzqxWZm06NIvAs4ghRRE5lzVzf9WEXY0YCJ6zYcyIpLhd5-RJkih_yFl-HFP_Q2Xp-r4x6Vdasz75Wdd0ZsvyP4QnN7xDYiiOatsIIWFTRZVQqWLf1B1_fcBg0ZrEXEfdmME9Q41EEfF5NJVGL12IwrxhCZiqnDVtPJroZRXM6uR4FwkGVLGBQE3k3Tcpe09lFrX0rfRbWqUBC0Y7KgOx"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
<p className="text-white text-xs font-medium">Visualiza tus datos con la precisión de JAZM.IO</p>
</div>
</div>
</aside>
</div>
<footer className="mt-12 flex justify-end gap-4">
<button className="px-8 py-4 font-bold text-primary hover:bg-surface-container-high rounded-xl transition-all">
                    Descartar Cambios
                </button>
<button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                    Guardar Configuración
                </button>
</footer>
</div>

        </div>
    );
};

export default Page_3_4_gesti_n_de_monedas_y_conversi_n;


