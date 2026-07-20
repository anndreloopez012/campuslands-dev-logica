# Plantilla de solucion

## Analisis

* **Entrada**: Un string `evento` que describe el suceso ocurrido en el entorno del personaje.
* **Proceso**: Evaluación del evento mediante una estructura `switch` para determinar el estado emocional y la acción correspondiente, seguido de una evaluación de riesgo mediante un operador ternario.
* **Salida**: Un objeto que contiene el `estado_actual`, la `accion_sugerida` y el nivel de `riesgo` (alto o bajo).

## Reglas identificadas

1. **Mapeo de Estados**: Cada evento tiene una respuesta emocional y una acción única predefinida.
2. **Estado por Defecto**: Ante cualquier evento no reconocido, el personaje permanece "calmado".
3. **Criterio de Riesgo**: El nivel de `riesgo` es "alto" solo si el estado resultante es "panico"; en cualquier otro escenario, el riesgo es "bajo".

## Pruebas

### Caso normal

* **Entrada**: `"ruido_en_sotano"`
* **Resultado esperado**: `{ estado_actual: "alerta", accion_sugerida: "investigar con linterna", riesgo: "bajo" }`

### Caso borde

* **Entrada**: `"grito_lejano"`
* **Resultado esperado**: `{ estado_actual: "panico", accion_sugerida: "esconderse en armario", riesgo: "alto" }`

## Explicacion final

Esta solución funciona porque utiliza una estructura de control de flujo robusta (`switch`) que permite una clara separación entre los diferentes eventos de entrada. Esto evita la anidación excesiva de condicionales y mejora la legibilidad. Al calcular el `riesgo` en la etapa final de retorno, se centraliza la lógica de evaluación del entorno, permitiendo que la respuesta del sistema sea consistente y fácil de actualizar ante la adición de nuevos eventos en el futuro.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Selección de caso**: `switch(evento)`
* **Evaluación de riesgo**: `estado === "panico" ? "alto" : "bajo"`
* **Validación de desconocidos**: `default: ... (estado "calmado")`