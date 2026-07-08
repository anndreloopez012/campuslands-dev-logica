
# Ejercicio 003: Promedios y Medianas en Esports

## Pensamiento del problema
Para este ejercicio, el reto fue diferenciar entre el promedio (tendencia central aritmética) y la mediana (valor central posicional), lo cual es crucial para evaluar el desempeño de jugadores en esports.

## Reglas aplicadas
1. **Promedio:** Sumatoria de todos los puntajes dividida por la cantidad de elementos.
2. **Mediana:** Ordenamiento de los datos de menor a mayor para encontrar el punto central. Si la cantidad de elementos es par, se promedian los dos valores centrales.
3. **Clasificación:** Si el promedio supera 20, el equipo es 'élite'.

## Cómo ejecutar
Ejecuta el archivo en tu terminal con: `node yaneh-arias.js`

## Casos de prueba
- **Normal:** `[12, 18, 25, 30]` -> Promedio: 18.75, Mediana: 21.5.
- **Caso Borde:** `[10]` -> Promedio: 10, Mediana: 10.