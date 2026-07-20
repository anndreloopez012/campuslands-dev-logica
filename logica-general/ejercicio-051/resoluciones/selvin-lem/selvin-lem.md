# Resolucion - Logica general 051

## Como pensé el problema
A diferencia del ejercicio 031, aqui separo tres fases: agrupar por estado, calcular estadisticas (cantidad y proporcion) sobre esos grupos, y recien despues generar alertas consultando esas estadisticas ya calculadas.

## Reglas aplicadas
- cada item se agrupa en bloqueado, pendiente, aprobado o desconocido.
- regla contiene "compactar" -> el grupo desconocido se fusiona dentro de pendiente antes de calcular estadisticas.
- se calcula un objeto estadisticas con cantidad y proporcion por grupo.
- proporcion mayor al 60% en un grupo -> alerta de desbalance, segun las estadisticas.
- prioridad alta con estadisticas de bloqueado en cero -> alerta de inconsistencia.
- items vacio -> grupos, estadisticas y alertas vacios.


## Casos probados
1. Caso normal: un item de cada estado -> estadisticas balanceadas, sin alertas.
2. Caso borde: items vacio -> todo vacio.
3. Caso especial: 3 aprobados y 1 pendiente con prioridad alta y regla "compactar" -> alerta de desbalance (75%) y alerta de bloqueado en cero.