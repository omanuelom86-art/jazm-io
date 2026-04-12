import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Page_registro: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');
        setLoading(true);
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { name } }
        });
        if (error) {
            setErrorMsg(error.message);
            setLoading(false);
        } else {
            alert('¡Registro exitoso! Ya puedes iniciar sesión.');
            navigate('/jazmio_ingreso');
        }
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen flex flex-col items-center justify-center p-6 selection:bg-primary-fixed-dim selection:text-on-primary-fixed w-full">

            {/* Dynamic Island / TopAppBar Equivalent */}
            <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[400px] rounded-full z-50 bg-slate-50/80 backdrop-blur-xl shadow-2xl shadow-sky-900/5 flex justify-between items-center px-6 py-3">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/jazmio_ingreso')}>
                    <span className="material-symbols-outlined text-primary text-xl" data-icon="arrow_back">arrow_back</span>
                    <span className="text-sm font-medium text-primary tracking-wide">Volver a Ingresar</span>
                </div>
            </header>

            {/* Main Content Canvas */}
            <main className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                {/* Left Side: Editorial Authority */}
                <section className="hidden lg:flex flex-col flex-1 gap-6">
                    <h1 className="font-headline text-6xl font-extrabold tracking-tight text-on-surface leading-tight">
                        Únete al <span className="text-primary-container">CRM inteligente</span> hoy.
                    </h1>
                    <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                        Crea tu cuenta gratis y empieza a automatizar tus ventas en minutos.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-surface-container-low">
                            <span className="material-symbols-outlined text-primary mb-2" data-icon="bolt">bolt</span>
                            <h3 className="font-semibold text-on-surface">Velocidad AI</h3>
                            <p className="text-xs text-on-surface-variant">Procesamiento en tiempo real.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-surface-container-low">
                            <span className="material-symbols-outlined text-secondary mb-2" data-icon="shield">shield</span>
                            <h3 className="font-semibold text-on-surface">Seguro</h3>
                            <p className="text-xs text-on-surface-variant">Encriptación de grado militar.</p>
                        </div>
                    </div>
                </section>

                {/* Right Side: Form */}
                <section className="w-full max-w-[440px] flex flex-col gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="text-4xl font-black tracking-tighter text-sky-900 mb-2">JAZM.IO</div>
                        <h2 className="font-headline text-2xl font-bold text-on-surface">Crea tu Cuenta</h2>
                        <p className="text-on-surface-variant">Ingresa tus datos para empezar.</p>
                    </div>

                    <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-2xl shadow-sky-900/5 flex flex-col gap-6">
                        <form className="flex flex-col gap-5" onSubmit={handleRegister}>
                            {errorMsg && <div className="text-error text-sm font-semibold bg-error-container p-3 rounded-lg text-center">{errorMsg}</div>}

                            {/* Nombre Field */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="name">Nombre Completo</label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl transition-colors group-focus-within:text-primary" data-icon="badge">badge</span>
                                    <input value={name} onChange={e => setName(e.target.value)} required className="w-full bg-surface-container-high border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" id="name" placeholder="John Doe" type="text" />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="email">Correo Electrónico</label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl transition-colors group-focus-within:text-primary" data-icon="mail">mail</span>
                                    <input value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-surface-container-high border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" id="email" placeholder="nombre@ejemplo.com" type="email" />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-on-surface-variant px-1 uppercase tracking-wider" htmlFor="password">Contraseña</label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl transition-colors group-focus-within:text-primary" data-icon="lock">lock</span>
                                    <input value={password} onChange={e => setPassword(e.target.value)} required className="w-full bg-surface-container-high border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" id="password" placeholder="••••••••" type="password" />
                                </div>
                            </div>

                            {/* Primary CTA */}
                            <button disabled={loading} className="mt-4 disabled:opacity-50 bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.01] active:scale-[0.98] transition-all flex justify-center items-center gap-3" type="submit">
                                <span>{loading ? 'Registrando...' : 'Registrarse'}</span>
                                {!loading && <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>}
                            </button>
                        </form>
                    </div>

                    {/* Footer Link */}
                    <p className="text-center md:text-left text-on-surface-variant text-sm">
                        ¿Ya tienes una cuenta? <a className="text-primary font-bold hover:underline underline-offset-4 cursor-pointer" onClick={(e) => { e.preventDefault(); navigate('/jazmio_ingreso'); }}>Inicia Sesión</a>
                    </p>
                </section>
            </main>

            {/* Background Decoration */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary-fixed/30 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary-fixed/20 blur-[100px] rounded-full"></div>
            </div>
        </div>
    );
};

export default Page_registro;
