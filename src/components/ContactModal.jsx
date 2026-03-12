import React, { useState } from 'react';
import { X, Send, CheckCircle, Sparkles, Loader2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, openLegalModal }) {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        interest: 'automation',
        acceptTerms: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envío
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleClose = () => {
        onClose();
        // Reset después de que cierre la animación
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({ name: '', company: '', email: '', interest: 'automation', acceptTerms: false });
        }, 300);
    };

    React.useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') handleClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-[2000] flex justify-center items-end sm:items-center bg-slate-900/60 backdrop-blur-sm p-0 sm:p-4 transition-all duration-300 ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
            onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
            <div className={`bg-white rounded-t-2xl sm:rounded-3xl w-full max-w-5xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative flex flex-col max-h-[95vh] sm:max-h-[90vh] transition-all duration-500 ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-100 sm:scale-95 translate-y-8 opacity-0'}`}>

                <button
                    className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center border-none cursor-pointer transition-colors z-20 md:bg-slate-100 md:hover:bg-slate-200 md:text-slate-600"
                    onClick={handleClose}
                    aria-label="Cerrar"
                >
                    <X size={16} />
                </button>

                <div className="flex flex-col md:flex-row overflow-y-auto">
                    {/* Panel Izquierdo - Compacto en mobile */}
                    <div className="flex-1 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white px-5 py-5 sm:p-10 md:p-14 rounded-t-2xl sm:rounded-t-none md:rounded-l-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-blue-200 text-xs font-medium mb-3 sm:mb-6 backdrop-blur-sm border border-white/10">
                                <Sparkles size={12} />
                                Consultoría gratuita
                            </div>

                            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 leading-tight">
                                ¿Listo/a para <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Evolucionar?</span>
                            </h3>
                            <p className="text-blue-100/80 text-xs sm:text-base mb-0 sm:mb-10 leading-relaxed hidden sm:block">
                                Agenda una consultoría de 15 minutos. Analizaremos tu negocio y te diremos exactamente dónde la IA puede generar valor inmediato.
                            </p>

                            <div className="hidden sm:block space-y-5">
                                {[
                                    { title: "Evaluación Inicial Gratuita", desc: "Evaluamos tu estado actual sin costo." },
                                    { title: "Plan a Medida", desc: "Estrategia personalizada para tu pyme." },
                                    { title: "ROI Proyectado", desc: "Claridad en el retorno de tu inversión." },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 group">
                                        <div className="mt-0.5 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/30 transition-colors">
                                            <CheckCircle size={14} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold mb-0.5">{item.title}</h4>
                                            <p className="text-blue-200/60 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Panel Derecho - Formulario o Estado de Éxito */}
                    <div className="flex-[1.2] p-6 sm:p-10 md:p-14 bg-white md:rounded-r-3xl">
                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center h-full text-center gap-4 sm:gap-6 py-6 sm:py-10 animate-[fadeIn_0.5s_ease]">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle size={32} className="text-green-500 sm:hidden" />
                                    <CheckCircle size={40} className="text-green-500 hidden sm:block" />
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">¡Solicitud enviada!</h3>
                                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-sm">
                                        Nos pondremos en contacto contigo dentro de las próximas 24 horas hábiles.
                                    </p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="mt-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-colors text-sm sm:text-base"
                                >
                                    Cerrar
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">Completa tus datos</h3>
                                    <p className="text-xs sm:text-sm text-slate-400">Te contactaremos a la brevedad.</p>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-slate-700">Nombre / Pyme</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Tu nombre o empresa"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-xl outline-none transition duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-900 bg-slate-50/50 focus:bg-white placeholder:text-slate-300 text-sm sm:text-base"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-slate-700">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="tucorreo@empresa.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-xl outline-none transition duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-900 bg-slate-50/50 focus:bg-white placeholder:text-slate-300 text-sm sm:text-base"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="interest" className="text-xs sm:text-sm font-semibold text-slate-700">Rubro de tu Negocio</label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-xl outline-none transition duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-900 bg-slate-50/50 focus:bg-white appearance-none cursor-pointer text-sm sm:text-base"
                                    >
                                        <option value="automation">Automotoras y Maquinaria</option>
                                        <option value="chatbots">Salud y Abogados</option>
                                        <option value="analysis">Gastronomía y Turismo</option>
                                        <option value="consulting">Construcción e Inmobiliaria</option>
                                    </select>
                                </div>

                                <div className="flex items-start gap-2 sm:gap-3 mt-1">
                                    <input
                                        type="checkbox"
                                        id="acceptTerms"
                                        name="acceptTerms"
                                        checked={formData.acceptTerms}
                                        onChange={handleChange}
                                        required
                                        className="mt-0.5 sm:mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 cursor-pointer accent-blue-600"
                                    />
                                    <label htmlFor="acceptTerms" className="text-[11px] sm:text-xs text-slate-500 leading-relaxed cursor-pointer">
                                        Acepto las <a href="#" onClick={(e) => { e.preventDefault(); openLegalModal('privacy'); }} className="text-blue-600 font-medium hover:underline">Políticas de Privacidad</a> y consiento que REDPY me contacte. No compartiremos tus datos con terceros.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-2 sm:mt-3 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Solicitar Auditoría <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
