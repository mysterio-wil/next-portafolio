import Image from 'next/image';

export default function Title() {
  return (
    <section className="title">
      <div className="title__div">
        <Image className="title__profile" src="/assets/profile.png" alt="foto de perfil" width={240} height={240} />
        <div className="title__container">
          <h2 className="title__bio">
            Hola, mi nombre es Wilmer, soy Bachiller en Agronomia, diseñador y desarrollador Web.
          </h2>
          <h3 className="title__subsection">
            Estudié Agronomía en la <strong>Universidad Nacional Agraria de la Selva</strong> y actualmente
            estoy participando del proyecto Oracle ONE en Alura Latam.
          </h3>
          <ul className="title__network">
            <li className="title__network__item button__github">
              <a href="https://github.com/nobody-redhawk" target="_blank" rel="noopener noreferrer">
                Github &nbsp;
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="title__network__item__icon">
              <a href="https://github.com/nobody-redhawk" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="title__network__item button__linkedin">
              <a href="https://www.linkedin.com/in/wilmer-gulcochia-sanchez/" target="_blank" rel="noopener noreferrer">
                Linkedin &nbsp;
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="title__network__item__icon">
              <a href="https://www.linkedin.com/in/wilmer-gulcochia-sanchez/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="title__network__item button__instagram">
              <a href="https://www.instagram.com/wigusa/" target="_blank" rel="noopener noreferrer">
                Instagram &nbsp;
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="title__network__item__icon">
              <a href="https://www.instagram.com/wigusa/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="title__network__item__icon">
              <a href="https://web.facebook.com/gulcochiasanchez" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
