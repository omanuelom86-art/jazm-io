import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';

// Error Boundary simple para carga de páginas
const PageLoader = () => (
    <div className="flex h-screen w-screen items-center justify-center bg-surface">
        <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-outline font-medium animate-pulse">Iniciando JAZM.IO...</p>
        </div>
    </div>
);

// Páginas Públicas
const Page_jazm_io_ingreso = lazy(() => import('./pages/Page_jazm_io_ingreso'));

// Páginas del Dashboard (Lazy Loading)
const Page_1_1_resumen_de_metas = lazy(() => import('./pages/Page_1_1_resumen_de_metas'));
const Page_1_2_an_lisis_de_embudo = lazy(() => import('./pages/Page_1_2_an_lisis_de_embudo'));
const Page_1_3_estad_sticas_de_conversi_n = lazy(() => import('./pages/Page_1_3_estad_sticas_de_conversi_n'));
const Page_1_dashboard_ia = lazy(() => import('./pages/Page_1_dashboard_ia'));

const Page_2_1_constructor_de_embudos_y_etapas = lazy(() => import('./pages/Page_2_1_constructor_de_embudos_y_etapas'));
const Page_2_2_gesti_n_de_fichas_y_expedientes = lazy(() => import('./pages/Page_2_2_gesti_n_de_fichas_y_expedientes'));
const Page_2_3_campos_y_etiquetas = lazy(() => import('./pages/Page_2_3_campos_y_etiquetas'));
const Page_2_4_cuestionarios_y_machotes = lazy(() => import('./pages/Page_2_4_cuestionarios_y_machotes'));

const Page_3_1_vista_kanban_multi_estado = lazy(() => import('./pages/Page_3_1_vista_kanban_multi_estado'));
const Page_3_2_filtros_avanzados_y_segmentaci_n = lazy(() => import('./pages/Page_3_2_filtros_avanzados_y_segmentaci_n'));
const Page_3_3_cat_logo_de_productos_e_inventarios = lazy(() => import('./pages/Page_3_3_cat_logo_de_productos_e_inventarios'));

const Page_4_1_estad_sticas_de_efectividad = lazy(() => import('./pages/Page_4_1_estad_sticas_de_efectividad'));
const Page_4_2_registro_de_conversaciones = lazy(() => import('./pages/Page_4_2_registro_de_conversaciones'));
const Page_4_3_an_lisis_de_sentimiento = lazy(() => import('./pages/Page_4_3_an_lisis_de_sentimiento'));

const Page_5_1_selecci_n_de_perfil_de_empleado = lazy(() => import('./pages/Page_5_1_selecci_n_de_perfil_de_empleado'));
const Page_5_2_personalizaci_n_de_caracter_sticas = lazy(() => import('./pages/Page_5_2_personalizaci_n_de_caracter_sticas'));
const Page_5_3_medici_n_de_kpi_por_empleado_ia = lazy(() => import('./pages/Page_5_3_medici_n_de_kpi_por_empleado_ia'));

const Page_6_1_integraci_n_de_whatsapp_web = lazy(() => import('./pages/Page_6_1_integraci_n_de_whatsapp_web'));
const Page_6_2_panel_de_redes_sociales = lazy(() => import('./pages/Page_6_2_panel_de_redes_sociales'));
const Page_6_3_reglas_de_ia_para_chats = lazy(() => import('./pages/Page_6_3_reglas_de_ia_para_chats'));

const Page_7_1_administraci_n_de_usuarios_humanos = lazy(() => import('./pages/Page_7_1_administraci_n_de_usuarios_humanos'));
const Page_7_2_definici_n_de_permisos_por_rol = lazy(() => import('./pages/Page_7_2_definici_n_de_permisos_por_rol'));
const Page_7_3_auditor_a_de_actividad = lazy(() => import('./pages/Page_7_3_auditor_a_de_actividad'));

const Page_8_1_configuraci_n_de_widget = lazy(() => import('./pages/Page_8_1_configuraci_n_de_widget'));
const Page_8_2_personalizaci_n_visual = lazy(() => import('./pages/Page_8_2_personalizaci_n_visual'));

const Page_9_1_preferencias_de_empresa = lazy(() => import('./pages/Page_9_1_preferencias_de_empresa'));
const Page_9_2_notificaciones_y_alertas = lazy(() => import('./pages/Page_9_2_notificaciones_y_alertas'));
const Page_9_3_integraciones_api_y_webhooks = lazy(() => import('./pages/Page_9_3_integraciones_api_y_webhooks'));

const Page_10_1_gesti_n_de_instancias_y_empresas = lazy(() => import('./pages/Page_10_1_gesti_n_de_instancias_y_empresas'));
const Page_10_2_monitoreo_de_consumo_de_ia = lazy(() => import('./pages/Page_10_2_monitoreo_de_consumo_de_ia'));
const Page_10_3_reportes_de_ingresos_y_gastos = lazy(() => import('./pages/Page_10_3_reportes_de_ingresos_y_gastos'));

