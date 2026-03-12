import { useEffect } from 'react';

export function useScrollAnimation(trigger) {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    // Remover la clase cuando sale de la vista para que la animación
                    // vuelva a ocurrir cuando el usuario haga scroll de regreso.
                    entry.target.classList.remove('in-view');
                }
            });
        }, observerOptions);

        // Small delay to ensure DOM is ready
        setTimeout(() => {
            const elements = document.querySelectorAll('[data-animate]');
            elements.forEach(el => {
                observer.observe(el);
            });
        }, 100);

        return () => {
            observer.disconnect();
        };
    }, [trigger]);
}
