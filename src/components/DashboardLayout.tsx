import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DynamicIsland from './DynamicIsland';
import { supabase } from '../lib/supabase';

const DashboardLayout: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setIsAuthenticated(!!session);
            setIsLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setIsAuthenticated(!!session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (isLoading) return <div className="flex justify-center items-center h-screen w-screen bg-surface"><p className="animate-pulse text-primary font-bold">Cargando entorno seguro...</p></div>;
    if (!isAuthenticated) return <Navigate to="/jazmio_ingreso" replace />;

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-surface">
            {/* Sidebar Fija */}
            <Sidebar />

            {/* Área de Contenido con Scroll Independiente */}
            <div className="flex-1 flex flex-col relative h-screen overflow-hidden">
                {/* Isla Dinámica Flotante */}
                <DynamicIsland />

                <main className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar bg-surface/50 backdrop-blur-sm">
                    <div className="max-w-[1600px] mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;


