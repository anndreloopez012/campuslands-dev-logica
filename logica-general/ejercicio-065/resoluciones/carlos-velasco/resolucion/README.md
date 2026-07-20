# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `taller`, donde cada objeto tiene `vehiculo`, `urgencia` y `tiempoHoras`.
* **Proceso**: Clasificación de las tareas mediante un diccionario de pesos para la urgencia y un ordenamiento de doble criterio (prioridad primero, duración después).
* **Salida**: Un nuevo arreglo con los objetos ordenados según la lógica de optimización del taller.

## Reglas identificadas

1. **Jerarquía de Urgencia**: La prioridad sigue el orden lógico: "alta" > "media" > "baja".
2. **Optimización por Tiempo**: Ante urgencias iguales, el trabajo con menor `tiempoHoras` tiene preferencia.
3. **Preservación de Datos**: La lista original no debe ser modificada (uso de inmutabilidad).

## Pruebas

### Caso normal

* **Entrada**: `[{ vehiculo: "Moto", urgencia: "media", tiempoHoras: 2 }, { vehiculo: "Camioneta", urgencia: "alta", tiempoHoras: 5 }, { vehiculo: "Auto", urgencia: "alta", tiempoHoras: 1 }]`
* **Resultado esperado**: `[{ vehiculo: "Auto", urgencia: "alta", tiempoHoras: 1 }, { vehiculo: "Camioneta", urgencia: "alta", tiempoHoras: 5 }, { vehiculo: "Moto", urgencia: "media", tiempoHoras: 2 }]`

### Caso borde

* **Entrada**: `[{ vehiculo: "Bici", urgencia: "baja", tiempoHoras: 1 }, { vehiculo: "Bus", urgencia: "baja", tiempoHoras: 0.5 }]`
* **Resultado esperado**: `[{ vehiculo: "Bus", urgencia: "baja", tiempoHoras: 0.5 }, { vehiculo: "Bici", urgencia: "baja", tiempoHoras: 1 }]`

## Explicacion final

La solución funciona gracias a la capacidad de personalización de la función `.sort()` de JavaScript. Al asignar pesos numéricos a las categorías cualitativas ("alta", "media", "baja"), transformamos un problema de clasificación subjetiva en una simple operación matemática de comparación. La estructura del algoritmo garantiza que, incluso si el taller recibe múltiples trabajos con la misma prioridad, el tiempo de los mecánicos sea optimizado al abordar primero las tareas más rápidas, minimizando el tiempo de espera acumulado.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Asignación de peso**: `peso = { "alta": 1, "media": 2, "baja": 3 }`
* **Comparar prioridad**: `pesoUrgencia[a.urgencia] - pesoUrgencia[b.urgencia]`
* **Comparar tiempo (si prioridad es igual)**: `a.tiempoHoras - b.tiempoHoras`