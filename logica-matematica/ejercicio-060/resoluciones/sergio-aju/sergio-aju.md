# Analisis del reto: Simulaciones con Fórmulas de Comida Urbana

## Analisis

- **Entrada:** Un arreglo de `costos_produccion` (precio por ingrediente de un plato), un `margen_ganancia` (porcentaje decimal) y un `impuesto_fijo`.
- **Proceso:** Calcular el costo total de producción sumando los ingredientes, aplicar el margen de ganancia al costo total y añadir el impuesto fijo para obtener el `precio_venta_final`.
- **Salida:** El `precio_venta_final` y la `clasificacion_precio` del producto.

## Reglas identificadas

1. **Cálculo de costo:** Sumar todos los elementos del arreglo `costos_produccion`.
2. **Aplicación de ajustes:** Al costo total, sumar el margen de ganancia (Costo * Margen) y sumar el `impuesto_fijo`.
3. **Clasificación:**
   - Si el precio final es >= 20.0: "premium".
   - Si el precio final está entre 10.0 y 19.9: "estándar".
   - Si el precio final es < 10.0: "económico".

## Pruebas

### Caso normal

**Entrada:**
```text
costos_produccion: [2.0, 3.0, 5.0]
margen_ganancia: 0.5
impuesto_fijo: 2.0