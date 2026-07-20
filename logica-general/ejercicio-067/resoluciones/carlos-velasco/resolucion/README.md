# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `playlist` donde cada objeto representa una canción con las propiedades: `titulo`, `duracion` y `anio`.
* **Proceso**: Iteración sobre cada elemento del arreglo para validar individualmente tres criterios de integridad (presencia de título, duración válida y rango de año lógico), acumulando los errores encontrados en un reporte detallado.
* **Salida**: Un objeto que indica si el conjunto es `valido` (booleano) y proporciona una lista (`detalles`) con los errores específicos detectados o un mensaje de éxito.

## Reglas identificadas

1. **Título Obligatorio**: El campo `titulo` debe existir y no puede estar vacío o consistir solo en espacios en blanco.
2. **Duración Positiva**: La propiedad `duracion` debe ser estrictamente de tipo número y mayor a 0.
3. **Rango de Año**: El campo `anio` debe estar comprendido entre 1900 y 2026 inclusive.

## Pruebas

### Caso normal

* **Entrada**: `[{ titulo: "Clean", duracion: 180, anio: 2023 }]`
* **Resultado esperado**: `{ valido: true, detalles: "Playlist correcta." }`

### Caso borde

* **Entrada**: `[{ titulo: "", duracion: -5, anio: 1850 }]`
* **Resultado esperado**: `{ valido: false, detalles: ["Cancion en indice 0: Falta titulo.", "Cancion '': Duracion invalida.", "Cancion '': Anio fuera de rango."] }`

## Explicacion final

Esta solución es efectiva porque desacopla las validaciones, permitiendo que un solo objeto sea evaluado por múltiples reglas de negocio simultáneamente. Al acumular errores en un arreglo en lugar de interrumpir la ejecución ante el primer fallo, el sistema ofrece al usuario un diagnóstico completo de los problemas en su lista de reproducción. El uso de `trim()` asegura que entradas "vacías" compuestas solo por espacios sean correctamente identificadas como inválidas, mejorando la calidad de la limpieza de datos.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Validar título**: `!cancion.titulo || cancion.titulo.trim() === ""`
* **Validar duración**: `typeof cancion.duracion !== 'number' || cancion.duracion <= 0`
* **Validar año**: `cancion.anio < 1900 || cancion.anio > 2026`