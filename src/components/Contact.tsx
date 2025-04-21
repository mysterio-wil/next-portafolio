'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [warnings, setWarnings] = useState('');
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let warningsMsg = '';
    let hasError = false;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (nombre.trim().length < 6) {
      warningsMsg += 'El nombre no es válido (mínimo 6 caracteres)<br>';
      hasError = true;
    }
    if (!regexEmail.test(email)) {
      warningsMsg += 'El email no es válido<br>';
      hasError = true;
    }
    if (asunto.trim().length < 10) {
      warningsMsg += 'El asunto es muy corto (mínimo 10 caracteres)<br>';
      hasError = true;
    }
    if (mensaje.trim().length < 20) {
      warningsMsg += 'El mensaje debe tener al menos 20 caracteres<br>';
      hasError = true;
    }
    if (hasError) {
      setWarnings(warningsMsg);
      setSuccess(false);
      return;
    }
    setWarnings('');
    setSending(true);
    // --- Envío a Formspree deshabilitado por solicitud del usuario ---
    // try {
    //   const res = await fetch('https://formspree.io/f/xdovdynk', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       nombre,
    //       email,
    //       asunto,
    //       mensaje,
    //     }),
    //   });
    //   if (res.ok) {
    //     setSuccess(true);
    //     setNombre('');
    //     setEmail('');
    //     setAsunto('');
    //     setMensaje('');
    //   } else {
    //     setWarnings('Error al enviar el mensaje. Intenta nuevamente.');
    //     setSuccess(false);
    //   }
    // } catch {
    //   setWarnings('Error de conexión. Intenta nuevamente.');
    //   setSuccess(false);
    // }
    setSuccess(true);
    setNombre('');
    setEmail('');
    setAsunto('');
    setMensaje('');
    setSending(false);
  };

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
          <form className="formcontact__form" name="form" id="form" method="POST" onSubmit={handleSubmit} autoComplete="off">
            <div className="formcontact__grupo">
              <input className="formcontact__input" type="text" name="nombre" id="nombre" placeholder="Nombres" value={nombre} onChange={e => setNombre(e.target.value)} required />
              <label className="formcontact__grupo--label" htmlFor="nombre">Nombre</label>
              <span className="input-message-error"></span>
            </div>
            <div className="formcontact__grupo">
              <input className="formcontact__input" type="email" name="email" id="email" placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)} required />
              <label className="formcontact__grupo--label" htmlFor="email">E-mail</label>
              <span className="input-message-error"></span>
            </div>
            <div className="formcontact__grupo">
              <input className="formcontact__input" type="text" name="asunto" id="asunto" placeholder="Mensaje" value={asunto} onChange={e => setAsunto(e.target.value)} required />
              <label className="formcontact__grupo--label" htmlFor="asunto">Asunto</label>
              <span className="input-message-error"></span>
            </div>
            <textarea className="formcontact__textarea" rows={5} cols={40} id="mensagem" name="mensaje" placeholder="Mensaje" value={mensaje} onChange={e => setMensaje(e.target.value)} />
            <button type="submit" className="formcontact__button" disabled={sending}>{sending ? 'Enviando...' : 'Enviar mensaje'}</button>
            <p className="warnings" id="warnings" dangerouslySetInnerHTML={{ __html: warnings }}></p>
            {success && <p className="warnings" style={{ color: 'green' }}>Enviado con éxito!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
