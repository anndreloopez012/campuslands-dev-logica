# Solucion - Ejercicio 031 (Logica matematica)

## Analisis

- Entrada: una lista `participantes` (puntajes numericos de kickboxing), un `bono` numerico y una `penalizacion` numerica.
- Proceso: contar cuantos combates 1 vs 1 son posibles entre los participantes (combinacion simple de n en 2) y ajustar ese numero con el bono y la penalizacion.
- Salida: un objeto `{ puntaje_final, clasificacion, explicacion }`.

## Nota sobre el ejemplo del README original

El ejemplo del enunciado (`participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 -> puntaje_final: 27`) **no es reproducible** con una regla de conteo combinatorio real: en un conteo de combinaciones solo importa *cuantos* participantes hay, no *cuanto valen* sus puntajes. Con 4 participantes hay `C(4,2) = 6` combates posibles, y `6 + 8 - 3 = 11`, no 27.

Como no hay forma de deducir la formula exacta que produce 27 a partir del enunciado, implemente la regla mas directa y defendible (contar combinaciones reales y ajustarlas con bono/penalizacion) y la documento explicitamente aqui y en los comentarios del codigo. Si el instructor necesita que el ejemplo cuadre con otro numero exacto, se debe pedir la formula real, porque no se puede inferir de forma confiable.

## Reglas identificadas

1. El numero de combates posibles entre `n` participantes es `C(n, 2) = n * (n - 1) / 2`.
2. `puntaje_final = combinaciones + bono - penalizacion`.
3. La clasificacion se resuelve con una tabla de rangos (de mayor a menor), no con `if/else` encadenados:
   - `puntaje_final >= 15` -> `competitivo`
   - `puntaje_final >= 8` -> `intermedio`
   - `puntaje_final >= 0` -> `principiante`
   - cualquier otro caso (negativo) -> `no_clasificado`
4. Si la lista de participantes esta vacia, o ninguno de sus valores es un numero valido, se retorna `clasificacion: 'sin_datos'` sin intentar calcular combinaciones.
5. `bono` y `penalizacion` invalidos (no numericos) se tratan como `0` en vez de romper la ejecucion.

## Pruebas

### Caso normal

Entrada:

```js
evaluarTorneoKickboxing([10, 20, 30, 40, 50], 5, 2)
```

Resultado esperado:

```js
{
  puntaje_final: 13, // C(5,2)=10, 10+5-2=13
  clasificacion: 'intermedio',
  explicacion: 'Se calcularon 10 combinaciones posibles entre 5 participantes, se sumo el bono (5) y se resto la penalizacion (2).'
}
```

### Caso borde

Entrada:

```js
evaluarTorneoKickboxing([], 5, 2)
```

Resultado esperado:

```js
{
  puntaje_final: 0,
  clasificacion: 'sin_datos',
  explicacion: 'No hay participantes registrados, no es posible calcular combinaciones ni puntaje.'
}
```

Otros casos borde probados en el archivo `.js` (ver bloque de pruebas manuales): un solo participante (0 combinaciones posibles) y una penalizacion mayor que el bono mas las combinaciones (resultado negativo -> `no_clasificado`).

## Explicacion final

La solucion separa claramente tres pasos: (1) contar combinaciones reales con la formula matematica de combinatoria simple `C(n,2)`, (2) ajustar ese numero con bono/penalizacion validados, y (3) clasificar el resultado con una tabla de prioridades en lugar de condicionales anidados, siguiendo el mismo patron usado en el ejercicio 030. Los casos borde (lista vacia, valores no numericos, puntaje negativo) se manejan de forma explicita para que la funcion nunca falle silenciosamente ni devuelva `NaN`.

## Sugerencia

Verifique cada operacion con calculos manuales antes de confiar en el codigo: para `n` participantes, `C(n,2)` siempre es `n*(n-1)/2`; para 4 participantes son 6 combates, no un valor arbitrario.