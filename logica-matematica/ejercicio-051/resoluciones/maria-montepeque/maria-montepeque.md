# Solucion - Ejercicio 051

## Analisis

- Entrada: un arreglo de participantes de un torneo de kickboxing (nombres).
- Proceso: calcular cuantos combates unicos se pueden formar combinando participantes de 2 en 2, sin repetir parejas, y clasificar el torneo segun ese total.
- Salida: un objeto con el total de combates posibles, la clasificacion del torneo y una explicacion del resultado.

## Reglas identificadas

1. El total de combates posibles es una combinacion de 2 elementos sin repeticion y sin importar el orden: `n * (n - 1) / 2`, donde `n` es la cantidad de participantes.
2. Con 0 o 1 participante no existen combates posibles (caso borde explicito).
3. La clasificacion del torneo depende de rangos sobre el total de combates:
   - 0 combates: "sin torneo"
   - 1 a 3 combates: "torneo pequeño"
   - 4 a 10 combates: "torneo mediano"
   - mas de 10 combates: "torneo grande"

## Pruebas

### Caso normal

Entrada: `['Ana', 'Luis', 'Marco', 'Sofia']`

Resultado esperado: `{ totalCombates: 6, clasificacion: 'torneo mediano' }`

### Caso borde

Entrada: `[]` (o un solo participante)

Resultado esperado: `{ totalCombates: 0, clasificacion: 'sin torneo' }`

## Explicacion final

El problema es un caso de conteo combinatorio simple: como no importa el orden de los combatientes dentro de un combate y cada pareja es unica, se aplica la formula de combinaciones de 2 elementos `C(n, 2) = n * (n - 1) / 2`. Los casos con menos de 2 participantes se manejan de forma explicita para evitar resultados negativos o sin sentido. La clasificacion se resuelve con una tabla de rangos en lugar de condicionales anidados, lo que facilita agregar o ajustar categorias sin reescribir logica.