export default function Hobbies() {
  return (
    <section className="hobbies" id="hobbies">
      <h2 className="hobbies__title">Hobbies</h2>
      <div className="hobbies__line">
        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img">
              <i className="fa-solid fa-pencil"></i>
            </li>
            <li className="hobbies__name">Dibujar</li>
          </ul>
        </div>
        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img">
              <i className="fa-solid fa-book"></i>
            </li>
            <li className="hobbies__name">Leer</li>
          </ul>
        </div>
        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img">
              <i className="fa-solid fa-headphones"></i>
            </li>
            <li className="hobbies__name">Escuchar música</li>
          </ul>
        </div>
        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img">
              <i className="fa-solid fa-tv"></i>
            </li>
            <li className="hobbies__name">Ver séries</li>
          </ul>
        </div>
        <div className="hobbies__box">
          <ul>
            <li className="hobbies__img">
              <i className="fa-solid fa-camera"></i>
            </li>
            <li className="hobbies__name">Tomar fotos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
