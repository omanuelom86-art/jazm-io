import React from 'react';

const Page_3_3_cat_logo_de_productos_e_inventarios: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  TopNavBar (Fixed)  */}

{/*  Content Body  */}
<div className="mt-16 p-8 space-y-8 max-w-7xl mx-auto w-full">
{/*  Header Section  */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
<div>
<h2 className="font-headline font-bold text-3xl text-on-surface tracking-tight">Catálogo e Inventario</h2>
<p className="text-on-surface-variant mt-1">Gestione sus productos optimizados para ventas asistidas por IA.</p>
</div>
<div className="flex items-center gap-3">
<button className="bg-surface-container-high px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="filter_list">filter_list</span>
                        Filtros
                    </button>
<button className="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
<span className="material-symbols-outlined text-[20px]" data-icon="add_box">add_box</span>
                        Nuevo Producto
                    </button>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Quick Stats (Wide Column)  */}
<div className="md:col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-2">
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Total Productos</span>
<div className="flex items-end justify-between">
<span className="text-3xl font-headline font-bold">1,248</span>
<span className="text-secondary font-bold text-xs bg-secondary-container/30 px-2 py-1 rounded-lg">+12%</span>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-2">
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Valor de Stock</span>
<div className="flex items-end justify-between">
<span className="text-3xl font-headline font-bold">$42.5k</span>
<span className="text-primary font-bold text-xs bg-primary-fixed/30 px-2 py-1 rounded-lg">Estable</span>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-2">
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Bajo Stock</span>
<div className="flex items-end justify-between">
<span className="text-3xl font-headline font-bold">14</span>
<span className="text-error font-bold text-xs bg-error-container/30 px-2 py-1 rounded-lg">Urgente</span>
</div>
</div>
</div>
{/*  AI Insights Sidebar (Asymmetric Floating Column)  */}
<div className="md:col-span-12 lg:col-span-4 bg-surface-container-highest/50 rounded-3xl p-6 border border-outline-variant/10">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary" data-icon="psychology">psychology</span>
<h3 className="font-headline font-bold text-lg">AI Sales Insight</h3>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                        "El <span className="font-bold text-on-surface">Nexus Hub Pro</span> tiene una alta probabilidad de agotarse en las próximas 48h según la tendencia de los agentes de ventas."
                    </p>
<button className="w-full py-3 bg-white/50 border border-primary/20 text-primary rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all">
                        GENERAR REPOSICIÓN AUTOMÁTICA
                    </button>
