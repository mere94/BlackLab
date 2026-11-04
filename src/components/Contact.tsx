import React from 'react';
import { SALON_INFO, SCHEDULE } from '../data/salonData';

export const Contact: React.FC = () => {
  return (
    <section className="contact" id="contatti">
      <div className="wrap contact-grid">
        <div data-reveal>
          <h2>
            Parliamo<br />
            <span>dei tuoi capelli.</span>
          </h2>
          <p className="contact-lead">
            Per prenotare un appuntamento nel nostro salone a Torino o chiedere un consiglio, scegli il modo più semplice per contattarci.
          </p>
          <div className="contact-actions">
            <a
              className="button white"
              href={SALON_INFO.whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Prenota con WhatsApp <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="contact-details" data-reveal>
          <div className="detail">
            <small className="mono">Indirizzo</small>
            <p>
              {SALON_INFO.address}<br />
              {SALON_INFO.cityPostal}
            </p>
          </div>

          <div className="detail">
            <small className="mono">Telefono</small>
            <p>
              <a href={SALON_INFO.phoneHref}>{SALON_INFO.phone}</a>
            </p>
          </div>

          <div className="detail">
            <small className="mono">WhatsApp</small>
            <p>
              <a
                href={SALON_INFO.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Prenota o richiedi info su WhatsApp ↗
              </a>
            </p>
          </div>

          <div className="detail">
            <small className="mono">BeWelly</small>
            <p>
              <a
                href={SALON_INFO.bewellyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Prenota online su BeWelly ↗
              </a>
            </p>
          </div>

          <div className="detail">
            <small className="mono">Orari</small>
            <p>
              {SCHEDULE.map((item, idx) => (
                <React.Fragment key={idx}>
                  {item.day}: {item.hours}
                  {idx < SCHEDULE.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className="detail">
            <small className="mono">Mappa</small>
            <p>
              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ottieni indicazioni stradali ↗
              </a>
            </p>
          </div>

          <div className="detail">
            <small className="mono">Social</small>
            <p>
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visita il profilo Instagram di Black Lab Hair Spa"
              >
                Seguici su Instagram ↗
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
