
## Entrega
- Nombre: Irma Yaneht Arias García
- Ejercicio: 008
- Area: logica-matematica / logica-general

## Checklist
- [x] Mi PR apunta a dev

## Pensamiento
He diseñado un flujo lógico paso a paso utilizando condicionales anidados (o secuenciales). El proceso filtra primero el género y luego la calidad, entregando un estado final para la película evaluada.

## Reglas Aplicadas
1. La película debe ser obligatoriamente del género "Ciencia Ficción".
2. Debe tener una calificación igual o superior a 7 para ser apta.

## Cómo ejecutar
Ejecuta el archivo con: `node irma-arias.js`

## Casos de Prueba
- **Normal**: Película de ciencia ficción con calificación 8.5 (Resultado: Aceptada).
- **Caso Borde**: Película de terror con calificación 9.0 (Resultado: Descartada por género).