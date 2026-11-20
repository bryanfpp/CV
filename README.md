# Currículum profesional — Bryan Fuentes Pérez

Sitio web del CV de Bryan Fuentes Pérez, estudiante de Ingeniería en Tecnologías de
la Información y Comunicaciones (TIC's). Incluye vista responsive y versión para
impresión en papel A4.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite para ver el currículum. El botón
**Descargar CV en PDF** abre el diálogo de impresión; selecciona tamaño A4 y
«Guardar como PDF».

## Actualizar el CV

Edita la información, formación, experiencia, habilidades, certificaciones y
proyectos en `src/pages/CV.jsx`. La presentación para pantalla e impresión está en
`src/pages/CV.css`. Cambia la fotografía en `public/bryan-fuentes-photo.png`.

## Despliegue en GitHub Pages

El flujo `.github/workflows/pages.yml` compila y publica el sitio automáticamente
al hacer push a `main`. En GitHub, abre **Settings → Pages** y selecciona
**GitHub Actions** como fuente de publicación. La página estará disponible en
`https://bryanfpp.github.io/CV/`.

## Despliegue en Vercel o Netlify

El proyecto está preparado para Vercel y Netlify:

- Comando de compilación: `npm run build`
- Directorio de salida: `dist`

En Vercel, usa la raíz del repositorio como directorio del proyecto.
`vercel.json` y `public/_redirects` se incluyen para plataformas que usan rutas
de reescritura.