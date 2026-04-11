import React from 'react';

const Page_10_4_soporte_y_acceso_directo: React.FC = () => {
    return (
        <div className="w-full">
            

{/*  Bento Grid Layout for Support Dashboard  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/*  Active Tickets Column  */}
<section className="lg:col-span-8 space-y-4">
<div className="flex items-center justify-between px-2 mb-4">
<h3 className="font-headline font-bold text-xl flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Solicitudes Activas
                        </h3>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">3 Resultados</span>
</div>
{/*  Ticket Card 1: High Priority  */}
<div className="bg-surface-container-lowest p-6 rounded-xl ghost-border flex items-start gap-6 group hover:bg-white transition-all duration-300">
<div className="bg-error-container/20 p-3 rounded-xl text-error">
<span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '\'FILL\' 1'}}>priority_high</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-bold text-error uppercase tracking-tighter bg-error/10 px-2 py-0.5 rounded">Prioridad Crítica</span>
<span className="text-xs text-on-surface-variant font-medium">Hace 12 min</span>
</div>
<h4 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">Error en Sincronización de API Bancaria</h4>
<div className="flex items-center gap-4 mt-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Abstract minimalist logo for a financial tech company using geometric blue shapes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIo02ocQK2y-RUYXIj4K9u8GD-HexyTfyf5M_Kx9c9oBuxCorKcUd22RHZHvUsLmCve2nhVqxZjfoOHrz6qkTC7hjBPEdvbiOJ4jHbMPv6XQa4E0qpmKy6H8oVg07v_HQwfsKee9AdyKhCHeaBKRbk2S2wljpXXR0KKypM32Hb5e9gtB2_AMDBK3ZBZK_0abp5yjSap1nYlm150w7qLNItkUphG6TthaTO5udsgjWZ-ya5H2LjALI-_Gao68s9Ex03Vy7Uysbl2_vE"/>
</div>
<span className="text-sm font-semibold text-on-surface-variant">Fintech Solutions S.A.</span>
</div>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="text-sm text-on-surface-variant">ID: #TK-8902</span>
</div>
</div>
<div className="flex flex-col gap-2">
<button className="bg-primary text-white font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-sm">login</span>
                                Acceso Directo
                            </button>
<button className="text-primary font-bold py-2 px-4 rounded-lg text-sm bg-primary/5 hover:bg-primary/10 transition-colors">
                                Ver Detalles
                            </button>
</div>
</div>
{/*  Ticket Card 2: Medium Priority  */}
<div className="bg-surface-container-low p-6 rounded-xl flex items-start gap-6 group hover:bg-surface-container-lowest transition-all duration-300">
<div className="bg-tertiary-fixed/30 p-3 rounded-xl text-tertiary">
<span className="material-symbols-outlined text-3xl">chat_bubble</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-bold text-tertiary uppercase tracking-tighter bg-tertiary/10 px-2 py-0.5 rounded">Media</span>
<span className="text-xs text-on-surface-variant font-medium">Hace 1 hora</span>
</div>
<h4 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">Consulta sobre Exportación de Reportes Anuales</h4>
<div className="flex items-center gap-4 mt-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Modern minimal company logo featuring an emerald green leaf shape on a clean white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_TBHna3SK2-gd3IfAylPrVEIGLVPlfK3kmseSuIPkugCHP7jHlPzVYWQX02sAwf2kmH3vhauGHc3UgyPcZr9KSd7Sr9kuFkkWlc8_CMuQavP5QMVW8wqdCoC2K-u9SzdPfRjz35_mUeKtSEqS59KAcDMGSkQGN990dKpaivtN13oYgoLn5KugnipfZu2L8YrtjSDvuA6eIUezfpcAgwGd21aPWk-KIYsBJhUWd59hIaxDAj9bF6rCSu5VGuTMaFrIKGxv1pmYhXtz"/>
</div>
<span className="text-sm font-semibold text-on-surface-variant">EcoLogistics Group</span>
</div>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="text-sm text-on-surface-variant">ID: #TK-8895</span>
</div>
</div>
<div className="flex flex-col gap-2">
<button className="bg-surface-container-highest text-on-surface font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 hover:bg-outline-variant transition-colors">
<span className="material-symbols-outlined text-sm">login</span>
                                Acceso Directo
                            </button>
<button className="text-primary font-bold py-2 px-4 rounded-lg text-sm bg-primary/5 hover:bg-primary/10 transition-colors">
                                Ver Detalles
                            </button>
