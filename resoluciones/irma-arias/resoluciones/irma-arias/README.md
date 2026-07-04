
# Ejercicio 002: Ranking de fútbol sala

## Pensamiento
Para resolver este problema, identifiqué que los datos de entrada son una lista de equipos con puntos y goles. El proceso requiere una comparación jerárquica: primero por puntos y, en caso de empate, por diferencia de goles.

## Reglas Aplicadas
1. Mayor cantidad de puntos obtiene mejor posición.
2. Ante empate en puntos, se calcula la diferencia (goles a favor - goles en contra).

## Cómo ejecutar
Ejecuta el archivo usando Node.js en tu terminal:
`node irma-arias.js`

## Casos de Prueba
- **Normal**: Lista con diferentes puntuaciones.
- **Caso Borde**: Equipos con mismos puntos pero distinta diferencia de goles.