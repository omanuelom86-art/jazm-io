import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page_recuperar_password: React.FC = () => {
    const navigate = useNavigate();

    const handleRecovery = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Si tu correo está en la base de datos, recibirás un enlace de recuperación pronto.');
        navigate('/jazmio_ingreso');
    };

    return (
        <div className="bg-surface text-on-surface min-h-screen flex flex-col items-center justify-center p-6 selection:bg-primary-fixed-dim selection:text-on-primary-fixed w-full">

            {/* Dynamic Island / TopAppBar */}
            <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[400px] rounded-full z-50 bg-slate-50/80 backdrop-blur-xl shadow-2xl shadow-sky-900/5 flex justify-between items-center px-6 py-3">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/jazmio_ingreso')}>
                    <span className="material-symbols-outlined text-primary text-xl" data-icon="arrow_back">arrow_back</span>
                    <span className="text-sm font-medium text-primary tracking-wide">Volver al Inicio</span>
                </div>
            </header>

            {/* Main Content */}
            <main className="w-full max-w-[440px] flex flex-col gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="text-4xl font-black tracking-tighter text-sky-900 mb-2">JAZM.IO</div>
                    <h2 className="font-headline text-2xl font-bold text-on-surface">Recuperar Contraseña</h2>
                    <p className="text-on-surface-variant">Te enviaremos un enlace seguro para restablecer el acceso a tu cuenta.</p>
                </div>

                <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-2xl shadow-sky-900/5 flex flex-col gap-6">
                    <form className="flex flex-col gap-5" onSubmit={handleRecovery}>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="email">Correo Electrónico</label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl transition-colors group-focus-within:text-primary" data-icon="mail">mail</span>
                                <input className="w-full bg-surface-container-high border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline-variant" id="email" placeholder="nombre@ejemplo.com" type="email" required />
                            </div>
                        </div>

                        <button className="mt-4 bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.01] active:scale-[0.98] transition-all flex justify-center items-center gap-3" type="submit">
                            <span>Enviar Enlace</span>
                            <span className="material-symbols-outlined" data-icon="send">send</span>
                        </button>
                    </form>
                </div>
            </main>

            {/* Background Decoration */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary-fixed/30 blur-[120px] rounded-full"></div>
            </div>
        </div>
    );
};

export default Page_recuperar_password;
