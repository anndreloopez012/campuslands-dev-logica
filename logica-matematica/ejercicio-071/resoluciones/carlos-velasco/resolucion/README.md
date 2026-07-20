# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `participantes` que contiene los nombres o identificadores de los peleadores.
* **Proceso**: Cálculo del número de elementos ($n$) del arreglo y aplicación de la fórmula combinatoria $\frac{n(n - 1)}{2}$ para determinar enfrentamientos únicos.
* **Salida**: Un objeto que muestra el total de participantes, la cantidad de enfrentamientos posibles y una explicación del cálculo realizado.

## Reglas identificadas

1. **Requisito Mínimo**: Se requieren al menos 2 peleadores para poder generar cualquier enfrentamiento.
2. **Unicidad**: Cada pareja de peleadores debe enfrentarse exactamente una vez (no se cuenta el enfrentamiento de A contra B dos veces).
3. **Optimización**: El cálculo debe realizarse mediante fórmula matemática directa y no mediante bucles para asegurar una complejidad $O(1)$.

## Pruebas

### Caso normal

* **Entrada**: `["A", "B", "C", "D"]`
* **Resultado esperado**: `{ participantes_totales: 4, posibles_enfrentamientos: 6, explicacion: "Con 4 peleadores, cada uno puede enfrentarse contra todos los demás una sola vez." }`

### Caso borde

* **Entrada**: `["A"]`
* **Resultado esperado**: `{ posibles: 0, explicacion: "Se requieren al menos 2 peleadores." }`

## Explicacion final

La solución funciona porque utiliza la fórmula fundamental de combinaciones para pares ($n$ elegidos en grupos de 2). Al evaluar la longitud del arreglo `participantes.length`, obtenemos el valor $n$ necesario para la fórmula. Este enfoque es altamente eficiente porque evita la carga computacional de generar todas las parejas físicamente, devolviendo solo el resultado numérico necesario para organizar el torneo.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo (4 peleadores)**: $(4 \times 3) / 2 = 12 / 2 = 6$.
* **Ejemplo (3 peleadores)**: $(3 \times 2) / 2 = 6 / 2 = 3$.
* **Ejemplo (2 peleadores)**: $(2 \times 1) / 2 = 2 / 2 = 1$.