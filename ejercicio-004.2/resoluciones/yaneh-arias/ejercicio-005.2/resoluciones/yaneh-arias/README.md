
# Ejercicio 005 - Mínimos y Límites (Taller Mecánico)

## Análisis del Problema
Se requiere monitorear los niveles de insumos en un taller. El valor mínimo detectado es el punto crítico para determinar si existe riesgo de desabastecimiento.

## Reglas Aplicadas
1. **Determinación del Mínimo:** Recorrido de la lista para localizar el elemento con el valor numérico más bajo.
2. **Validación de Límite:** Comparación del mínimo contra un `limite_critico`. Si el mínimo es menor o igual al límite, se genera una alerta.

## Pruebas Realizadas
1. **Caso Normal:** `[12, 18, 5, 30]`, Límite: 10. Resultado: Mínimo 5 (Alerta activa).
2. **Caso Borde (Límite exacto):** `[10, 20, 30]`, Límite: 10. Resultado: Mínimo 10 (Alerta activa, según regla de menor o igual).