# Resolucion - Logica general 008

## Como pensé el problema
El objetivo es simular un flujo secuencial, no un resultado unico. Recorrí los items en orden y definí que accion corresponde a cada estado, ademas de una condicion de corte cuando aparece un bloqueado.

## Reglas aplicadas
- aprobado -> paso "avanzar".
- pendiente -> paso "esperar".
- bloqueado -> paso "detener flujo" + paso extra "flujo detenido", corta el recorrido.
- estado no reconocido -> paso "omitir".
- items vacio -> pasos vacio.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: aprobado, pendiente, bloqueado -> avanza, espera, se detiene en el bloqueado.
2. Caso borde: items vacio -> pasos vacio.
3. Caso borde: solo aprobados -> avanza en cada paso, nunca se detiene.