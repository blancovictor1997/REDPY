import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ openModal, openChat }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleNavClick = (e, hash) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        if (hash) {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
                scrolled 
                    ? 'bg-white/70 backdrop-blur-lg border-b border-slate-200/50 shadow-sm py-3' 
                    : 'bg-transparent py-5'
            }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center w-full">
                
                {/* 1. Inicio (START): Logo */}
                <a 
                    href="#" 
                    className="flex items-center gap-1.5 text-2xl font-black tracking-tighter no-underline transition-transform hover:scale-105 shrink-0" 
                    onClick={(e) => handleNavClick(e, null)}
                >
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        REDPY
                    </span> 
                    <span className="text-slate-900">AI</span>
                </a>

                {/* 2. Centro (CENTER): Navs */}
                <div className="hidden md:flex items-center gap-2 lg:gap-4 flex-1 justify-center">
                    <a 
                        href="#desafios" 
                        className="text-sm font-medium text-slate-600 px-3 py-2 rounded-full hover:text-slate-900 hover:bg-slate-100/80 transition-all" 
                        onClick={(e) => handleNavClick(e, '#desafios')}
                    >
                        Desafíos
                    </a>
                    <a 
                        href="#servicios" 
                        className="text-sm font-medium text-slate-600 px-3 py-2 rounded-full hover:text-slate-900 hover:bg-slate-100/80 transition-all" 
                        onClick={(e) => handleNavClick(e, '#servicios')}
                    >
                        Soluciones
                    </a>    <a 
                        href="#nosotros" 
                        className="text-sm font-medium text-slate-600 px-3 py-2 rounded-full hover:text-slate-900 hover:bg-slate-100/80 transition-all" 
                        onClick={(e) => handleNavClick(e, '#nosotros')}
                    >
                        Por qué REDPY
                    </a>
                    <a 
                        href="#proceso" 
                        className="text-sm font-medium text-slate-600 px-3 py-2 rounded-full hover:text-slate-900 hover:bg-slate-100/80 transition-all" 
                        onClick={(e) => handleNavClick(e, '#proceso')}
                    >
                        Cómo funciona
                    </a>
                
                </div>

                {/* 3. Final (END): Botón Contacto y Menú Móvil */}
                <div className="flex items-center gap-4 shrink-0">
                    <button 
                        className="hidden md:inline-flex group relative items-center justify-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 hover:-translate-y-0.5 overflow-hidden" 
                        onClick={(e) => { e.preventDefault(); openChat(); }}
                    >
                        {/* Efecto de brillo sutil en el botón */}
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                            <div className="relative h-full w-8 bg-white/20"></div>
                        </div>
                        <span className="relative">Contacto WhatsApp</span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden relative z-50 p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors" 
                        aria-label="Menu" 
                        onClick={toggleMobileMenu}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div 
                className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-2xl transition-all duration-300 ease-in-out origin-top md:hidden ${
                    mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
            >
                <div className="flex flex-col px-4 sm:px-6 py-6 sm:py-8 gap-4 sm:gap-6">
                    <a href="#desafios" className="text-base sm:text-lg font-medium text-slate-700 hover:text-blue-600" onClick={(e) => handleNavClick(e, '#desafios')}>Desafíos</a>
                    <a href="#servicios" className="text-base sm:text-lg font-medium text-slate-700 hover:text-blue-600" onClick={(e) => handleNavClick(e, '#servicios')}>Soluciones</a>
                    <a href="#proceso" className="text-base sm:text-lg font-medium text-slate-700 hover:text-blue-600" onClick={(e) => handleNavClick(e, '#proceso')}>Cómo funciona</a>
                    <a href="#nosotros" className="text-base sm:text-lg font-medium text-slate-700 hover:text-blue-600" onClick={(e) => handleNavClick(e, '#nosotros')}>Por qué REDPY</a>

                    <button
                        className="mt-2 sm:mt-4 w-full bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-slate-900/20 active:scale-95 transition-all text-sm sm:text-base"
                        onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); openChat(); }}
                    >
                        Contacto WhatsApp
                    </button>
                </div>
            </div>
        </header>
    );
}