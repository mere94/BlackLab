import React, { useState, useEffect, useRef } from 'react';
import { SALON_INFO } from '../data/salonData';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="topline mono">
        <span>Torino · Corso Casale 205/I</span>
        <span>Hair care / Colour / Personal style</span>
      </div>

      <header className="header">
        <div className="wrap nav">
          <a className="brand" href="#home" aria-label="Black Lab Hair Spa, home" onClick={closeMenu}>
            <img
              className="brand-mark"
              src={SALON_INFO.logoUrl}
              alt="Logo di Black Lab Hair Spa - Salone parrucchiere a Torino"
              width="43"
              height="43"
              loading="eager"
            />
            <span className="brand-name">
              {SALON_INFO.name}
              <small>{SALON_INFO.subtitle}</small>
            </span>
          </a>

          <nav
            ref={navRef}
            className={`navlinks ${isOpen ? 'open' : ''}`}
            id="navlinks"
            aria-label="Navigazione principale"
          >
            <a href="#approccio" onClick={closeMenu}>
              Lo studio
            </a>
            <a href="#trattamenti" onClick={closeMenu}>
              Trattamenti
            </a>
            <a href="#metodo" onClick={closeMenu}>
              Metodo
            </a>
            <a href="#gallery" onClick={closeMenu}>
              Ambiente
            </a>
            <a href="#contatti" onClick={closeMenu}>
              Contatti
            </a>
          </nav>

          <a
            className="nav-cta"
            href={SALON_INFO.whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Prenota <span aria-hidden="true">↗</span>
          </a>

          <button
            ref={toggleRef}
            className="menu-toggle"
            id="menuToggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="navlinks"
            onClick={toggleMenu}
          >
            {isOpen ? 'Chiudi −' : 'Menu +'}
          </button>
        </div>
      </header>
    </>
  );
};
