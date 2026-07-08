
# Ejercicio 002: Ranking de fútbol sala

## Pensamiento del problema
Para resolver este reto, identifiqué que el proceso principal es una acumulación de datos (suma de integrantes de los equipos) seguido de una operación aritmética simple (aplicar bono/penalización) y una clasificación basada en rangos.

## Reglas aplicadas
1. **Suma:** Se utilizó el método `.reduce()` para sumar el arreglo de participantes.
2. **Cálculo:** Se aplica la fórmula: $Resultado = \sum(participantes) + bono - penalizacion$.
3. **Clasificación:** - > 25: Competitivo
   - 15 a 25: Estándar
   - < 15: En desarrollo

## Cómo ejecutar
1. Asegúrate de tener instalado [Node.js](https://nodejs.org/).
2. En la terminal, dentro de la carpeta, ejecuta: `node yaneh-arias.js`

## Casos de prueba
- **Caso Normal:** `([12, 18, 25, 30], 8, 3)` -> Puntaje: 27 (Competitivo).
- **Caso Borde:** `([1, 1], 0, 1)` -> Puntaje: 1 (En desarrollo).