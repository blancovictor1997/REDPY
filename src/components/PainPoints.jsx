import React from 'react';
import { FileText, MessageCircle, Hourglass, TrendingDown, AlertCircle } from 'lucide-react';
import { GlowingEffect } from './ui/GlowingEffect';

const cards = [
    {
        icon: FileText,
        title: "Planillas Infinitas",
        description: "Gestión manual de datos que aumenta el riesgo de errores y consume horas clave de tu día.",
        delay: "delay-100",
    },
    {
        icon: MessageCircle,
        title: "Mensajes Perdidos",
        description: "Clientes esperando respuestas por horas mientras intentas organizar tu bandeja de entrada.",
        delay: "delay-200",
    },
    {
        icon: Hourglass,
        title: "Falta de Tiempo",
        description: "Días enteros que se van en tareas rutinarias que podrían estar automatizadas ahora mismo.",
        delay: "delay-300",
    },
    {
        icon: TrendingDown,
        title: "Fuga de Capital",
        description: "Pérdida de potenciales prospectos de ventas por falta de seguimiento y atención lenta a sus dudas.",
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

export default function PainPoints() {
    return (
        <section id="desafios" className="py-16 sm:py-24 md:py-32 bg-slate-950 relative overflow-hidden">
            {/* 1. Patrón de puntos sutil (Dot grid) */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>

            {/* 2. Luz de fondo muy suave para dar profundidad */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-800/30 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

            {/* 3. Figuras geométricas abstractas (Anillos) */}
            <div className="absolute -bottom-1/3 -left-32 w-[600px] h-[600px] border-[40px] border-slate-800/20 rounded-full pointer-events-none"></div>
            <div className="absolute top-1/4 -right-20 w-[300px] h-[300px] border-[2px] border-slate-700/30 rounded-full pointer-events-none px-4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">

                    {/* Columna Izquierda: Textos */}
                    <div data-animate="slide-right" className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-sm">
                            <AlertCircle size={16} className="text-slate-400" />
                            <span>El desafío de escalar</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 sm:mb-8 text-white leading-[1.15]">
                            ¿Sientes que el día <span className="gemini-text">no te alcanza</span> para todo?
                        </h2>

                        <div className="pl-4 sm:pl-6 border-l-2 border-slate-700 mb-6 sm:mb-8 py-2">
                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                                "No te falta personal, te sobra trabajo manual en tareas repetitivas."
                            </p>
                        </div>

                        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                            Muchos emprendedores quedan atrapados en la operación diaria. Inviertes gran parte de tu día gestionando planillas y mensajes, en lugar de enfocarte en hacer crecer tu negocio.
                        </p>
                    </div>

                    {/* Columna Derecha: Tarjetas con Glowing Effect */}
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                        {cards.map((card) => (
                            <GlowCard key={card.title} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
