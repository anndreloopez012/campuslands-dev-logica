# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de victorias.
  - Cantidad de derrotas.
  - Valor del bono.
  - Valor de la penalizacion.

- **Proceso:**
  - Calcular los puntos obtenidos por las victorias.
  - Aplicar un bono si se alcanza el minimo de victorias.
  - Aplicar una penalizacion si las derrotas superan el limite permitido.
  - Determinar la clasificacion segun el puntaje final.

- **Salida:**
  - Puntaje.
  - Clasificacion.
  - Explicacion del resultado.

## Reglas identificadas

1. Cada victoria aporta 3 puntos al puntaje.
2. Si las victorias son mayores o iguales a 15, se suma el bono; si las derrotas son mayores a 4, se resta la penalizacion.
3. Si el puntaje es mayor o igual a 50 la clasificacion es **elite**; si esta entre 35 y 49 es **competitivo**; en otro caso es **en desarrollo**.

## Pruebas

### Caso normal

**Entrada:**

victorias: 18

derrotas: 5

bono: 10

penalizacion: 8

**Resultado esperado:**

puntaje: 56

clasificacion: elite

explicacion: se calcularon los puntos por victorias, se aplico un bono por alto rendimiento y una penalizacion por exceso de derrotas.

### Caso borde

**Entrada:**

victorias: 15

derrotas: 4

bono: 10

penalizacion: 8

**Resultado esperado:**

puntaje: 55

clasificacion: elite

explicacion: se calcularon los puntos por victorias, se aplico un bono por alto rendimiento y una penalizacion por exceso de derrotas.

## Explicacion final

La solucion calcula primero los puntos obtenidos por las victorias. Despues verifica dos condiciones independientes: si el jugador alcanza el minimo de victorias recibe un bono y, si supera el limite de derrotas, recibe una penalizacion. Finalmente compara el puntaje obtenido con los rangos establecidos para asignar la clasificacion correspondiente y mostrar todos los resultados solicitados.