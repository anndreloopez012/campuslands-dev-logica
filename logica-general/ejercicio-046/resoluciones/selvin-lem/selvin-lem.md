# Resolucion - Logica general 046

## Como pensé el problema
A diferencia del ejercicio 026, aqui el enfoque es organizar antes de decidir. En vez de recorrer items cada vez que se necesita buscar algo, primero construyo un objeto indice que clasifica todas las posiciones por estado en un solo recorrido, y despues cualquier busqueda consulta ese indice ya listo.

## Reglas aplicadas
- se construye un objeto indice con cuatro claves (bloqueado, pendiente, aprobado, desconocido), cada una con sus posiciones y su total.
- prioridad alta -> criterio "bloqueado"; media -> "pendiente"; baja -> "aprobado".
- regla que contiene "buscar" seguido de un estado valido -> sobreescribe el criterio de la prioridad.
- la busqueda final se resuelve consultando el indice, no recorriendo items de nuevo.
- criterio sin coincidencias en el indice -> encontrados vacio.
- items vacio -> sin indice, sin busqueda posible.

## Casos probados
1. Caso normal: prioridad alta busca "bloqueado" -> el indice ya tenia la posicion 2 lista.
2. Caso borde: items vacio -> sin indice.
3. Caso especial: regla "buscar bloqueado en el lote" con prioridad media -> el indice entrega directamente las posiciones [0, 2].