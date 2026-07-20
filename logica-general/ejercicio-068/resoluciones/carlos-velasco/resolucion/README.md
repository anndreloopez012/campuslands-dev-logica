# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `pelicula` que contiene propiedades como `titulo` (string), `esCine` (booleano), `duracion` (número) y `tematica` (string).
* **Proceso**: Construcción dinámica de un arreglo de pasos basado en el cumplimiento de condiciones específicas para cada propiedad del objeto.
* **Salida**: Un objeto que muestra el nombre de la película y el listado de pasos (`flujo`) generados para la experiencia.

## Reglas identificadas

1. **Ubicación**: Si `esCine` es `true`, el paso inicial es "Entrada al cine"; de lo contrario, "Selección en plataforma".
2. **Snacks**: Si la `duracion` supera los 120 minutos, se debe agregar "Preparación de snacks extra" al flujo.
3. **Modo de Visión**: Si la `tematica` es "viajes en el tiempo", se activa "modo análisis lógico"; si no, se activa "modo inmersión".

## Pruebas

### Caso normal

* **Entrada**: `{ titulo: "Interstellar", esCine: true, duracion: 169, tematica: "viajes en el tiempo" }`
* **Resultado esperado**: `{ pelicula: "Interstellar", pasos: ["Entrada al cine", "Preparación de snacks extra", "Activación modo análisis lógico", "Inicio de reproducción"] }`

### Caso borde

* **Entrada**: `{ titulo: "Arrival", esCine: false, duracion: 116, tematica: "primer contacto" }`
* **Resultado esperado**: `{ pelicula: "Arrival", pasos: ["Selección en plataforma", "Activación modo inmersión", "Inicio de reproducción"] }`

## Explicacion final

La solución funciona mediante una lógica secuencial de construcción de arreglos. Al utilizar una serie de instrucciones `if-else` independientes, el sistema es capaz de ensamblar un itinerario personalizado que no depende de un orden rígido, permitiendo que cada película reciba una configuración de pasos única. El paso final de "Inicio de reproducción" se añade siempre al final, garantizando que el flujo termine correctamente independientemente de las condiciones previas.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Ubicación**: `pelicula.esCine ? "Entrada al cine" : "Selección en plataforma"`
* **Snacks**: `pelicula.duracion > 120`
* **Modo**: `pelicula.tematica === "viajes en el tiempo" ? "Activación modo análisis lógico" : "Activación modo inmersión"`