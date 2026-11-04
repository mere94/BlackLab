import React from 'react';
import { SALON_INFO } from '../data/salonData';

export const Feature: React.FC = () => {
  return (
    <section className="feature" aria-labelledby="feature-title">
      <div className="feature-photo">
        <img
          loading="lazy"
          src={SALON_INFO.featureImageUrl}
          alt="Dettaglio dei prodotti utilizzati da Black Lab Hair Spa"
        />
        <span className="image-index mono">02 / Black Lab</span>
      </div>
      <div className="feature-copy" data-reveal>
        <h2 id="feature-title">
          La differenza<br />
          sta nel modo<br />
          di prendersene cura.
        </h2>
        <p>
          Non proponiamo soluzioni universali o tendenze passeggere. Osserviamo lo stato reale del capello, ascoltiamo le tue abitudini e valutiamo insieme il percorso su misura più adatto a te.
        </p>
        <a
          className="button white"
          href={SALON_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chiedi un consiglio <span className="arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
};
