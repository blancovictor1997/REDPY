import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, title, content }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    return (
        <div 
            className={`fixed inset-0 z-[2000] flex justify-center items-center bg-slate-900/60 backdrop-blur-sm p-4 transition-all duration-300 ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`} 
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className={`bg-white rounded-2xl w-full max-w-3xl p-8 relative max-h-[90vh] flex flex-col shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-transform duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
                
                <button 
                    className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full flex items-center justify-center border-none cursor-pointer transition-colors z-10" 
                    onClick={onClose} 
                    aria-label="Cerrar"
                >
                    <X size={20} />
                </button>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pr-12">{title}</h2>
                
                <div 
                    className="overflow-y-auto pr-4 text-slate-600 leading-relaxed text-sm format-legal-content" 
                    dangerouslySetInnerHTML={{ __html: content }} 
                />
            </div>
        </div>
    );
}
