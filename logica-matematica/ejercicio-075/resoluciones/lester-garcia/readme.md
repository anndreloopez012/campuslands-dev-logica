# Plantilla de solucion

## Analisis

- **Entrada:**
  - Velocidad de desplazamiento.
  - Tiempo empleado.

- **Proceso:**
  - Multiplicar la velocidad por el tiempo para obtener la distancia recorrida.
  - Comparar la distancia con el valor establecido.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Distancia recorrida.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. La distancia se calcula multiplicando la velocidad por el tiempo.
2. Si la distancia es mayor o igual a 50, la categoria es **avance rapido**.
3. Si la distancia es menor a 50, la categoria es **avance normal**.

## Pruebas

### Caso normal

**Entrada:**

velocidad: 15

tiempo: 4

**Resultado esperado:**

distancia: 60

categoria: avance rapido

explicacion: se calculo la distancia recorrida multiplicando la velocidad por el tiempo.

### Caso borde

**Entrada:**

velocidad: 10

tiempo: 4

**Resultado esperado:**

distancia: 40

categoria: avance normal

explicacion: se calculo la distancia recorrida multiplicando la velocidad por el tiempo.

## Explicacion final

La solucion recibe la velocidad de desplazamiento y el tiempo empleado. A partir de estos datos calcula la distancia recorrida mediante la formula **distancia = velocidad × tiempo**. Finalmente compara el resultado con el limite establecido para asignar la categoria correspondiente y mostrar todos los resultados solicitados.