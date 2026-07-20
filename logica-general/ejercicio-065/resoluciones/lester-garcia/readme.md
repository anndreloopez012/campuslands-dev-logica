# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con los tiempos de reparacion.
  - Un limite de tiempo permitido.
  - Cantidad de reparaciones urgentes.

- **Proceso:**
  - Recorrer el arreglo para encontrar el tiempo minimo.
  - Comparar el tiempo minimo con el limite.
  - Evaluar la cantidad de reparaciones urgentes.
  - Determinar el estado segun las condiciones.

- **Salida:**
  - Tiempo minimo.
  - Estado.
  - Explicacion del resultado.

## Reglas identificadas

1. Se debe identificar el menor tiempo de reparacion del arreglo.
2. Si el tiempo minimo es menor o igual al limite y las reparaciones urgentes son menores o iguales a 2, el estado es **servicio eficiente**.
3. Si solo se cumple que el tiempo minimo es menor o igual al limite, el estado es **servicio aceptable**; en otro caso, el estado es **servicio lento**.

## Pruebas

### Caso normal

**Entrada:**

tiemposReparacion: [6, 4, 7, 5, 8]

limite: 5

reparacionesUrgentes: 2

**Resultado esperado:**

tiempo_minimo: 4

estado: servicio eficiente

explicacion: se identifico el menor tiempo de reparacion y se evaluo junto con la cantidad de reparaciones urgentes.

### Caso borde

**Entrada:**

tiemposReparacion: [8, 7, 6]

limite: 5

reparacionesUrgentes: 1

**Resultado esperado:**

tiempo_minimo: 6

estado: servicio lento

explicacion: se identifico el menor tiempo de reparacion y se evaluo junto con la cantidad de reparaciones urgentes.

## Explicacion final

La solucion recorre el arreglo de tiempos para identificar el menor tiempo de reparacion. Luego compara este valor con el limite permitido y, adicionalmente, verifica la cantidad de reparaciones urgentes. Si ambas condiciones se cumplen, el servicio se clasifica como **servicio eficiente**. Si solo cumple el limite de tiempo, se considera **servicio aceptable**. En cualquier otro caso, se clasifica como **servicio lento**, mostrando finalmente todos los resultados obtenidos.