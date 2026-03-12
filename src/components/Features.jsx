import React from 'react';
import { ShieldCheck, Users, Cpu, TrendingUp, Zap } from 'lucide-react';
import { GlowingEffect } from './ui/GlowingEffect';

const cards = [
    {
        icon: Users,
        title: "Chile Real",
        description: "Entendemos el mercado local, sus modismos y desafíos financieros. Somos tu socio tecnológico.",
        delay: "delay-100",
    },
    {
        icon: Cpu,
        title: "Sin Fricción",
        description: "No necesitas ser programador ni contratar un departamento de IT sumamente caro.",
        delay: "delay-200",
    },
    {
        icon: TrendingUp,
        title: "Escalabilidad",
        description: "Soluciones que crecen contigo, desde una oficina unipersonal hasta cientos de trabajadores.",
        delay: "delay-300",
    },
    {
        icon: ShieldCheck,
        title: "Tranquilidad",
        description: "Soporte 100% en español e implementaciones extremadamente veloces (menos de 15 días).",
        delay: "delay-400",
    },
];

function GlowCard({ icon: Icon, title, description, delay }) {
    return (
        <div data-animate="slide-up" className={`${delay} min-h-[11rem]`}>
            <div className="relative h-full rounded-3xl border-[0.75px] border-slate-800/60 p-[3px]">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                />
                <div className="relative h-full group bg-slate-900/90 backdrop-blur-sm p-6 rounded-[calc(1.5rem-3px)] transition-all duration-300 hover:bg-slate-800/90 shadow-xl shadow-black/10 flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center bg-slate-800 text-slate-300 transition-colors group-hover:bg-slate-700 group-hover:text-white">
                            <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{title}</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default function Features() {
    return (
        <section id="nosotros" className="py-16 sm:py-24 md:py-32 bg-slate-950 relative overflow-hidden">

            {/* 1. Patrón de puntos sutil (Dot grid) */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>

            {/* 2. Resplandor de fondo */}
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

            {/* 3. Figuras geométricas abstractas */}
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] border-[2px] border-slate-800/40 rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] border-[30px] border-slate-800/20 rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">

                    {/* Columna Derecha en Desktop: Textos */}
                    <div data-animate="slide-left" className="max-w-xl order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-sm">
                            <Zap size={16} className="text-blue-400" />
                            <span>Aterrizado a tu realidad</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 sm:mb-8 text-white leading-[1.15]">
                            ¿Por qué elegir <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">REDPY</span> para tu negocio?
                        </h2>

                        <div className="pl-4 sm:pl-6 border-l-2 border-blue-500/50 mb-6 sm:mb-8 py-2">
                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                                "El puente perfecto entre la alta tecnología global y la operación real de la pyme local."
                            </p>
                        </div>

                        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                            En Chile, la mayoría de las soluciones corporativas son excesivamente complejas o absurdamente caras. Nosotros diseñamos, integramos y habilitamos; tú solo supervisas el crecimiento.
                        </p>
                    </div>

                    {/* Columna Izquierda en Desktop: Tarjetas con Glowing Effect */}
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5 order-2 lg:order-1">
                        {cards.map((card) => (
                            <GlowCard key={card.title} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
