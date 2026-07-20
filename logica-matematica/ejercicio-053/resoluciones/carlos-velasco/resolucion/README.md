# Plantilla de solucion

## Analisis

* **Entrada**: Dos puntos `p` (posición de aterrizaje) y `z` (punto objetivo), cada uno con coordenadas `{x, y}`, además de un `margen` numérico.
* **Proceso**: Cálculo de la distancia euclidiana entre ambos puntos y clasificación del aterrizaje basándose en el margen de error proporcionado.
* **Salida**: Un objeto que contiene la `distancia` calculada, la `clasificacion` asignada y una `explicacion` textual.

## Reglas identificadas

1. La distancia entre dos puntos en un plano 2D se calcula mediante la fórmula: $d = \sqrt{(z_x - p_x)^2 + (z_y - p_y)^2}$.
2. Clasificación "Precisión Perfecta": distancia menor o igual al margen establecido.
3. Clasificación "Zona Segura": distancia mayor al margen pero menor o igual al triple del margen; caso contrario, "Fuera de Zona".

## Pruebas

### Caso normal

* **Entrada**: `p: {x: 1, y: 1}, z: {x: 2, y: 2}, margen: 2`
* **Resultado esperado**: `{ distancia: "1.41", clasificacion: "Precisión Perfecta", ... }`

### Caso borde

* **Entrada**: `p: {x: 10, y: 10}, z: {x: 0, y: 0}, margen: 2`
* **Resultado esperado**: `{ distancia: "14.14", clasificacion: "Fuera de Zona", ... }`

## Explicacion final

La solución funciona mediante la aplicación directa de la geometría analítica. Al utilizar el teorema de Pitágoras, la función determina con precisión la separación lineal entre el punto de impacto y el objetivo. Los condicionales simples permiten segmentar este resultado en categorías de desempeño significativas, garantizando que el sistema evalúe correctamente tanto los aterrizajes exitosos como los que exceden el margen de tolerancia.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (p: {1, 1}, z: {2, 2})**:
* Diferencias: $(2-1) = 1, (2-1) = 1$.
* Cuadrados: $1^2 = 1, 1^2 = 1$.
* Suma y raíz: $\sqrt{1+1} = \sqrt{2} \approx 1.41$.
* Clasificación: $1.41 \le 2$ (margen), por tanto es "Precisión Perfecta".