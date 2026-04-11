import React from 'react';

const Page_8_configuraci_n_del_widget: React.FC = () => {
  return (
    <div className="w-full">

      {/*  Dynamic Island  */}

      <div className="p-8 pt-24 max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/*  Configuration Panels (Left)  */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-on-background mb-2">8. Configuración del Widget de Chat</h2>
            <p className="text-on-surface-variant text-lg">Personaliza el botón y la ventana de chat para tu sitio web.</p>
          </div>
          {/*  Personalización Visual  */}
          <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-fixed rounded-xl">
                <span className="material-symbols-outlined text-primary">palette</span>
              </div>
              <h3 className="text-xl font-bold">Personalización Visual</h3>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-on-surface-variant">Color del Tema</label>
                  <div className="flex items-center gap-3 bg-surface-container-low p-3 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-primary shadow-inner border-2 border-white"></div>
                    <input className="bg-transparent border-none focus:ring-0 font-mono text-sm w-full" type="text" value="#006190" aria-label="Color del tema" readOnly />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-on-surface-variant">Posición en Pantalla</label>
                  <div className="flex p-1 bg-surface-container-low rounded-2xl">
                    <button className="flex-1 py-2 text-sm font-semibold bg-white text-primary rounded-xl shadow-sm">Derecha</button>
                    <button className="flex-1 py-2 text-sm font-semibold text-on-surface-variant">Izquierda</button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
                <div className="flex flex-col">
                  <span className="font-semibold">Mostrar foto del Agente</span>
                  <span className="text-xs text-on-surface-variant">Muestra el avatar del agente activo en el chat.</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" aria-label="Mostrar foto del agente" />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>
            </div>
          </section>
          {/*  Configuración de IA  */}
          <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary-container rounded-xl">
                <span className="material-symbols-outlined text-on-secondary-container">smart_toy</span>
              </div>
              <h3 className="text-xl font-bold">Configuración de IA</h3>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3 text-on-surface-variant">Agente Virtual Asignado</label>
                <select className="w-full p-4 bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary/40 appearance-none">
                  <option>Jazmín - Asistente de Ventas</option>
                  <option>Roberto - Soporte Técnico</option>
                  <option>Elena - Atención al Cliente</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3 text-on-surface-variant">Mensaje de Bienvenida</label>
                <textarea className="w-full p-4 bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary/40 resize-none" placeholder="Escribe el mensaje..." rows={3}>Hola, ¿en qué puedo ayudarte hoy?</textarea>
              </div>
            </div>
          </section>
          {/*  Instalación  */}
          <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-tertiary-fixed rounded-xl">
                <span className="material-symbols-outlined text-tertiary">code</span>
              </div>
              <h3 className="text-xl font-bold">Instalación</h3>
            </div>
            <div className="bg-on-background text-on-primary-container p-6 rounded-2xl relative overflow-hidden">
              <pre className="text-xs font-mono opacity-80 whitespace-pre-wrap"><code>{`
<script src="https://cdn.jazm.io/widget.js"></script>
<script>
  window.JazmIO.init({
    widgetID: "jz-88219-beta",
    theme: "#006190",
    position: "right"
  });
</script>
`}</code></pre>
              <button className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-semibold backdrop-blur-md transition-colors">
                <span className="material-symbols-outlined text-sm">content_copy</span>
                Copiar Código
              </button>
            </div>
          </section>
        </div>
        {/*  Real-time Preview (Right)  */}
        <div className="col-span-12 lg:col-span-5 relative">
          <div className="sticky top-24">
            <div className="relative w-full aspect-[3/4] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-slate-900/5">
              {/*  Dummy Website Content  */}
              <div className="absolute inset-0 z-0">
                <div className="h-16 w-full bg-surface-container-high flex items-center px-6 justify-between">
                  <div className="w-20 h-4 bg-slate-300 rounded-full"></div>
                  <div className="flex gap-2">
                    <div className="w-10 h-2 bg-slate-200 rounded-full"></div>
                    <div className="w-10 h-2 bg-slate-200 rounded-full"></div>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="w-2/3 h-8 bg-slate-200 rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-slate-100 rounded-full"></div>
                    <div className="w-full h-3 bg-slate-100 rounded-full"></div>
                    <div className="w-3/4 h-3 bg-slate-100 rounded-full"></div>
                  </div>
                  <div className="w-full h-40 rounded-2xl relative overflow-hidden">
                    <img alt="Vista previa del sitio" className="w-full h-full object-cover grayscale opacity-20" data-alt="modern minimalist office interior with glass walls and bright natural light representing a professional business website background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg3Lt9OO3OGmyTy0hlvDdsptqCkFwU4f2vido2OU9Lf6OHCDa9Xtk0afGgr8bHxVjZX-mOekxCcZ8tZiKTCjTqa7AO3HJdE0M5vrCFBFvDeZ-cFVlSDv4GgtadQwtd-FcdotrAiYbAorAAEYISic4Akyw6-MNi_2ktKDN2ZgqDvTqESfSbMs8J1GyV-nbgQcrO4BXrqomRdEn6rXs7KdfyQAf3GJlFsFHE-bDVllbEz2XuZRBl6ngsDFpL1U2EqldRDfJ9fTTfsWeq" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
              {/*  Chat Widget Overlay  */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 items-end">
                {/*  Chat Window  */}
                <div className="w-[300px] h-[400px] bg-white rounded-3xl shadow-2xl flex flex-col mb-4 transform translate-y-0 opacity-100 overflow-hidden">
                  <div className="p-4 bg-primary text-white flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                      <img alt="Agente" className="w-full h-full object-cover" data-alt="close up headshot of a friendly smiling female virtual assistant with natural makeup and professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIFDSJVWraKq6uNQgzjJi0hzO6AGTMxsh5J2w9tcMXMKBDsmXFtk6ZWmuaCcWFz6hdX8Uh63ZgXG1usdmw2jA1Eqd-KAVIfzfHKjwTbw0-dor9TKnjbX1YvxeJD_Sumsc-6S7ifyPUFdHwrKcn3PcKc4vaAXk9jzCLVq5DbT0PHYvYqIZx9Lfww-aO8YN5pREr_5aoHPKahbACf-S1Kf4UhUIsnD6cy5Qh4QqOalfH7RsKNkPrdUojccIoCf4pFbTrKSQ_j3Y_RlBe" />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-none">Jazmín</p>
                      <p className="text-[10px] opacity-80">Asistente Virtual</p>
                    </div>
                    <button className="ml-auto">
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </div>
                  <div className="flex-1 p-4 bg-slate-50 space-y-4">
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 mt-auto"></div>
                      <div className="max-w-[80%] p-3 bg-white rounded-2xl rounded-bl-none text-xs shadow-sm">
                        Hola, ¿en qué puedo ayudarte hoy?
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-slate-100 flex items-center gap-2">
                    <div className="flex-1 h-9 bg-slate-100 rounded-full px-4 flex items-center text-xs text-slate-400">
                      Escribe un mensaje...
                    </div>
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-sm">send</span>
                    </div>
                  </div>
                </div>
                {/*  Widget Button  */}
                <div className="w-16 h-16 bg-primary rounded-full shadow-lg shadow-primary/40 flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl">chat</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full text-[10px] text-white font-medium">
                VISTA PREVIA EN VIVO
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page_8_configuraci_n_del_widget;


