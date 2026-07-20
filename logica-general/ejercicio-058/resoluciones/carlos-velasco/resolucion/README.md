# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `operarios` (objetos con `nombre`, `experiencia` y `estaDisponible`) y un string `urgencia` ("Alta" o "Baja").
* **Proceso**: Filtrado de personal apto, ordenamiento dinámico basado en criterios de experiencia según la urgencia, y selección del candidato superior.
* **Salida**: Un objeto que indica el nombre del `operario` asignado y el `motivo` de la decisión (basado en su nivel de experiencia).

## Reglas identificadas

1. Solo se consideran para la asignación los operarios con la propiedad `estaDisponible` en `true`.
2. Si ningún operario está disponible, se debe retornar un mensaje indicando que no hay personal.
3. Si la urgencia es "Alta", se prioriza al operario con mayor experiencia; si es "Baja", al de menor experiencia.

## Pruebas

### Caso normal

* **Entrada**: `personal = [{nombre: "Ana", experiencia: 9, estaDisponible: true}, {nombre: "Luis", experiencia: 3, estaDisponible: true}], "Alta"`
* **Resultado esperado**: `{ operario: "Ana", motivo: "Asignado por criterio de urgencia Alta (Experiencia: 9)." }`

### Caso borde

* **Entrada**: `personal = [{nombre: "Ana", experiencia: 9, estaDisponible: false}], "Alta"`
* **Resultado esperado**: `{ operario: "Ninguno", motivo: "No hay personal disponible para el turno." }`

## Explicacion final

La solución funciona mediante una estrategia de dos pasos. Primero, aislamos los datos relevantes eliminando a los operarios que no pueden trabajar. Segundo, aprovechamos la flexibilidad del método `.sort()` para aplicar una lógica de ordenamiento condicional que se adapta instantáneamente al valor de la variable `urgencia`. Esto nos permite elegir siempre al candidato ideal para la situación específica sin necesidad de bloques de código repetitivos, garantizando que el sistema sea eficiente y fácil de escalar si se añadieran nuevos niveles de urgencia en el futuro.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (Urgencia Alta)**: Ana (exp 9) vs Luis (exp 3). Orden descendente $\rightarrow$ Ana (9) es la primera.
* **Ejemplo manual (Urgencia Baja)**: Ana (exp 9) vs Luis (exp 3). Orden ascendente $\rightarrow$ Luis (3) es el primero.