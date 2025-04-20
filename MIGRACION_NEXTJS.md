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

- Copia imágenes y recursos de tu antiguo proyecto a `public/assets/`.
- Si usabas fuentes personalizadas, agrégalas en `public` o usa Google Fonts en el layout.

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
