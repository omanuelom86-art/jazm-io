import React from 'react';

const Page_configuraci_n_general: React.FC = () => {
    return (
        <div className="w-full">

            {/*  Dynamic Island (Signature Component)  */}
            <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[400px] glass-island rounded-full z-50 shadow-2xl shadow-sky-900/5 px-6 py-3 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <span className="text-sky-900 font-bold tracking-tight text-sm font-headline">JAZM.IO</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-slate-500 text-xl cursor-pointer hover:text-sky-700 transition-colors">account_circle</span>
                    <span className="material-symbols-outlined text-sky-700 text-xl cursor-pointer font-bold">settings</span>
                </div>
            </div>
            <section className="max-w-6xl mx-auto px-6 pt-24">
                {/*  Editorial Header  */}

                {/*  Asymmetric Bento Grid Layout  */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/*  Left Column: Company & Core (Large)  */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {/*  Company Profile Card  */}
                        <div className="bg-surface-container-low rounded-xl p-8 flex flex-col gap-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold font-headline text-on-surface mb-1">Perfil de Empresa</h3>
                                    <p className="text-sm text-on-surface-variant">Identidad corporativa y localización base.</p>
                                </div>
                                <button className="bg-white px-4 py-2 rounded-full text-xs font-bold text-primary shadow-sm hover:bg-surface-container-high transition-colors">EDITAR PERFIL</button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mt-2">
                                <div className="flex flex-col gap-1">
                                    <label className="text-[11px] font-bold text-outline uppercase tracking-wider">Nombre Legal</label>
                                    <div className="bg-surface-container-high px-4 py-3 rounded-xl text-on-surface font-medium">Jazm Intelligence Systems S.L.</div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-[11px] font-bold text-outline uppercase tracking-wider">Moneda Principal</label>
                                    <div className="relative">
                                        <select className="w-full bg-surface-container-high border-none rounded-xl text-on-surface font-medium focus:ring-2 focus:ring-primary/40 appearance-none py-3 px-4">
                                            <option value="EUR">Euro (€) - EUR</option>
                                            <option value="USD">Dólar ($) - USD</option>
                                            <option value="MXN">Peso Mexicano ($) - MXN</option>
                                            <option value="COP">Peso Colombiano ($) - COP</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">unfold_more</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Interface Personalization (Bento Item)  */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-surface-container-low rounded-xl p-8 flex flex-col gap-6">
                                <h3 className="text-xl font-bold font-headline text-on-surface">Flujo de Trabajo</h3>
                                <p className="text-sm text-on-surface-variant">Oculta o activa etapas del pipeline de ventas para simplificar la vista.</p>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                                        <span className="text-sm font-medium">Prospección Inicial</span>
                                        <div className="w-10 h-5 bg-secondary-fixed rounded-full relative cursor-pointer">
                                            <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-xl opacity-60">
                                        <span className="text-sm font-medium">Segunda Llamada</span>
                                        <div className="w-10 h-5 bg-outline-variant rounded-full relative cursor-pointer">
                                            <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                                        <span className="text-sm font-medium">Negociación</span>
                                        <div className="w-10 h-5 bg-secondary-fixed rounded-full relative cursor-pointer">
                                            <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-primary-container text-on-primary-container rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold font-headline mb-2">IA Generativa</h3>
                                    <p className="text-sm opacity-90 leading-relaxed">Configura el tono de voz y la autonomía de tus agentes Jazm.io para el seguimiento de leads.</p>
                                </div>
                                <div className="mt-6 space-y-4 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-secondary-container">auto_awesome</span>
                                        <span className="text-sm font-semibold">Análisis de Sentimiento Activo</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-secondary-container">verified</span>
                                        <span className="text-sm font-semibold">Sugerencia de Respuestas</span>
                                    </div>
                                </div>
                                {/*  Aesthetic Gradient Texture  */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                    {/*  Right Column: Preferences & Notifications (Narrow)  */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        {/*  Notification Settings Card  */}
                        <div className="bg-surface-container-highest rounded-xl p-8">
                            <h3 className="text-xl font-bold font-headline text-on-surface mb-6">Notificaciones</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary text-xl">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold">Email Digest</h4>
                                        <p className="text-[12px] text-on-surface-variant">Resumen diario de actividad por la mañana.</p>
                                    </div>
                                    <input defaultChecked className="ml-auto rounded-md text-primary focus:ring-primary border-none bg-white" type="checkbox" aria-label="Email Digest" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary text-xl">smartphone</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold">Push en Tiempo Real</h4>
                                        <p className="text-[12px] text-on-surface-variant">Alertas inmediatas de nuevos leads.</p>
                                    </div>
                                    <input defaultChecked className="ml-auto rounded-md text-primary focus:ring-primary border-none bg-white" type="checkbox" aria-label="Push en Tiempo Real" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary text-xl">forum</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold">Integración Slack/WA</h4>
                                        <p className="text-[12px] text-on-surface-variant">Notificar a canales externos.</p>
                                    </div>
                                    <input className="ml-auto rounded-md text-primary focus:ring-primary border-none bg-white" type="checkbox" aria-label="Integración Slack/WA" />
                                </div>
                            </div>
                        </div>
                        {/*  Floating Insight Card  */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant/10">
                            <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '\'FILL\' 1' }}>monitoring</span>
                            </div>
                            <h4 className="font-headline font-bold text-lg mb-2">Reportes por IA</h4>
                            <p className="text-sm text-on-surface-variant mb-4">Tu moneda actual es <strong className="text-on-surface">EUR (€)</strong>. Todos los cálculos de ROI se ajustarán automáticamente.</p>
                            <button className="w-full py-3 bg-surface-container-low text-primary text-sm font-bold rounded-xl hover:bg-surface-container-high transition-colors">VER ANALÍTICAS</button>
                        </div>
                        {/*  Support Card  */}
                        <div className="bg-surface-container-low rounded-xl p-6 border-l-4 border-primary">
                            <p className="text-xs font-bold text-primary uppercase mb-2">Soporte Premium</p>
                            <p className="text-sm text-on-surface mb-3 italic">"¿Necesitas ayuda configurando tu API?"</p>
                            <a className="text-sm font-bold flex items-center gap-2 text-on-surface hover:text-primary transition-colors" href="#">
                                Contactar Asesor <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/*  Footer Action Bar  */}
                <footer className="mt-12 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-outline">Última sincronización: Hace 4 minutos • ID: JZ-882-X</p>
                    <div className="flex gap-4">
                        <button className="px-8 py-3 rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors">DESCARTAR CAMBIOS</button>
                        <button className="px-8 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-primary-container text-white shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">GUARDAR CONFIGURACIÓN</button>
                    </div>
                </footer>
            </section>

        </div>
    );
};

export default Page_configuraci_n_general;


