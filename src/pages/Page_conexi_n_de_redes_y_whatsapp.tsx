import React from 'react';

const Page_conexi_n_de_redes_y_whatsapp: React.FC = () => {
    return (
        <div className="w-full">

            {/*  Dynamic Island / TopAppBar (Authority: JSON & DS)  */}

            <section className="p-8 pt-24 max-w-7xl mx-auto">
                {/*  Header Section (Editorial Authority)  */}
                <div className="mb-12">
                    <h1 className="text-5xl font-extrabold text-on-surface tracking-tight mb-2">Comunicaciones</h1>
                    <p className="text-on-surface-variant max-w-2xl text-lg">Centraliza tus canales de mensajería y asigna el cerebro de tu empresa a cada interacción.</p>
                </div>
                {/*  Bento Grid Layout  */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/*  WhatsApp Sync Card (Priority)  */}
                    <div className="md:col-span-7 bg-surface-container-low rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#25D366]/10 p-3 rounded-2xl">
                                        <svg className="w-8 h-8 fill-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">WhatsApp Business</h3>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Sincronizado</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="text-primary font-bold text-sm hover:underline">Gestionar Dispositivo</button>
                            </div>
                            <div className="bg-surface-container-highest/30 rounded-2xl p-6 mb-6">
                                <p className="text-sm font-medium text-slate-600 mb-4 uppercase tracking-tighter">Estado de la conexión</p>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-3xl font-black text-on-surface">582ms</span>
                                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '\'FILL\' 1' }}>speed</span>
                                </div>
                                <p className="text-xs text-slate-500">Latencia promedio de respuesta IA</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-primary text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined">sync</span>
                                Refrescar WhatsApp Web
                            </button>
                        </div>
                        {/*  Decorative Abstract Graph  */}
                        <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                            <svg height="200" viewBox="0 0 400 200" width="400">
                                <path d="M0 150 Q100 50 200 150 T400 150" fill="none" stroke="currentColor" strokeWidth="20"></path>
                            </svg>
                        </div>
                    </div>
                    {/*  QR Integration / Meta Connect  */}
                    <div className="md:col-span-5 bg-surface-container rounded-3xl p-8 flex flex-col">
                        <h3 className="text-xl font-bold mb-6">Conectar Redes Meta</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl hover:bg-white transition-colors cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 fill-blue-600" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold">Facebook Pages</p>
                                        <p className="text-xs text-slate-500">Sin conectar</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">add_circle</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl hover:bg-white transition-colors cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-pink-600/10 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 fill-pink-600" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold">Instagram Business</p>
                                        <p className="text-xs text-slate-500">Sin conectar</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">add_circle</span>
                            </div>
                        </div>
                        <div className="mt-auto bg-primary/5 rounded-2xl p-4 border border-primary/10">
                            <p className="text-xs font-semibold text-primary mb-1">TIP IA</p>
                            <p className="text-xs text-on-surface-variant leading-relaxed">Conectar Instagram permite a tus agentes IA enviar enlaces de productos directamente a los DMs.</p>
                        </div>
                    </div>
                    {/*  Agent Assignment Panel  */}
                    <div className="md:col-span-12 bg-surface rounded-3xl p-8 border border-outline-variant/10 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                            <div>
                                <h3 className="text-2xl font-bold">Asignación de Agentes IA</h3>
                                <p className="text-on-surface-variant">Configura qué agentes atenderán cada línea de entrada.</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-surface-container-high px-4 py-2 rounded-xl text-sm font-semibold">Reglas Globales</button>
                                <button className="bg-surface-container-high px-4 py-2 rounded-xl text-sm font-semibold">Historial de Flujos</button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-surface-container-high">
                                        <th className="pb-4 px-2">Canal</th>
                                        <th className="pb-4 px-2">Identificador</th>
                                        <th className="pb-4 px-2">Agente Asignado</th>
                                        <th className="pb-4 px-2">Modo</th>
                                        <th className="pb-4 px-2 text-right">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-surface-container-low">
                                    {/*  Row 1  */}
                                    <tr className="group">
                                        <td className="py-6 px-2">
                                            <div className="flex items-center gap-2">
                                                <span className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center">
                                                    <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                                                </span>
                                                <span className="font-semibold">WhatsApp</span>
                                            </div>
                                        </td>
                                        <td className="py-6 px-2 text-slate-500 font-medium">+34 600 000 000</td>
                                        <td className="py-6 px-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                                                    <img className="w-full h-full object-cover" data-alt="Cybernetic humanoid portrait with soft blue neon lighting in a minimalist digital environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE_MI1xbJcDYHkElzrFypoq0V5iJOWzRmspSRvi7QuKszDH-z4d4n7ZKeYQHibaB7V25dnO9njyMISljxxR6F7aTUZOCjCGO9LMm8GQI7FF3k5Oa1WDTNHNPn6k8gI_rZRKK1Hho-lxtCQGPnOWPON1sTQs4tnNNq4JvC11D_eOmwTHGoulDfeQIRZfc3ZuD2iZiknSH5697tH8LEyrm5JAJrTYNbq0Dv36gIfT7fLaXRXa68FBlkAPBnDgH4UxhKquHvbK9dwivX3" />
                                                </div>
                                                <span className="font-bold">Agente "Ventas"</span>
                                            </div>
                                        </td>
                                        <td className="py-6 px-2">
                                            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-tight">Full Autopilot</span>
                                        </td>
                                        <td className="py-6 px-2 text-right">
                                            <button className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors">edit</button>
                                        </td>
                                    </tr>
                                    {/*  Row 2  */}
                                    <tr className="group">
                                        <td className="py-6 px-2">
                                            <div className="flex items-center gap-2">
                                                <span className="w-8 h-8 rounded-lg bg-pink-600/20 flex items-center justify-center">
                                                    <svg className="w-4 h-4 fill-pink-600" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"></path></svg>
                                                </span>
                                                <span className="font-semibold">Instagram</span>
                                            </div>
                                        </td>
                                        <td className="py-6 px-2 text-slate-500 font-medium">@mi_tienda_oficial</td>
                                        <td className="py-6 px-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                                                    <img className="w-full h-full object-cover" data-alt="Abstract 3D digital head representation with flowing gold and silver lines against a clean white studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8QgsZK3BvTYcFB3GI7BdWZcnZ1nOTtXZjFwp69xK1NnO20qdKVMqEYEXHxNmtk672J-qDEWtHnhAY2OHiNqSb-5E9o96Nth8U5tMzXnXuKc4t4wp6OQs4HeaY8euS6X8Nr7n2B5TDE-a3pOMe-bPeYqUIMq_mtvxkg02Zh74MwFVYWmCZDHO6Kj0lsg80oVe86EZxvbrCYW5HUX-HZsTtJqX7mexMYmgZsKDPDHVgJcIaR3aNjUlX8nmdMwPtoa4-faC6701f8S4P" />
                                                </div>
                                                <span className="font-bold">Agente "Soporte"</span>
                                            </div>
                                        </td>
                                        <td className="py-6 px-2">
                                            <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-tight">Híbrido</span>
                                        </td>
                                        <td className="py-6 px-2 text-right">
                                            <button className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors">edit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/*  Live Monitoring Sidebar (Asymmetric Column)  */}
                    <div className="md:col-span-12 bg-on-background rounded-3xl p-8 text-white">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight">Monitor en Tiempo Real</h3>
                                <p className="text-slate-400">Actividad de los Agentes IA en vivo.</p>
                            </div>
                            <div className="bg-secondary px-4 py-2 rounded-full text-black font-bold text-xs">9 CONVERSACIONES ACTIVAS</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/*  Chat Mini-Card  */}
                            <div className="bg-white/10 p-5 rounded-2xl border border-white/5">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold text-[#25D366]">WhatsApp Business</span>
                                    <span className="text-[10px] text-slate-500">Hace 2 min</span>
                                </div>
                                <p className="text-sm italic mb-4">"El cliente pregunta por el stock de zapatillas rojas talle 42..."</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                    <span className="text-xs font-semibold text-slate-300">IA respondiendo...</span>
                                </div>
                            </div>
                            <div className="bg-white/10 p-5 rounded-2xl border border-white/5">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold text-pink-500">Instagram DM</span>
                                    <span className="text-[10px] text-slate-500">Hace 5 min</span>
                                </div>
                                <p className="text-sm italic mb-4">"¿Tienen envío internacional a México?"</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                    <span className="text-xs font-semibold text-slate-300">IA envió presupuesto.</span>
                                </div>
                            </div>
                            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 opacity-50">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold text-blue-500">Facebook Messenger</span>
                                    <span className="text-[10px] text-slate-500">Hace 45 min</span>
                                </div>
                                <p className="text-sm italic mb-4">"Gracias por la atención."</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                                    <span className="text-xs font-semibold text-slate-300">Cerrado por IA.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Dynamic FAB (Contextual for Home/Dashboard/Comms)  */}
            <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary rounded-full text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">chat</span>
            </button>

        </div>
    );
};

export default Page_conexi_n_de_redes_y_whatsapp;


