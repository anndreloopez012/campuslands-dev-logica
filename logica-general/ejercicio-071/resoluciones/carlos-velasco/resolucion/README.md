# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `peleadores`, donde cada objeto contiene un `nombre` (string) y un número de `peleas` (number).
* **Proceso**: Inicialización de un objeto contenedor y categorización de cada peleador mediante un bucle `forEach` basado en rangos de experiencia predefinidos.
* **Salida**: Un objeto que agrupa los nombres de los peleadores en tres arreglos independientes: `profesional`, `amateur` y `novato`.

## Reglas identificadas

1. **Profesional**: Peleadores que cuentan con 20 o más peleas registradas.
2. **Amateur**: Peleadores que cuentan con un rango de 5 a 19 peleas.
3. **Novato**: Peleadores que cuentan con menos de 5 peleas.

## Pruebas

### Caso normal

* **Entrada**: `[{ nombre: "Alex", peleas: 25 }, { nombre: "Beto", peleas: 10 }, { nombre: "Carlos", peleas: 2 }]`
* **Resultado esperado**: `{ profesional: ["Alex"], amateur: ["Beto"], novato: ["Carlos"] }`

### Caso borde

* **Entrada**: `[]`
* **Resultado esperado**: `{ profesional: [], amateur: [], novato: [] }`

## Explicacion final

La solución funciona mediante una estrategia de clasificación en un solo paso (tiempo de ejecución lineal $O(n)$). Al iterar sobre la lista original, el código evalúa secuencialmente los criterios de experiencia. La utilización de un objeto contenedor pre-inicializado con arreglos vacíos es clave, ya que permite que la función siempre devuelva una estructura consistente y predecible, independientemente de si la lista de entrada está llena, parcialmente clasificada o vacía.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Profesional**: `p.peleas >= 20`
* **Amateur**: `p.peleas >= 5`
* **Novato**: `else` (implícitamente `p.peleas < 5`)