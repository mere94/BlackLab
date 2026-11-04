import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      } else if (e.key === 'ArrowRight' && activeImage) {
        const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === activeImage.id);
        const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
        setActiveImage(GALLERY_ITEMS[nextIndex]);
      } else if (e.key === 'ArrowLeft' && activeImage) {
        const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === activeImage.id);
        const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
        setActiveImage(GALLERY_ITEMS[prevIndex]);
      }
    };

    if (activeImage) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage]);

  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="gallery-heading" data-reveal>
          <h2>
            Uno spazio<br />
            da conoscere.
          </h2>
          <p>Un ambiente rilassante pensato per il tuo benessere in Corso Casale.</p>
        </div>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.id}
              className={`gallery-item group cursor-pointer ${item.id === 7 ? 'gallery-item-listino' : ''}`}
              onClick={() => setActiveImage(item)}
              tabIndex={0}
              role="button"
              aria-label={`Visualizza immagine ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveImage(item);
                }
              }}
            >
              <img
                loading="lazy"
                src={item.imageUrl}
                alt={item.title}
                className={item.id === 7 ? 'listino-img' : ''}
              />
              <figcaption className="gallery-caption mono">
                {item.caption}
                {item.id === 7 && <span className="listino-zoom-hint"> · Tocca per ingrandire ↗</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {activeImage && (
        <div
          className="lightbox-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl font-light hover:text-[#0cc8c4] transition-colors p-2 z-50 cursor-pointer"
            onClick={() => setActiveImage(null)}
            aria-label="Chiudi ingrandimento"
          >
            ✕
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.imageUrl}
              alt={activeImage.title}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <span>{activeImage.caption} · {activeImage.title}</span>
            </div>
            <p className="text-[#aeb6af] text-xs mt-2 font-mono">Usa le frecce della tastiera ← → o tocca fuori per chiudere</p>
          </div>
        </div>
      )}
    </section>
  );
};
