# Analisis del reto: Presupuestos y Descuentos de Animación

## Analisis

- **Entrada:** Un arreglo de `participantes` (que representa el presupuesto base de cada proyecto de animación), un valor de `bono` (adicional por calidad) y una `penalizacion` (descuento por retraso).
- **Proceso:** Sumar todos los presupuestos iniciales, aplicar el bono al total y restar la penalización. Luego, clasificar el resultado según el monto final.
- **Salida:** El `puntaje_final` (presupuesto total) y la `clasificacion` del proyecto.

## Reglas identificadas

1. **Cálculo base:** El total es la suma de todos los elementos del arreglo `participantes`.
2. **Aplicación de ajustes:** Al total se le suma el `bono` y se le resta la `penalizacion`.
3. **Clasificación:** 
   - Si el resultado es >= 100: "alto presupuesto".
   - Si el resultado es entre 50 y 99: "competitivo".
   - Si el resultado es < 50: "bajo presupuesto".

## Pruebas

### Caso normal

**Entrada:**
```text
participantes: [12, 18, 25, 30]
bono: 8
penalizacion: 3