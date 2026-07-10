# Entrega - ejercicio 001 (clasificacion por reglas)

Estudiante: Daniel Aguilar
Area: Logica general
Tematica: videojuegos competitivos

## Como pense el problema

El problema pide clasificar elementos de videojuegos competitivos segun su estado. Lo primero es identificar que estado tiene mayor riesgo (bloqueado), y priorizar sobre ese antes que sobre pendientes o aprobados.

## Reglas que aplique

- Si existe al menos un elemento en estado 'bloqueado', se elige el de mayor prioridad para revisar primero.
- Si no hay bloqueados pero hay 'pendiente', se continua con el primer pendiente de la lista.
- Si todos los elementos estan en 'aprobado', se cierra el ciclo.

## Como ejecutar o revisar mi solucion

La solucion esta escrita en pseudocodigo en el archivo `daniel-aguilar.md` de esta misma carpeta.
Para revisarla: leer la seccion 'Entrada', seguir el 'Pseudocodigo' paso a paso con esos datos,
y comparar el resultado manual contra la seccion 'Salida esperada'. Las dos pruebas incluidas
(caso normal y caso borde) permiten verificar el comportamiento sin depender de un lenguaje o runtime especifico.

## Que casos probe

- Caso normal: usando los datos de ejemplo definidos para este ejercicio (ver Prueba 1 en la solucion).
- Caso borde: un escenario limite propio de esta categoria (lista vacia, empate, division por cero, valor fuera de rango, etc. segun aplique) (ver Prueba 2 en la solucion).
