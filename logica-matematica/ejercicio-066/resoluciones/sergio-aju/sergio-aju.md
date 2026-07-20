# Analisis del reto: Conversión de Unidades de Autos Hiperdeportivos

## Analisis

- **Entrada:** Un arreglo de `velocidades_mph` (velocidades en millas por hora) y un `factor_conversion` (valor para pasar a km/h).
- **Proceso:** Convertir cada velocidad a km/h, calcular el promedio de todas las velocidades convertidas y aplicar un ajuste por condiciones de pista.
- **Salida:** El `promedio_velocidad_kmh` resultante y la `clasificacion_rendimiento` del grupo de autos.

## Reglas identificadas

1. **Conversión:** Multiplicar cada `velocidad_mph` por el `factor_conversion` (ej. 1.60934).
2. **Ajuste:** Sumar un valor adicional si el promedio resultante supera los 400 km/h (bono aerodinámico).
3. **Clasificación:**
   - Si promedio ajustado >= 450 km/h: "hiper-rápido".
   - Si promedio ajustado entre 350 y 449 km/h: "competitivo".
   - Si promedio ajustado < 350 km/h: "estándar".

## Pruebas

### Caso normal

**Entrada:**
```text
velocidades_mph: [250, 300]
factor_conversion: 1.609