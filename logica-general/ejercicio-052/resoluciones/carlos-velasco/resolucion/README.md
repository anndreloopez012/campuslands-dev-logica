# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `paletas` (con `modelo`, `control`, `velocidad`, `peso`) y un string `estilo` ("ofensivo" o "defensivo").
* **Proceso**: Selección de la métrica principal según el estilo, reducción del catálogo para encontrar el máximo valor en dicha métrica y desempate basado en el menor peso.
* **Salida**: Un objeto que indica la paleta `recomendada` (modelo) y la `razon` de su selección.

## Reglas identificadas

1. Si el estilo es "defensivo", la métrica principal es `control`; si es "ofensivo", es `velocidad`.
2. La paleta seleccionada debe poseer el mayor valor posible en la métrica principal elegida.
3. Ante un empate en la métrica principal, se debe seleccionar obligatoriamente la paleta que tenga el `peso` más bajo.

## Pruebas

### Caso normal

* **Entrada**: `catalogo, "ofensivo"`
* **Resultado esperado**: `{ recomendada: "LightAttack", razon: "Seleccionada por tener el mejor velocidad y peso óptimo." }`

### Caso borde

* **Entrada**: `[], "ofensivo"`
* **Resultado esperado**: `{ recomendada: null, razon: "No hay paletas disponibles." }`

## Explicacion final

La solución funciona aprovechando el método `.reduce()` para evaluar el catálogo de forma iterativa y eficiente. Al definir la métrica dinámicamente mediante un operador ternario, el código se vuelve altamente reutilizable para distintos estilos de juego. Además, la lógica de desempate asegura que la recomendación no solo sea técnicamente superior, sino también la opción más ergonómica (menor peso), cumpliendo con los requisitos de optimización del sistema.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Selección de métrica**: `const metrica = estilo === "defensivo" ? "control" : "velocidad";`
* **Evaluación de mejor opción**: `if (actual[metrica] > mejor[metrica])`
* **Condición de desempate**: `if (actual[metrica] === mejor[metrica]) { return actual.peso < mejor.peso ? actual : mejor; }`