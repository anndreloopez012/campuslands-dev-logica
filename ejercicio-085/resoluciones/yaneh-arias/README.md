# Ejercicio 085: Mínimos y Límites en Taller Mecánico

## ¿Cómo pensé el problema?
1. Analicé las entradas: una lista de objetos con piezas/repuestos del taller mecánico y un valor numérico que representa el límite mínimo aceptable de stock.
2. Recorrí el inventario evaluando cada pieza mediante condicionales para detectar aquellas cuyo stock sea menor o igual al límite mínimo.
3. Consolidé las piezas en condición crítica y activé la bandera de alerta para notificación de pedido de reabastecimiento.

## Reglas Aplicadas
* Validación de listas vacías y límites no definidos.
* Filtrado seguro con condicionales para aislamiento de mínimos aceptables.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-085/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Inventario de cuatro repuestos comparados contra un stock mínimo de 4 unidades.
* **Caso Borde:** Inventario vacío para verificar la respuesta segura del sistema ante la ausencia de registros.
