# Portafolio en Next.js

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" height="28"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" height="28"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" height="28"/>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" height="28"/>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" height="28"/></a>
</p>

---

## Descripción

Portafolio profesional desarrollado con Next.js, TypeScript y Tailwind CSS. Incluye componentes reutilizables, estilos organizados y estructura moderna.

---

## Características principales
- Framework: Next.js (App Router)
- Lenguaje: TypeScript
- Estilos: Tailwind CSS y CSS clásico organizado
- Linting: ESLint
- Estructura profesional en `src/`
- Recursos estáticos en `public/assets`
- Componentes desacoplados y reutilizables

---

## Instalación

```bash
# Instala dependencias
npm install

# Ejecuta en modo desarrollo
npm run dev
```

El proyecto estará disponible en [http://localhost:3000](http://localhost:3000)

---

## Estructura de carpetas principal

```
portafolio/
├── src/
│   ├── app/
│   ├── components/
│   ├── styles/
│   │   └── menu/   # Todos los estilos del menú organizados aquí
├── public/
│   └── assets/
├── package.json
└── README.md
```

---

## Organización de estilos del menú

Todos los archivos CSS del menú están agrupados en la carpeta:

```
src/styles/menu/
```

Esto mejora el orden y facilita el mantenimiento. Las importaciones en `globals.css` reflejan esta estructura.

---

## Componentes principales

- `Menu`: Navegación principal responsive con menú hamburguesa
- `Title`: Sección de presentación
- `About`: Sobre mí. Estilizado con CSS modularizado en `src/styles/about/` para mayor organización y mantenibilidad.
- `Skills`: Habilidades técnicas. Estilizado con CSS modularizado en `src/styles/skill/` para mayor organización y mantenibilidad.
- `Hobbies`: Intereses y pasatiempos. Estilizado con CSS modularizado en `src/styles/hobbie/` para mayor organización y mantenibilidad.
- `Academic`: Formación académica. Estilizado con CSS modularizado en `src/styles/academic/` para mayor organización y mantenibilidad.
- `Experience`: Experiencia profesional. Estilizado con CSS modularizado en `src/styles/experience/` para mayor organización y mantenibilidad. Las imágenes usan `object-fit: contain` para mostrarse completas y centradas, adaptándose proporcionalmente al área asignada.
- `Contact`: Formulario de contacto. Estilizado con CSS modularizado en `src/styles/formcontact/` para mayor organización y mantenibilidad. Todas las partes del formulario (inputs, botones, textos, etc.) cuentan con archivos CSS dedicados e importados globalmente.
- `Footer`: Pie de página. Estilizado con CSS modularizado en `src/styles/footer/` (`footer.css` y `footer-rodapie.css`) para diseño, alineación y colores. Los estilos se importan globalmente en `globals.css` para asegurar consistencia visual y fácil mantenimiento.

---

## Versionado del proyecto

- **v1.0.0**: Versión estable migrada a Next.js + TypeScript + Tailwind, conservando el CSS original. Este tag marca el estado base antes de iniciar la migración completa de estilos a Tailwind CSS.

---

## Validación del formulario de Contact

El formulario de contacto realiza la validación completamente en React:
- Controla los campos con `useState`.
- Valida nombre (mínimo 6 caracteres), email (formato), asunto (mínimo 10 caracteres) y mensaje (mínimo 20 caracteres) al enviar.
- Si hay errores, muestra mensajes y bloquea el envío.
- Si todo es válido, muestra "Enviado con éxito!" y limpia los campos.
- El envío real a Formspree está deshabilitado por ahora.

---

## Estructura recomendada Next.js (app router)

- **layout.tsx**: Incluye componentes globales como el menú de navegación (`Menu`) y el pie de página (`Footer`). Estos envuelven el contenido principal y se muestran en todas las páginas.
- **page.tsx**: Incluye solo los componentes del contenido principal de la página (`Title`, `About`, `Skills`, `Hobbies`, `Academic`, `Experience`, `Contact`, etc.). Aquí **no** se deben incluir componentes globales.

Esta separación evita duplicados, mejora la organización y sigue las mejores prácticas de Next.js para aplicaciones escalables.

---

## Licencia

Este proyecto está bajo licencia MIT.
