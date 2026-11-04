import React from 'react';
import { SALON_INFO } from '../data/salonData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenCookie: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenCookie }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-col">
          <span className="footer-brand">{SALON_INFO.name} HAIR SPA</span>
          <span className="footer-info">
            TORINO · CORSO CASALE 205/I<br />
            P.IVA: [INSERIRE PARTITA IVA]
          </span>
        </div>
        <div className="footer-links">
          <button
            type="button"
            className="gdpr-link"
            onClick={onOpenPrivacy}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            className="gdpr-link"
            onClick={onOpenCookie}
          >
            Cookie Policy
          </button>
          <a
            className="footer-social"
            href={SALON_INFO.whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Black Lab Hair Spa"
          >
            WhatsApp ↗
          </a>
          <a
            className="footer-social"
            href={SALON_INFO.bewellyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prenota su BeWelly"
          >
            BeWelly ↗
          </a>
          <a
            className="footer-social"
            href={SALON_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Black Lab Hair Spa"
          >
            Instagram ↗
          </a>
        </div>
        <span>© {currentYear} BLACK LAB</span>
      </div>
    </footer>
  );
};
