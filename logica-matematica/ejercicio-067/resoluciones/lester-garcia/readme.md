# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con la cantidad de reproducciones de varias canciones.

- **Proceso:**
  - Calcular el incremento entre los dos primeros elementos.
  - Verificar que toda la lista siga la misma secuencia numerica.
  - Calcular el total de reproducciones.
  - Clasificar la playlist segun las reglas establecidas.

- **Salida:**
  - Incremento de la secuencia.
  - Total de reproducciones.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El incremento de la secuencia se obtiene restando el segundo elemento menos el primero.
2. La playlist tiene una secuencia valida cuando todos los elementos aumentan utilizando el mismo incremento.
3. Si la secuencia es valida y el total de reproducciones es mayor o igual a 700, la categoria es **playlist viral**. Si solo la secuencia es valida, la categoria es **playlist estable**. En otro caso, la categoria es **playlist irregular**.

## Pruebas

### Caso normal

**Entrada:**

reproducciones: [120, 135, 150, 165, 180]

**Resultado esperado:**

incremento: 15

total: 750

categoria: playlist viral

explicacion: se organizo la lista de reproducciones, se verifico que formara una secuencia numerica y se calculo el total de reproducciones.

### Caso borde

**Entrada:**

reproducciones: [50, 60, 70, 80]

**Resultado esperado:**

incremento: 10

total: 260

categoria: playlist estable

explicacion: se organizo la lista de reproducciones, se verifico que formara una secuencia numerica y se calculo el total de reproducciones.

## Explicacion final

La solucion recibe un arreglo con las reproducciones de varias canciones. Primero organiza el analisis identificando el incremento entre los primeros elementos y verifica que toda la lista siga la misma secuencia numerica. Despues calcula el total de reproducciones y finalmente evalua varias condiciones para clasificar la playlist. Si la secuencia es valida y el total alcanza el minimo requerido, la categoria es **playlist viral**. Si solo cumple con la secuencia, se clasifica como **playlist estable**; en caso contrario, como **playlist irregular**.