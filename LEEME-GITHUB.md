# Aula Volt — Tema Rosa Empolvado 🌷

## Qué incluye

Esta actualización **solo cambia los colores**. No altera clases, evaluaciones, las prácticas ni el progreso guardado en tu navegador.

Archivos:
- `assets/css/tema-rosa.css` — Nuevo tema. Las variables de color están al principio del archivo.
- `index.html` — La misma página de la versión «Con biblioteca práctica», con **una línea de CSS agregada al final** de las hojas de estilo.

## Cómo instalarlo de forma segura

1. Antes que nada, abrí «Mi progreso» en tu Aula Volt y descargá tu JSON de respaldo.
2. Entrá al repositorio `celesteph-ctrl/aula-volt` en GitHub.
3. Subí `assets/css/tema-rosa.css` en la carpeta `assets/css/` (dentro de GitHub, esa ruta debe quedar exacta).
4. Editá el `index.html` que **ya tengas publicado** (ícono del lápiz) para agregar esta línea al final de los `<link rel="stylesheet">` existentes, justo antes de `</head>`:

```html
<link rel="stylesheet" href="./assets/css/tema-rosa.css">
```

5. Guardá con «Commit changes». Abrí la web y recargá con Ctrl+Shift+R, o abrila en modo incógnito.

### Otra opción

Si tu repositorio **sigue en la versión con la pestaña Biblioteca pero sin Laboratorio visual**, podés cargar directamente los DOS archivos de este paquete (`index.html` y `assets/css/tema-rosa.css`).

Si YA agregaste la pestaña «Laboratorio visual», **no reemplaces `index.html` por el de este paquete**, porque sería un índice de una versión anterior. Simplemente añadí la línea CSS a tu `index.html` actual y dejala después de `visual-workshop.css`.

## Cómo cambiar vos misma la paleta

1. Abrí `assets/css/tema-rosa.css` y buscá el primer bloque `:root`.
2. Cambiá códigos como `--rosa-frambuesa: #9D3E5C;` o `--rosa-fondo: #FAF6F8;`.
3. Guardá los cambios. No toques el JavaScript.

## Cómo volver al diseño anterior

Borrá o comentá solamente la línea que enlaza `tema-rosa.css` en `index.html` y guardá.

> Para preservar las tres clases aprobadas, no borres la memoria del navegador ni pulses «Reiniciar progreso». El JSON es un respaldo independiente.
