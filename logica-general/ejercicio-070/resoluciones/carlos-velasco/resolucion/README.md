# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `instrucciones`, donde cada objeto tiene las propiedades `accion` y `destino`.
* **Proceso**: Iteración sobre cada instrucción para traducir el tipo de `accion` en una descripción textual legible, almacenando estos resultados en un arreglo de rutas y contando el total de elementos.
* **Salida**: Un objeto que contiene el arreglo `itinerario_final` con las descripciones generadas y un número `total_paradas`.

## Reglas identificadas

1. **Transporte Aéreo**: Si la acción es "volar", el destino debe describirse como "Viaje a [destino] por aire.".
2. **Transporte Terrestre**: Si la acción es "tren", el destino debe describirse como "Viaje a [destino] por tierra.".
3. **Actividades**: Cualquier otra acción diferente a las anteriores se clasifica genéricamente como "Actividad: [destino].".

## Pruebas

### Caso normal

* **Entrada**: `[{ accion: "volar", destino: "Paris" }, { accion: "tren", destino: "Berlin" }, { accion: "turismo", destino: "Museo" }]`
* **Resultado esperado**: `{ itinerario_final: ["Viaje a Paris por aire.", "Viaje a Berlin por tierra.", "Actividad: Museo."], total_paradas: 3 }`

### Caso borde

* **Entrada**: `[]`
* **Resultado esperado**: `{ itinerario_final: [], total_paradas: 0 }`

## Explicacion final

La solución es efectiva porque utiliza el método `.forEach()` para procesar cada elemento de forma independiente, lo cual garantiza que, aunque el arreglo esté vacío, el código no falle y simplemente retorne un itinerario vacío. La lógica condicional `if-else` permite una clasificación clara y sencilla de las acciones, asegurando que cada destino sea tratado correctamente según su naturaleza, mientras que la propiedad `.length` permite obtener el total de paradas de manera automática y precisa.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Regla 1**: `paso.accion === "volar"`
* **Regla 2**: `paso.accion === "tren"`
* **Regla 3**: `else` (para cualquier otro caso como turismo o actividades)