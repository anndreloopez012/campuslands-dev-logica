# Solución del Ejercicio 17: Área de un Polígono

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo es calcular el área de un polígono irregular a partir de una lista de sus vértices, dados como coordenadas `(x, y)`.

Para abordar este problema, investigué métodos de geometría computacional y encontré la **Fórmula de la Lazada (Shoelace Formula)**, también conocida como Fórmula del Área de Gauss. Este algoritmo es ideal porque es eficiente y funciona para cualquier polígono simple (que no se cruza a sí mismo) sin importar si es cóncavo o convexo.

La fórmula se basa en sumar los productos cruzados de las coordenadas de los vértices en un orden secuencial. La fórmula es:

`Área = 0.5 * | (x₁y₂ + x₂y₃ + ... + xₙy₁) - (y₁x₂ + y₂x₃ + ... + yₙx₁) |`

## 2. Diseño de la Solución

Decidí estructurar el código en dos partes principales para mantenerlo limpio y fácil de entender:

1.  **Función `calcularAreaPoligono(vertices)`**:
    *   Esta es la función principal que contiene la lógica matemática.
    *   Primero, valida que el polígono tenga al menos 3 vértices, ya que es el mínimo para formar una figura cerrada. Si no los tiene, devuelve `null` para indicar que el cálculo no es posible.
    *   Implementa la fórmula de la lazada iterando sobre los vértices. Para asegurar que el polígono se "cierre", el último vértice se conecta con el primero usando el operador módulo (`%`).
    *   A diferencia de devolver un texto, la función retorna el **valor numérico** del área. Esto es una mejor práctica porque permite que el resultado pueda ser reutilizado en otros cálculos si fuera necesario.

2.  **Bloque de Pruebas**:
    *   Para verificar que la función es correcta, creé un conjunto de casos de prueba.
    *   **Prueba 1**: Un cuadrado simple, donde el área es fácil de calcular a mano (10x10 = 100).
    *   **Prueba 2**: Un polígono irregular para asegurar que el algoritmo funciona con formas más complejas.
    *   **Prueba 3**: Un caso inválido (una línea con solo dos vértices) para confirmar que la validación de entrada funciona como se espera.

## 3. Ejecución

Para ver los resultados de las pruebas, puedes ejecutar el script directamente con Node.js. El propio archivo se encarga de imprimir los resultados en la consola.

```bash
node logica-matematica/ejercicio-017/resoluciones/evelyn-barrios/evelyn-barrios.js
```