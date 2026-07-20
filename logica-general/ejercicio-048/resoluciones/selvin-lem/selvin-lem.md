# Resolucion - Logica general 048

## Como pensé el problema
A diferencia del ejercicio 028, aqui la organizacion se separa de la decision. Primero construyo un mapa de bloques que agrupa los pendientes consecutivos y cuenta los bloqueados totales en un solo recorrido; despues, el flujo solo recorre ese mapa ya listo para decidir las acciones.

## Reglas aplicadas
- el mapa agrupa automaticamente pendientes consecutivos en un solo bloque con su cantidad.
- bloque de pendiente con 2 o mas elementos -> accion "reintento agrupado".
- bloque de bloqueado + prioridad alta -> detiene el flujo segun el mapa.
- bloque de bloqueado + regla "continuar pese a bloqueo" -> no detiene, sigue avanzando.
- bloque de bloqueado sin esas condiciones -> detiene el flujo normalmente.
- items vacio -> sin mapa, sin pasos.


## Casos probados
1. Caso normal: aprobado, pendiente, bloqueado con prioridad alta -> mapa de 3 bloques, se detiene en el bloqueado.
2. Caso borde: items vacio -> sin mapa.
3. Caso especial: dos pendientes consecutivos agrupados en el mapa + bloqueado con regla permisiva -> reintento agrupado y el flujo continua.