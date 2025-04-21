'use client';

import { useState } from 'react';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra el menú al hacer clic en un enlace y realiza scroll suave
  const handleMenuLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      setMenuOpen(false);
    }
  };

  return (
    <section className="menu container">
      <header className="menu__header">
        <a href="#" className="menu__home-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
          <img src="/assets/logo.png" className="menu__imagen" alt="logo" />
          <h1 className="menu__title">Wilmer Gulcochía</h1>
        </a>
      </header>
      <nav>
        <ul className={`menu__list${menuOpen ? ' open' : ''}`}>
          <li className="menu__list__item">
            <a href="#sobre-mi" className="menu__link" onClick={e => handleMenuLinkClick(e, '#sobre-mi')}>
              <span className="menu__link--nombre">&nbsp;&nbsp;Sobre mi</span>
              <span className="menu__link--icon"><i className="fas fa-address-card" aria-hidden="true"></i></span>
            </a>
          </li>
          <li className="menu__list__item">
            <a href="#skills" className="menu__link" onClick={e => handleMenuLinkClick(e, '#skills')}>
              <span className="menu__link--nombre">&nbsp;&nbsp;Skills</span>
              <span className="menu__link--icon"><i className="fa-solid fa-screwdriver-wrench"></i></span>
            </a>
          </li>
          <li className="menu__list__item">
            <a href="#hobbies" className="menu__link" onClick={e => handleMenuLinkClick(e, '#hobbies')}>
              <span className="menu__link--nombre">&nbsp;&nbsp;Hobbies</span>
              <span className="menu__link--icon"><i className="fa-solid fa-heart"></i></span>
            </a>
          </li>
          <li className="menu__list__item">
            <a href="#formacion" className="menu__link" onClick={e => handleMenuLinkClick(e, '#formacion')}>
              <span className="menu__link--nombre">&nbsp;&nbsp;Formación</span>
              <span className="menu__link--icon"><i className="fa-solid fa-user-graduate"></i></span>
            </a>
          </li>
          <li className="menu__list__item">
            <a href="#xp" className="menu__link" onClick={e => handleMenuLinkClick(e, '#xp')}>
              <span className="menu__link--nombre">&nbsp;&nbsp;Proyectos</span>
              <span className="menu__link--icon"><i className="fas fa-tasks" aria-hidden="true"></i></span>
            </a>
          </li>
          <li className="menu__list__item--activo">
            <a href="#contacto" className="menu__link" onClick={e => handleMenuLinkClick(e, '#contacto')}>
              <span className="menu__link--nombre">&nbsp;&nbsp;Contacto</span>
              <span className="menu__link--icon"><i className="fas fa-envelope-open-text" aria-hidden="true"></i></span>
            </a>
          </li>
          <li className="menu__list__item__contato">
            <a href="#contacto">contacto@wigusa.com</a>
          </li>
        </ul>
      </nav>
      {/* Menú hamburguesa visible solo en mobile/tablet */}
      <div className="menu__hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={`fas menu__img ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </section>
  );
}
