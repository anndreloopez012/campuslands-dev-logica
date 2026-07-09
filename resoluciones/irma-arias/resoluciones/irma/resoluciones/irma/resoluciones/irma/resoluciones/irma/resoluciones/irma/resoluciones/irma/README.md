
# Resolución: Ejercicio 006 - Búsqueda de elementos (Autos Hiperdeportivos)

## Pensamiento lógico
Para realizar una búsqueda efectiva, el paso crítico es la normalización de datos. Al convertir tanto el criterio de búsqueda como los nombres en el catálogo a minúsculas (`.lower()`), eliminamos la posibilidad de error humano por discrepancias en el formato del texto.

## Reglas aplicadas
1. **Normalización:** Uso de `lower()` para asegurar que "BUGATTI" encuentre a "Bugatti".
2. **Búsqueda Lineal:** Recorrido simple sobre la lista para extraer el primer elemento coincidente.
3. **Manejo de errores:** Respuesta explícita si el elemento no forma parte del inventario.

## Cómo ejecutar
Ejecuta el archivo directamente con Python:
`python irma.py`

## Casos probados
1. **Caso Normal:** Búsqueda de "Koenigsegg Jesko" con diferentes variaciones de mayúsculas -> Encontrado exitosamente.
2. **Caso Borde:** Búsqueda de un auto inexistente (Ferrari F40) -> Retorno de mensaje de error.