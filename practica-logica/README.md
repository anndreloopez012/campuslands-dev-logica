# Campuslands Logic Arena

Landing interactiva para practicar logica con pruebas aleatorias por nivel.

## Publicacion

La carpeta esta preparada para GitHub Pages usando `practica-logica/index.html`.

URL esperada despues de habilitar Pages:

```text
https://anndreloopez012.github.io/campuslands-dev-logica/practica-logica/
```

## Niveles

- Facil: 10 preguntas, 12 minutos.
- Intermedio: 11 preguntas, 16 minutos.
- Dificil: 12 preguntas, 22 minutos.
- Experto: 14 preguntas, 30 minutos.
- Ultra experto: 15 preguntas, 40 minutos.

El banco genera 300 variantes base: 60 por nivel.

## Resultados

La pagina no expone tokens ni escribe directamente en GitHub desde el navegador. Para mantener seguridad, el flujo global funciona asi:

1. El resultado queda guardado en `localStorage`.
2. El estudiante hace clic en `Subir al ranking global`.
3. GitHub abre un issue prellenado con el JSON del intento.
4. El estudiante publica el issue sin modificar el contenido.
5. El workflow `Ingestar resultado Logic Arena` valida el JSON.
6. Si el resultado es valido, el bot lo guarda en la rama `resultados-db`.
7. La pagina consume `practica-logica/data/results.json` desde esa rama como base de datos publica.

Esto evita publicar credenciales y mantiene el mismo flujo profesional del repositorio.

## Ranking

La plataforma muestra un ranking con dos fuentes:

- Resultados locales guardados en el navegador.
- Resultados globales guardados automaticamente en Git dentro de la rama `resultados-db`.

Cada estudiante puede filtrar por nivel, ver su historial, repetir una prueba del mismo nivel y revisar pregunta por pregunta cuales respuestas fueron correctas o incorrectas.

## Rama de datos

La rama `resultados-db` funciona como base de datos simple del ranking:

- `resultados/{usuario-github}/{id}.json`: resultado individual.
- `practica-logica/data/results.json`: indice global consumido por la web.

Los estudiantes no deben editar esta rama manualmente. La actualiza GitHub Actions cuando se abre un issue valido desde la plataforma.
