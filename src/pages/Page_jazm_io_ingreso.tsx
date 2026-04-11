import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page_jazm_io_ingreso: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulación de login exitoso
        navigate('/1_dashboard_ia');
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen flex flex-col items-center justify-center p-6 selection:bg-primary-fixed-dim selection:text-on-primary-fixed w-full">

            {/* Dynamic Island / TopAppBar Equivalent */}
            <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[400px] rounded-full z-50 bg-slate-50/80 backdrop-blur-xl shadow-2xl shadow-sky-900/5 flex justify-between items-center px-6 py-3">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                    <span className="text-sm font-medium text-primary tracking-wide">Bienvenido a JAZM.IO</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl" data-icon="auto_awesome">auto_awesome</span>
                </div>
            </header>

            {/* Main Content Canvas */}
            <main className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                {/* Left Side: Editorial Authority */}
                <section className="hidden lg:flex flex-col flex-1 gap-6">
                    <h1 className="font-headline text-6xl font-extrabold tracking-tight text-on-surface leading-tight">
                        El futuro del <span className="text-primary-container">CRM inteligente</span> está aquí.
                    </h1>
                    <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                        Gestione sus leads, automatice sus agentes y escale su negocio con la interfaz más avanzada del mercado.
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

                {/* Right Side: Login Form */}
                <section className="w-full max-w-[440px] flex flex-col gap-8">
                    {/* Brand Anchor */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="text-4xl font-black tracking-tighter text-sky-900 mb-2">JAZM.IO</div>
                        <h2 className="font-headline text-2xl font-bold text-on-surface">Acceder a tu Panel</h2>
                        <p className="text-on-surface-variant">Introduce tus credenciales para continuar.</p>
                    </div>

                    {/* Login Form Card */}
                    <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-2xl shadow-sky-900/5 flex flex-col gap-6">
                        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
                            {/* Username Field */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="username">Usuario o Correo</label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl transition-colors group-focus-within:text-primary" data-icon="person">person</span>
                                    <input className="w-full bg-surface-container-high border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" id="username" placeholder="nombre@ejemplo.com" type="text" />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="flex flex-col gap-1.5">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="password">Contraseña</label>
                                </div>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl transition-colors group-focus-within:text-primary" data-icon="lock">lock</span>
                                    <input className="w-full bg-surface-container-high border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" id="password" placeholder="••••••••" type="password" />
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-outline transition-colors" type="button">
                                        <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                                    </button>
                                </div>
                            </div>

                            {/* Remember & Recover */}
                            <div className="flex justify-between items-center text-sm mt-1">
                                <label className="flex items-center gap-2 cursor-pointer text-on-surface-variant">
                                    <input className="rounded-md border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                                    <span>Recordarme</span>
                                </label>
                                <a className="text-primary font-medium hover:underline transition-all underline-offset-4" href="#">¿Olvidaste tu contraseña?</a>
                            </div>

                            {/* Primary CTA */}
                            <button className="mt-4 bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.01] active:scale-[0.98] transition-all flex justify-center items-center gap-3" type="submit">
                                <span>Iniciar Sesión</span>
                                <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                            </button>
                        </form>

                        {/* Alternative Methods */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="h-[1px] flex-1 bg-surface-container-high"></div>
                                <span className="text-xs text-outline font-medium uppercase tracking-widest">O entrar con</span>
                                <div className="h-[1px] flex-1 bg-surface-container-high"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors text-on-surface font-medium text-sm">
                                    <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzyl05Ped9nkgoEAHH1lUbtYRJsG9PfxsHQ1EIcm-TeqPDazHClRyCjAvjEjSQ-ov_9WtZBCbzExcNGgqJ2vsAI9T5-5xPVlBYA3GY1qCNN2S_VEBpIglxkkBqT68r_wGTjab4F0KoiIfuGGUXxMFFSqE_iqCYmTC5KgpmX90MkJkgmXO0hzNcdJrqKmYbktYh81vPEgBGEWs88I7gZ2MD_ROAB2i7PpkQavxqEsdB9_XQt9kDkDPft6fOfyzDats2-QuGVXwutFk4" />
                                    Google
                                </button>
                                <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors text-on-surface font-medium text-sm">
                                    <span className="material-symbols-outlined text-xl" data-icon="apple">ios</span>
                                    Apple
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer Link */}
                    <p className="text-center md:text-left text-on-surface-variant text-sm">
                        ¿No tienes una cuenta? <a className="text-primary font-bold hover:underline underline-offset-4" href="#">Regístrate gratis</a>
                    </p>
                </section>
            </main>

            {/* Background Decoration */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary-fixed/30 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary-fixed/20 blur-[100px] rounded-full"></div>
            </div>

            {/* Feedback Element */}
            <div className="fixed bottom-8 right-8 flex items-center gap-4">
                <div className="bg-surface-container-lowest p-3 rounded-2xl shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-tertiary-fixed-variant" data-icon="support_agent">support_agent</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-on-surface">¿Necesitas ayuda?</span>
                        <span className="text-[10px] text-on-surface-variant">Soporte 24/7 disponible</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page_jazm_io_ingreso;
