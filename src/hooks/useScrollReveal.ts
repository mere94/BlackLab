import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]');

    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
      );

      revealItems.forEach((item) => observer.observe(item));

      return () => {
        observer.disconnect();
      };
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    }
  }, []);
}
