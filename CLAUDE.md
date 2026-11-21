# Contexto del proyecto

Sitio web de una clínica dental ("Odontología General"). Es un sitio estático de una sola página hecho con Astro 7 y Tailwind CSS 4. La página principal está en `src/pages/index.astro`.

Comandos: `npm run dev` (localhost:4321) y `npm run build` (genera `dist/`). Astro 7 necesita Node 22.12 o más nuevo.

## Dónde se publica: Cloudflare Pages

- El proyecto de Cloudflare Pages se llama `jassel-s-web-site` y está en la cuenta de Cloudflare del dueño del repo. Su URL es `https://jassel-s-web-site.pages.dev`.
- Está conectado a este repo de GitHub, así que **cada push a `main` se publica solo**. Los pull requests reciben un link de vista previa.
- Se creó con el flujo de **Pages** ("Continue to Pages" en Workers & Pages → Create application), **no** como Worker. No hay `wrangler.jsonc` ni deploy command; no los agregues a menos que se decida pasar a Workers.
- Configuración del build en Cloudflare:
  - Framework preset: Astro
  - Build command: `npm run build`
  - Build output directory: `dist`
  - Variables de entorno: `DEPLOY_TARGET=cloudflare` y `NODE_VERSION=24`

`DEPLOY_TARGET=cloudflare` es obligatoria. `astro.config.mjs` la usa para servir el sitio desde la raíz (`base: '/'`). Sin ella, el build usa la ruta de GitHub Pages (`/jassel-s-web-site`) y los estilos y enlaces se rompen en Cloudflare.

## Historial del deploy

- Antes el sitio se publicaba en GitHub Pages con `.github/workflows/deploy.yml`. Ese workflow se borró el 2026-11-20 al pasar a Cloudflare.
- Pendiente: el sitio que ya estaba publicado en GitHub Pages sigue en línea hasta que alguien lo desactive en GitHub → Settings → Pages del repo.
- Pendiente (opcional): en `astro.config.mjs`, el valor por defecto todavía es GitHub Pages. Se podría hacer que Cloudflare sea el valor por defecto y quitar la variable `DEPLOY_TARGET`. Si cambia el nombre o el dominio del proyecto en Cloudflare, también hay que actualizar `site` ahí.
