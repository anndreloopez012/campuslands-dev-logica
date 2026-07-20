# Ejercicio 050 - Redondeo y precisión (Viajes y Turismo)

**Camper:** Antonio Canux

## Analisis

- Entrada: Valores numéricos para `totalTuristas` (cantidad de personas), `capacidadVehiculo` (asientos disponibles por transporte) y `costoTotalViaje` (presupuesto global).
- Proceso: Primero, se divide el total de turistas entre la capacidad del vehículo y se redondea el resultado hacia el entero superior más cercano para asegurar que nadie se quede sin asiento. Segundo, se divide el costo total entre los turistas para obtener la cuota individual, aplicando una restricción matemática de exactamente dos posiciones decimales. Finalmente, se recalcula el total con las cuotas individuales para ver si hubo un leve desfase de centavos generado por la división.
- Salida: Un objeto dividido en dos secciones (`logistica` y `finanzas`) que detalla la cantidad de vehículos necesarios, la cuota exacta a cobrar por persona y cualquier ajuste en centavos.

## Reglas identificadas

1. **Redondeo estricto hacia arriba (Techo):** Al calcular unidades físicas indivisibles (como vehículos o viajes), cualquier decimal mayor a 0 requiere una unidad adicional entera. Para esto se usa la función matemática de "techo" (`Math.ceil`).
2. **Precisión financiera:** Los cobros de dinero deben expresarse siempre con un máximo de dos decimales (centavos). La división pura produce flotantes largos, por lo que debe aplicarse un formateo de precisión (`toFixed(2)`).
3. **Manejo de strings vs floats:** Al utilizar métodos de precisión en lenguajes de programación, el resultado suele convertirse en una cadena de texto (String). Se debe volver a convertir a número decimal (`parseFloat`) si se planea hacer cálculos posteriores con él.

## Pruebas

### Caso normal

Entrada: `totalTuristas: 34`, `capacidadVehiculo: 12`, `costoTotalViaje: 1550.75`

Resultado esperado:
```text
logistica: { turistas: 34, vehiculos_asignados: 3 }
finanzas: { costo_total_original: 1550.75, cuota_exacta_por_persona: 45.61, ajuste_centavos: -0.01 }
```

### Caso borde
Entrada: `totalTuristas: 20`, `capacidadVehiculo: 20`, `costoTotalViaje: 2000`

Resultado esperado:

```text
logistica: { turistas: 20, vehiculos_asignados: 1 }
finanzas: { costo_total_original: 2000, cuota_exacta_por_persona: 100, ajuste_centavos: 0 }
```

## Explicacion final
Esta solución funciona porque reconoce la diferencia fundamental entre tratar datos como magnitudes continuas y como unidades discretas. Utilizar Math.round() (redondeo estándar) habría sido un error crítico en el cálculo de transporte, ya que 34 personas en vans de 12 (34/12 = 2.83) redondearía bien a 3, pero 25 personas en vans de 10 (25/10 = 2.5) podría dejar gente fuera si no se fuerza el techo matemático con Math.ceil(). Además, implementar toFixed(2) garantiza la presentación profesional de las métricas financieras de la agencia de turismo, solucionando el problema clásico de la precisión de punto flotante en JavaScript.