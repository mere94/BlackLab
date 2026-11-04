import React from 'react';
import { SALON_INFO } from '../data/salonData';

export const MobileBookingBar: React.FC = () => {
  return (
    <div className="mobile-book">
      <span>Black Lab · Torino</span>
      <a
        href={SALON_INFO.whatsappBookingUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Prenota ↗
      </a>
    </div>
  );
};
