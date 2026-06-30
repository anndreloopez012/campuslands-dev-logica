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

La pagina no expone tokens ni escribe directamente en GitHub desde el navegador. Para mantener seguridad:

1. El resultado queda guardado en `localStorage`.
2. El estudiante descarga Markdown o JSON.
3. El estudiante guarda el archivo en `resultados/{usuario-github}/`.
4. El estudiante sube el resultado por rama personal y Pull Request hacia `dev`.

Esto evita publicar credenciales y mantiene el mismo flujo profesional del repositorio.

## Ranking

La plataforma muestra un ranking con dos fuentes:

- Resultados locales guardados en el navegador.
- Resultados publicados en el repositorio dentro de `resultados/{usuario-github}/` en formato JSON.

Cada estudiante puede filtrar por nivel, ver su historial, repetir una prueba del mismo nivel y revisar pregunta por pregunta cuales respuestas fueron correctas o incorrectas.
