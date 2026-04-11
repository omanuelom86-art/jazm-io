import React from 'react';

const Page_9_1_preferencias_de_empresa: React.FC = () => {
    return (
        <div className="w-full">
            

<div className="max-w-5xl mx-auto grid grid-cols-12 gap-8">
{/*  Section: Identidad & Regional  */}
<div className="col-span-12 lg:col-span-7 space-y-8">
{/*  Basic Info Card  */}
<section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
<h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
<span className="material-symbols-outlined text-primary">corporate_fare</span>
<span>Identidad Corporativa</span>
</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="md:col-span-2 flex items-center space-x-6 mb-4">
<div className="relative group">
<div className="w-24 h-24 rounded-2xl bg-surface-container-high flex items-center justify-center overflow-hidden border-2 border-dashed border-outline-variant group-hover:border-primary transition-colors">
<img alt="Logo de empresa" className="w-full h-full object-cover" data-alt="Minimalist modern geometric company logo with clean lines in a bright corporate office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_-jnDJ7MAyPK68m4HwIjT-AWzKfdUMvJ0kuM0dOxtdCVQYRmiX75O27Uq8moYSMnRdWQFdb6isQE4oCWoUYsQIqkht3Lqez4j3-IQAJHJHAK0mnfrByEMfcL5811nwQPMLtOjWIOKoSuzLK9REZCbNRB0H7mRcjcNjIdr6m0X-5MMFZ4HqJeeFGLY7oFzbP2JdpHunlg2k6FQaJwZseSFxSB2qhqupuVChL4r_oRvBPvtzWMCPGb1Aa2Pr-cssGO9w40bPgbskCWj"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
<span className="material-symbols-outlined text-white">cloud_upload</span>
</div>
</div>
<p className="text-[11px] text-center mt-2 text-on-surface-variant font-medium">Actualizar Logo</p>
</div>
<div className="flex-1 space-y-4">
<div className="space-y-1">
<label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Nombre de la Empresa</label>
<input className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-shadow" type="text" value="Global Corp S.A.S"/>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
<div className="space-y-1">
<label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Moneda Local</label>
<div className="relative">
<select className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 appearance-none focus:ring-2 focus:ring-primary/40">
<option>COP - Peso Colombiano</option>
<option>USD - Dólar Estadounidense</option>
<option>EUR - Euro</option>
<option>MXN - Peso Mexicano</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-3 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
<p className="text-[10px] text-secondary font-medium mt-1">Ajuste crítico para reportes financieros</p>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Idioma de Interfaz</label>
<div className="relative">
<select className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 appearance-none focus:ring-2 focus:ring-primary/40">
<option>Español (Latinoamérica)</option>
<option>English (US)</option>
<option>Português</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-3 text-on-surface-variant pointer-events-none">language</span>
</div>
</div>
<div className="md:col-span-2 space-y-1">
<label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Zona Horaria</label>
<div className="relative">
<select className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 appearance-none focus:ring-2 focus:ring-primary/40">
<option>(GMT-05:00) Bogotá, Lima, Quito</option>
<option>(GMT-06:00) Ciudad de México</option>
<option>(GMT-04:00) Santiago de Chile</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-3 text-on-surface-variant pointer-events-none">schedule</span>
</div>
</div>
</div>
</section>
{/*  Modules Visibility Card  */}
<section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
<h3 className="text-xl font-bold mb-2 flex items-center space-x-2">
<span className="material-symbols-outlined text-primary">view_module</span>
<span>Visibilidad de Módulos</span>
</h3>
<p className="text-sm text-on-surface-variant mb-6">Personaliza qué herramientas estarán disponibles para tu equipo.</p>
<div className="grid grid-cols-1 gap-3">
<div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-transparent hover:border-primary/20 transition-colors group">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">rocket_launch</span>
</div>
<div>
<p className="font-bold text-sm">IA Insights &amp; Predicciones</p>
<p className="text-[11px] text-on-surface-variant">Análisis avanzado de ventas asistido por IA</p>
</div>
</div>
<div className="w-12 h-6 bg-secondary rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-transparent hover:border-primary/20 transition-colors group">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">hub</span>
</div>
<div>
<p className="font-bold text-sm">Gestión de Leads Automatizada</p>
<p className="text-[11px] text-on-surface-variant">Flujos de trabajo para prospección</p>
</div>
</div>
<div className="w-12 h-6 bg-secondary rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-transparent hover:border-primary/20 transition-colors group">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<p className="font-bold text-sm">Facturación y Cobros</p>
<p className="text-[11px] text-on-surface-variant">Gestión nativa de invoices</p>
</div>
</div>
<div className="w-12 h-6 bg-surface-variant rounded-full relative cursor-pointer">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
</div>
</section>
</div>
{/*  Section: Insights & Metadata (Floating Column)  */}
<div className="col-span-12 lg:col-span-5 space-y-8">
{/*  AI Preview Card  */}
<div className="bg-primary text-on-primary p-8 rounded-3xl relative overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 p-8 opacity-10">
<span className="material-symbols-outlined text-[120px]">auto_awesome</span>
</div>
<div className="relative z-10">
<div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full mb-6">
<span className="material-symbols-outlined text-[14px]">bolt</span>
<span className="text-[11px] font-bold uppercase tracking-wider">Tip del Asistente</span>
</div>
<h4 className="text-2xl font-bold mb-4 leading-tight">Configurar tu moneda es vital para la IA</h4>
<p className="text-white/80 text-sm mb-6 leading-relaxed">Nuestro motor de análisis necesita conocer tu moneda base para realizar proyecciones de ingresos y comparativas de mercado precisas en tus reportes trimestrales.</p>
<div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center space-x-4">
<div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
<span className="material-symbols-outlined">insights</span>
</div>
<div>
<p className="text-xs text-white/60">Precisión actual</p>
<p className="text-lg font-bold">98.4%</p>
</div>
</div>
</div>
</div>
{/*  Usage Stats (Bento Style)  */}
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-low p-6 rounded-2xl">
<p className="text-on-surface-variant text-[11px] font-bold uppercase mb-4">Usuarios Activos</p>
<p className="text-3xl font-extrabold">24/50</p>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mt-4">
<div className="w-[48%] h-full bg-primary rounded-full"></div>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-2xl">
<p className="text-on-surface-variant text-[11px] font-bold uppercase mb-4">Módulos Activos</p>
<p className="text-3xl font-extrabold text-secondary">12</p>
<p className="text-[10px] text-on-surface-variant mt-4 font-medium">De 18 disponibles</p>
</div>
</div>
{/*  Help & Resource Section  */}
<div className="bg-surface-container p-6 rounded-2xl">
<h4 className="font-bold text-sm mb-4">Recursos de Configuración</h4>
<ul className="space-y-4">
<li>
<a className="flex items-center space-x-3 group" href="#">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-[18px]">menu_book</span>
</div>
<span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface">Guía de Parámetros Regionales</span>
</a>
</li>
<li>
<a className="flex items-center space-x-3 group" href="#">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-[18px]">security</span>
</div>
<span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface">Políticas de Privacidad de Datos</span>
</a>
</li>
</ul>
</div>
</div>
</div>

        </div>
    );
};

export default Page_9_1_preferencias_de_empresa;


