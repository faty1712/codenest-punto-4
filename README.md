# CodeNest · Punto 4

Sitio institucional estático de CodeNest. Incluye páginas de inicio, nosotros, identidad de marca, cursos, preguntas frecuentes, blog y contacto.

## Ejecutar localmente

Desde esta carpeta, inicia un servidor estático:

```bash
python -m http.server 8000
```

Abre <http://localhost:8000>. También puede servirse con cualquier hosting para archivos estáticos.

## Formulario

El formulario de contacto y el boletín envían los datos mediante Formspree al endpoint configurado en sus atributos `action`. El JavaScript compartido se encarga de la validación y de presentar el resultado. Verifica el correo receptor y prueba los formularios desde el sitio publicado antes de anunciar que están recibiendo solicitudes.

## Privacidad y documento fuente

`CodeNest.docx` se conserva en esta carpeta como documento de referencia y está excluido del repositorio público. La portada académica con nombres e identificadores estudiantiles no se distribuye en el sitio web.

## Identidad y optimización

El archivo `img/logo.png` conserva el logotipo exacto de la versión anterior. Las variantes del manual de marca están en `img/`; la tabla de colores y los lineamientos de uso están en `identidad.html`.

## Publicación

La carpeta está preparada para hosting estático. Esta versión se publicará en una URL nueva para conservar sin cambios el sitio anterior `CodeNest-Landing`. Consulta `MEJORAS.md` para las verificaciones y pendientes.
