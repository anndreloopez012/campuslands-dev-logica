# Resolucion - Logica general 009

## Como pensé el problema
El objetivo es simular cambios de estado, no procesar pasos ni buscar un item. Definí una maquina de estados: solo "pendiente" puede transicionar, y hacia donde transiciona depende de la prioridad. Los demas estados son finales.

## Reglas aplicadas
- pendiente + prioridad alta -> transiciona a bloqueado.
- pendiente + prioridad no alta -> transiciona a aprobado.
- bloqueado -> estado final, no cambia.
- aprobado -> estado final, no cambia.
- items vacio -> sin transiciones.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: pendiente con prioridad alta -> transiciona a bloqueado.
2. Caso borde: items vacio -> sin transiciones.
3. Caso borde: pendientes con prioridad baja -> todos transicionan a aprobado.