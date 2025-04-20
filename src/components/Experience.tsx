import Image from 'next/image';

export default function Experience() {
  return (
    <section className="experience" id="xp">
      <h2 className="experience__section__title">Experiencia Profesional</h2>
      <div className="experience__box">
        <Image className="experience__img experience__img--imagen1" src="/assets/decod_print.png" alt="imagen-decodificador" width={300} height={180} />
        <div className="experience__info">
          <h3 className="experience__title">Encriptador de texto</h3>
          <h4 className="experience__text">Challenge Alura Codificador</h4>
          <div className="experience__description">
            <span className="experience__repo">
              <a className="experience__button--repo" target="_blank" href="https://github.com/nobody-redhawk/Challenge-ONE-Encriptador-de-texto">Repositório</a>
            </span>
            <span className="experience__demo">
              <a className="experience__button--demo" target="_blank" href="https://nobody-redhawk.github.io/Challenge-ONE-Encriptador-de-texto/">Ver demo </a>
            </span>
          </div>
        </div>
      </div>
      <div className="experience__box">
        <Image className="experience__img experience__img--imagen2" src="/assets/barberia_alura.png" alt="imagen-barberia-alura" width={300} height={180} />
        <div className="experience__info">
          <h3 className="experience__title">Barberia Alura</h3>
          <h4 className="experience__text">CSS Avanzado</h4>
          <div className="experience__description">
            <span className="experience__repo">
              <a className="experience__button--repo" target="_blank" href="https://github.com/nobody-redhawk/HTML5-y-CSS3-parte-4-Avanzado-en-CSS">Repositório</a>
            </span>
            <span className="experience__demo">
              <a className="experience__button--demo" target="_blank" href="https://nobody-redhawk.github.io/HTML5-y-CSS3-parte-4-Avanzado-en-CSS/"> Ver demo</a>
            </span>
          </div>
        </div>
      </div>
      <div className="experience__box">
        <Image className="experience__img experience__img--imagen1" src="/assets/mini-alura.png" alt="imagen-mini-alura" width={300} height={180} />
        <div className="experience__info">
          <h3 className="experience__title">Mini Alura</h3>
          <h4 className="experience__text">Flexbox CSS</h4>
          <div className="experience__description">
            <span className="experience__repo">
              <a className="experience__button--repo" target="_blank" href="https://github.com/nobody-redhawk/Flexbox-Posicione_elementos_en_la_pantalla"> Repositório</a>
            </span>
            <span className="experience__demo">
              <a className="experience__button--demo" target="_blank" href="https://nobody-redhawk.github.io/Flexbox-Posicione_elementos_en_la_pantalla/">Ver demo </a>
            </span>
          </div>
        </div>
      </div>
      <div className="experience__box">
        <Image className="experience__img experience__img--imagen2" src="/assets/apeperia.png" alt="imagen-apeperia" width={300} height={180} />
        <div className="experience__info">
          <h3 className="experience__title">Apeperia</h3>
          <h4 className="experience__text">Layouts Resposivos</h4>
          <div className="experience__description">
            <span className="experience__repo">
              <a className="experience__button--repo" target="_blank" href="https://github.com/nobody-redhawk/Layouts_Responsivos_Trabajando_con_layouts_mobile"> Repositório</a>
            </span>
            <span className="experience__demo">
              <a className="experience__button--demo" target="_blank" href="https://nobody-redhawk.github.io/Layouts_Responsivos_Trabajando_con_layouts_mobile/"> Ver demo</a>
            </span>
          </div>
        </div>
      </div>
      <div className="experience__box">
        <Image className="experience__img experience__img--imagen1" src="/assets/frutayfruto.png" alt="imagen-frutayfruto" width={300} height={180} />
        <div className="experience__info">
          <h3 className="experience__title">Fruta y fruto</h3>
          <h4 className="experience__text">Arquitectura CSS</h4>
          <div className="experience__description">
            <span className="experience__repo">
              <a className="experience__button--repo" target="_blank" href="https://github.com/nobody-redhawk/Arquitectura_CSS-descomplicando-los-problemas"> Repositório</a>
            </span>
            <span className="experience__demo">
              <a className="experience__button--demo" target="_blank" href="https://nobody-redhawk.github.io/Arquitectura_CSS-descomplicando-los-problemas/">Ver demo</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
