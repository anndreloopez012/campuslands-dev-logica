# Entrega - ejercicio 012 (comparacion de opciones)

Estudiante: Daniel Aguilar
Area: Logica general
Tematica: pingpong

## Como pense el problema

Comparar dos elementos de pingpong exige combinar varios criterios (precio, calidad, tiempo) en un solo puntaje objetivo, y definir un criterio de desempate.

## Reglas que aplique

- El puntaje de cada opcion se calcula como: calidad*2 - precio/50 - tiempo*0.5.
- Gana la opcion con mayor puntaje.
- En caso de empate exacto, gana la opcion A (primer criterio de desempate por orden de entrada).

## Como ejecutar o revisar mi solucion

La solucion esta escrita en pseudocodigo en el archivo `daniel-aguilar.md` de esta misma carpeta.
Para revisarla: leer la seccion 'Entrada', seguir el 'Pseudocodigo' paso a paso con esos datos,
y comparar el resultado manual contra la seccion 'Salida esperada'. Las dos pruebas incluidas
(caso normal y caso borde) permiten verificar el comportamiento sin depender de un lenguaje o runtime especifico.

## Que casos probe

- Caso normal: usando los datos de ejemplo definidos para este ejercicio (ver Prueba 1 en la solucion).
- Caso borde: un escenario limite propio de esta categoria (lista vacia, empate, division por cero, valor fuera de rango, etc. segun aplique) (ver Prueba 2 en la solucion).
