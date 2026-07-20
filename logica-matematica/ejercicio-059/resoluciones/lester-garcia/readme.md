# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de atomos de carbono.
  - Cantidad de atomos de hidrogeno.
  - Cantidad de atomos de oxigeno.

- **Proceso:**
  - Calcular el total de atomos.
  - Verificar que todas las cantidades sean mayores que cero.
  - Evaluar el total de atomos y el resultado de la validacion.
  - Determinar la clasificacion correspondiente.

- **Salida:**
  - Total de atomos.
  - Estado de la validacion.
  - Clasificacion.
  - Explicacion del resultado.

## Reglas identificadas

1. El total de atomos se obtiene sumando las cantidades de carbono, hidrogeno y oxigeno.
2. La formula es valida cuando todas las cantidades de atomos son mayores que cero.
3. Si la formula es valida y el total de atomos es mayor o igual a 20, la clasificacion es **compuesto estable**. Si solo la formula es valida, la clasificacion es **compuesto valido**; en otro caso, la clasificacion es **compuesto invalido**.

## Pruebas

### Caso normal

**Entrada:**

atomosCarbono: 6

atomosHidrogeno: 12

atomosOxigeno: 6

**Resultado esperado:**

total_atomos: 24

formula_valida: true

clasificacion: compuesto estable

explicacion: se verifico que todos los atomos fueran mayores que cero y se evaluo el total de atomos para clasificar la formula.

### Caso borde

**Entrada:**

atomosCarbono: 2

atomosHidrogeno: 4

atomosOxigeno: 1

**Resultado esperado:**

total_atomos: 7

formula_valida: true

clasificacion: compuesto valido

explicacion: se verifico que todos los atomos fueran mayores que cero y se evaluo el total de atomos para clasificar la formula.

## Explicacion final

La solucion recibe la cantidad de atomos de carbono, hidrogeno y oxigeno. Primero calcula el total de atomos y verifica que cada cantidad sea mayor que cero para determinar si la formula es valida. Luego evalua varias condiciones: para clasificar el compuesto como **compuesto estable** debe cumplir simultaneamente con una formula valida y un total minimo de atomos. Si solo cumple la validacion de la formula, se clasifica como **compuesto valido**; en caso contrario, como **compuesto invalido**. Finalmente muestra el total de atomos, el estado de la validacion y la clasificacion obtenida.