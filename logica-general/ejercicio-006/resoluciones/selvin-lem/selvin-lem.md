# Resolucion - Logica general 006

## Como pensé el problema
El objetivo es buscar un elemento especifico y su posicion, no ordenar ni filtrar toda la lista. Definí que la prioridad decide que estado se busca primero: bloqueado con prioridad alta, luego pendiente como respaldo.

## Reglas aplicadas
- prioridad alta -> busca primero "bloqueado" y retorna su indice.
- si no hay bloqueado o la prioridad no es alta -> busca "pendiente".
- si no hay bloqueado ni pendiente -> encontrado null, indice -1.
- items vacio -> encontrado null, indice -1, motivo especifico.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: prioridad alta con bloqueado presente -> encontrado bloqueado en su indice.
2. Caso borde: items vacio -> encontrado null.
3. Caso borde: solo items aprobados -> encontrado null, ningun item critico.