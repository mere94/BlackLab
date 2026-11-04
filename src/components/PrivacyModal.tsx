import React, { useEffect } from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
      id="privacy-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 id="privacy-modal-title">Privacy Policy</h3>
          <button
            className="close-modal"
            aria-label="Chiudi"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <h4>Informativa sul trattamento dei dati personali (Artt. 13 e 14 GDPR)</h4>
          <p>
            Il presente documento descrive le modalità di gestione del sito web in riferimento al trattamento dei dati personali degli utenti che lo consultano. L'informativa è resa ai sensi del Regolamento (UE) 2016/679 (GDPR).
          </p>

          <h5>1. Titolare del Trattamento</h5>
          <p>
            Il Titolare del trattamento dei dati è Black Lab Hair Spa, con sede in Corso Casale 205/I, 10132 Torino (TO), P.IVA [INSERIRE P.IVA]. E-mail di contatto: [INSERIRE EMAIL].
          </p>

          <h5>2. Tipologia di Dati Trattati</h5>
          <p>
            <strong>Dati di navigazione:</strong> I sistemi informatici preposti al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP).
          </p>
          <p>
            <strong>Dati forniti volontariamente dall'utente:</strong> L'invio facoltativo, esplicito e volontario di messaggi ai recapiti indicati su questo sito (es. WhatsApp, prenotazioni tramite piattaforma esterna Bewelly) comporta la successiva acquisizione dei dati di contatto del mittente, necessari per rispondere alle richieste.
          </p>

          <h5>3. Finalità del Trattamento</h5>
          <p>
            I dati forniti verranno utilizzati esclusivamente per: rispondere alle richieste di informazioni, gestire le prenotazioni di appuntamenti, adempiere agli obblighi di legge.
          </p>

          <h5>4. Base Giuridica</h5>
          <p>
            La base giuridica che legittima il trattamento è l'esecuzione di misure precontrattuali adottate su richiesta dell'interessato (art. 6, par. 1, lett. b GDPR) e il legittimo interesse del titolare per i dati di navigazione (art. 6, par. 1, lett. f GDPR).
          </p>

          <h5>5. Diritti degli Interessati</h5>
          <p>
            In qualunque momento l'utente può esercitare i diritti previsti dagli artt. 15 e ss. del GDPR (accesso, rettifica, cancellazione, limitazione, opposizione) contattando il Titolare ai recapiti indicati.
          </p>
        </div>
      </div>
    </div>
  );
};
