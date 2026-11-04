import React from 'react';

export const Intro: React.FC = () => {
  return (
    <section className="intro" id="approccio">
      <div className="wrap intro-grid">
        <h2 data-reveal>
          Prima i tuoi capelli.<br />
          <span>Poi tutto il resto.</span>
        </h2>
        <div className="intro-text" data-reveal>
          <p>
            Non esiste un trattamento giusto per tutti. Ogni capello ha una struttura, una storia e necessità diverse: per questo partiamo dall'ascolto e da una valutazione attenta.
          </p>
          <p>
            Black Lab è uno spazio dedicato alla cura e alla ricerca dello stile, dove scegliere con consapevolezza cosa fare e come farlo, con i migliori prodotti professionali.
          </p>
          <a className="inline-link" href="#metodo">
            Come lavoriamo <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
