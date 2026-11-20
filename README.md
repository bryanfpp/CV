# Currículum profesional — Bryan Fuentes Pérez

Sitio web del CV de Bryan Fuentes Pérez, estudiante de Ingeniería en Tecnologías de
la Información y Comunicaciones (TIC's). Incluye vista responsive y versión para
impresión en papel A4.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite y añade `/cv` para ver el currículum. El botón
**Descargar CV en PDF** abre el diálogo de impresión; selecciona tamaño A4 y
«Guardar como PDF».

## Actualizar el CV

Edita la información, formación, experiencia, habilidades, certificaciones y
proyectos en `src/pages/CV.jsx`. La presentación para pantalla e impresión está en
`src/pages/CV.css`. Cambia la fotografía en `public/bryan-fuentes-photo.png`.

## Despliegue

El proyecto está preparado para Vercel y Netlify:

- Comando de compilación: `npm run build`
- Directorio de salida: `dist`

En Vercel, usa la raíz del repositorio como directorio del proyecto. El archivo
`vercel.json` y `public/_redirects` mantienen funcionando la ruta `/cv` al abrirla
directamente.