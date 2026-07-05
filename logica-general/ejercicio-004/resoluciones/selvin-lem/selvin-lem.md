# Resolucion - Logica general 004

## Como pensé el problema
El objetivo es filtrar, no decidir una sola accion. Definí que criterios de riesgo aplica cada nivel de prioridad y filtré la lista completa de items segun esos criterios.

## Reglas aplicadas
- prioridad alta -> filtra bloqueado y pendiente.
- prioridad media -> filtra solo bloqueado.
- prioridad baja -> no filtra, devuelve todos los items.
- prioridad no reconocida -> no aplica filtro, devuelve vacio con motivo.
- items vacio -> filtrados vacio.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: prioridad alta con items mixtos -> filtrados: pendiente y bloqueado.
2. Caso borde: items vacio -> filtrados vacio.
3. Caso borde: prioridad baja -> filtrados igual a items original.