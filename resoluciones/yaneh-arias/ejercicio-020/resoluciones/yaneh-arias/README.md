
# Ejercicio 020 - Simulaciones con Fórmulas (Comida Urbana)

## Análisis del Problema
El reto requiere simular el costo final de producción para un puesto de comida. El proceso consiste en aplicar una fórmula matemática a cada plato para reflejar gastos operativos y costos fijos adicionales, acumulando el resultado final.

## Reglas Aplicadas
1. **Fórmula de Simulación:** Para cada plato se aplica: $CostoFinal = (CostoBase \times FactorOperativo) + CostoExtra$.
2. **Acumulación:** Se utiliza un ciclo para sumar los costos resultantes de todos los platos.
3. **Validación:** Se verifica que la lista de insumos no esté vacía antes de procesar.
4. **Clasificación:** Determina si el costo total representa una "Inversión Alta" o "Ajustada" según un umbral de 500 unidades.

## Ejecución
`node nombre-apellido.js`

## Pruebas
1. **Caso Normal:** Costos `[50, 100, 75]`, factor 1.2, extra 10.
2. **Caso Borde:** Lista vacía para verificar que el sistema maneja entradas nulas sin fallar.