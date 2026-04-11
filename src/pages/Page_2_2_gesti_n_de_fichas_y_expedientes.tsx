import React from 'react';

const Page_2_2_gesti_n_de_fichas_y_expedientes: React.FC = () => {
    return (
        <div className="w-full">
            
<div className="max-w-6xl mx-auto">
{/*  Header Section  */}
<div className="mb-10">
<h1 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight">2.2 Gestión de Fichas y Expedientes</h1>
<p className="text-on-surface-variant mt-2 max-w-2xl">Personalice la estructura de datos y el flujo de visualización para sus expedientes comerciales de forma dinámica.</p>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-12 gap-6">
{/*  Profile Customization Column (Left)  */}
<div className="col-span-12 lg:col-span-8 space-y-6">
{/*  Lead Profile Card  */}
<section className="bg-surface-container-low rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm">
<img alt="Profile" className="w-full h-full object-cover" data-alt="professional portrait of a businessman in a light blue shirt looking confidently at the camera with a soft studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe_IedT8CEbx12606_SVsPVY6tR3-OUL1IsCPDQxZ59UNQaYo5sq22QM3p7NFX-pje8S7p6CzaWL1an--Q9aokcg_MFDZtmgjVtekWBIzoRAdJpeINUKBSbew5ghB1FpH2VJnjfCrLgG0lZlSBCys59tWcV2NjiNMrzzcUfmbvi2k7vwePdclTPfagTkS2opzC3Xh7URZJCfXRCr8Xn3HXRGAfaFFVJigqN-4fUDlh8WHWsMqh-Hh-HIzIXvFDk61_YUqLmJneKrDu"/>
</div>
<div>
<h3 className="text-xl font-bold font-headline">Configuración de Expediente</h3>
<p className="text-sm text-on-surface-variant">Lead ID: #9902-X</p>
</div>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-semibold">Perfil Activo</span>
<button className="p-2 bg-surface-container-high rounded-lg hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-sm">edit</span>
</button>
</div>
</div>
{/*  Accordion Sections  */}
<div className="space-y-4">
{/*  Section: Personal Info  */}
<div className="group border-b border-outline-variant/10 pb-4">
<button className="w-full flex items-center justify-between py-2 text-left">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">person</span>
<span className="font-semibold text-on-surface">Información Personal</span>
</div>
<span className="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
</button>
<div className="grid grid-cols-2 gap-4 mt-4 px-9">
<div className="space-y-1">
<label className="text-[10px] font-bold text-slate-500 uppercase">Nombre Completo</label>
<p className="text-sm text-on-surface bg-surface-container-high/50 p-2 rounded-lg">Ricardo Fernández Morales</p>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold text-slate-500 uppercase">Correo Electrónico</label>
<p className="text-sm text-on-surface bg-surface-container-high/50 p-2 rounded-lg">r.fernandez@corporativo.com</p>
</div>
</div>
</div>
{/*  Section: Commercial Data  */}
<div className="group border-b border-outline-variant/10 pb-4">
<button className="w-full flex items-center justify-between py-2 text-left">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">analytics</span>
<span className="font-semibold text-on-surface">Datos Comerciales</span>
</div>
<span className="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
</button>
<div className="mt-4 px-9 space-y-4">
<div className="flex items-center justify-between p-3 bg-surface-container-high/50 rounded-xl">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">account_balance_wallet</span>
<span className="text-sm">Presupuesto Estimado</span>
</div>
<span className="font-bold text-primary">€45,000.00</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-high/50 rounded-xl">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">rocket_launch</span>
<span className="text-sm">Probabilidad de Cierre</span>
</div>
<div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
<div className="w-[75%] h-full bg-secondary"></div>
</div>
</div>
</div>
</div>
{/*  Section: History  */}
<div className="group pb-2">
<button className="w-full flex items-center justify-between py-2 text-left">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">history</span>
<span className="font-semibold text-on-surface">Historial de Interacciones</span>
</div>
<span className="material-symbols-outlined group-hover:rotate-180 transition-transform">expand_more</span>
</button>
<div className="mt-4 px-9 space-y-3">
<div className="flex gap-4 items-start">
<div className="w-2 h-2 mt-1.5 rounded-full bg-primary ring-4 ring-primary/10"></div>
<div>
<p className="text-xs font-bold text-on-surface">Llamada de Calificación</p>
<p className="text-[11px] text-on-surface-variant">Ayer, 14:30 PM • Agente: Elena S.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-2 h-2 mt-1.5 rounded-full bg-slate-300"></div>
<div>
<p className="text-xs font-bold text-on-surface">Propuesta Enviada</p>
<p className="text-[11px] text-on-surface-variant">12 Oct 2023 • Sistema Automático</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Stage Visibility Control  */}
<section className="bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/10">
<div className="mb-6">
<h3 className="text-lg font-bold font-headline">Visibilidad de Etapas</h3>
<p className="text-xs text-on-surface-variant">Oculte etapas del embudo para este expediente específico.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="flex flex-col items-center p-4 rounded-xl bg-surface-container-low border border-transparent hover:border-primary/20 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
<span className="material-symbols-outlined text-sm">search</span>
</div>
<span className="text-[10px] font-bold uppercase tracking-tight">Prospección</span>
<div className="mt-2 w-8 h-4 bg-primary rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="flex flex-col items-center p-4 rounded-xl bg-surface-container-low opacity-50 grayscale">
<div className="w-10 h-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mb-2">
<span className="material-symbols-outlined text-sm">visibility_off</span>
</div>
<span className="text-[10px] font-bold uppercase tracking-tight">Cualificación</span>
<div className="mt-2 w-8 h-4 bg-slate-300 rounded-full relative">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="flex flex-col items-center p-4 rounded-xl bg-surface-container-low border border-transparent hover:border-primary/20 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
<span className="material-symbols-outlined text-sm">handshake</span>
</div>
<span className="text-[10px] font-bold uppercase tracking-tight">Negociación</span>
<div className="mt-2 w-8 h-4 bg-primary rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="flex flex-col items-center p-4 rounded-xl bg-surface-container-low border border-transparent hover:border-primary/20 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
<span className="material-symbols-outlined text-sm">verified_user</span>
</div>
<span className="text-[10px] font-bold uppercase tracking-tight">Cierre</span>
<div className="mt-2 w-8 h-4 bg-primary rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</section>
</div>
{/*  AI Sidebar / Insights (Right)  */}
<div className="col-span-12 lg:col-span-4 space-y-6">
{/*  AI Insight Card  */}
<div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-6 text-white relative overflow-hidden shadow-xl shadow-primary/20">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl">auto_awesome</span>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-secondary-container">bolt</span>
<span className="text-xs font-bold uppercase tracking-wider">AI Intelligence</span>
</div>
<h4 className="text-xl font-bold font-headline leading-tight mb-2">Predicción de Éxito</h4>
<div className="text-4xl font-extrabold mb-4">84%</div>
<p className="text-sm opacity-90 leading-relaxed mb-6">El cliente muestra una alta correlación con perfiles de "Cierre Rápido" basados en su interacción con el historial de documentos.</p>
<button className="w-full py-3 bg-white/20 backdrop-blur-md rounded-xl text-xs font-bold uppercase hover:bg-white/30 transition-all">
                                Ver Recomendaciones
                            </button>
</div>
</div>
{/*  Dynamic Mapping Tool  */}
<div className="bg-surface-container-highest/50 rounded-3xl p-6 border border-white">
<h4 className="text-sm font-bold font-headline mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">link</span>
                            Mapeo de Campos
                        </h4>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-[11px] text-on-surface-variant font-medium">Fuente: CRM Externo</span>
<span className="text-[11px] text-primary font-bold">Mapeado</span>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm">
<span className="text-[10px] px-2 py-1 bg-slate-100 rounded">LeadName</span>
<span className="material-symbols-outlined text-slate-300 text-xs">arrow_forward</span>
<span className="text-[10px] px-2 py-1 bg-primary/10 text-primary rounded font-bold">Nombre</span>
</div>
<div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm">
<span className="text-[10px] px-2 py-1 bg-slate-100 rounded">Company_ID</span>
<span className="material-symbols-outlined text-slate-300 text-xs">arrow_forward</span>
<span className="text-[10px] px-2 py-1 bg-primary/10 text-primary rounded font-bold">ID_Comercial</span>
</div>
</div>
<button className="w-full py-2 text-[10px] font-bold text-on-surface-variant uppercase border-t border-outline-variant/20 mt-2">
                                Gestionar Conexiones
                            </button>
</div>
</div>
{/*  Quick Preview Map  */}
<div className="bg-surface-container-low rounded-3xl overflow-hidden h-48 relative shadow-sm group">
<img className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" data-alt="stylized modern map interface with clean lines and blue accent dots representing client locations" data-location="Madrid, Spain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHzLpQ0PwSC2SQjO4Eu3d5AVZKbh6066boEcDZNoiqdiTOvUAnR9tK6rUP6xGIU61K1WUjY9oqaGANgitFYbjasg-43GqwZIsvuXww3UF_8lNIksQ3Bwj5gOjxz8_Ml423oEljOEeNGzDOaEKjIsgzgXXT5Eq-_nHK96WTz3DFPbfPVTlWZsR5lTqxlPqdv0w-EmJ3OfVL1Er91dM8Jhu2p9swlDUsTna-FQH_zrDqyNEIa5oE-V4tFP7D9V_mga8KdRYt57H8HHhE"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent flex items-end p-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-white text-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>location_on</span>
<span className="text-white text-xs font-bold">Madrid, España</span>
</div>
</div>
</div>
</div>
</div>
</div>

        </div>
    );
};

export default Page_2_2_gesti_n_de_fichas_y_expedientes;