</div>
</div>
{/*  Ticket Card 3: Low Priority  */}
<div className="bg-surface-container-low p-6 rounded-xl flex items-start gap-6 group hover:bg-surface-container-lowest transition-all duration-300">
<div className="bg-secondary-container/30 p-3 rounded-xl text-secondary">
<span className="material-symbols-outlined text-3xl">settings_suggest</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-[10px] font-bold text-secondary uppercase tracking-tighter bg-secondary/10 px-2 py-0.5 rounded">Baja</span>
<span className="text-xs text-on-surface-variant font-medium">Hace 3 horas</span>
</div>
<h4 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">Actualización de Logo Corporativo en Plantillas</h4>
<div className="flex items-center gap-4 mt-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Sophisticated gold and black logo for a luxury brand with elegant serif typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlr_XTFwpB5sFaFnZV8-KpvFzGmtGIXAQZ_y22Q9EUMHMVX71DmvH_xRTDoKTQvFylUprANpnjJ-tjWSvoTNSahjDOvd7dwOSE6vSYKe9V7N4AEMNtVBLQhb2euK4_N_pa9_WXsqzg05nggrf9fQEWZFd8Bcc7xRadNY-588-5h2II6zu_AGct0yZUU8HZf0C-719nL5AA_BV-xT3uOJ1cSfVDZfXoPLZrHPZ9fXu8m1DKxIM9BDk38zh6hcQgHFvRgLQSCw5eoQ0W"/>
</div>
<span className="text-sm font-semibold text-on-surface-variant">Aureum Global</span>
</div>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="text-sm text-on-surface-variant">ID: #TK-8890</span>
</div>
</div>
<div className="flex flex-col gap-2">
<button className="bg-surface-container-highest text-on-surface font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 hover:bg-outline-variant transition-colors">
<span className="material-symbols-outlined text-sm">login</span>
                                Acceso Directo
                            </button>
<button className="text-primary font-bold py-2 px-4 rounded-lg text-sm bg-primary/5 hover:bg-primary/10 transition-colors">
                                Ver Detalles
                            </button>
</div>
</div>
</section>
{/*  Sidebar Insights Column  */}
<aside className="lg:col-span-4 space-y-6">
{/*  Quick Login Panel  */}
<section className="bg-inverse-surface text-inverse-on-surface p-6 rounded-xl shadow-xl">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary-fixed-dim">vpn_key</span>
<h3 className="font-headline font-bold text-lg">Acceso Rápido</h3>
</div>
<p className="text-sm text-slate-400 mb-6">Entra directamente al panel de cualquier cliente para depurar o configurar sin credenciales.</p>
<div className="space-y-4">
<div className="relative">
<span className="absolute inset-y-0 left-3 flex items-center text-slate-500">
<span className="material-symbols-outlined text-lg">search</span>
</span>
<input className="w-full bg-slate-800 border-0 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary-container text-white placeholder:text-slate-500" placeholder="Buscar empresa..." type="text"/>
</div>
<div className="space-y-2">
<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">Recientes</p>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center text-primary-fixed-dim font-bold text-xs">FS</div>
<span className="text-sm font-medium">Fintech Solutions</span>
</div>
<span className="material-symbols-outlined text-slate-600 group-hover:text-white transition-colors">arrow_forward_ios</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-secondary-container/20 flex items-center justify-center text-secondary-fixed-dim font-bold text-xs">EL</div>
<span className="text-sm font-medium">EcoLogistics</span>
</div>
<span className="material-symbols-outlined text-slate-600 group-hover:text-white transition-colors">arrow_forward_ios</span>
</div>
</div>
</div>
</section>
{/*  AI Support Metrics  */}
<section className="bg-surface-container-low p-6 rounded-xl">
<h3 className="font-headline font-bold text-lg mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">auto_awesome</span>
                            SLA &amp; Salud
                        </h3>
<div className="space-y-6">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-on-surface-variant">Tiempo de Respuesta</span>
<span className="font-bold text-secondary">4m 12s</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[85%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-on-surface-variant">Resolución 1ª Instancia</span>
<span className="font-bold text-primary">92%</span>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary w-[92%] rounded-full"></div>
</div>
</div>
<div className="bg-surface-container-highest/50 p-4 rounded-lg">
<p className="text-xs text-on-surface-variant leading-relaxed">
<span className="font-bold text-primary italic">IA Insight:</span> El volumen de tickets ha aumentado un 12% respecto a la semana pasada, principalmente en el módulo de API.
                                </p>
</div>
</div>
</section>
</aside>
</div>

        </div>
    );
};

export default Page_10_4_soporte_y_acceso_directo;


