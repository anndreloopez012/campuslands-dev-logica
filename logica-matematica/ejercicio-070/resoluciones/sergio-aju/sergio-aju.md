# Analisis del reto: Redondeo y Precisión en Viajes y Turismo

## Analisis

- **Entrada:** Un arreglo de `costos_viaje` (valores decimales con alta precisión) y un `impuesto_tasa` (porcentaje).
- **Proceso:** Calcular el costo total sumando los costos, aplicar el impuesto correspondiente y redondear el resultado final para facturación.
- **Salida:** El `total_facturado` (redondeado a dos decimales) y la `moneda_aplicada`.

## Reglas identificadas

1. **Cálculo Base:** Sumar todos los `costos_viaje`.
2. **Cálculo de Impuestos:** Aplicar el `impuesto_tasa` (ej. 0.19) sobre la suma.
3. **Redondeo:** El resultado final debe redondearse siempre a dos decimales usando la regla matemática estándar (o redondeo hacia arriba para montos de facturación).

## Pruebas

### Caso normal

**Entrada:**
```text
costos_viaje: [150.555, 200.124]
impuesto_tasa: 0.19