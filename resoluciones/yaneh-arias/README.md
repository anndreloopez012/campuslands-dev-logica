
# Ejercicio 004: Inventario de motos

## Pensamiento del problema
El objetivo es analizar la dispersión de los datos en el inventario. Utilizo el valor máximo y mínimo para obtener el rango, lo que me indica si el inventario está centralizado o disperso.

## Reglas aplicadas
1. **Máximo/Mínimo:** Uso de las funciones nativas de JS para encontrar extremos.
2. **Rango:** Diferencia matemática entre el valor máximo y el mínimo.
3. **Clasificación:** Si el rango supera 50, se etiqueta como 'crítico'.

## Casos de prueba
- **Normal:** `[100, 150, 120, 200]` -> Rango: 100 (Crítico).
- **Caso Borde:** `[50, 50]` -> Rango: 0 (Estable).