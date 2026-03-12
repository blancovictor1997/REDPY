import React from 'react';
import { Linkedin, Instagram, MapPin, Phone, Mail, Network, ChevronRight } from 'lucide-react';

export default function Footer({ openLegalModal }) {
    return (
        <footer className="relative bg-slate-950 pt-16 sm:pt-24 pb-8 text-white border-t border-slate-800 overflow-hidden">
            {/* Efecto de resplandor de fondo (Sutil) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 mb-10 sm:mb-16">
                    
                    {/* Columna de Marca (Brand) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            
                            <span className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                                REDPY
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-md">
                            Red de Inteligencia para Pymes. Transformando el esfuerzo manual en valor digital. Somos el partner tecnológico que las empresas chilenas necesitan para escalar.
                        </p>
                        <div className="flex gap-3 mt-2">
                            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all hover:bg-pink-600 hover:text-white hover:-translate-y-1 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Columna de Links Rápidos */}
                    <div className="lg:col-span-3 lg:col-start-7 flex flex-col gap-5">
                    
                    </div>

                    {/* Columna de Contacto */}
                    <div className="lg:col-span-3 flex flex-col gap-5">
                        <h4 className="text-lg font-semibold text-slate-100 m-0">Contacto</h4>
                        <ul className="flex flex-col gap-4 list-none p-0 m-0">
                            <li>
                                <div className="flex items-start gap-3 text-slate-400 text-sm group">
                                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 transition-colors">
                                        <MapPin size={16} className="text-blue-400" />
                                    </div>
                                    <span className="mt-1.5">Santiago, Chile</span>
                                </div>
                            </li>
                            <li>
                                <a href="tel:+56912345678" className="flex items-center gap-3 text-slate-400 text-sm group hover:text-blue-400 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
                                        <Phone size={16} className="text-blue-400" />
                                    </div>
                                    <span>+56 9 87618340</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hola@redpy.cl" className="flex items-center gap-3 text-slate-400 text-sm group hover:text-blue-400 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
                                        <Mail size={16} className="text-blue-400" />
                                    </div>
                                    <span>hola@redpy.cl</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom (Copyright y Legales) */}
                <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} REDPY.cl - Todos los derechos reservados.
                    </div>
                    <div className="flex gap-6 items-center">
                        <button onClick={() => openLegalModal('privacy')} className="bg-transparent border-none p-0 text-slate-500 hover:text-blue-400 transition-colors text-sm cursor-pointer font-medium">
                            Privacidad
                        </button>
                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                        <button onClick={() => openLegalModal('terms')} className="bg-transparent border-none p-0 text-slate-500 hover:text-blue-400 transition-colors text-sm cursor-pointer font-medium">
                            Términos
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}