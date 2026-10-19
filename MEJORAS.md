# Mejoras de CodeNest · Punto 4

Comparación del folder original de Punto 4 con esta versión.

| Área | Antes | Mejora |
| --- | --- | --- |
| Recursos gráficos | Las páginas referenciaban logotipos que no estaban presentes en `img/`. | Se reutilizó el PNG exacto del logotipo de la versión anterior y se integraron las variantes del DOCX; se dejó fuera de la publicación la portada académica con identificadores personales. |
| Adaptabilidad | El CSS no tenía breakpoints propios y las páginas no contemplaban bien textos largos, navegación compacta ni tablas. | Se añadieron reglas para teléfono, tablet y escritorio; tipografía fluida, tablas desplazables, tarjetas consistentes y menú colapsado hasta resoluciones de escritorio amplias. |
| Identidad de marca | La paleta y lineamientos estaban únicamente en el documento fuente. | Se creó `identidad.html` con logos, tabla de colores, tipografía, versiones cromáticas, área de protección y normas de uso. |
| Información empresarial | Público objetivo, persona usuaria, benchmarking y buenas prácticas no se encontraban reunidos en el sitio. | Se integraron en la página Nosotros junto con misión, visión, valores, objetivos, propuesta, beneficios y diferenciadores. |
| Contacto | El formulario usaba `action="#"` y mostraba un mensaje de éxito simulado; teléfono sin patrón ni límites. | Se conectó Formspree, se añadió validación nativa y por campo, estado accesible, límites, patrón telefónico y honeypot. |
| Boletín | La suscripción solo abría una alerta y no enviaba datos. | Ahora envía el correo mediante Formspree y muestra confirmación o error real del servicio. |
| Blog | Los botones enlazaban a anclas inexistentes; los artículos no se expandían. | Se añadieron objetivos reales y contenido ampliado en secciones de lectura accesibles. |
| Navegación y metadatos | No había una página específica de identidad ni una verificación de enlaces internos. | Se añadió la página de identidad al menú y al pie; se documentó la estructura y se revisaron las referencias locales. |
| Rendimiento y publicación | El directorio carecía de recursos de marca y guía de despliegue. | La imagen de variantes pasó de 435 KB a 53 KB (reducción aproximada del 88 %); los documentos fuente se excluyen del repositorio y se preparó para hosting estático. |
| Experiencia de usuario | No había una página completa de identidad de marca ni una sección informativa sobre testimonios. | Se añadieron el manual visual y una sección transparente que anuncia testimonios verificables cuando existan autorizaciones; no se inventaron opiniones. |

## Verificaciones

- Validación de IDs únicos, anclas, enlaces locales, imágenes con texto alternativo y acciones POST en las siete páginas.
- Pruebas automatizadas del formulario con respuestas simuladas: campos inválidos, éxito HTTP 204 sin JSON, error HTTP y honeypot.
- Comprobación de sintaxis de JavaScript y revisión de breakpoints y recursos gráficos.
- No se enviaron datos reales de prueba a Formspree; el correo receptor y el envío real deben confirmarse antes de anunciar el servicio.

## Observaciones de Sprint Review

El folder y el DOCX adjuntos no incluyen un listado separado de observaciones de la defensa. Se corrigieron defectos funcionales y visuales identificados directamente en el proyecto; las observaciones específicas del equipo docente deben incorporarse cuando se faciliten.

## Pendientes de confirmación

Los correos, teléfonos, próximos inicios y enlaces sociales existentes en las páginas se conservaron, pero deben confirmarse como datos institucionales vigentes antes de usarlos como información oficial. La versión se publicará en una URL nueva; el sitio anterior `CodeNest-Landing` se conserva sin cambios.
