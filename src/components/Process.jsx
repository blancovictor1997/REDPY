import React from 'react';
import { Link, Code, Rocket, Zap } from 'lucide-react';

export default function Process({ openModal }) {
    return (
        <section id="proceso" className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
            
            {/* Background Decorations Premium (Ajustados para fondo claro) */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">

                {/* Header Título */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-28" data-animate="slide-up">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium mb-6 shadow-sm">
                        <Zap size={16} className="text-blue-600" />
                        <span className="tracking-wide uppercase text-xs">Simple y Eficiente</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 sm:mb-6 text-slate-900 leading-[1.1]">
                        Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Proceso</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                        De la manualidad a la inteligencia artificial en tres pasos simples. Sin palabras complicadas, solo resultados.
                    </p>
                </div>

                {/* Grid del Proceso */}
                <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
                    
                    {/* Línea conectora Desktop */}
                    <div className="hidden md:block absolute top-[48px] left-[15%] w-[70%] h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent z-0"></div>

                    {/* Paso 1 */}
                    <div className="relative z-10 flex flex-col items-center text-center group delay-100" data-animate="slide-up">
                        {/* Nodo brillante para fondo claro */}
                        <div className="relative w-24 h-24 mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                            {/* Resplandor expandido en hover */}
                            <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl group-hover:bg-blue-400/40 transition-all duration-500 scale-90 group-hover:scale-110"></div>
                            <div className="relative w-full h-full rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center text-blue-600 transition-colors duration-300 group-hover:bg-blue-50">
                                <Link size={36} strokeWidth={1.5} />
                            </div>
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 font-mono text-blue-600 text-xs tracking-widest uppercase mb-4 shadow-sm">Paso 01</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Conexión</h3>
                        <p className="text-slate-600 leading-relaxed text-sm lg:text-base max-w-[280px]">
                            Identificamos tus procesos críticos (esos que hoy haces 'a mano'). Entendemos el ADN de tu negocio.
                        </p>
                    </div>

                    {/* Paso 2 */}
                    <div className="relative z-10 flex flex-col items-center text-center group delay-300" data-animate="slide-up">
                        <div className="relative w-24 h-24 mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute inset-0 bg-purple-400/20 rounded-2xl blur-xl group-hover:bg-purple-400/40 transition-all duration-500 scale-90 group-hover:scale-110"></div>
                            <div className="relative w-full h-full rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center text-purple-600 transition-colors duration-300 group-hover:bg-purple-50">
                                <Code size={36} strokeWidth={1.5} />
                            </div>
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 font-mono text-purple-600 text-xs tracking-widest uppercase mb-4 shadow-sm">Paso 02</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Desarrollo</h3>
                        <p className="text-slate-600 leading-relaxed text-sm lg:text-base max-w-[280px]">
                            Implementamos la herramienta de IA que mejor se adapte a tu presupuesto y meta. Sin complicaciones.
                        </p>
                    </div>

                    {/* Paso 3 */}
                    <div className="relative z-10 flex flex-col items-center text-center group delay-500" data-animate="slide-up">
                        <div className="relative w-24 h-24 mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute inset-0 bg-indigo-400/20 rounded-2xl blur-xl group-hover:bg-indigo-400/40 transition-all duration-500 scale-90 group-hover:scale-110"></div>
                            <div className="relative w-full h-full rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-50">
                                <Rocket size={36} strokeWidth={1.5} />
                            </div>
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 font-mono text-indigo-600 text-xs tracking-widest uppercase mb-4 shadow-sm">Paso 03</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Optimización</h3>
                        <p className="text-slate-600 leading-relaxed text-sm lg:text-base max-w-[280px]">
                            Liberamos tu tiempo manual para que te enfoques en lo que realmente importa: hacer crecer tu negocio.
                        </p>
                    </div>
                </div>

                {/* Banner Call to Action Mantiene un contraste elegante (pero fondo azul corporativo en vez de negro) */}
                <div className="mt-16 sm:mt-24 md:mt-32 max-w-5xl mx-auto bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 text-center shadow-2xl shadow-blue-900/20 relative overflow-hidden group" data-animate="scale-up">

                    {/* Focos de luz interiores Premium */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none group-hover:bg-white/20 transition-all duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none group-hover:bg-blue-400/30 transition-all duration-700"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                            ¿Listo/a para empezar tu transformación?
                        </h3>
                        <p className="text-blue-100 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto font-medium">
                            No esperes a que la competencia adopte estas tecnologías y automatice su operación antes que tú. El momento es ahora.
                        </p>
                        <button
                            className="inline-flex items-center justify-center bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                            onClick={(e) => { e.preventDefault(); openModal(); }}
                        >
                            Agenda una Asesoría Gratuita
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
