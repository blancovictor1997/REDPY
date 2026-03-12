import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import { BackgroundGradientAnimation } from './ui/BackgroundGradientAnimation';

const screens = [
    {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        alt: "Dashboard de Analytics",
    },
    {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        alt: "Panel de Métricas",
    },
    {
        src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200",
        alt: "Visualización de Datos",
    },
];

// Estilos por posición: [frente, atrás-izq, atrás-der]
const positionStyles = [
    { zIndex: 30, x: '0%', y: '0px', scale: 1, opacity: 1, rotate: 0 },
    { zIndex: 10, x: '-20%', y: '12px', scale: 0.88, opacity: 0.5, rotate: -4 },
    { zIndex: 20, x: '20%', y: '12px', scale: 0.88, opacity: 0.5, rotate: 4 },
];

function DesktopMockup({ src, alt, style }) {
    return (
        <div
            className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={style}
        >
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white">
                <div className="bg-slate-100 border-b border-slate-200 px-3 py-1.5 sm:px-4 sm:py-2.5 flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400/80"></div>
                </div>
                <img src={src} alt={alt} className="w-full h-auto block" />
            </div>
        </div>
    );
}

export default function Hero({ openModal }) {
    const [typedText, setTypedText] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const fullText = "Tu Pyme, ahora con superpoderes de IA.";
    const typingSpeed = 50;

    const startTypewriter = useCallback(() => {
        setTypedText('');
        let currentText = '';
        let currentIndex = 0;

        const startDelay = setTimeout(() => {
            const typingInterval = setInterval(() => {
                if (currentIndex < fullText.length) {
                    currentText += fullText[currentIndex];
                    setTypedText(currentText);
                    currentIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, typingSpeed);
        }, 300);

        return () => clearTimeout(startDelay);
    }, [fullText]);

    useEffect(() => {
        const cleanup = startTypewriter();
        return cleanup;
    }, [startTypewriter]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const replayAnimation = () => {
        startTypewriter();
    };

    const renderStyledText = () => {
        const firstPartExpected = "Tu Pyme, ahora con ";
        const breakIndex = firstPartExpected.length;

        const cursor = <span className="inline-block w-1 h-8 sm:w-1.5 sm:h-10 md:h-[0.8em] bg-blue-500 animate-pulse rounded-full opacity-70 ml-1 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>;

        if (typedText.length <= breakIndex) {
            return <span>{typedText}{cursor}</span>;
        }

        const firstPart = typedText.substring(0, breakIndex);
        const secondPart = typedText.substring(breakIndex);

        return (
            <>
                <span>{firstPart}</span>
                <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent pb-1">
                    {secondPart}
                </span>
                {cursor}
            </>
        );
    };

    const getStyle = (screenIdx) => {
        const pos = positionStyles[(3 + screenIdx - activeIndex) % 3];
        return {
            zIndex: pos.zIndex,
            transform: `translateX(${pos.x}) translateY(${pos.y}) scale(${pos.scale}) rotate(${pos.rotate}deg)`,
            opacity: pos.opacity,
        };
    };

    return (
        <section id="inicio" className="relative min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden">
            <BackgroundGradientAnimation
                containerClassName="absolute inset-0"
                gradientBackgroundStart="rgb(240, 245, 255)"
                gradientBackgroundEnd="rgb(235, 240, 252)"
                firstColor="147, 180, 255"
                secondColor="180, 160, 240"
                thirdColor="130, 210, 230"
                fourthColor="160, 170, 240"
                fifthColor="140, 200, 245"
                pointerColor="160, 170, 240"
                size="80%"
                blendingValue="normal"
                interactive={true}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full flex flex-col items-center text-center pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20">
                <div data-animate="slide-up" className="max-w-4xl flex flex-col items-center">

                    {/* Badge */}
                    <div className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-blue-700 text-xs sm:text-sm font-bold tracking-wide shadow-sm backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Tecnología para el emprendedor chileno
                    </div>

                    {/* Titular */}
                    <h1
                        className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1] mb-4 sm:mb-6 min-h-[100px] sm:min-h-[120px] md:min-h-[160px] cursor-pointer group"
                        onClick={replayAnimation}
                        title="Haz clic para repetir la animación"
                    >
                        {renderStyledText()}
                    </h1>

                    <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed font-medium px-2 sm:px-0">
                        En REDPY transformamos los procesos manuales que te quitan tiempo en soluciones automatizadas que generan valor.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
                        <button
                            className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30 active:scale-95"
                            onClick={(e) => { e.preventDefault(); openModal(); }}
                        >
                            Diagnostica tu Pyme Gratis
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </button>
                        <a
                            href="#servicios"
                            className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                            Ver Soluciones
                        </a>
                    </div>

                    {/* 3 Pantallas Desktop con rotación */}
                    <div className="mt-12 sm:mt-16 md:mt-20 w-full max-w-5xl relative" style={{ paddingBottom: '55%' }}>
                        {screens.map((screen, idx) => (
                            <DesktopMockup
                                key={idx}
                                src={screen.src}
                                alt={screen.alt}
                                style={getStyle(idx)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
