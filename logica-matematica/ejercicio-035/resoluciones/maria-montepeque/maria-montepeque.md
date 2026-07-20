# Ejercicio 035 - Puntaje de participantes

## Analisis

- Entrada: `participantes` (arreglo de numeros), `bono` (numero), `penalizacion` (numero).
- Proceso: se calcula la mediana de `participantes`, redondeada al entero mas cercano, y se le suma el bono y se le resta la penalizacion.
- Salida: objeto `{ puntaje_final, clasificacion, explicacion }`.

## Reglas identificadas

1. La base del puntaje es la mediana de `participantes` (no el promedio), redondeada con `Math.round`.
2. `puntaje_final = mediana_redondeada + bono - penalizacion`.
3. La clasificacion depende de `puntaje_final`: `>= 25` competitivo, `>= 15` intermedio, el resto principiante.
4. Si `participantes` esta vacio no hay mediana valida, se devuelve `clasificacion: "sin datos"` en vez de fallar.

## Pruebas

| Caso | Entrada | Resultado |
|---|---|---|
| Normal (ejemplo README) | `participantes: [12,18,25,30], bono: 8, penalizacion: 3` | `puntaje_final: 27, clasificacion: "competitivo"` |
| Borde: lista vacia | `participantes: [], bono: 5, penalizacion: 2` | `puntaje_final: 0, clasificacion: "sin datos"` |
| Borde: un solo participante | `participantes: [10], bono: 0, penalizacion: 0` | `puntaje_final: 10, clasificacion: "principiante"` |

## Explicacion final

Se eligio la mediana porque no se ve afectada por valores extremos como si pasaria con el promedio, lo cual la hace mas representativa del grupo. Verifique manualmente el caso del ejemplo: ordenando `[12,18,25,30]` la mediana es `(18+25)/2 = 21.5`, redondeada a `22`; sumando el bono (8) y restando la penalizacion (3) da `27`, que coincide con el resultado esperado del README.

## Como ejecutar

```bash
node maria-montepeque.js
```