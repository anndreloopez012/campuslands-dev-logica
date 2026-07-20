# Entrega - ejercicio 003 (toma de decisiones)

Estudiante: Daniel Aguilar
Area: Logica general
Tematica: torneo de esports

## Como pense el problema

Para elegir entre opciones de torneo de esports hay que balancear valor contra riesgo: primero se descarta el riesgo alto si hay alternativa.

## Reglas que aplique

- Se descartan primero las opciones de riesgo alto, si existen alternativas de riesgo bajo o medio.
- Entre las opciones restantes se elige la de mayor valor.
- Si todas las opciones son de riesgo alto, se elige igualmente la de mayor valor.

## Como ejecutar o revisar mi solucion

La solucion esta escrita en pseudocodigo en el archivo `daniel-aguilar.md` de esta misma carpeta.
Para revisarla: leer la seccion 'Entrada', seguir el 'Pseudocodigo' paso a paso con esos datos,
y comparar el resultado manual contra la seccion 'Salida esperada'. Las dos pruebas incluidas
(caso normal y caso borde) permiten verificar el comportamiento sin depender de un lenguaje o runtime especifico.

## Que casos probe

- Caso normal: usando los datos de ejemplo definidos para este ejercicio (ver Prueba 1 en la solucion).
- Caso borde: un escenario limite propio de esta categoria (lista vacia, empate, division por cero, valor fuera de rango, etc. segun aplique) (ver Prueba 2 en la solucion).
