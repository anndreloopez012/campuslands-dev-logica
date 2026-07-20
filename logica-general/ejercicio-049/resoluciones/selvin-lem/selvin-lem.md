# Resolucion - Logica general 049

## Como pensé el problema
A diferencia del ejercicio 029, aqui separo la organizacion de la decision. Primero construyo un contexto que precalcula, para cada posicion, cuantos bloqueados existian antes en los datos originales, y detecta si la regla fuerza aprobacion. Despues, el recorrido principal solo consulta ese contexto ya armado para decidir cada transicion.

## Reglas aplicadas
- el contexto precalcula bloqueadosAcumuladosOriginal por posicion, prioridadAlta, y reglaFuerzaAprobacion.
- regla con "forzar aprobacion" -> todo pendiente transiciona directo a aprobado.
- sin esa instruccion, si el contexto indica 2 o mas bloqueados previos en esa posicion -> el pendiente se congela.
- sin esas condiciones especiales -> transicion base: pendiente + prioridad alta -> bloqueado; pendiente + no alta -> aprobado.
- bloqueado y aprobado son estados finales.
- items vacio -> sin contexto, sin transiciones.


## Casos probados
1. Caso normal: pendiente con prioridad alta -> transiciona a bloqueado.
2. Caso borde: items vacio -> sin transiciones.
3. Caso especial: dos bloqueados antes de un pendiente (segun el contexto) -> el pendiente se congela.
4. Caso especial: regla "forzar aprobacion de todos" -> todos los pendientes pasan a aprobado.