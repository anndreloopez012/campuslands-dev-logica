
## Entrega
- Nombre: Irma Yaneht Arias García
- Ejercicio: 009
- Area: logica-matematica / logica-general

## Checklist
- [x] Mi PR apunta a dev

## Pensamiento
Para este ejercicio, definí tres estados posibles (tranquilo, asustado, huida) basados en el parámetro `nivelSusto`. Utilicé una estructura condicional `if/else if` para evaluar el nivel y determinar el comportamiento del espectador.

## Reglas Aplicadas
1. Nivel > 9: El espectador huye.
2. Nivel entre 5 y 9: El espectador sigue viendo con miedo.
3. Nivel < 5: El espectador está tranquilo.

## Cómo ejecutar
Ejecuta el archivo con: `node irma-arias.js`

## Casos de Prueba
- **Normal**: Película con nivel 8 (Resultado: Espectador asustado pero sigue viendo).
- **Caso Borde**: Película con nivel 10 (Resultado: Espectador ha huido).