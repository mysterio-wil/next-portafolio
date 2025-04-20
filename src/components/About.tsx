import Image from 'next/image';

export default function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__container">
        <h2 className="about__title">Sobre mi</h2>
        <p className="about__paragraph">
          Tengo 33 años, estudié Agronomía en la Universidad Nacional Agraria de la Selva (UNAS) - Tingo María, con amplios conocimientos en el manejo integrado de cultivos tropicales.
        </p>
        <p className="about__paragraph">
          Actualmente estoy en el programa <strong>One Next Education</strong> de <strong>Alura Latam</strong> en la especialida de Front-End; tambien estoy realizando el <strong><a target="_blank" href="https://undefinedshell.notion.site/Empezar-el-Bootcamp-65ae9344add24764a2569f61c9e3bfc1"> Bootcamp de JavaScript Full-stack </a></strong> en <strong><a target="_blank" href="https://undefined.academy/"> Undefined Academy</a></strong> con <a target="_blank" href="https://guillermorodas.com/"></a> <strong>Guillermo Rodas</strong>.
        </p>
        {/* Si quieres, pon tú firma acá! */}
        <Image className="about__imagen" src="/assets/signature.svg" alt="firma" width={120} height={40} />
      </div>
    </section>
  );
}
