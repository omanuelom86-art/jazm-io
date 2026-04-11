import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    Settings,
    BarChart3,
    Users,
    BrainCircuit,
    MessageSquare,
    ShieldCheck,
    HelpCircle,
    Database,
    Building2,
    Box
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const modules = [
    {
        id: '1', title: 'Dashboard', icon: LayoutDashboard, routes: [
            { name: 'Resumen de Metas', path: '11_resumen_de_metas' },
            { name: 'Análisis de Embudo', path: '12_an_lisis_de_embudo' },
            { name: 'Estadísticas Conversión', path: '13_estad_sticas_de_conversi_n' },
            { name: 'Dashboard IA', path: '1_dashboard_ia' }
        ]
    },
    {
        id: '2', title: 'CRM', icon: Database, routes: [
            { name: 'Constructor Embudos', path: '21_constructor_de_embudos_y_etapas' },
            { name: 'Fichas y Expedientes', path: '22_gesti_n_de_fichas_y_expedientes' },
            { name: 'Campos y Etiquetas', path: '23_campos_y_etiquetas' },
            { name: 'Cuestionarios y Machotes', path: '24_cuestionarios_y_machotes' }
        ]
    },
    {
        id: '3', title: 'Embudos Creados', icon: BarChart3, routes: [
            { name: 'Vista Kanban', path: '31_vista_kanban_multi_estado' },
            { name: 'Filtros y Segmentación', path: '32_filtros_avanzados_y_segmentaci_n' },
            { name: 'Catálogo e Inventarios', path: '33_cat_logo_de_productos_e_inventarios' }
        ]
    },
    {
        id: '4', title: 'Rendimiento Agentes IA', icon: BrainCircuit, routes: [
            { name: 'Efectividad Agentes', path: '41_estad_sticas_de_efectividad' },
            { name: 'Registro Conversaciones', path: '42_registro_de_conversaciones' },
            { name: 'Análisis Sentimiento', path: '43_an_lisis_de_sentimiento' }
        ]
    },
    {
        id: '5', title: 'Empleados Virtuales', icon: Users, routes: [
            { name: 'Selección de Perfil', path: '51_selecci_n_de_perfil_de_empleado' },
            { name: 'Personalización IA', path: '52_personalizaci_n_de_caracter_sticas' },
            { name: 'KPIs Empleados', path: '53_medici_n_de_kpi_por_empleado_ia' }
        ]
    },
    {
        id: '6', title: 'Redes y WhatsApp', icon: MessageSquare, routes: [
            { name: 'Integración WhatsApp', path: '61_integraci_n_de_whatsapp_web' },
            { name: 'Panel Redes Sociales', path: '62_panel_de_redes_sociales' },
            { name: 'Reglas IA Chats', path: '63_reglas_de_ia_para_chats' }
        ]
    },
    {
        id: '7', title: 'Equipos', icon: ShieldCheck, routes: [
            { name: 'Gestión Usuarios', path: '71_administraci_n_de_usuarios_humanos' },
            { name: 'Permisos Roles', path: '72_definici_n_de_permisos_por_rol' },
            { name: 'Auditoría Actividad', path: '73_auditor_a_de_actividad' }
        ]
    },
    {
        id: '8', title: 'Widget', icon: Box, routes: [
            { name: 'Configuración Widget', path: '81_configuraci_n_de_widget' },
            { name: 'Personalización Visual', path: '82_personalizaci_n_visual' }
        ]
    },
    {
        id: '9', title: 'Configuración', icon: Settings, routes: [
            { name: 'Preferencias Empresa', path: '91_preferencias_de_empresa' },
            { name: 'Notificaciones', path: '92_notificaciones_y_alertas' },
            { name: 'API y Webhooks', path: '93_integraciones_api_y_webhooks' }
        ]
    },
    {
        id: '10', title: 'Super Administrador', icon: Building2, routes: [
            { name: 'Gestión Instancias', path: '101_gesti_n_de_instancias_y_empresas' },
            { name: 'Consumo IA', path: '102_monitoreo_de_consumo_de_ia' },
            { name: 'Ingresos y Gastos', path: '103_reportes_de_ingresos_y_gastos' }
        ]
    },
    {
        id: '11', title: 'Ayuda', icon: HelpCircle, routes: [
            { name: 'Documentación', path: '111_documentaci_n_y_tutoriales' },
            { name: 'Soporte Técnico', path: '112_soporte_t_cnico_directo' }
        ]
    }
];

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [expandedModule, setExpandedModule] = useState<string | null>('1');

    return (
        <aside className={cn(
            "h-screen bg-white border-r border-outline/10 flex flex-col transition-all duration-300",
            collapsed ? "w-20" : "w-72"
        )}>
            <div className="p-6 flex items-center justify-between">
                {!collapsed && <span className="font-headline text-2xl font-black text-primary tracking-tighter">JAZM.IO</span>}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-2 rounded-lg hover:bg-surface transition-colors text-outline"
                >
                    {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-2 custom-scrollbar">
                {modules.map((mod) => (
                    <div key={mod.id} className="space-y-1">
                        <button
                            onClick={() => !collapsed && setExpandedModule(expandedModule === mod.id ? null : mod.id)}
                            className={cn(
                                "w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all",
                                expandedModule === mod.id ? "bg-primary/5 text-primary" : "text-outline hover:bg-surface",
                                collapsed && "justify-center px-0"
                            )}
                        >
                            <mod.icon size={22} />
                            {!collapsed && (
                                <>
                                    <span className="flex-1 text-left font-medium text-sm">{mod.title}</span>
                                    <div className={cn("transition-transform", expandedModule === mod.id ? "rotate-90" : "")}>
                                        <ChevronRight size={16} />
                                    </div>
                                </>
                            )}
                        </button>

                        {!collapsed && expandedModule === mod.id && (
                            <div className="ml-9 space-y-1">
                                {mod.routes.map((route) => (
                                    <NavLink
                                        key={route.path}
                                        to={`/${route.path}`}
                                        className={({ isActive }) => cn(
                                            "block px-3 py-1.5 rounded-lg text-xs transition-colors",
                                            isActive ? "bg-primary text-white font-semibold" : "text-outline hover:bg-surface"
                                        )}
                                    >
                                        {route.name}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            <div className="p-4 border-t border-outline/10">
                <NavLink
                    to="/jazmio_ingreso"
                    className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-xl text-outline hover:bg-error/5 hover:text-error transition-all",
                        collapsed && "justify-center"
                    )}
                >
                    <span className="material-symbols-outlined">logout</span>
                    {!collapsed && <span className="text-sm font-medium">Cerrar Sesión</span>}
                </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;


