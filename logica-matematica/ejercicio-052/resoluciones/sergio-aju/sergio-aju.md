# Calculadora de Probabilidad en Pingpong

## Análisis
- **Entrada:** Valores numéricos de efectividad base y penalización por fatiga.
- **Proceso:** Normalización de datos y aplicación de umbrales de rendimiento.
- **Salida:** Probabilidad decimal y categoría del jugador.

## Reglas
1. La efectividad no puede ser inferior a 0.
2. El cálculo de probabilidad se expresa como $P = \frac{Efectividad}{100}$.

## Pruebas
- **Normal:** 80% efectividad - 10% penalización = 0.7 (Promedio).
- **Borde:** 5% efectividad - 10% penalización = 0 (Bajo rendimiento).

## Instrucciones
Ejecuta el script mediante `node nombre-apellido.js`.