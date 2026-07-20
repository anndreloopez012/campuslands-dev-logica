# Plantilla de solucion

## Analisis

* **Entrada**: Un `inventario` (arreglo de objetos con `nombre` y `cantidad`), un objeto `mezcla` (reactivos solicitados y cantidades) y un arreglo `incompatibles` (lista de pares prohibidos).
* **Proceso**: Verificación de seguridad mediante cruce de datos prohibidos y validación de disponibilidad de stock en el inventario.
* **Salida**: Un objeto que define la `accion` (Peligro, Error, o Autorizada) y un `motivo` explicativo.

## Reglas identificadas

1. **Seguridad**: Si el par de reactivos solicitado existe en la lista de `incompatibles`, la operación se bloquea inmediatamente como "Peligro".
2. **Disponibilidad**: La mezcla solo se autoriza si ambos reactivos existen en el `inventario` y tienen una `cantidad` igual o superior a la requerida.
3. **Integridad**: Si alguno de los reactivos no existe en el inventario, se clasifica como error de stock.

## Pruebas

### Caso normal

* **Entrada**: `inventario = [{nombre: "acido", cantidad: 10}, {nombre: "agua", cantidad: 20}], mezcla = {reactivo1: "acido", cant1: 5, reactivo2: "agua", cant2: 5}, incompatibles = [["acido", "base"]]`
* **Resultado esperado**: `{ accion: "Autorizada", motivo: "Mezcla segura y con stock disponible." }`

### Caso borde

* **Entrada**: `mezcla = {reactivo1: "acido", cant1: 5, reactivo2: "base", cant2: 2}, incompatibles = [["acido", "base"]]`
* **Resultado esperado**: `{ accion: "Peligro", motivo: "Reacción química violenta detectada." }`

## Explicacion final

La solución es robusta porque implementa una "defensa en profundidad". Primero, prioriza la seguridad física mediante la validación de `incompatibles`, evitando cualquier riesgo de accidente antes de consultar los recursos. Segundo, utiliza métodos de búsqueda eficiente (`find` y `some`) que aseguran que las validaciones de stock sean precisas. Esta estructura jerárquica garantiza que el sistema no solo sea funcional, sino que proteja activamente el entorno del laboratorio al rechazar combinaciones peligrosas por encima de cualquier otro criterio.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de peligro**: `incompatibles.some(par => par.includes(m.r1) && par.includes(m.r2))`
* **Condición de stock inexistente**: `!item1 || !item2`
* **Condición de insuficiencia**: `item1.cantidad < m.cant1 || item2.cantidad < m.cant2`