import React from 'react';

const Page_9_3_integraciones_api_y_webhooks: React.FC = () => {
  return (
    <div className="w-full">

      {/*  Top Header Info  */}

      {/*  Bento Grid Layout  */}
      <div className="grid grid-cols-12 gap-6">
        {/*  API Keys Section (Wide Card)  */}
        <section className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-fixed rounded-lg">
                <span className="material-symbols-outlined text-primary">key</span>
              </div>
              <h2 className="text-xl font-bold font-headline">Llaves de API</h2>
            </div>
            <button className="text-primary text-sm font-semibold hover:bg-surface-container-low px-3 py-1.5 rounded-lg transition-colors">Generar Nueva Llave</button>
          </div>
          <div className="space-y-4">
            {/*  Key Row  */}
            <div className="flex items-center justify-between p-4 bg-surface rounded-xl hover:bg-surface-container-low transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">terminal</span>
                </div>
                <div>
                  <p className="font-semibold text-on-surface">Producción Main API</p>
                  <code className="text-xs text-outline font-mono">jazm_live_••••••••••••••••7f2a</code>
                </div>
              </div>
              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 text-outline hover:text-primary"><span className="material-symbols-outlined">content_copy</span></button>
                <button className="p-2 text-outline hover:text-error"><span className="material-symbols-outlined">delete</span></button>
              </div>
            </div>
            {/*  Key Row  */}
            <div className="flex items-center justify-between p-4 bg-surface rounded-xl hover:bg-surface-container-low transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">test_clone</span>
                </div>
                <div>
                  <p className="font-semibold text-on-surface">Entorno Sandbox</p>
                  <code className="text-xs text-outline font-mono">jazm_test_••••••••••••••••3a9d</code>
                </div>
              </div>
              <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 text-outline hover:text-primary"><span className="material-symbols-outlined">content_copy</span></button>
                <button className="p-2 text-outline hover:text-error"><span className="material-symbols-outlined">delete</span></button>
              </div>
            </div>
          </div>
        </section>
        {/*  Quick Stats/Health (Asymmetric Small Card)  */}
        <section className="col-span-12 lg:col-span-4 bg-primary text-on-primary rounded-xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg font-bold font-headline mb-1">Estado de Red</h3>
            <p className="text-primary-fixed text-xs mb-6 opacity-80">Últimos 30 minutos</p>
            <div className="flex items-end gap-1 h-12 mb-6">
              <div className="flex-1 bg-white/20 h-4 rounded-t-sm"></div>
              <div className="flex-1 bg-white/40 h-8 rounded-t-sm"></div>
              <div className="flex-1 bg-white/30 h-6 rounded-t-sm"></div>
              <div className="flex-1 bg-white/60 h-10 rounded-t-sm"></div>
              <div className="flex-1 bg-white/40 h-7 rounded-t-sm"></div>
              <div className="flex-1 bg-secondary-fixed h-12 rounded-t-sm"></div>
              <div className="flex-1 bg-white/20 h-5 rounded-t-sm"></div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold">99.98%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Uptime</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">42ms</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Latencia</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </section>
        {/*  Webhooks Section (Full Width Internal Grid)  */}
        <section className="col-span-12 bg-surface-container-low rounded-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-secondary-container rounded-lg">
              <span className="material-symbols-outlined text-secondary">webhook</span>
            </div>
            <h2 className="text-2xl font-bold font-headline">Configuración de Webhooks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/*  Webhook Card  */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-secondary">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-0.5 rounded uppercase">Activo</span>
                  <h3 className="font-bold text-lg mt-2">Notificación Nuevo Lead</h3>
                </div>
                <button className="material-symbols-outlined text-outline">more_vert</button>
              </div>
              <div className="bg-surface p-3 rounded-lg flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-outline text-sm">link</span>
                <span className="text-xs text-outline font-mono truncate">https://api.externalcrm.com/v1/jazm-webhook</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-surface-variant text-on-surface-variant px-2 py-1 rounded-md">lead.created</span>
                <span className="text-[10px] bg-surface-variant text-on-surface-variant px-2 py-1 rounded-md">lead.assigned</span>
              </div>
            </div>
            {/*  Webhook Card  */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-outline-variant">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-outline-variant/20 text-outline text-[10px] font-bold px-2 py-0.5 rounded uppercase">Pausado</span>
                  <h3 className="font-bold text-lg mt-2">Cierre de Ventas BI</h3>
                </div>
                <button className="material-symbols-outlined text-outline">more_vert</button>
              </div>
              <div className="bg-surface p-3 rounded-lg flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-outline text-sm">link</span>
                <span className="text-xs text-outline font-mono truncate">https://hooks.slack.com/services/T000/B000/XXXX</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] bg-surface-variant text-on-surface-variant px-2 py-1 rounded-md">deal.won</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-outline-variant/10 flex justify-center">
            <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Configurar nuevo endpoint
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>
        {/*  External Connections (Bento Item)  */}
        <section className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold font-headline mb-6">Herramientas Conectadas</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border-b border-surface-container">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00A1E0] rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '\'FILL\' 1' }}>dataset</span>
                </div>
                <span className="font-medium text-sm">Salesforce</span>
              </div>
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-surface-container">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#4A154B] rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '\'FILL\' 1' }}>chat_bubble</span>
                </div>
                <span className="font-medium text-sm">Slack</span>
              </div>
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-surface-container">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FF4500] rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '\'FILL\' 1' }}>hub</span>
                </div>
                <span className="font-medium text-sm">Zapier</span>
              </div>
              <span className="w-2 h-2 bg-outline-variant rounded-full"></span>
            </div>
          </div>
        </section>
        {/*  Documentation Quick Access (Bento Item)  */}
        <section className="col-span-12 lg:col-span-8 bg-surface-container-highest rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold font-headline mb-2">Documentación Rápida</h3>
            <p className="text-sm text-on-surface-variant mb-6">Aprende a integrar Jazm.io en minutos con nuestros fragmentos de código listos para usar.</p>
            <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-4 font-mono text-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-2 text-outline-variant border-b border-outline-variant/20 pb-2">
                <span>cURL Request</span>
                <button className="material-symbols-outlined text-sm">content_copy</button>
              </div>
              <pre className="overflow-x-auto py-2"><code>{`curl -X POST https://api.jazm.io/v1/leads \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Juan Perez", "email": "juan@example.com"}'`}</code></pre>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <a className="text-primary text-sm font-bold flex items-center gap-1" href="#">Ver API Docs <span className="material-symbols-outlined text-sm">open_in_new</span></a>
            <a className="text-primary text-sm font-bold flex items-center gap-1" href="#">SDK para Node.js <span className="material-symbols-outlined text-sm">download</span></a>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Page_9_3_integraciones_api_y_webhooks;


