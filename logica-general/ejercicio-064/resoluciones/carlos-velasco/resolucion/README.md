# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `inventario` (objetos con detalles de motos) y un objeto `preferencias` (con `tipoDeseado` y `presupuestoMax`).
* **Proceso**: Filtrado de elementos basado en la intersección de tres condiciones (disponibilidad, tipo y precio), seguido de una transformación para extraer solo los nombres de los modelos encontrados.
* **Salida**: Un objeto que indica si se encontraron elementos (`encontrado`: booleano), una lista con los nombres de los `modelos` y un `motivo`.

## Reglas identificadas

1. **Disponibilidad obligatoria**: La moto debe estar marcada como `disponible: true`.
2. **Coincidencia de Tipo**: El `tipo` de la moto debe ser estrictamente igual al `tipoDeseado` de la preferencia.
3. **Límite de Presupuesto**: El `precio` de la moto debe ser menor o igual al `presupuestoMax` establecido por el usuario.

## Pruebas

### Caso normal

* **Entrada**: `stock, { tipoDeseado: "urbana", presupuestoMax: 3000 }`
* **Resultado esperado**: `{ encontrado: true, modelos: ["Urban-Basic"], motivo: "Se filtraron los resultados por disponibilidad, tipo y presupuesto." }`

### Caso borde

* **Entrada**: `stock, { tipoDeseado: "deportiva", presupuestoMax: 1000 }`
* **Resultado esperado**: `{ encontrado: false, mensaje: "No hay motos que cumplan con tus criterios." }`

## Explicacion final

La solución es efectiva porque combina métodos funcionales de JavaScript (`filter` y `map`) para separar la lógica de negocio de la presentación de los resultados. El filtrado reduce el conjunto de datos inicial a solo aquellos elementos que cumplen con todas las restricciones del usuario, mientras que el mapeo limpia la salida para entregar únicamente la información relevante (los nombres de los modelos). Esta estructura es altamente escalable si se decidiera añadir nuevos criterios de búsqueda en el futuro.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Disponibilidad**: `moto.disponible === true`
* **Tipo**: `moto.tipo === preferencias.tipoDeseado`
* **Precio**: `moto.precio <= preferencias.presupuestoMax`