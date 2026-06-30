# Campuslands Dev Logica

Repositorio publico de ejercicios de logica matematica y logica general para estudiantes de Campuslands.

## Proposito educativo

Practicar pensamiento logico, analisis de problemas, lectura de instrucciones, validacion de datos y resolucion ordenada antes de avanzar a proyectos mas grandes.

## Ramas principales

- `main`: produccion. No recibe entregas estudiantiles.
- `dev`: integracion. Todos los Pull Requests de estudiantes deben apuntar aqui.

## Areas incluidas

- [Logica Matematica](./logica-matematica): 100 ejercicios.
- [Logica General](./logica-general): 100 ejercicios.
- [Logic Arena](./practica-logica): plataforma interactiva con pruebas aleatorias por nivel.

## Practica interactiva

Logic Arena es una landing web para practicar logica de forma dinamica:

- 5 niveles: facil, intermedio, dificil, experto y ultra experto.
- 300 variantes base de preguntas.
- Pruebas aleatorias de 10 a 15 preguntas.
- Tiempo ajustado por dificultad.
- Resultado final con respuestas correctas, incorrectas, puntaje y explicacion.
- Exportacion de resultado en Markdown y JSON para subirlo al repo.

URL esperada con GitHub Pages:

```text
https://anndreloopez012.github.io/campuslands-dev-logica/practica-logica/
```

Los resultados de la plataforma deben guardarse en:

```text
resultados/usuario-github/
```

## Flujo rapido

```bash
git clone https://github.com/anndreloopez012/campuslands-dev-logica.git
cd campuslands-dev-logica
git switch dev
git pull origin dev
git switch -c alumno/nombre-apellido/ejercicio-001
```

Entrega solo dentro de `resoluciones/nombre-apellido/` y abre PR hacia `dev`.
