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
          <span className="footer-brand">{SALON_INFO.companyName.toUpperCase()}</span>
          <span className="footer-info">
            Sede legale: {SALON_INFO.address} · {SALON_INFO.cityPostal}<br />
            P.IVA: {SALON_INFO.vatNumber} · {SALON_INFO.chamberOfCommerce} (REA {SALON_INFO.rea})<br />
            Tel: <a href={SALON_INFO.phoneHref} className="hover:underline">{SALON_INFO.phone}</a> · PEC: <a href={`mailto:${SALON_INFO.pec}`} className="hover:underline">{SALON_INFO.pec}</a>
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
