# Resolucion - Logica general 002

## Como pensé el problema
Identifiqué que el objetivo es validar datos, no clasificarlos.
Definí tres campos de entrada (items, prioridad, regla) y para cada uno una condicion de validez.

## Reglas aplicadas
- items debe ser arreglo no vacio, con valores dentro de: aprobado, pendiente, bloqueado.
- prioridad debe ser: alta, media o baja.
- regla debe ser texto no vacio.
- Si alguna condicion falla, se acumula en la lista de errores.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: items validos, prioridad "alta", regla con texto → valido: true.
2. Caso borde: items vacio y regla vacia → valido: false, dos errores.
3. Caso borde: item y prioridad invalidos → valido: false, dos errores.