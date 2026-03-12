import React, { useState } from 'react';
import { Car, Scale, Utensils, Building2, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const industries = [
    {
        id: 'automotora',
        name: 'Automotoras y Maquinaria',
        icon: Car,
        title: 'Gestión inteligente de leads y ventas',
        impact: 'Aumenta un 40% la retención de prospectos interesados fuera de horario laboral.',
        features: [
            'Agentes de venta disponibles 24/7',
            'Gestión de inventario predictiva',
            'Calificación de leads integrada al CRM'
        ],
        image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800',
        video: 'https://www.youtube.com/watch?v=Cj26b1CRTIg',
        link: '#'
    },
    {
        id: 'legal',
        name: 'Salud y Abogados',
        icon: Scale,
        title: 'Automatización administrativa y agendamiento',
        impact: 'Reduce un 60% el tiempo invertido en tareas de gestión de agenda y documentación.',
        features: [
            'Asistente de agendamiento autónomo',
            'Resumen inteligente de expedientes',
            'Envío automatizado de recordatorios'
        ],
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-lawyer-signing-documents-4261-large.mp4',
        link: '#'
    },
    {
        id: 'gastronomia',
        name: 'Gastronomía y Turismo',
        icon: Utensils,
        title: 'Reservas centralizadas y control de flujo',
        impact: 'Logra hasta un 95% de ocupación evitando reservas fantasma y cancelaciones tardías.',
        features: [
            'Bot de reservas por WhatsApp / RRSS',
            'Confirmaciones automáticas',
            'Optimización de precios dinámica'
        ],
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-4187-large.mp4',
        link: '#'
    },
    {
        id: 'construccion',
        name: 'Construcción e Inmobiliaria',
        icon: Building2,
        title: 'Prospección y seguimiento de ventas acelerado',
        impact: 'Reduce a la mitad el ciclo de ventas de proyectos inmobiliarios.',
        features: [
            'Calificación automática de prospectos',
            'Respuestas instantáneas de cotizaciones',
            'Visualización de avances de obra'
        ],
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-construction-site-at-sunset-4309-large.mp4',
        link: '#'
    }
];

export default function Services() {
    const [activeTab, setActiveTab] = useState(industries[0]);
    const [key, setKey] = useState(0);

    const handleTabChange = (industry) => {
        setActiveTab(industry);
        setKey(prev => prev + 1);
    };

    const getYouTubeId = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const isYouTube = (url) => {
        return url && (url.includes('youtube.com') || url.includes('youtu.be'));
    };

    return (
        <section id="servicios" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">

            {/* Elemento de fondo sutil premium */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-slate-50 border-b border-slate-100 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8" data-animate="slide-up">

                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 leading-[1.15]">
                        Automatización diseñada a medida para <span className="text-slate-500">tu sector</span>.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Selecciona tu industria y descubre cómo nuestras soluciones operativas resuelven los problemas específicos de tu rubro comercial.
                    </p>
                </div>

                {/* Navegación por Pestañas (Tabs) Estilo Premium Clean */}
                <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 md:mb-10" data-animate="slide-up">
                    {industries.map((industry) => (
                        <button
                            key={industry.id}
                            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 border
                                ${activeTab.id === industry.id
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}
                            onClick={() => handleTabChange(industry)}
                        >
                            <industry.icon size={16} strokeWidth={activeTab.id === industry.id ? 2 : 1.5} />
                            <span className="hidden sm:inline">{industry.name}</span>
                            <span className="sm:hidden">{industry.name.split(' ')[0]}</span>
                        </button>
                    ))}
                </div>

                {/* Contenedor Principal del Tab Activo */}
                <div className="bg-white rounded-2xl sm:rounded-[2rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden grid lg:grid-cols-[1.2fr_1fr]" data-animate="fade-in">

                    {/* Lado Izquierdo: Contenido Textual */}
                    <div className="p-5 sm:p-6 md:p-10 flex flex-col justify-center order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 text-slate-500 font-semibold tracking-wide uppercase text-xs mb-4">
                            <activeTab.icon size={16} />
                            {activeTab.name}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 md:mb-5 mb-4 leading-tight">
                            {activeTab.title}
                        </h3>

                        {/* Lista de features */}
                        <ul className="mb-6 space-y-3">
                            {activeTab.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2.5">
                                    <CheckCircle2 size={18} className="text-slate-400 shrink-0 mt-0.5" strokeWidth={2} />
                                    <span className="text-slate-600 text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Caja de Impacto - Estilo Dashboard Card */}
                        <div className="p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-100 mb-6 md:mb-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-slate-800"></div>
                            <h4 className="text-xs font-bold text-slate-900 mb-1.5 uppercase tracking-wide">Impacto Directo</h4>
                            <p className="text-slate-600 leading-relaxed font-medium text-sm">{activeTab.impact}</p>
                        </div>

                        <a href="#contacto" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors w-full sm:w-max text-xs sm:text-sm">
                            Solicitar asesoría para este sector
                            <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Lado Derecho: Contenido Multimedia (Video/Imagen) */}
                    <div className="relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-auto overflow-hidden bg-slate-100 order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-slate-200">
                        {isYouTube(activeTab.video) ? (
                            <iframe
                                key={key}
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-[1.35]"
                                src={`https://www.youtube.com/embed/${getYouTubeId(activeTab.video)}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getYouTubeId(activeTab.video)}&showinfo=0&rel=0`}
                                title={activeTab.name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <video
                                key={key}
                                className="absolute inset-0 w-full h-full object-cover"
                                src={activeTab.video}
                                poster={activeTab.image}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        )}
                        {/* Overlay para suavizar el video y que parezca premium */}
                        <div className="absolute inset-0     bg-slate-900/10 mix-blend-multiply pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
