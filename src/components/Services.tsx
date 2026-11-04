import React, { useState } from 'react';
import { SERVICES, SALON_INFO } from '../data/salonData';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section className="services" id="trattamenti">
      <div className="wrap">
        <div className="services-heading" data-reveal>
          <h2>
            Un buon risultato<br />
            comincia dalla scelta.
          </h2>
          <p>Quattro aree di lavoro, un punto di partenza comune: capire di cosa hanno bisogno i tuoi capelli oggi.</p>
        </div>

        <div className="service-list">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="service-row group cursor-pointer"
              data-reveal
              onClick={() => setSelectedService(service)}
              title="Clicca per approfondire il trattamento"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedService(service);
                }
              }}
            >
              <span className="service-no mono">{service.number}</span>
              <div className="flex items-center justify-between pr-4">
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <p className="services-note">
          Le aree indicate descrivono l'offerta generale. Per trattamenti specifici (taglio donna/uomo, piega, acconciature) e disponibilità, contatta il salone.
        </p>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-dialog-title"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '540px' }}
          >
            <div className="modal-header">
              <h3 id="service-dialog-title">
                <span className="mono text-xs text-[#0cc8c4] block mb-1">Area {selectedService.number}</span>
                {selectedService.title}
              </h3>
              <button
                className="close-modal"
                aria-label="Chiudi dettaglio"
                onClick={() => setSelectedService(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p className="text-base font-medium text-[#171918] mb-4">
                {selectedService.description}
              </p>
              {selectedService.details && (
                <div className="bg-[#e9ece7] p-4 rounded mb-6 text-sm text-[#454a46] leading-relaxed">
                  <strong className="block text-[#171918] mb-1">Cosa prevede il nostro approccio:</strong>
                  {selectedService.details}
                </div>
              )}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  className="button dark flex-1"
                  href={`https://wa.me/393759460567?text=Buongiorno%2C%20vorrei%20prenotare%20il%20trattamento%20${encodeURIComponent(selectedService.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prenota con WhatsApp ↗
                </a>
                <a
                  className="button light"
                  href={SALON_INFO.bewellyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oppure su BeWelly ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
