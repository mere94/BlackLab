import React, { useState, useEffect } from 'react';

interface CookieBannerProps {
  onOpenCookiePolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenCookiePolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem('cookies_accepted');
    if (!isAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies_accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div id="cookie-banner" className="cookie-banner" role="region" aria-label="Consenso Cookie">
      <div className="cookie-content">
        <p>
          Questo sito utilizza cookie tecnici strettamente necessari per il funzionamento del sito. Non utilizziamo cookie di profilazione per l'invio di pubblicità mirata.{' '}
          <button
            type="button"
            onClick={onOpenCookiePolicy}
            style={{ textDecoration: 'underline', color: 'var(--accent)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}
          >
            Leggi la Cookie Policy
          </button>
          .
        </p>
        <button
          id="accept-cookies"
          className="button dark"
          style={{ minHeight: '36px', padding: '0 15px' }}
          onClick={handleAccept}
        >
          Ho capito
        </button>
      </div>
    </div>
  );
};
