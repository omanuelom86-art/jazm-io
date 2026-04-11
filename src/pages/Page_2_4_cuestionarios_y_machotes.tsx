import React from 'react';

const Page_2_4_cuestionarios_y_machotes: React.FC = () => {
    return (
        <div className="w-full">


            {/*  Bento Grid Layout  */}
            <div className="grid grid-cols-12 gap-6 max-w-6xl mx-auto">
                {/*  Left Panel: Survey Builder  */}
                <section className="col-span-12 lg:col-span-7 space-y-6">
                    <div className="bg-surface-container-low rounded-xl p-6 shadow-sm border border-outline-variant/10">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary p-2 bg-primary-container/20 rounded-lg" data-icon="quiz">quiz</span>
                                <h3 className="text-xl font-bold font-headline">Constructor de Cuestionario</h3>
                            </div>
                            <span className="text-xs font-semibold bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full uppercase tracking-wider">Profiling Mode</span>
                        </div>
                        <div className="space-y-4">
                            {/*  Survey Question Card 1  */}
                            <div className="bg-surface-container-lowest p-5 rounded-xl border-l-4 border-primary shadow-sm hover:translate-x-1 transition-transform">
                                <div className="flex justify-between mb-3">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pregunta 01</span>
                                    <span className="material-symbols-outlined text-slate-400 text-sm cursor-pointer">drag_indicator</span>
                                </div>
                                <input className="w-full bg-surface-container-high border-none rounded-lg text-on-surface font-medium focus:ring-2 focus:ring-primary/40 mb-3 px-4 py-3" placeholder="Escribe tu pregunta..." type="text" value="¿Cuál es el volumen anual de facturación?" />
                                <div className="flex gap-3">
                                    <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full text-xs font-medium text-slate-600">
                                        <span className="material-symbols-outlined text-sm">dialpad</span> Número
                                    </div>
                                    <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-700">
                                        <span className="material-symbols-outlined text-sm">link</span> Campo: "annual_rev"
                                    </div>
                                </div>
                            </div>
                            {/*  Survey Question Card 2  */}
                            <div className="bg-surface-container-lowest p-5 rounded-xl border-l-4 border-slate-300 shadow-sm opacity-80 group hover:opacity-100 transition-opacity">
                                <div className="flex justify-between mb-3">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pregunta 02</span>
                                    <span className="material-symbols-outlined text-slate-400 text-sm cursor-pointer">drag_indicator</span>
                                </div>
                                <input className="w-full bg-surface-container-high border-none rounded-lg text-on-surface font-medium focus:ring-2 focus:ring-primary/40 mb-3 px-4 py-3" type="text" value="Especifique el giro comercial de la entidad" />
                                <div className="flex gap-3">
                                    <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full text-xs font-medium text-slate-600">
                                        <span className="material-symbols-outlined text-sm">list</span> Selección Múltiple
                                    </div>
                                    <div className="flex items-center gap-2 bg-sky-50 px-3 py-1.5 rounded-full text-xs font-medium text-sky-700">
                                        <span className="material-symbols-outlined text-sm">auto_awesome</span> Sugerencia AI: "giro_business"
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-4 border-2 border-dashed border-outline-variant/30 rounded-xl text-slate-400 font-medium hover:bg-slate-50 hover:text-primary hover:border-primary/50 transition-all flex items-center justify-center gap-2 group">
                                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">add_circle</span>
                                Añadir nueva sección o pregunta
                            </button>
                        </div>
                    </div>
                    {/*  Smart Field Mapping Card  */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
                        <h3 className="text-xl font-bold font-headline mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: '\'FILL\' 1' }}>hub</span>
                            Integración AI &amp; Mapeo de Campos
                        </h3>
                        <p className="text-sm text-on-surface-variant mb-6">El sistema ha identificado 4 campos en tu machote que coinciden con el cuestionario actual.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-surface-container-low p-3 rounded-lg flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Cuestionario</p>
                                    <p className="text-xs font-medium">Razon Social</p>
                                </div>
                                <span className="material-symbols-outlined text-primary text-sm">sync_alt</span>
                                <div className="text-right">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Machote DOCX</p>
                                    <p className="text-xs font-medium text-tertiary">{"\u007B\u007Bcompany_name\u007D\u007D"}</p>
                                </div>
                            </div>
                            <div className="bg-surface-container-low p-3 rounded-lg flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Cuestionario</p>
                                    <p className="text-xs font-medium">RFC</p>
                                </div>
                                <span className="material-symbols-outlined text-primary text-sm">sync_alt</span>
                                <div className="text-right">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Machote DOCX</p>
                                    <p className="text-xs font-medium text-tertiary">{"\u007B\u007Btax_id\u007D\u007D"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Right Panel: Machote Preview & Config  */}
                <section className="col-span-12 lg:col-span-5 space-y-6">
                    {/*  Template Upload Area  */}
                    <div className="bg-surface-container-high rounded-xl p-8 border-2 border-dashed border-outline-variant/50 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/50 transition-all">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary text-3xl" data-icon="upload_file">upload_file</span>
                        </div>
                        <h4 className="font-bold text-lg mb-1">Cargar Machote</h4>
                        <p className="text-sm text-on-surface-variant max-w-[200px]">Suelta tu archivo .docx o .pdf aquí para detectar campos dinámicos.</p>
                    </div>
                    {/*  Document Preview  */}
                    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[500px]">
                        <div className="bg-slate-50 px-6 py-3 flex justify-between items-center border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-red-500" style={{ fontVariationSettings: '\'FILL\' 1' }}>description</span>
                                <span className="text-xs font-bold text-slate-700">PREVIEW: Contrato_Prestacion_V1.pdf</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                            </div>
                        </div>
                        <div className="flex-grow p-8 overflow-y-auto bg-slate-50/30">
                            <div className="bg-white shadow-sm p-10 min-h-full border border-slate-100 text-slate-800 space-y-6">
                                <div className="h-4 bg-slate-100 rounded w-1/3 mx-auto mb-8"></div>
                                <div className="space-y-3">
                                    <div className="h-3 bg-slate-50 rounded w-full"></div>
                                    <div className="h-3 bg-slate-50 rounded w-full"></div>
                                    <div className="h-3 bg-slate-50 rounded w-[90%]"></div>
                                </div>
                                <div className="py-4 px-3 bg-primary/5 rounded border border-primary/20 flex flex-col gap-2">
                                    <p className="text-[10px] font-bold text-primary tracking-widest uppercase">Campo Dinámico Detectado</p>
                                    <p className="text-sm font-medium italic text-primary-container">{"\"En la ciudad de \u007B\u007Bciudad_firma\u007D\u007D, a los \u007B\u007Bdia_firma\u007D\u007D días del mes...\""}</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-3 bg-slate-50 rounded w-full"></div>
                                    <div className="h-3 bg-slate-50 rounded w-[95%]"></div>
                                    <div className="h-3 bg-slate-50 rounded w-full"></div>
                                    <div className="h-3 bg-slate-50 rounded w-[40%]"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-10 pt-12">
                                    <div className="border-t border-slate-200 pt-2 text-center">
                                        <p className="text-[8px] uppercase text-slate-400">Representante Legal</p>
                                    </div>
                                    <div className="border-t border-slate-200 pt-2 text-center">
                                        <p className="text-[8px] uppercase text-slate-400">Testigo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-4 border-t border-slate-100 flex justify-end gap-3">
                            <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">Descargar Borrador</button>
                            <button className="px-4 py-2 text-xs font-bold bg-primary text-white rounded-lg shadow-md hover:shadow-lg transition-all">Guardar Machote</button>
                        </div>
                    </div>
                    {/*  Quick Stats / AI Analytics  */}
                    <div className="bg-secondary-container/10 border border-secondary/20 rounded-xl p-5 flex items-center gap-4">
                        <div className="p-3 bg-secondary/10 rounded-full">
                            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '\'FILL\' 1' }}>bolt</span>
                        </div>
                        <div>
                            <h5 className="text-sm font-bold text-secondary">Ahorro Estimado AI</h5>
                            <p className="text-xs text-on-surface-variant">El auto-llenado ahorrará ~12 minutos por cada cliente perfilado.</p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Page_2_4_cuestionarios_y_machotes;


