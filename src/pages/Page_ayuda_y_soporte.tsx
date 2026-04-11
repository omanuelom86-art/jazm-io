import React from 'react';

const Page_ayuda_y_soporte: React.FC = () => {
    return (
        <div className="w-full">
            
{/*  TopAppBar / Dynamic Island (Authority: JSON & Design System)  */}
<div className="fixed top-4 left-[calc(50%+128px)] -translate-x-1/2 w-[90%] md:w-[450px] bg-slate-50/80 backdrop-blur-xl rounded-full z-50 shadow-2xl shadow-sky-900/5 flex justify-between items-center px-6 py-2 border border-white/20">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
<span className="text-xs font-bold text-sky-900 uppercase tracking-tighter">Soporte IA en vivo</span>
</div>
<div className="flex items-center gap-4">
<span className="text-slate-500 material-symbols-outlined cursor-pointer hover:bg-sky-100/50 p-1 rounded-full transition-colors">account_circle</span>
<span className="text-slate-500 material-symbols-outlined cursor-pointer hover:bg-sky-100/50 p-1 rounded-full transition-colors">settings</span>
</div>
</div>
<div className="p-8 mt-16 max-w-6xl mx-auto w-full space-y-12">
{/*  Hero Header  */}

{/*  Bento Grid Resources  */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Knowledge Base (Featured)  */}
<div className="md:col-span-8 bg-surface-container-lowest rounded-3xl p-8 shadow-sm flex flex-col justify-between group transition-all hover:bg-white">
<div>
<div className="flex justify-between items-start mb-6">
<span className="p-3 bg-primary/10 text-primary rounded-2xl material-symbols-outlined">menu_book</span>
<span className="text-xs font-bold text-outline-variant bg-surface-container-high px-3 py-1 rounded-full uppercase">Base de Conocimientos</span>
</div>
<h3 className="text-2xl font-bold font-headline mb-4">Documentación Estratégica</h3>
<p className="text-on-surface-variant leading-relaxed mb-8 max-w-md">Guías detalladas sobre la integración de agentes IA, flujos de CRM avanzados y administración de equipos.</p>
<div className="grid grid-cols-2 gap-4">
<a className="p-4 rounded-xl bg-surface-container-low hover:bg-sky-50 transition-colors flex items-center gap-3 group/item" href="#">
<span className="material-symbols-outlined text-primary">rocket_launch</span>
<span className="text-sm font-semibold">Primeros Pasos</span>
</a>
<a className="p-4 rounded-xl bg-surface-container-low hover:bg-sky-50 transition-colors flex items-center gap-3 group/item" href="#">
<span className="material-symbols-outlined text-primary">terminal</span>
<span className="text-sm font-semibold">API Reference</span>
</a>
</div>
</div>
</div>
{/*  Live Support Card  */}
<div className="md:col-span-4 bg-primary text-on-primary rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-primary/20">
<div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-8 -translate-y-8">
<span className="text-[120px] material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>chat</span>
</div>
<div>
<h3 className="text-2xl font-bold font-headline mb-2">Soporte Directo</h3>
<p className="text-primary-fixed/80 text-sm mb-6">Habla con un humano experto ahora mismo.</p>
</div>
<button className="bg-surface-container-lowest text-primary font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-95">
                        Iniciar Chat
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
{/*  Video Tutorials  */}
<div className="md:col-span-4 bg-surface-container-low rounded-3xl p-8 flex flex-col">
<span className="p-3 bg-tertiary-container/10 text-tertiary-container rounded-2xl material-symbols-outlined w-fit mb-6">play_circle</span>
<h3 className="text-xl font-bold font-headline mb-3">Videotutoriales</h3>
<p className="text-on-surface-variant text-sm mb-6">Domina el CRM con cápsulas de video de 5 minutos.</p>
<div className="mt-auto space-y-3">
<div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-xl">
<div className="w-12 h-12 rounded-lg bg-slate-200 shrink-0 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="close-up of a high-end laptop screen displaying data visualization charts in a bright modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCANtYjaMmcTCleV03f2W1AkZQaJR6Ne19ErEPgaGmIqLFgwa8pwlzFTk8MU391pm8ObGSVXgeMrhld6Yb3qpKUE6LwFQ8WDX7WKauwms4xG-717lbyofb4Qaimtv-fPZbw9re-5PCztWTFy9q5ZrBdy7wou8oBLal0Qc2UedCOe0qCFScdLKPELH8JvOYPNU-SFfayb3daDJErsgq6RoUkA0Rki_YpHsDe75VN71ngz0Qn5Yagx2kDueb5RchGorGrcT2y6IcoGY0"/>
</div>
<span className="text-xs font-semibold">Configurar Bots</span>
</div>
<div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-xl">
<div className="w-12 h-12 rounded-lg bg-slate-200 shrink-0 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="person pointing at a colorful digital dashboard with data trends on a tablet screen in a sunlit studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIAMC4I2hZyGyudxAgpUCVBMG3LSsPVcL4jPDXCjlxgoHOiY4Ln4xAs4BAcEtARTVZkSri8qcFeN8cgxrseGUCdBn1XQieOJKlvLkwicIbouwsL3kiW8hIp8SWW4AidGIOB-GqFnUI0ScPGXg_zi6QdcxbdB9I5tuDuZeviVhXRsZla5ZCylRhF1wrOAPhQRNL3OoWKScORsCjWLcHkiRpukCB7MfcodHKpsrZLBhfh2PfPRNNyUFez3pDxjvQBte4wo4bcJAtU1VQ"/>
</div>
<span className="text-xs font-semibold">Análisis de Leads</span>
</div>
</div>
</div>
{/*  Community / Forum  */}
<div className="md:col-span-8 bg-surface-container-highest rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center border border-white/40">
<div className="flex-1">
<h3 className="text-2xl font-bold font-headline mb-4">Comunidad JAZM</h3>
<p className="text-on-surface-variant mb-6 leading-relaxed">Únete a más de 5,000 profesionales. Comparte trucos, automatizaciones y resuelve dudas colectivas.</p>
<div className="flex -space-x-3 mb-6">
<div className="w-10 h-10 rounded-full border-2 border-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="professional portrait of a smiling woman with glasses in a soft lit office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2-ekoN5niG5KMGBsz-EQu7C8BkLziOXtb01kk28NGIG3-JTIu0HWlTcOD_RunzhYs0Ll3bCSoVNCThNDSlQH_h0TZW_QQBFvUSRYciiQiovVG9OlB4hGM1BMmO3yps9fO9Bj83A-GudE-GiMM3Epew6xvddNL_LRRoZuzGlUpYt3MDpnhk8v7WPQMYXEyZ4iz8-X4J3rTj_yhCDZLUl_Cfl-AncmynXQFxvATBXOcNGLXtK30z299OqQSSKb5OlzFDAQYzxo5CRXp"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="headshot of a confident young man in a casual denim shirt against a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk5VHEv0TUdpdZwadTJm04kjC9uOEwX5po4ZqQHbQYlqQIaJu_4oBcWCvPYnuxPViccjZZdw-togXiCC1OQnOUT2Z39O8_r3UWYyQmIXYEsnrq2AP6Wzd4Gc53ZW-q59dchIm72apMOi04Owiz1RY_B-jiCEYqcxWIG1f7sTIP5DJXT-ii75oPDG4tUfHiBmXVwVU_lP4FfBeufmD7BojOWLtcUvhsDNNGEQJBk3749nUZmm0NI6r4ZoovCt0HTasX58LDn01E9Ov9"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="portrait of an african american professional woman smiling warmly in a high-tech corporate environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3iVrYF65r2eUMflXNcWOTW8zpdvapSwb4984nygi14ZkH73YH3UmZVM-3QjvMZNZG0i2j9zHBT83TdUFSK7uFEI6GrgBfkyYhAD12pWg9HofW2LXNmtX2GpSZWJT8RuZQf9mZTbbF13kuS95YxRgrO0SgLxM3W28AY8crFZNxbZXCvrt4IGmY1W20XiJyCjTkUOvJCPUOH8O5Sad60AuuQbS823T4NYZQpg1LYO7XUweJUq99ATSPN1jQs1pRO13qMViYNTmLyWpO"/>
</div>
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-[10px] text-on-primary font-bold border-2 border-surface-container-highest">+4.9k</div>
</div>
<button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
                            Ir al Foro de Comunidad
                            <span className="material-symbols-outlined text-sm">north_east</span>
</button>
</div>
<div className="w-full md:w-64 aspect-square rounded-2xl overflow-hidden shadow-inner">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" data-alt="group of creative professionals collaborating around a large wooden table with laptops and coffee in a modern bright workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrq47ThEtscPuel8Zbn4yfERHL5p6xbf2ZYKahcFfmE0Gz8VoRujJd7Ev0iyYuwMtQZE4VGwLH1scsNpxcO37jY-DT-cRSVeCLPh2jZBfSFEHva4KMdvwlkq0fFS1Y0sJ4B-FP-l5wXNh0aA_MKI_uIklsqSL_Bdw-Mo-CTdHMh3UT3B8EvBK_KgWmVg1U1KqfU2QxKtRqggWWIGBOh2hcLfs3Nsol4L9JD_bsX1lGaEH_XgLD9SVSWME-Ac3Vq1SOp7YBuDK9iw_Q"/>
</div>
</div>
</section>
{/*  FAQ Section  */}
<section className="space-y-6 pb-12">
<h3 className="text-2xl font-bold font-headline px-2">Preguntas Frecuentes</h3>
<div className="space-y-4">
<div className="bg-surface-container-lowest p-6 rounded-2xl flex justify-between items-center group cursor-pointer">
<div className="flex flex-col gap-1">
<span className="text-xs font-bold text-primary tracking-widest uppercase">Facturación</span>
<span className="text-lg font-semibold">¿Cómo puedo actualizar mi método de pago?</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">expand_more</span>
</div>
<div className="bg-surface-container-lowest p-6 rounded-2xl flex justify-between items-center group cursor-pointer">
<div className="flex flex-col gap-1">
<span className="text-xs font-bold text-primary tracking-widest uppercase">Privacidad</span>
<span className="text-lg font-semibold">¿Dónde se almacenan mis datos de leads?</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">expand_more</span>
</div>
<div className="bg-surface-container-lowest p-6 rounded-2xl flex justify-between items-center group cursor-pointer">
<div className="flex flex-col gap-1">
<span className="text-xs font-bold text-primary tracking-widest uppercase">IA</span>
<span className="text-lg font-semibold">¿Cómo entreno a mi primer agente IA?</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">expand_more</span>
</div>
</div>
</section>
</div>

        </div>
    );
};

export default Page_ayuda_y_soporte;
