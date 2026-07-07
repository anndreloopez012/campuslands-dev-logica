
# Ejercicio 017: Tablas de Decisión - Arquitectura 3D

## Pensamiento del problema
He resuelto este problema utilizando una estructura de decisión lógica. En lugar de procesar listas, he mapeado las condiciones de entrada (material e iluminación) para obtener una salida predecible. Esto hace que el código sea fácil de escalar si se añaden nuevos materiales en el futuro.

## Reglas aplicadas
- El tipo de renderizado depende de la combinación única entre el tipo de superficie y la intensidad de luz.
- Se ha incluido un caso por defecto para materiales no registrados en la tabla de decisión.

## Cómo ejecutar
Ejecuta el archivo en tu terminal con: `node nombre-apellido.js`

## Casos de prueba
- **Normal:** Vidrio con iluminación alta (Resultado: Raytracing).
- **Normal:** Metal con iluminación baja (Resultado: Mate).
- **Caso Borde:** Material desconocido (Resultado: Material no reconocido).