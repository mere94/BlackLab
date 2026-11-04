import React from 'react';
import { SALON_INFO } from '../data/salonData';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy" data-reveal>
        <div className="hero-kicker mono">Black Lab Hair Spa / Torino</div>
        <h1 id="hero-title">
          <span>Capelli.</span>
          <span className="accent">Senza formule.</span>
        </h1>
        <p className="hero-description">
          Ogni percorso parte dai tuoi capelli. Ascolto, tecnica e cura per trovare il modo giusto di valorizzarli nel nostro salone a Torino.
        </p>
        <div className="hero-actions">
          <a
            className="button dark"
            href={SALON_INFO.whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Prenota un appuntamento <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a className="button light" href="#trattamenti">
            Esplora i trattamenti
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={SALON_INFO.heroImageUrl}
          alt="Piega e balayage biondo sfumato a onde realizzato da Black Lab Hair Spa a Torino"
          loading="eager"
          width="1200"
          height="1600"
        />
        <span className="image-index mono">01 / Black Lab</span>
      </div>

      <div className="hero-bottom mono">
        <span>
          <strong>01—04</strong> / Cura · Colore · Disciplina · Hair spa
        </span>
        <span>Scorri per conoscere lo studio ↓</span>
      </div>
    </section>
  );
};
