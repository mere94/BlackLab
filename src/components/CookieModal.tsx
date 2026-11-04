import React, { useEffect } from 'react';

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookieModal: React.FC<CookieModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal open"
      id="cookie-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-modal-title"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 id="cookie-modal-title">Cookie Policy</h3>
          <button
            className="close-modal"
            aria-label="Chiudi"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <h4>Informativa estesa sui Cookie</h4>
          <p>
            Questo sito web utilizza esclusivamente cookie tecnici strettamente necessari al suo corretto funzionamento. Secondo la normativa vigente (Provvedimento del Garante Privacy dell'8 maggio 2014 e Linee guida del 2021), per l'installazione di tali cookie non è richiesto il preventivo consenso degli utenti.
          </p>

          <h5>Cosa sono i cookie tecnici?</h5>
          <p>
            Sono quelli utilizzati al solo fine di &ldquo;effettuare la trasmissione di una comunicazione su una rete di comunicazione elettronica, o nella misura strettamente necessaria al fornitore di un servizio della società dell'informazione esplicitamente richiesto dall'abbonato o dall'utente a erogare tale servizio&rdquo;.
          </p>

          <h5>Cookie utilizzati su questo sito</h5>
          <p>
            Il sito imposta unicamente un cookie tecnico locale per memorizzare l'avvenuta presa visione del banner informativo (durata: 1 anno), in modo da non riproporlo ad ogni accesso.
          </p>
          <p>
            Non vengono utilizzati cookie di profilazione di prima o terza parte, né cookie analitici per il tracciamento degli utenti.
          </p>

          <h5>Piattaforme Esterne</h5>
          <p>
            Il sito contiene link a piattaforme esterne (es. WhatsApp per contatti, Bewelly per prenotazioni, Instagram). Cliccando su questi link, l'utente abbandona il nostro sito. Il trattamento dei dati e l'uso di cookie su tali piattaforme sono regolati dalle rispettive privacy e cookie policy, a cui si rimanda.
          </p>
        </div>
      </div>
    </div>
  );
};
