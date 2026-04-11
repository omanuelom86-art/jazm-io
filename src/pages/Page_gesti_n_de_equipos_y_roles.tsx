import React from 'react';

const Page_gesti_n_de_equipos_y_roles: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  TopAppBar / Dynamic Island  */}

{/*  Content Canvas  */}
<div className="pt-24 px-6 pb-12 max-w-7xl mx-auto w-full">
{/*  Page Header  */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Administración de Equipos</h1>
<p className="text-on-surface-variant text-lg">Configura roles, permisos y estructura jerárquica de tu empresa.</p>
</div>
<div className="flex gap-3">
<button className="bg-surface-container-high px-6 py-3 rounded-xl font-bold text-primary flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined" data-icon="group_add">group_add</span>
                        Crear Equipo
                    </button>
<button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
<span className="material-symbols-outlined" data-icon="person_add">person_add</span>
                        Invitar Usuario
                    </button>
</div>
</div>
{/*  Main Layout: Asymmetrical Bento Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/*  Left Column: User & Teams List (8 cols)  */}
<div className="lg:col-span-8 flex flex-col gap-6">
{/*  Team Summary Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-surface-container-low p-6 rounded-2xl hover:bg-surface-container transition-colors cursor-pointer">
<span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Ventas Regionales</span>
<div className="flex items-center justify-between">
<span className="text-3xl font-black text-on-surface">12</span>
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-surface" data-alt="close-up profile photo of a smiling professional man with glasses and short brown hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_w0t6-bhHGfiOT_uGbAOaTLOcj6nTGUZr0R5RjqPZ3OmkLgsbFSO2RgpP7SArmrLjP2yaL2JiEyAd5Q8KdweKJFK1ksEeo-EhVR3u7groHNl3hDsqoYYW0dL_L5Z8SQ-eLIxrnSWg1praB8hyQeJ2wo7sF6P4lIZaiz3wTajB-ivl-VffV01z1fTRcD8VIhb52tSacOUZ1Pw1-dAtnz5X7o0CmyweTY-6Z7Ua75q5ds4A9N32bdCL0bANcyQxvo1Xg11a26wuk0Ce"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-surface" data-alt="portrait of a young woman with curly black hair and confident expression in a bright office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4IB1-mYWEGfAO4D_9z-Tui3YChvhe47HQq5-9XGvPvumT8HtLH0LNxkLzV9Ij37JkFlbyfVTPl4A6E7_JRsufDSeKJ1ee4AKVzeuybtAVzEJeSIgGJBb4PtXa2-GZO-P4cyrSFuouhcFPTCmtKzR4YtF_JyvJOLufAN1Ra1fkWvQR3Ts-kW2nSXqamX_6J_uBq8N5REmJRlBNSrd2Fonkt6LBGvNizekyXIUD2RfwbXZCdnxBrXeFTR0MlMzDH3fT2DA1EsAKQSI2"/>
<div className="w-8 h-8 rounded-full border-2 border-surface bg-primary-fixed text-on-primary-fixed text-[10px] flex items-center justify-center font-bold">+9</div>
</div>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-2xl hover:bg-surface-container transition-colors cursor-pointer">
<span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Soporte IA</span>
<div className="flex items-center justify-between">
<span className="text-3xl font-black text-on-surface">04</span>
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-surface" data-alt="profile image of a woman with long red hair wearing a professional blazer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCShCWF5KtzCQigjV1uIbSt8OqwL_m3axlUtO-wxCcNN9Vl3evcX7ArCKBsVAKJCwMaz9gQD6_t_G64_WYDW6HAOO3yAmvjmbCE6kg-maNeaOVEFrofkAXLuG57ZAppS3cVSdHTgRw82yeoppHwdmhhRqQwpspy2zxp6uZmmEtCCNUYAgbiAR2MB8SnVIuOl8CEb4pXGqTrvF_bymNvuky0KXrHMzUk8Mw3s9n-X_K8WatcDf-6cz3zFnoN65iu4oXWVqcNtqDzhJ13"/>
<div className="w-8 h-8 rounded-full border-2 border-surface bg-primary-fixed text-on-primary-fixed text-[10px] flex items-center justify-center font-bold">+3</div>
</div>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-2xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-outline group hover:border-primary transition-all">
<span className="material-symbols-outlined text-4xl mb-1 group-hover:text-primary" data-icon="add_circle">add_circle</span>
<span className="text-xs font-bold uppercase tracking-tight">Nuevo Grupo</span>
</div>
</div>
{/*  User Directory  */}
<div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl font-bold">Directorio de Usuarios</h3>
<div className="flex bg-surface-container-high rounded-full px-4 py-2 items-center gap-2">
<span className="material-symbols-outlined text-slate-500" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Buscar usuario..." type="text"/>
</div>
</div>
<div className="space-y-1">
{/*  User Item  */}
<div className="group flex items-center justify-between p-4 rounded-2xl hover:bg-surface-container-low transition-all">
<div className="flex items-center gap-4">
<img alt="Adrian" className="w-12 h-12 rounded-2xl" data-alt="professional headshot of a man with blonde hair and friendly expression against a clean light grey background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq95Z084rMp-xL-oHN9zwcmigFLWY0_hDd787A49pBLRUWz4AIlAjfEvY70WVaa-IdnfWxvfDKyHNQ1PaxG0pPOo0o5fOwJhMiUStHNyX881QuojpDGD8WQZvXZz1gIAytbGeJif8sx51x7I-EhpIbrmuAyI2z1AxcBc25sVaTRAiK5tiKQg2zRQnLXCir4qImgV1G28qH5jcJY3r23WA1y8uf2Y9Z7fgHp_DFOKwDXvAVScppK72v_JnB9WU8SLxpZWa5y2Dfd_-C"/>
<div>
<h4 className="font-bold text-on-surface">Adrián Guerrero</h4>
<p className="text-xs text-on-surface-variant">adrian@jazm.io • Admin</p>
</div>
</div>
<div className="flex items-center gap-8">
<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-wide">Activo</span>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 hover:bg-surface-container-highest rounded-lg"><span className="material-symbols-outlined text-slate-600" data-icon="edit">edit</span></button>
<button className="p-2 hover:bg-error-container hover:text-error rounded-lg"><span className="material-symbols-outlined" data-icon="delete">delete</span></button>
</div>
</div>
</div>
{/*  User Item  */}
<div className="group flex items-center justify-between p-4 rounded-2xl hover:bg-surface-container-low transition-all">
<div className="flex items-center gap-4">
<img alt="Sofia" className="w-12 h-12 rounded-2xl" data-alt="young woman with short black hair and glasses in a professional white shirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3cBQNb0AE232mbjm3yvaS8pQJ9ocD40hi8fnZJB1a2Z0LkZQtBzf_B7-YJa-uZ77ica_py_KTVnABQgPKBnSX-Hg8n2j9OGUXmrMKZy7jjrOhMfttv5HrWwAoHMn6G8PgnbimxezJPVLwhq37Cz880TZ0wCTgJFHaR52Z4CPJSDnBKItZIuEvRHubNdhUp4JdFkED9sDC_GUL_P2TUTZtpyQe-P19wbCcRYA_tb1AO5YS7fFE7g3pjV7bmMqE2BkAoBwhPyT3auxd"/>
<div>
<h4 className="font-bold text-on-surface">Sofía Méndez</h4>
<p className="text-xs text-on-surface-variant">sofia@jazm.io • Agente Senior</p>
</div>
</div>
<div className="flex items-center gap-8">
<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-wide">Activo</span>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 hover:bg-surface-container-highest rounded-lg"><span className="material-symbols-outlined text-slate-600" data-icon="edit">edit</span></button>
<button className="p-2 hover:bg-error-container hover:text-error rounded-lg"><span className="material-symbols-outlined" data-icon="delete">delete</span></button>
</div>
</div>
</div>
{/*  User Item  */}
<div className="group flex items-center justify-between p-4 rounded-2xl hover:bg-surface-container-low transition-all">
<div className="flex items-center gap-4">
<img alt="Carlos" className="w-12 h-12 rounded-2xl" data-alt="mid-adult man with dark beard and hair looking at the camera with a confident smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFU6d0LmBvzV11UF13AkQH7poabGWhvwoivLFllkh-bXvCxmeUFhQVzJllyHyMNEk2KH6vgVj06bWQLdBQm9ai07EuLV1QiVcKWVPtgG1vSi8D_af5BLzLbpAAZ5A1ZUPeWrequlQ8p1cr_8zKdCRFatfNyWa6kc7lJXsRYE4gUp_v5b4_VU6jzhL_YY5P8YfmAykReJNTlmr7SP6wPw0vK7nzMVnV8J9eIY3k5-Kb_y5nsDOAS52Y_V69FlvETNjHNwRC4n4iCQMR"/>
<div>
<h4 className="font-bold text-on-surface">Carlos Ruiz</h4>
<p className="text-xs text-on-surface-variant">carlos@jazm.io • Agente IA</p>
</div>
</div>
<div className="flex items-center gap-8">
<span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase tracking-wide">Pendiente</span>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 hover:bg-surface-container-highest rounded-lg"><span className="material-symbols-outlined text-slate-600" data-icon="edit">edit</span></button>
<button className="p-2 hover:bg-error-container hover:text-error rounded-lg"><span className="material-symbols-outlined" data-icon="delete">delete</span></button>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Right Column: Role & Permissions Editor (4 cols)  */}
<div className="lg:col-span-4 flex flex-col gap-6">
<div className="bg-primary-container/10 rounded-3xl p-8 border border-primary/5">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="shield_lock">shield_lock</span>
<h3 className="text-xl font-bold text-on-surface">Gestión de Roles</h3>
</div>
<div className="space-y-4">
<div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-primary/10">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="font-bold text-primary">Agente de Ventas</h4>
<p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Nivel Operativo</p>
</div>
<span className="material-symbols-outlined text-primary cursor-pointer" data-icon="more_vert">more_vert</span>
</div>
<div className="space-y-3">
<label className="flex items-center justify-between text-sm group cursor-pointer">
<span className="text-on-surface-variant group-hover:text-on-surface">Acceso a Leads</span>
<div className="w-8 h-4 bg-primary rounded-full relative">
<div className="w-2.5 h-2.5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
</div>
</label>
<label className="flex items-center justify-between text-sm group cursor-pointer">
<span className="text-on-surface-variant group-hover:text-on-surface">Exportar Reportes</span>
<div className="w-8 h-4 bg-slate-300 rounded-full relative">
<div className="w-2.5 h-2.5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
</div>
</label>
<label className="flex items-center justify-between text-sm group cursor-pointer">
<span className="text-on-surface-variant group-hover:text-on-surface">Configuración CRM</span>
<div className="w-8 h-4 bg-slate-300 rounded-full relative">
<div className="w-2.5 h-2.5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
</div>
</label>
<label className="flex items-center justify-between text-sm group cursor-pointer">
<span className="text-on-surface-variant group-hover:text-on-surface">Manejo de Agentes IA</span>
<div className="w-8 h-4 bg-primary rounded-full relative">
<div className="w-2.5 h-2.5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
</div>
</label>
</div>
<button className="w-full mt-6 py-2 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg border border-primary/20 transition-colors">
                                    Actualizar Permisos
                                </button>
