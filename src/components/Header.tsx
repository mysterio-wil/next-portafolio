import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <section className="menu container">
      <header className="menu__header">
        <Link href="#" className="menu__home-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
          <Image src="/assets/logo.png" className="menu__imagen" alt="logo" width={40} height={40} />
          <h1 className="menu__title">Wilmer Gulcochía</h1>
        </Link>
      </header>
      <nav>
        <ul className="menu__list">
          <li className="menu__list__item">
            <Link href="#sobre-mi" className="menu__link">
              <span className="menu__link--nombre"> &nbsp;&nbsp;Sobre mi </span>
              <span className="menu__link--icon"><i className="fas fa-address-card" aria-hidden="true"></i></span>
            </Link>
          </li>
          <li className="menu__list__item">
            <Link href="#skills" className="menu__link">
              <span className="menu__link--nombre">&nbsp;&nbsp;Skills</span>
              <span className="menu__link--icon"><i className="fa-solid fa-screwdriver-wrench"></i></span>
            </Link>
          </li>
          <li className="menu__list__item">
            <Link href="#hobbies" className="menu__link">
              <span className="menu__link--nombre">&nbsp;&nbsp;Hobbies</span>
              <span className="menu__link--icon"><i className="fa-solid fa-heart"></i></span>
            </Link>
          </li>
          <li className="menu__list__item">
            <Link href="#formacion" className="menu__link">
              <span className="menu__link--nombre">&nbsp;&nbsp;Formación</span>
              <span className="menu__link--icon"><i className="fa-solid fa-user-graduate"></i></span>
            </Link>
          </li>
          <li className="menu__list__item">
            <Link href="#xp" className="menu__link">
              <span className="menu__link--nombre">&nbsp;&nbsp;Proyectos</span>
              <span className="menu__link--icon"><i className="fas fa-tasks" aria-hidden="true"></i></span>
            </Link>
          </li>
          <li className="menu__list__item--activo">
            <Link href="#contacto" className="menu__link">
              <span className="menu__link--nombre">&nbsp;&nbsp;Contacto</span>
              <span className="menu__link--icon"><i className="fas fa-envelope-open-text" aria-hidden="true"></i></span>
            </Link>
          </li>
          <li className="menu__list__item__contato">
            <a href="#contacto">contacto@wigusa.com</a>
          </li>
        </ul>
      </nav>
      <div className="menu__hamburguer">
        <i className="fas fa-bars menu__img"></i>
      </div>
    </section>
  );
}
