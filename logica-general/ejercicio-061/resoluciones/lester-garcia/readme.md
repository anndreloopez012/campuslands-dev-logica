# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de victorias.
  - Cantidad de derrotas.
  - Valor del bono.
  - Valor de la penalizacion.

- **Proceso:**
  - Calcular el puntaje inicial multiplicando las victorias por tres.
  - Aplicar un bono si se alcanza el minimo de victorias.
  - Aplicar una penalizacion si las derrotas alcanzan el limite establecido.
  - Evaluar varias condiciones para determinar la clasificacion.

- **Salida:**
  - Puntaje final.
  - Clasificacion.
  - Explicacion del resultado.

## Reglas identificadas

1. Cada victoria aporta **3 puntos** al puntaje inicial.
2. Si las victorias son mayores o iguales a **18**, se suma el bono; si las derrotas son mayores o iguales a **4**, se resta la penalizacion.
3. Si el puntaje final es mayor o igual a **60** y las derrotas son menores o iguales a **4**, la clasificacion es **maestro**. Si no cumple ambas condiciones pero el puntaje es mayor o igual a **45**, la clasificacion es **competitivo**; en otro caso, la clasificacion es **principiante**.

## Pruebas

### Caso normal

**Entrada:**

victorias: 20

derrotas: 4

bono: 12

penalizacion: 6

**Resultado esperado:**

puntaje: 66

clasificacion: maestro

explicacion: se calcularon los puntos obtenidos por las victorias y luego se aplicaron el bono y la penalizacion para clasificar al jugador.

### Caso borde

**Entrada:**

victorias: 18

derrotas: 5

bono: 12

penalizacion: 6

**Resultado esperado:**

puntaje: 60

clasificacion: competitivo

explicacion: se calcularon los puntos obtenidos por las victorias y luego se aplicaron el bono y la penalizacion para clasificar al jugador.

## Explicacion final

La solucion recibe la cantidad de victorias, derrotas, el bono y la penalizacion. Primero calcula el puntaje inicial multiplicando las victorias por tres. Luego aplica el bono cuando se alcanza el minimo de victorias y descuenta la penalizacion cuando las derrotas llegan al limite establecido. Finalmente evalua varias condiciones: para obtener la categoria **maestro** debe cumplir simultaneamente con un puntaje minimo y un numero limitado de derrotas. Si solo alcanza el puntaje requerido para el siguiente nivel, se clasifica como **competitivo**; en caso contrario, queda como **principiante**. Finalmente se muestran el puntaje final, la clasificacion y la explicacion correspondiente.