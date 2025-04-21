# Guía de Migración: Portafolio HTML/CSS/JS a Next.js + TypeScript + Tailwind

## 1. Crear el proyecto Next.js

Ubícate en la carpeta donde quieras tu nuevo proyecto y ejecuta:

```bash
npx create-next-app@latest nombre-del-proyecto
```

**Opciones recomendadas durante la instalación:**
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes (opcional, pero recomendado)
- src/ directory: Yes (estructura profesional)
- App Router: Yes (recomendado)
- Turbopack: Yes (opcional, puedes probarlo)
- Import alias: No (usar `@/` por defecto)

---

## 2. Estructura inicial

El proyecto tendrá carpetas como:

```
nombre-del-proyecto/
├── src/
│   ├── app/ (o pages/)
│   ├── components/
│   ├── styles/
├── public/
│   └── assets/
├── tsconfig.json
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 3. Migrar recursos estáticos

- Se copiaron todas las imágenes, íconos y fuentes personalizadas desde el proyecto original (`Challenge-ONE-Portafolio-Latam/assets`) a `public/assets/` en el nuevo portafolio Next.js.
- Verifica que los recursos estén accesibles y referenciados correctamente en los componentes y páginas.

---

### 3.1 Guía para comprimir imágenes

1. **Herramientas Online (fácil y rápido)**
   - TinyPNG (sirve también para JPG)
   - Squoosh (permite ajustar calidad, formato y ver comparación)
   - ILoveIMG
   **Pasos:**
   - Sube tu imagen a una de estas webs.
   - Descarga la versión comprimida.
   - Sustituye la imagen original en `/public/assets` por la comprimida.

2. **Herramientas de Escritorio**
   - ImageOptim (Mac)
   - Caesium (Windows/Linux)
   - RIOT (Windows)

3. **Automatización (opcional para proyectos grandes)**
   Si tienes muchas imágenes y quieres automatizar el proceso, puedes usar un paquete de Node.js:
   - Instala imagemin-cli:
     ```bash
     npm install -g imagemin-cli
     ```
   - Comprime imágenes en una carpeta:
     ```bash
     imagemin public/assets/* --out-dir=public/assets/optimizado
     ```
   Esto creará versiones comprimidas en `public/assets/optimizado`.

4. **Buenas prácticas**
   - Usa formatos modernos: WebP (mejor que JPG/PNG para web).
   - Mantén el tamaño de archivo por debajo de 300 KB para imágenes grandes.
   - Usa el tamaño/resolución mínima necesaria para tu diseño.

---

## 4. Migrar estilos

- Copia tus archivos CSS a `src/styles/`.
- Puedes usar CSS Modules (`.module.css`) o migrar estilos a clases de Tailwind.
- Importa tu CSS global en `src/app/layout.tsx` (o `src/pages/_app.tsx`).

---

## 5. Migrar secciones HTML a componentes

- Divide tu HTML en componentes React (`.tsx`) dentro de `src/components/`.
- Cada sección (header, sobre mí, skills, proyectos, contacto, etc.) debe ser un componente.
- Usa JSX/TSX y adapta el HTML según sea necesario.

### 5.1 Migración de la sección Header
- Se migró la sección Header (menú de navegación) a un componente React (`src/components/Header.tsx`).
- El Header fue integrado en el layout principal (`src/app/layout.tsx`) para que esté presente en todas las páginas.
- El HTML original fue adaptado a JSX y preparado para aplicar utilidades Tailwind en el siguiente paso.

### 5.2 Migración de la sección Sobre mí
- Se migró la sección Sobre mí a un componente React (`src/components/About.tsx`).
- El componente About fue integrado en la página principal (`src/app/page.tsx`).
- Estructura y clases conservadas para futura adaptación a Tailwind.

### 5.3 Migración de la sección Skills
- Se migró la sección Skills a un componente React (`src/components/Skills.tsx`).
- El componente Skills fue integrado en la página principal (`src/app/page.tsx`).
- Estructura y clases conservadas para futura adaptación a Tailwind.

### 5.4 Migración de la sección Hobbies
- Se migró la sección Hobbies a un componente React (`src/components/Hobbies.tsx`).
- El componente Hobbies fue integrado en la página principal (`src/app/page.tsx`).
- Estructura y clases conservadas para futura adaptación a Tailwind.

### 5.5 Migración de la sección Formación académica
- Se migró la sección Formación académica a un componente React (`src/components/Academic.tsx`).
- El componente Academic fue integrado en la página principal (`src/app/page.tsx`).
- Estructura y clases conservadas para futura adaptación a Tailwind.

### 5.6 Migración de la sección Experiencia profesional/proyectos
- Se migró la sección Experiencia profesional/proyectos a un componente React (`src/components/Experience.tsx`).
- El componente Experience fue integrado en la página principal (`src/app/page.tsx`).
- Estructura y clases conservadas para futura adaptación a Tailwind.

### 5.7 Migración de la sección Contacto
- Se migró la sección Contacto a un componente React (`src/components/Contact.tsx`).
- El componente Contact fue integrado en la página principal (`src/app/page.tsx`).
- Estructura y clases conservadas para futura adaptación a Tailwind.

### 5.8 Migración de la sección Footer
- Se migró la sección Footer a un componente React (`src/components/Footer.tsx`).
- El componente Footer fue integrado en el layout principal (`src/app/layout.tsx`).
- Estructura y clases conservadas para futura adaptación a Tailwind.

### 5.9 Estilización del componente Menu
- Se crearon y organizaron todos los archivos CSS relacionados con el menú en la carpeta `src/styles/menu/` (`menu.css`, `menu-header.css`, `menu-imagen.css`, `menu-title.css`, `menu-list.css`, `menu-list-item.css`, `menu-list-item-contacto.css`).
- Se actualizaron las rutas de importación en `globals.css` para reflejar la nueva estructura.
- Se revisó y mejoró la responsividad y visualización del menú hamburguesa.
- El componente Menu ahora es más fácil de mantener, escalable y con estilos desacoplados del resto de la aplicación.

### 5.10 Estilización del componente Title
- Se crearon múltiples archivos CSS en `src/styles/titulo/` para separar y organizar los estilos del componente Title (`title.css`, `title-bio.css`, `title-container.css`, etc.).
- Se importaron todos los archivos CSS de la carpeta en `globals.css` para aplicar los estilos globalmente.
- Se revisaron y ajustaron las clases del JSX en `src/components/Title.tsx` para que coincidan con los nombres definidos en los archivos CSS.
- El resultado es un componente Title moderno, responsivo y fácil de mantener.

### 5.11 Estilización del componente About
- Se crearon y organizaron todos los archivos CSS relacionados con el componente About en la carpeta `src/styles/about/` (`about.css`, `about-container.css`, `about-imagen.css`, `about-paragraph.css`, `about-titulo.css`).
- Se importaron todos los archivos CSS de la carpeta en `globals.css` para aplicar los estilos globalmente.
- Se recomienda revisar que las clases en el JSX de `About.tsx` coincidan con los nombres definidos en los archivos CSS para asegurar la correcta aplicación de estilos.
- El componente About ahora es más fácil de mantener, escalable y con estilos desacoplados del resto de la aplicación.

### 5.12 Estilización del componente Skills
- Se crearon y organizaron todos los archivos CSS relacionados con el componente Skills en la carpeta `src/styles/skill/` (`skills.css`, `skills-box.css`, `skills-img.css`, `skills-line.css`, `skills-name.css`, `skills-title.css`).
- Se importaron todos los archivos CSS de la carpeta en `globals.css` para aplicar los estilos globalmente.
- Se recomienda revisar que las clases en el JSX de `Skills.tsx` coincidan con los nombres definidos en los archivos CSS para asegurar la correcta aplicación de estilos.
- El componente Skills ahora es más fácil de mantener, escalable y con estilos desacoplados del resto de la aplicación.

### 5.13 Estilización del componente Hobbies
- Se crearon y organizaron todos los archivos CSS relacionados con el componente Hobbies en la carpeta `src/styles/hobbie/` (`hobbies.css`, `hobbies-box.css`, `hobbies-img.css`, `hobbies-line.css`, `hobbies-name.css`, `hobbies-title.css`).
- Se importaron todos los archivos CSS de la carpeta en `globals.css` para aplicar los estilos globalmente.
- Se recomienda revisar que las clases en el JSX de `Hobbies.tsx` coincidan con los nombres definidos en los archivos CSS para asegurar la correcta aplicación de estilos.
- El componente Hobbies ahora es más fácil de mantener, escalable y con estilos desacoplados del resto de la aplicación.

---

## 6. Migrar scripts JS a TypeScript

- Copia funciones y scripts JS a archivos `.ts` o `.tsx`.
- Agrega tipados básicos (`any` si es necesario) y ajusta según las sugerencias de TypeScript.
- Para validaciones de formularios, adapta el código JS a TypeScript.

---

## 7. Probar y ajustar

- Ejecuta el servidor de desarrollo:
  ```bash
  npm run dev
  ```
- Abre `http://localhost:3000` y revisa el funcionamiento.
- Corrige advertencias de TypeScript y ESLint según aparezcan.

---

## 8. Despliegue

- Puedes desplegar fácilmente en [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/).

---

## 9. Notas adicionales

- Puedes tener archivos `.js` y `.ts` juntos durante la migración.
- Aprovecha las ventajas de TypeScript y Tailwind para mejorar tu código.
- Documenta cada paso importante en tu propio README.

---

> Esta guía te servirá como referencia rápida para futuros proyectos de migración o creación de portafolios modernos con Next.js.
