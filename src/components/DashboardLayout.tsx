import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DynamicIsland from './DynamicIsland';

const DashboardLayout: React.FC = () => {
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
