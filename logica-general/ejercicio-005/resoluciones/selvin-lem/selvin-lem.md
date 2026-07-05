# Resolucion - Logica general 005

## Como pensé el problema
El objetivo es ordenar la lista completa, no elegir un item ni filtrar. Asigné un peso de riesgo a cada estado y ordené de menor a mayor peso. Definí el criterio de empate: conservar el orden original.

## Reglas aplicadas
- bloqueado tiene el peso mas bajo (mayor prioridad).
- pendiente tiene peso intermedio.
- aprobado tiene el peso mas alto (menor prioridad).
- items con estado desconocido se envian al final.
- en caso de empate, se conserva el orden original de aparicion.
- items vacio -> ordenados vacio.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: ["aprobado", "pendiente", "bloqueado"] -> ["bloqueado", "pendiente", "aprobado"].
2. Caso borde: items vacio -> ordenados vacio.
3. Caso borde con empate: dos pendientes y dos bloqueados -> se ordenan por riesgo y se conserva el orden original entre iguales.