# Ejercicio 049 - Módulos y divisibilidad (Películas de Miedo)

**Camper:** Antonio Canux

## Analisis

- Entrada: Un número entero (`cantidadPeliculas`) que define cuántas cintas se proyectarán en el maratón.
- Proceso: Se genera un ciclo que va desde la película 1 hasta la cantidad indicada. En cada iteración, se utiliza el operador módulo (`%`) para comprobar si el número del turno es divisible exactamente entre 3, entre 5, o entre ambos simultáneamente (15). Dependiendo del residuo de la división, se asigna una categoría especial a la proyección y se actualiza el contador correspondiente.
- Salida: Un objeto que contiene el número total de películas programadas, un desglose estadístico de las categorías y un arreglo que detalla el tipo de función asignada a cada turno específico.

## Reglas identificadas

1. **Operador Módulo:** Si el resultado de `i % n` es estrictamente igual a `0`, significa que `i` es múltiplo de `n`.
2. **Coincidencia Doble (Mínimo Común Múltiplo):** Si el turno de la película es divisible entre 3 y entre 5 a la vez, se clasifica como "Estreno de Medianoche".
3. **Múltiplos de 3:** Si el turno solo es divisible entre 3, la película es un "Especial de Jumpscares".
4. **Múltiplos de 5:** Si el turno solo es divisible entre 5, la película es un "Clásico Slasher".
5. **Jerarquía Condicional:** La regla de la coincidencia doble (divisible por 15) debe evaluarse primero, ya que si evaluamos la del 3 o la del 5 antes, la condición se cumplirá y el código nunca alcanzará a asignar el "Estreno de Medianoche".

## Pruebas

### Caso normal

Entrada: `cantidadPeliculas: 15`

Resultado esperado:
```text
total_programado: 15
desglose: { estandar: 8, jumpscares: 4, slashers: 2, medianoche: 1 }
cartelera: [
  { turno: 1, tipo_funcion: "Terror Estándar" },
  { turno: 2, tipo_funcion: "Terror Estándar" },
  { turno: 3, tipo_funcion: "Especial de Jumpscares" },
  // ... omisión visual ...
  { turno: 15, tipo_funcion: "Estreno de Medianoche" }
]
```

### Caso borde
Entrada: `cantidadPeliculas: 4`

Resultado esperado:

```text
total_programado: 4
desglose: { estandar: 3, jumpscares: 1, slashers: 0, medianoche: 0 }
cartelera: [
  { turno: 1, tipo_funcion: "Terror Estándar" },
  { turno: 2, tipo_funcion: "Terror Estándar" },
  { turno: 3, tipo_funcion: "Especial de Jumpscares" },
  { turno: 4, tipo_funcion: "Terror Estándar" }
]
```

## Explicacion final
Esta solución funciona gracias a la correcta implementación de estructuras de control if/else if y el entendimiento matemático del operador módulo (%). En la lógica de programación, el orden en el que colocamos las condiciones es tan importante como la condición misma. Al verificar la divisibilidad combinada al principio (i % 3 === 0 && i % 5 === 0), evitamos el error lógico donde un número como el 15 sería atrapado por la primera regla individual (divisible por 3) arruinando el resultado. Es una estrategia indispensable para resolver algoritmos de clasificación de ciclos continuos.