</div>
{/*  Main Product Grid  */}
<div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
{/*  Product Card 1  */}
<div className="bg-surface-container-lowest rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
<div className="relative aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="clean minimal product shot of a high-end smartwatch on a white marble surface with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqaWSaDENya54HO5Bol1y-vju0YLm1wAEY6-ZYJnuasy1SFvAdNhsSVY_8BW2negJCJVODZXinglNU3SsP8ke5kNpxj-YewXQUfjKaMyoiDK3hzpSieadnStzqrf3HoV3pAI67VGDAMjFJUoCMaTJCcJWiNq01NTIbdOXLvF2FMNF2wY0mPT7SWqd1rIXTjsZpWoOw0tmApinf6lyS3S3BWfQ_fmDryRf8mFg_jqGR8ZtON3X8eB0EYRt3BTUSnMrkkLDJcMBYsL3r"/>
<div className="absolute top-3 left-3">
<span className="bg-secondary-container text-on-secondary-container text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-tight">En Stock</span>
</div>
</div>
<div className="p-5 space-y-3">
<div>
<h4 className="font-headline font-bold text-lg group-hover:text-primary transition-colors">Nexus Watch Pro</h4>
<p className="text-xs text-on-surface-variant line-clamp-1">Wearable de alto rendimiento para agentes de campo.</p>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-outline font-bold uppercase tracking-widest">Precio</p>
<p className="text-xl font-headline font-extrabold text-on-surface">$299.00</p>
</div>
<div className="text-right">
<p className="text-[10px] text-outline font-bold uppercase tracking-widest">Inventario</p>
<p className="text-sm font-bold text-secondary">84 unidades</p>
</div>
</div>
<div className="pt-3 flex gap-2">
<button className="flex-1 bg-surface-container-high py-2 rounded-xl text-xs font-bold hover:bg-surface-container-highest transition-colors">Editar</button>
<button className="w-10 h-10 flex items-center justify-center bg-primary-container/10 text-primary rounded-xl hover:bg-primary-container hover:text-white transition-all">
<span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
</button>
</div>
</div>
</div>
{/*  Product Card 2  */}
<div className="bg-surface-container-lowest rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
<div className="relative aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="studio photography of premium wireless headphones in matte black finish on a dark geometric pedestal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcyXEMtDo5oBxWCa7PHD3lF5Ikj49XEExV4qeuV47Bkd3TpnD0cIHbY0unABTjPLVCByq_JhRtz42t27dJdct2Y51M47OkPHSASek4xP0a4Q57Jd6HerBSU3sB7Ph_lLO303M0U16R-YFqGdPOUwmQwtBop3ecSbRc94iXxgph21hS7MV9lAWGuHbcUnvgurLR0aPZlyiEeSxqLHB2Kd6uXFkl838Xgb__fYSVK_pC95jAEwoiuYDp4n0nDy7LDOSULWZTdHaH0vrY"/>
<div className="absolute top-3 left-3">
<span className="bg-error-container text-on-error-container text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-tight">Stock Bajo</span>
</div>
</div>
<div className="p-5 space-y-3">
<div>
<h4 className="font-headline font-bold text-lg group-hover:text-primary transition-colors">Sonic Flow X</h4>
<p className="text-xs text-on-surface-variant line-clamp-1">Cancelación de ruido con IA integrada.</p>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-outline font-bold uppercase tracking-widest">Precio</p>
<p className="text-xl font-headline font-extrabold text-on-surface">$185.50</p>
</div>
<div className="text-right">
<p className="text-[10px] text-outline font-bold uppercase tracking-widest">Inventario</p>
<p className="text-sm font-bold text-error">12 unidades</p>
</div>
</div>
<div className="pt-3 flex gap-2">
<button className="flex-1 bg-surface-container-high py-2 rounded-xl text-xs font-bold hover:bg-surface-container-highest transition-colors">Editar</button>
<button className="w-10 h-10 flex items-center justify-center bg-primary-container/10 text-primary rounded-xl hover:bg-primary-container hover:text-white transition-all">
<span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
</button>
</div>
</div>
</div>
{/*  Product Card 3  */}
<div className="bg-surface-container-lowest rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
<div className="relative aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="vintage style instant camera with modern minimalist design on a bright teal background with sharp shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmz_a1m5daIKj4395RZI2riYftak8NzML3YNkrbuAWHchzHKGteT5QwvhdU9-jsBzrCth_bxypD9ePzXdB5CltMSqRmEf9Fu4sQWt_TfD1XpRlAm-XIZ2CGJGPmcspI9OX9x7ujnud_T1cRC1gN5qhzVhAvygxPV8Yqq2U8z83t0G9_kI67reHKjbp15V9ZNcu8C-g0ENBjrIE1p_qLjdGrIUwWVFBxdh_UFYAO4AHA9qgSDIajqzJicJFfnGdh74MN7IsTmHNhMv-"/>
<div className="absolute top-3 left-3">
<span className="bg-secondary-container text-on-secondary-container text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-tight">En Stock</span>
</div>
</div>
<div className="p-5 space-y-3">
<div>
<h4 className="font-headline font-bold text-lg group-hover:text-primary transition-colors">Ether Cam V1</h4>
<p className="text-xs text-on-surface-variant line-clamp-1">Captura inteligente para digitalización de activos.</p>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-outline font-bold uppercase tracking-widest">Precio</p>
<p className="text-xl font-headline font-extrabold text-on-surface">$450.00</p>
</div>
<div className="text-right">
<p className="text-[10px] text-outline font-bold uppercase tracking-widest">Inventario</p>
<p className="text-sm font-bold text-secondary">32 unidades</p>
</div>
</div>
<div className="pt-3 flex gap-2">
<button className="flex-1 bg-surface-container-high py-2 rounded-xl text-xs font-bold hover:bg-surface-container-highest transition-colors">Editar</button>
<button className="w-10 h-10 flex items-center justify-center bg-primary-container/10 text-primary rounded-xl hover:bg-primary-container hover:text-white transition-all">
<span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
</button>
</div>
</div>
</div>
{/*  Product Card 4  */}
<div className="bg-surface-container-lowest rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
<div className="relative aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="luxury leather wall clock on a neutral gray wall with soft ambient lighting and clean architectural lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOB8s_yoKfK2P8az8kuCMQYxtgM_83H-3TKu70jBWhEH1t6ID8L145D9PuT7NYiP1CHNoP-cLfDhSN2ER8hgYrGGwCDpgksvoMp8CUQuF_l37oi-_XqP9vitmQ5drVdeu8K8HhcKM6uLKijfEe7V8GP3tHLLuY_hw-DIChTa_UOia-bA_N95OK9uGnhqKDTacsALPz2eGBW1RICfL2OYI-onW2IDC0_K4_RTnJJdfEmSBW5rL_UJxANPGFGTRrkFJ68KUCQIJxCihS"/>
<div className="absolute top-3 left-3">
<span className="bg-surface-container-highest text-on-surface-variant text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-tight">Sin Stock</span>
</div>
</div>
<div className="p-5 space-y-3">
<div>
<h4 className="font-headline font-bold text-lg group-hover:text-primary transition-colors">Tempo Dial Pro</h4>
<p className="text-xs text-on-surface-variant line-clamp-1">Sincronización horaria para equipos globales.</p>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-outline font-bold uppercase tracking-widest">Precio</p>
<p className="text-xl font-headline font-extrabold text-on-surface">$120.00</p>
</div>
<div className="text-right">
<p className="text-[10px] text-outline font-bold uppercase tracking-widest">Inventario</p>
<p className="text-sm font-bold text-outline">0 unidades</p>
</div>
</div>
<div className="pt-3 flex gap-2">
<button className="flex-1 bg-surface-container-high py-2 rounded-xl text-xs font-bold hover:bg-surface-container-highest transition-colors">Reordenar</button>
<button className="w-10 h-10 flex items-center justify-center bg-primary-container/10 text-primary rounded-xl hover:bg-primary-container hover:text-white transition-all">
<span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/*  Detailed Inventory Table (For precision management)  */}
<div className="bg-surface-container-low rounded-3xl p-2 overflow-hidden">
<div className="px-6 py-4 flex items-center justify-between">
<h3 className="font-headline font-bold text-xl">Lista de Movimientos Recientes</h3>
<button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                        Ver historial completo <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-[10px] font-black text-outline uppercase tracking-widest border-b border-outline-variant/10">
<th className="px-6 py-4">Producto</th>
<th className="px-6 py-4">SKU</th>
<th className="px-6 py-4">Categoría</th>
<th className="px-6 py-4">Última Venta</th>
<th className="px-6 py-4">Estado</th>
<th className="px-6 py-4 text-right">Acción</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/5">
<tr className="hover:bg-surface-container transition-colors group">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="thumbnail smartwatch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMrrtjly_OnOZhXUEPV0tSvacMCjz6Jt1TPDy0doj27FNVbvGWKyx-DD2-r_r16tQzNkNhkeTXwbtzkrvfT5Vv0Lqe5SQqxok42xc8OajNOMGeSF2Vzl90yalgZq-MjHzirM-vdGNMjSjMkict5WxI5wJXq1rolooYEPm-CnObio_zkhsEygbfjFh5djHmna27DKzecvQExVoTAJlKDipLshW5Ph0iqVeWtcvsauT78YVJZPFDK3k7ypSltfV3Dgr-lrkB9Zw6-ICF"/>
</div>
<span className="text-sm font-semibold">Nexus Watch Pro</span>
</td>
<td className="px-6 py-4 text-xs font-mono text-on-surface-variant">NX-W-2024-PR</td>
<td className="px-6 py-4 text-sm">Wearables</td>
<td className="px-6 py-4 text-sm">Hace 2 horas</td>
<td className="px-6 py-4">
<span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container">Salida Stock</span>
</td>
<td className="px-6 py-4 text-right">
<button className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="more_vert">more_vert</button>
</td>
</tr>
<tr className="hover:bg-surface-container transition-colors group">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="thumbnail headphones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcSHdIQuaYLwV6YFAgZGJwvknU3tvwXr4rAHnVQO_vR9E_b4HK4VdtO_rgCZ-HFupol_reJOLeI3lz-zZs8LefXbKqzfBNCsoQo_A2V8EQM50P-vJG4W4Hp2fpdp3mbiaOHh31cJT5zm_iL_iS78Cs21x17gA93IhGMdK3P6NwKB-jYZZ_rAe4huGTx2tfNYl2buXcDCf2L_HPrfLBQvAH1nKJMDpxjyHvcbIbD_IORNLu_GIpr_SwlvmOl71sN5occdGtz4d0iGBp"/>
</div>
<span className="text-sm font-semibold">Sonic Flow X</span>
</td>
<td className="px-6 py-4 text-xs font-mono text-on-surface-variant">SF-H-1088-XL</td>
<td className="px-6 py-4 text-sm">Audio</td>
<td className="px-6 py-4 text-sm">Hace 15 min</td>
<td className="px-6 py-4">
<span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary-fixed/50 text-on-primary-fixed">Actualización IA</span>
</td>
<td className="px-6 py-4 text-right">
<button className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="more_vert">more_vert</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  Floating Action Button (Only on main dashboard-like screens)  */}
<button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-3xl" data-icon="bolt" style={{fontVariationSettings: '\'FILL\' 1'}}>bolt</span>
</button>

        </div>
    );
};

export default Page_3_3_cat_logo_de_productos_e_inventarios;
