# Mejoras de CodeNest · Punto 4

Comparación del folder original de Punto 4 con esta versión.

| Área | Antes | Mejora |
| --- | --- | --- |
| Recursos gráficos | Las páginas referenciaban logotipos que no estaban presentes en `img/`. | Se reutilizó el PNG exacto del logotipo de la versión anterior y se integraron las variantes del DOCX; se dejó fuera de la publicación la portada académica con identificadores personales. |
| Adaptabilidad | El CSS no tenía breakpoints propios y varias filas con separación amplia podían desbordarse en teléfonos; la portada conservaba mucho espacio vertical en tablet. | Se añadieron reglas para teléfono, tablet y escritorio; se redujo el espacio de la portada específicamente entre 768 y 991 px, se ajustaron las filas de Nosotros, Blog y Contacto y se conservaron las tablas desplazables y el menú móvil probado al abrir y cerrar. |
| Identidad de marca | La paleta y lineamientos estaban únicamente en el documento fuente. | Se creó `identidad.html` con logos, tabla de colores, tipografía, versiones cromáticas, área de protección y normas de uso. |
| Información empresarial | Público objetivo, persona usuaria, benchmarking y buenas prácticas no se encontraban reunidos en el sitio. | Se integraron en la página Nosotros junto con misión, visión, valores, objetivos, propuesta, beneficios y diferenciadores. |
| Contacto | El formulario usaba `action="#"` y mostraba un mensaje de éxito simulado; teléfono sin patrón ni límites. | Se conectó Formspree, se añadió validación nativa y por campo, estado accesible, límites, patrón telefónico y honeypot. |
| Boletín | La suscripción solo abría una alerta y no enviaba datos. | Ahora envía el correo mediante Formspree y muestra confirmación o error real del servicio. |
| Blog | Los botones enlazaban a anclas inexistentes; los artículos no se expandían. | Se añadieron objetivos reales y contenido ampliado en secciones de lectura accesibles. |
| Navegación y metadatos | No había una página específica de identidad ni una verificación de enlaces internos. | Se añadió la página de identidad al menú y al pie; se documentó la estructura y se revisaron las referencias locales. |
| Rendimiento y publicación | El directorio carecía de recursos de marca y guía de despliegue. | La imagen de variantes pasó de 435 KB a 53 KB (reducción aproximada del 88 %); los documentos fuente se excluyen del repositorio y se preparó para hosting estático. |
| Experiencia de usuario | No había una página completa de identidad de marca ni una sección informativa sobre testimonios. | Se añadieron el manual visual y una sección transparente que anuncia testimonios verificables cuando existan autorizaciones; no se inventaron opiniones. |
| Encabezado de inicio | La portada mostraba una franja alta con una convocatoria 2026 que no estaba confirmada. | Se retiró esa franja de Inicio para evitar información temporal no verificada y dar más espacio visual al contenido principal. |

## Verificaciones

- Validación de IDs únicos, anclas, enlaces locales, imágenes con texto alternativo y acciones POST en las siete páginas.
- Revisión de diseño con Chrome en 10 anchuras (320, 360, 390, 768, 820, 1024, 1199, 1200, 1280 y 1440 px): 70 combinaciones de página y resolución.
- En esas pruebas se revisaron 230 instancias de imágenes, 20 presentaciones de formularios y 20 tablas dentro de contenedores desplazables; no se encontró desbordamiento de página ni contenido visible fuera del ancho.
- En un teléfono de 320 px, las tablas se desplazan dentro de `.table-responsive` sin ensanchar la página.
- El ajuste específico de tablet se limita a 768–991 px; el espaciado de la portada en teléfonos permanece independiente.
- Se verificó que el menú móvil abre y cierra correctamente y que el menú expandido aparece en escritorio.
- Pruebas automatizadas del formulario con respuestas simuladas: campos inválidos, éxito HTTP 204 sin JSON, error HTTP y honeypot.
- Comprobación de sintaxis de JavaScript y revisión de breakpoints y recursos gráficos.
- GitHub Pages publica correctamente las siete páginas y seis recursos; la URL anterior también sigue respondiendo.
- No se enviaron datos reales de prueba a Formspree; el correo receptor y el envío real deben confirmarse antes de anunciar el servicio.

## Observaciones de Sprint Review

El folder y el DOCX adjuntos no incluyen un listado separado de observaciones de la defensa. Se corrigieron defectos funcionales y visuales identificados directamente en el proyecto; las observaciones específicas del equipo docente deben incorporarse cuando se faciliten.

## Pendientes de confirmación

Los correos, teléfonos, próximos inicios y enlaces sociales existentes en las páginas se conservaron, pero deben confirmarse como datos institucionales vigentes antes de usarlos como información oficial. La versión se publicó en [codenest-punto-4](https://faty1712.github.io/codenest-punto-4/); el sitio anterior `CodeNest-Landing` se conserva sin cambios.
