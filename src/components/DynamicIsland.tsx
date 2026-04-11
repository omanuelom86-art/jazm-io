import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wifi, Coffee, AlertTriangle, RefreshCcw, Loader2, CheckCircle2 } from 'lucide-react';
import { aiEngine } from '../lib/ai/resilience-gateway';

type IslandState = 'idle' | 'welcome' | 'processing' | 'alert' | 'coffee' | 'switching' | 'success';

const DynamicIsland: React.FC = () => {
    const [state, setState] = useState<IslandState>('welcome');
    const [provider, setProvider] = useState<string>('JAZM.IO');
    const [lastBreak, setLastBreak] = useState<number>(Date.now());

    useEffect(() => {
        aiEngine.onStatusChange((status, prov) => {
            setProvider(prov);
            if (status === 'error') setState('alert');
            else if (status === 'switching') setState('switching');
            else setState('idle');
        });

        const breakTimer = setInterval(() => {
            const now = Date.now();
            if (now - lastBreak > 300000) {
                setState('coffee');
                setLastBreak(now);
                setTimeout(() => setState('idle'), 8000);
            }
        }, 60000);

        if (state === 'welcome') {
            const timer = setTimeout(() => setState('idle'), 4000);
            return () => { clearTimeout(timer); clearInterval(breakTimer); };
        }
        return () => clearInterval(breakTimer);
    }, [state, lastBreak]);

    const getIslandWidth = () => {
        switch (state) {
            case 'idle': return 180;
            case 'welcome': return 320;
            case 'processing': return 250;
            case 'success': return 220;
            case 'alert': return 400;
            case 'coffee': return 300;
            case 'switching': return 350;
            default: return 180;
        }
    };

    return (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
            <motion.div
                animate={{
                    width: getIslandWidth(),
                    height: state === 'idle' ? 36 : 44,
                    borderRadius: 22,
                }}
                className="bg-black/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center px-4 pointer-events-auto cursor-pointer overflow-hidden ring-1 ring-white/5"
                transition={{ type: 'spring', stiffness: 450, damping: 28 }}
                onClick={() => aiEngine.failover()}
            >
                <AnimatePresence mode="wait">
                    {state === 'welcome' && (
                        <motion.div key="welcome" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"><Sparkles size={16} className="text-primary" /></div>
                            <span className="text-white text-sm font-semibold truncate leading-none">¡Hola Oscar! Bienvenid@ 👋</span>
                        </motion.div>
                    )}

                    {state === 'idle' && (
                        <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(0,109,54,0.8)]" />
                            <span className="text-white/80 text-[10px] font-black tracking-[0.2em] uppercase leading-none">{provider}</span>
                            <Wifi size={12} className="text-white/30 ml-1" />
                        </motion.div>
                    )}

                    {state === 'processing' && (
                        <motion.div key="processing" className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <Loader2 size={18} className="text-primary animate-spin" />
                            <span className="text-white text-sm font-medium">IA Pensando...</span>
                        </motion.div>
                    )}

                    {state === 'success' && (
                        <motion.div key="success" className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <CheckCircle2 size={18} className="text-secondary" />
                            <span className="text-white text-sm">Tarea Completada</span>
                        </motion.div>
                    )}

                    {state === 'alert' && (
                        <motion.div key="alert" className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <AlertTriangle size={18} className="text-red-500" />
                            <span className="text-white text-sm font-bold">Resilience Gateway: API Fail</span>
                        </motion.div>
                    )}

                    {state === 'switching' && (
                        <motion.div key="switching" className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <RefreshCcw size={18} className="text-sky-400 animate-spin" />
                            <span className="text-white text-sm">Cambiando a API de Respaldo...</span>
                        </motion.div>
                    )}

                    {state === 'coffee' && (
                        <motion.div key="coffee" className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <Coffee size={18} className="text-orange-400" />
                            <span className="text-white text-sm">¿Hora de un café? ☕</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default DynamicIsland;
