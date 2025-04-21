import Image from 'next/image';

export default function Academic() {
  return (
    <section className="academic" id="formacion">
      <h2 className="academic__title">Formación académica</h2>
      <div className="academic__courses">
        <div className="academic__courses__box">
          <ul className="academic__courses__list">
            <li className="academic__courses__item__img">
              <Image src="/assets/unas.png" alt="unas" width={200} height={200} />
            </li>
            <li className="academic__courses__item__title">
              <h3>Agronomía</h3>
            </li>
            <li className="academic__courses__item__subtitle">
              <p>2009 - UNAS</p>
            </li>
          </ul>
        </div>
        <div className="academic__courses__box">
          <ul className="academic__courses__list">
            <li className="academic__courses__item__img">
              <Image src="/assets/logo-egg.jfif" alt="logo-egg" width={200} height={200} />
            </li>
            <li className="academic__courses__item__title">
              <h3>Programación desde Cero</h3>
            </li>
            <li className="academic__courses__item__subtitle">
              <p>2022 - Egg Cooperation</p>
            </li>
          </ul>
        </div>
        <div className="academic__courses__box">
          <ul className="academic__courses__list">
            <li className="academic__courses__item__img">
              <Image src="/assets/logo-aleph.png" alt="logo-aleph" width={200} height={200} />
            </li>
            <li className="academic__courses__item__title">
              <h3>Marketing Digital SPA15</h3>
            </li>
            <li className="academic__courses__item__subtitle">
              <p>2022 - Aleph Group, Inc</p>
            </li>
          </ul>
        </div>
        <div className="academic__courses__box">
          <ul className="academic__courses__list">
            <li className="academic__courses__item__img">
              <Image src="/assets/logo-alura.svg" alt="logo-alura" width={200} height={200} />
            </li>
            <li className="academic__courses__item__title">
              <h3>Front-End</h3>
            </li>
            <li className="academic__courses__item__subtitle">
              <p>En curso - Alura Latam</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
