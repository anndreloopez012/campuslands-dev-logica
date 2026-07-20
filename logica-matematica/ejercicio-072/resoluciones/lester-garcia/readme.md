# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de saques exitosos.
  - Cantidad total de saques realizados.

- **Proceso:**
  - Calcular la probabilidad de exito dividiendo los saques exitosos entre el total de saques.
  - Comparar la probabilidad con el valor de referencia.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Probabilidad de exito.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. La probabilidad de exito se obtiene dividiendo los saques exitosos entre el total de saques.
2. Si la probabilidad es mayor o igual a 0.75, la categoria es **saque efectivo**.
3. Si la probabilidad es menor a 0.75, la categoria es **saque en mejora**.

## Pruebas

### Caso normal

**Entrada:**

saquesExitosos: 18

totalSaques: 24

**Resultado esperado:**

probabilidad: 0.75

categoria: saque efectivo

explicacion: se calculo la probabilidad de exito dividiendo los saques exitosos entre el total de saques.

### Caso borde

**Entrada:**

saquesExitosos: 5

totalSaques: 10

**Resultado esperado:**

probabilidad: 0.5

categoria: saque en mejora

explicacion: se calculo la probabilidad de exito dividiendo los saques exitosos entre el total de saques.

## Explicacion final

La solucion recibe la cantidad de saques exitosos y el total de saques realizados. Luego calcula la probabilidad de exito mediante una division y compara el resultado con el umbral definido. Finalmente asigna la categoria correspondiente y muestra la probabilidad junto con la explicacion del resultado.