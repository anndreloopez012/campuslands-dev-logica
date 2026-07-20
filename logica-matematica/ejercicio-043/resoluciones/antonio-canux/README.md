# Ejercicio 043 - Torneo de Esports

**Camper:** Antonio Canux

## Analisis

- Entrada: Un arreglo de números enteros (`puntuaciones`) que representan los puntos o trofeos ganados en cada partida del torneo.
- Proceso: Se suman todos los valores y se dividen entre la cantidad de partidas para obtener el promedio. Paralelamente, se ordenan las puntuaciones de menor a mayor para encontrar la mediana (el valor central o el promedio de los dos centrales si la cantidad es par). Finalmente, se comparan ambos indicadores.
- Salida: Un objeto que muestra el `promedio`, la `mediana` y el `perfil_jugador` (una cadena de texto indicando si es "Consistente" o "Irregular").

## Reglas identificadas

1. **Cálculo del Promedio:** Se obtiene dividiendo la suma total de las puntuaciones entre la cantidad de partidas jugadas.
2. **Cálculo de la Mediana:** Requiere ordenar los datos numéricamente. Si hay una cantidad impar de partidas, se toma el valor exacto del medio. Si es par, se promedian los dos valores centrales.
3. **Regla de Perfil:** Un jugador se considera "Consistente" si su mediana es mayor o igual a su promedio (lo que indica que la mayoría de sus partidas son buenas y los promedios bajos son "accidentes"). Si el promedio es mayor a la mediana, significa que unas pocas partidas muy buenas están inflando su rendimiento general, por lo que es "Irregular".

## Pruebas

### Caso normal

Entrada: `puntuaciones: [28, 30, 29, 32, 10]`

Resultado esperado:
```text
promedio: 25.8
mediana: 29
perfil_jugador: "Consistente"
```

### Caso borde
Entrada: `puntuaciones: [5, 40, 8, 35, 12, 10, 42]`

Resultado esperado:

```text
promedio: 21.71
mediana: 12
perfil_jugador: "Irregular"
```

## Explicacion final
Esta solución funciona porque hace un uso correcto de las medidas de tendencia central en la estadística básica. El promedio puede ser engañoso en los esports; un jugador puede ganar una partida por paliza y perder tres por poco, distorsionando su media. Al incorporar la mediana (que requiere ordenar el arreglo mediante .sort( (a,b) => a - b ) para evitar el ordenamiento alfabético por defecto de JavaScript), el algoritmo evalúa cuál es el rendimiento "típico" del jugador, ofreciendo una métrica de clasificación mucho más justa y apegada a la realidad del torneo.