</div>
<div className="bg-surface-container-low p-5 rounded-2xl hover:bg-white transition-all cursor-pointer">
<div className="flex justify-between items-center">
<h4 className="font-bold text-on-surface">Supervisor</h4>
<span className="material-symbols-outlined text-slate-400" data-icon="chevron_right">chevron_right</span>
</div>
</div>
<div className="bg-surface-container-low p-5 rounded-2xl hover:bg-white transition-all cursor-pointer">
<div className="flex justify-between items-center">
<h4 className="font-bold text-on-surface">Analista de Datos</h4>
<span className="material-symbols-outlined text-slate-400" data-icon="chevron_right">chevron_right</span>
</div>
</div>
<button className="w-full py-4 rounded-2xl border-2 border-dashed border-outline-variant text-slate-500 font-bold flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-all">
<span className="material-symbols-outlined" data-icon="add">add</span>
                                Nuevo Rol de Usuario
                            </button>
</div>
</div>
{/*  AI Insights Panel  */}
<div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
<span className="material-symbols-outlined text-secondary mb-4" data-icon="auto_awesome" style={{fontVariationSettings: '\'FILL\' 1'}}>auto_awesome</span>
<h4 className="font-headline text-lg font-bold mb-2">Recomendación IA</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                            Hemos detectado que <span className="text-secondary font-bold">Sofía Méndez</span> tiene un rendimiento superior en cierres. ¿Deseas asignarle el rol de <span className="text-primary-fixed">Team Lead</span> para optimizar el equipo de ventas?
                        </p>
<div className="mt-6 flex gap-3">
<button className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold hover:bg-white/20 transition-colors">Ignorar</button>
<button className="bg-secondary text-on-secondary px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-secondary/20">Aplicar Cambio</button>
</div>
</div>
</div>
</div>
</div>

        </div>
    );
};

export default Page_gesti_n_de_equipos_y_roles;
