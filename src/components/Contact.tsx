import Image from 'next/image';

export default function Contact() {
  return (
    <section className="formcontact" id="contacto">
      <div className="formcontact__contact">
        <div className="formcontact--left">
          <Image className="formcontact__img" src="/assets/contact_image.png" alt="imagen de contacto" width={180} height={180} />
        </div>
        <div className="formcontact__text">
          <h2 className="formcontact__title">Contacto</h2>
          <h3 className="formcontact__subtext">¿Quieres contactarme?</h3>
          <h4 className="formcontact__subtext">
            Complete el siguiente formulario y me pondré en contacto con usted lo antes posible.
          </h4>
          <form action="https://formspree.io/f/xdovdynk" className="formcontact__form" name="form" id="form" method="POST">
            <div className="formcontact__grupo">
              <input className="formcontact__input" type="text" name="nombre" id="nombre" placeholder="Nombres" required />
              <label className="formcontact__grupo--label" htmlFor="nombre">Nombre</label>
              <span className="input-message-error"></span>
            </div>
            <div className="formcontact__grupo">
              <input className="formcontact__input" type="email" name="email" id="email" placeholder="Correo electrónico" required />
              <label className="formcontact__grupo--label" htmlFor="email">E-mail</label>
              <span className="input-message-error"></span>
            </div>
            <div className="formcontact__grupo">
              <input className="formcontact__input" type="text" name="asunto" id="asunto" placeholder="Mensaje" required />
              <label className="formcontact__grupo--label" htmlFor="asunto">Asunto</label>
              <span className="input-message-error"></span>
            </div>
            <textarea className="formcontact__textarea" rows={5} cols={40} id="mensagem" name="mensaje" placeholder="Mensaje"></textarea>
            <button type="submit" className="formcontact__button">Enviar mensaje</button>
            <p className="warnings" id="warnings"></p>
          </form>
        </div>
      </div>
    </section>
  );
}