const Page_11_1_documentaci_n_y_tutoriales = lazy(() => import('./pages/Page_11_1_documentaci_n_y_tutoriales'));
const Page_11_2_soporte_t_cnico_directo = lazy(() => import('./pages/Page_11_2_soporte_t_cnico_directo'));

const App: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {/* Ruta de Login (Sin Sidebar) */}
                    <Route path="/jazmio_ingreso" element={<Page_jazm_io_ingreso />} />

                    {/* Rutas Protegidas (Con Sidebar e Isla Dinámica) */}
                    <Route element={<DashboardLayout />}>
                        <Route path="/1_dashboard_ia" element={<Page_1_dashboard_ia />} />
                        <Route path="/11_resumen_de_metas" element={<Page_1_1_resumen_de_metas />} />
                        <Route path="/12_an_lisis_de_embudo" element={<Page_1_2_an_lisis_de_embudo />} />
                        <Route path="/13_estad_sticas_de_conversi_n" element={<Page_1_3_estad_sticas_de_conversi_n />} />

                        <Route path="/21_constructor_de_embudos_y_etapas" element={<Page_2_1_constructor_de_embudos_y_etapas />} />
                        <Route path="/22_gesti_n_de_fichas_y_expedientes" element={<Page_2_2_gesti_n_de_fichas_y_expedientes />} />
                        <Route path="/23_campos_y_etiquetas" element={<Page_2_3_campos_y_etiquetas />} />
                        <Route path="/24_cuestionarios_y_machotes" element={<Page_2_4_cuestionarios_y_machotes />} />

                        <Route path="/31_vista_kanban_multi_estado" element={<Page_3_1_vista_kanban_multi_estado />} />
                        <Route path="/32_filtros_avanzados_y_segmentaci_n" element={<Page_3_2_filtros_avanzados_y_segmentaci_n />} />
                        <Route path="/33_cat_logo_de_productos_e_inventarios" element={<Page_3_3_cat_logo_de_productos_e_inventarios />} />

                        <Route path="/41_estad_sticas_de_efectividad" element={<Page_4_1_estad_sticas_de_efectividad />} />
                        <Route path="/42_registro_de_conversaciones" element={<Page_4_2_registro_de_conversaciones />} />
                        <Route path="/43_an_lisis_de_sentimiento" element={<Page_4_3_an_lisis_de_sentimiento />} />

                        <Route path="/51_selecci_n_de_perfil_de_empleado" element={<Page_5_1_selecci_n_de_perfil_de_empleado />} />
                        <Route path="/52_personalizaci_n_de_caracter_sticas" element={<Page_5_2_personalizaci_n_de_caracter_sticas />} />
                        <Route path="/53_medici_n_de_kpi_por_empleado_ia" element={<Page_5_3_medici_n_de_kpi_por_empleado_ia />} />

                        <Route path="/61_integraci_n_de_whatsapp_web" element={<Page_6_1_integraci_n_de_whatsapp_web />} />
                        <Route path="/62_panel_de_redes_sociales" element={<Page_6_2_panel_de_redes_sociales />} />
                        <Route path="/63_reglas_de_ia_para_chats" element={<Page_6_3_reglas_de_ia_para_chats />} />

                        <Route path="/71_administraci_n_de_usuarios_humanos" element={<Page_7_1_administraci_n_de_usuarios_humanos />} />
                        <Route path="/72_definici_n_de_permisos_por_rol" element={<Page_7_2_definici_n_de_permisos_por_rol />} />
                        <Route path="/73_auditor_a_de_actividad" element={<Page_7_3_auditor_a_de_actividad />} />

                        <Route path="/81_configuraci_n_de_widget" element={<Page_8_1_configuraci_n_de_widget />} />
                        <Route path="/82_personalizaci_n_visual" element={<Page_8_2_personalizaci_n_visual />} />

                        <Route path="/91_preferencias_de_empresa" element={<Page_9_1_preferencias_de_empresa />} />
                        <Route path="/92_notificaciones_y_alertas" element={<Page_9_2_notificaciones_y_alertas />} />
                        <Route path="/93_integraciones_api_y_webhooks" element={<Page_9_3_integraciones_api_y_webhooks />} />

                        <Route path="/101_gesti_n_de_instancias_y_empresas" element={<Page_10_1_gesti_n_de_instancias_y_empresas />} />
                        <Route path="/102_monitoreo_de_consumo_de_ia" element={<Page_10_2_monitoreo_de_consumo_de_ia />} />
                        <Route path="/103_reportes_de_ingresos_y_gastos" element={<Page_10_3_reportes_de_ingresos_y_gastos />} />

                        <Route path="/111_documentaci_n_y_tutoriales" element={<Page_11_1_documentaci_n_y_tutoriales />} />
                        <Route path="/112_soporte_t_cnico_directo" element={<Page_11_2_soporte_t_cnico_directo />} />

                        {/* Redirección por defecto al entrar al dashboard */}
                        <Route path="" element={<Navigate to="/1_dashboard_ia" replace />} />
                    </Route>

                    {/* Redirección raíz a Login */}
                    <Route path="/" element={<Navigate to="/jazmio_ingreso" replace />} />
                    <Route path="*" element={<div className="p-20 text-center">404 - Pantalla no encontrada</div>} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;


