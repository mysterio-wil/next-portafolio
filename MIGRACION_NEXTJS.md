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

## Notas adicionales

- Puedes tener archivos `.js` y `.ts` juntos durante la migración.
- Aprovecha las ventajas de TypeScript y Tailwind para mejorar tu código.
- Documenta cada paso importante en tu propio README.

---

> Esta guía te servirá como referencia rápida para futuros proyectos de migración o creación de portafolios modernos con Next.js.
