# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `condiciones` que contiene `velocidadViento` (número), `visibilidadMetros` (número) y `estadoClima` (string).
* **Proceso**: Evaluación secuencial de tres criterios de seguridad (viento, visibilidad y clima adverso) mediante retornos tempranos.
* **Salida**: Un objeto que indica el `estado` ("Aprobado" o "Cancelado") y el `motivo` correspondiente.

## Reglas identificadas

1. El salto se cancela si la `velocidadViento` es superior a 40.
2. El salto se cancela si la `visibilidadMetros` es menor a 1000.
3. El salto se cancela si el `estadoClima` es igual a "Tormenta" o "Lluvia".

## Pruebas

### Caso normal

* **Entrada**: `{ velocidadViento: 25, visibilidadMetros: 1500, estadoClima: "Soleado" }`
* **Resultado esperado**: `{ estado: "Aprobado", motivo: "Condiciones óptimas para el salto." }`

### Caso borde

* **Entrada**: `{ velocidadViento: 45, visibilidadMetros: 2000, estadoClima: "Nublado" }`
* **Resultado esperado**: `{ estado: "Cancelado", motivo: "Exceso de velocidad del viento." }`

## Explicacion final

La solución funciona gracias a la implementación de *early returns* (retornos tempranos). Al evaluar las condiciones de peligro una por una en orden de prioridad, el código detiene su ejecución inmediatamente cuando encuentra un factor inseguro. Si ninguna de las validaciones de error se activa, el flujo llega finalmente a la confirmación de aprobación, lo que garantiza un dictamen claro, eficiente y fácil de mantener.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de viento**: `condiciones.velocidadViento > 40`
* **Condición de visibilidad**: `condiciones.visibilidadMetros < 1000`
* **Condición de clima**: `["Tormenta", "Lluvia"].includes(condiciones.estadoClima)`