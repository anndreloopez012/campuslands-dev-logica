# Solución Ejercicio 044: Manejo de Asincronía - Pedidos de Food Truck

## Razonamiento del Problema

El desafío es simular el proceso de preparación de un pedido en un food truck. Esta es una operación asíncrona: toma tiempo y no debe detener el resto del programa (por ejemplo, la capacidad de tomar otros pedidos).

Utilizaremos `Promises` y la sintaxis `async/await` de JavaScript para manejar esta operación de una manera limpia y legible.

## Reglas y Conceptos Aplicados

1.  **Promise**: Se crea una función `prepararPedido` que devuelve una `Promise`. Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona.
    *   **`resolve`**: Si la preparación es exitosa, la promesa se "resuelve" y devuelve un valor (un mensaje de éxito).
    *   **`reject`**: Si algo sale mal (por ejemplo, el producto no está en el menú), la promesa se "rechaza" y devuelve un error.

2.  **`setTimeout`**: Se usa para simular que la preparación del pedido toma una cantidad de tiempo específica sin bloquear el hilo principal de ejecución de JavaScript.

3.  **`async/await`**:
    *   **`async`**: La palabra clave `async` se usa para declarar una función que maneja operaciones asíncronas. Permite el uso de `await` dentro de ella.
    *   **`await`**: La palabra clave `await` pausa la ejecución de la función `async` hasta que la `Promise` se resuelva o se rechace. Esto permite escribir código asíncrono que se lee de manera secuencial, como si fuera síncrono.

4.  **`try...catch`**: Se utiliza dentro de la función `async` para manejar los resultados.
    *   El bloque `try` contiene el código que podría generar un éxito (el `await` de la promesa).
    *   El bloque `catch` captura cualquier error que ocurra si la promesa es rechazada.

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutar la simulación:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-matematica/ejercicio-044/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará el flujo de la simulación, respetando los tiempos de espera de cada pedido.

## Casos de Prueba (Simulación)

La función `simularJornada` ejecuta los casos de prueba en secuencia:

1.  **Prueba 1 (Pedido Exitoso)**:
    *   Entrada: Un pedido de "hamburguesas" con un tiempo de 3 segundos.
    *   Resultado Esperado: El programa imprime que el pedido fue recibido, luego que se está preparando, y después de 3 segundos, imprime que está listo.

2.  **Prueba 2 (Pedido Fallido)**:
    *   Entrada: Un pedido de "sushi", que no está en el menú.
    *   Resultado Esperado: El programa imprime que el pedido fue recibido, pero inmediatamente la promesa se rechaza y el bloque `catch` captura e imprime un mensaje de error.