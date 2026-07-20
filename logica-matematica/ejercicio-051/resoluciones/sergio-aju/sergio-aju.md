# Analizador de Combinatoria de Kickboxing

Este programa calcula el número de enfrentamientos posibles entre un grupo de peleadores y clasifica la calidad del evento basándose en sus niveles y condiciones de peso.

## Cómo ejecutar
1. Asegúrate de tener Node.js instalado.
2. Copia el código en un archivo `nombre-apellido.js`.
3. Ejecuta `node nombre-apellido.js` en tu terminal.

## Reglas
- Se aplica la fórmula $\frac{n(n-1)}{2}$ para parejas únicas.
- El puntaje define la categoría: >50 (Elite), 20-50 (Competitivo), <20 (Principiante).

## Explicación final
La solución separa el cálculo matemático (combinaciones) del cálculo de rendimiento (puntaje). Se utiliza `reduce` para sumar los niveles de forma eficiente, asegurando que si la lista está vacía, el sistema maneje el caso borde correctamente devolviendo 0 combinaciones y el resultado del bono/penalización.