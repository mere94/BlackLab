import React from 'react';
import { SALON_INFO, METHOD_STEPS } from '../data/salonData';

export const Method: React.FC = () => {
  return (
    <section className="method" id="metodo">
      <div className="wrap">
        <div className="method-top">
          <div className="method-photo" data-reveal>
            <img
              loading="lazy"
              src={SALON_INFO.methodImageUrl}
              alt="Poltrona lavatesta relax e zona hair spa per trattamenti benessere cute e capelli a Torino"
              width="1200"
              height="1168"
            />
            <span className="image-index mono">03 / Black Lab</span>
          </div>
          <div className="method-copy" data-reveal>
            <h2>
              Prima si ascolta.<br />
              <span>Poi si interviene.</span>
            </h2>
            <p>
              Il nostro metodo è semplice e concreto: capire cosa desideri, osservare la risposta dei capelli e scegliere insieme come procedere, passo dopo passo. Senza forzare un risultato predefinito.
            </p>
          </div>
        </div>

        <div className="steps" aria-label="Le fasi del metodo Black Lab">
          {METHOD_STEPS.map((step, idx) => (
            <div key={idx} className="step">
              <small className="mono">{step.number}</small>
              <strong>{step.title}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
