# Campuslands Dev Logica
# Solución Ejercicio 31: Gestión de Inventario
# Solución Ejercicio 34: Aplanador de Arrays Anidados

Repositorio publico de ejercicios de logica matematica y logica general para estudiantes de Campuslands.
## 1. Análisis del Problema

## Proposito educativo
El objetivo es desarrollar una función que actualice las cantidades de un inventario de productos después de procesar una lista de ventas. La función debe ser robusta y manejar casos donde se intenta vender un producto que no existe en el inventario.
El reto consiste en crear una función que reciba un array que puede contener elementos y otros arrays (anidados a cualquier profundidad), y devuelva un nuevo array "plano" que contenga todos los elementos en un solo nivel.

Practicar pensamiento logico, analisis de problemas, lectura de instrucciones, validacion de datos y resolucion ordenada antes de avanzar a proyectos mas grandes.
**Entradas:**
*   `inventario`: Un array de objetos, donde cada objeto representa un producto con `id`, `nombre` y `cantidad`.
*   `ventas`: Un array de objetos, donde cada objeto representa una venta con `id` del producto y `cantidad` vendida.
**Entrada:**
*   `arrayAnidado`: Un array con elementos de distintos tipos, incluyendo otros arrays.

## Ramas principales
**Salida:**
*   Un nuevo array de objetos que representa el inventario actualizado.
*   Un nuevo array de una sola dimensión con todos los elementos del array original.

- `main`: produccion. No recibe entregas estudiantiles.
- `dev`: integracion. Todos los Pull Requests de estudiantes deben apuntar aqui.
## 2. Diseño de la Solución

## Areas incluidas
Para resolver este problema, la función `actualizarInventario` seguirá estos pasos:
Una solución moderna y concisa en JavaScript aprovecha métodos integrados del lenguaje. La función `aplanarArray` usará el método `flat()` de los arrays.

- [Logica Matematica](./logica-matematica): 100 ejercicios.
- [Logica General](./logica-general): 100 ejercicios.
- [Logic Arena](./practica-logica): plataforma interactiva con pruebas aleatorias por nivel.
1.  **Clonación del Inventario**: Para no modificar el inventario original (principio de inmutabilidad), primero se crea una copia profunda del array de inventario.
2.  **Iteración sobre las Ventas**: Se recorre cada venta de la lista de `ventas`.
3.  **Búsqueda del Producto**: Por cada venta, se busca el producto correspondiente en la copia del inventario usando su `id`.
4.  **Actualización de Cantidad**:
    *   Si se encuentra el producto, se resta la cantidad vendida de la cantidad en stock.
    *   Se asegura que el stock no sea negativo. Si una venta excede el stock, se ajusta el stock a 0 y se podría registrar una advertencia (aunque en esta solución simplemente se previene un stock negativo).
5.  **Retorno del Inventario Actualizado**: La función devuelve la copia del inventario con las cantidades actualizadas.
1.  **Uso de `Array.prototype.flat()`**: Este método es la herramienta perfecta para este trabajo. Crea un nuevo array con todos los elementos de sub-arrays concatenados recursivamente hasta una profundidad especificada.
2.  **Profundidad Infinita**: Para asegurarse de que se aplanen todos los niveles de anidación, sin importar cuán profundos sean, se puede pasar `Infinity` como argumento al método `flat()`.
3.  **Retorno del Resultado**: La función simplemente invoca `arrayAnidado.flat(Infinity)` y devuelve su resultado.

## Practica interactiva
Este enfoque es eficiente porque procesa cada venta de forma secuencial y actualiza el estado del inventario en un único ciclo.
Este enfoque es preferible a una implementación manual con recursividad porque es más legible, menos propenso a errores y aprovecha una optimización nativa del motor de JavaScript.

Logic Arena es una landing web para practicar logica de forma dinamica:
## 3. Código de la Solución

- 5 niveles: facil, intermedio, dificil, experto y ultra experto.
- 300 variantes base de preguntas.
- Pruebas aleatorias de 10 a 15 preguntas.
- Tiempo ajustado por dificultad.
- Resultado final con respuestas correctas, incorrectas, puntaje y explicacion.
- Exportacion de resultado en Markdown y JSON para subirlo al repo.
```javascript
function actualizarInventario(inventario, ventas) {
    // 1. Clonar el inventario para no mutar el original.
    const inventarioActualizado = JSON.parse(JSON.stringify(inventario));

URL esperada con GitHub Pages:
    // 2. Iterar sobre cada venta.
    for (const venta of ventas) {
        // 3. Buscar el producto en el inventario actualizado.
        const producto = inventarioActualizado.find(p => p.id === venta.id);

```text
https://anndreloopez012.github.io/campuslands-dev-logica/practica-logica/
        // 4. Si el producto existe, actualizar la cantidad.
        if (producto) {
            producto.cantidad -= venta.cantidad;
            // Opcional: Asegurarse de que el stock no sea negativo.
            if (producto.cantidad < 0) {
                producto.cantidad = 0;
            }
        }
function aplanarArray(arrayAnidado) {
    // El método flat(Infinity) aplana recursivamente todos los niveles.
    if (Array.isArray(arrayAnidado)) {
        return arrayAnidado.flat(Infinity);
    }
    return inventarioActualizado;
    return []; // O manejar el error como se prefiera.
}
```

Los resultados de la plataforma deben guardarse en:
## 4. Pruebas Implementadas

```text
resultados/usuario-github/
```

## Flujo rapido

```bash
git clone https://github.com/anndreloopez012/campuslands-dev-logica.git
cd campuslands-dev-logica
git switch dev
git pull origin dev
git switch -c alumno/nombre-apellido/ejercicio-001
```

Entrega solo dentro de `resoluciones/nombre-apellido/` y abre PR hacia `dev`.
*   **Caso Normal**: Se prueba con ventas que tienen correspondencia en el inventario y no exceden el stock.
*   **Caso Borde**: Se incluye una venta de un producto cuyo stock queda en 0 y una venta de un producto que no existe en el inventario para verificar que el sistema no falle.
*   **Caso Normal**: `aplanarArray([1, [2, 3], [4, [5]]])` -> `[1, 2, 3, 4, 5]`.
*   **Caso Borde**: Un array ya plano `[1, 2, 3]` debe devolverse sin cambios. Un array vacío `[]` debe devolver un array vacío. Un array con elementos mixtos y anidación profunda `[1, ['dos', 3], [true, [null, [0]]]` -> `[1, 'dos', 3, true, null, 0]`.
