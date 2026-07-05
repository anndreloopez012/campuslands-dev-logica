# Resolucion - Logica general 007

## Como pensé el problema
El objetivo es detectar contradicciones o datos invalidos, no buscar ni ordenar elementos. Definí tres tipos de inconsistencia: estados no validos, duplicados, y prioridad alta sin riesgo real que la respalde.

## Reglas aplicadas
- item con estado fuera de aprobado/pendiente/bloqueado -> inconsistencia.
- item duplicado en la lista -> inconsistencia.
- prioridad "alta" sin bloqueado ni pendiente presentes -> inconsistencia (contradice la regla).
- items vacio -> inconsistencia directa, no se evalua nada mas.

## Como ejecutar
node nombre-apellido.js

## Casos probados
1. Caso normal: items validos, prioridad alta con riesgo real -> sin inconsistencias.
2. Caso borde: items vacio -> inconsistencia por falta de datos.
3. Caso borde: duplicado y prioridad alta sin riesgo -> dos inconsistencias detectadas.