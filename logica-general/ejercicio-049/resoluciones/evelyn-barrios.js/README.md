# Solución Ejercicio 049: Manejo de Errores Avanzado

## Razonamiento del Problema

El desafío es mejorar el manejo de errores en nuestra aplicación. En lugar de tratar todos los errores de la misma manera, crearemos **errores personalizados** para diferenciar entre distintos tipos de problemas (como falta de stock vs. un método de pago inválido). Esto permite que la aplicación ofrezca respuestas más específicas y útiles al usuario.

## Reglas y Conceptos Aplicados

1.  **Errores Personalizados (`Custom Errors`)**: Se crean clases que heredan de la clase base `Error` de JavaScript. Esto nos permite definir nuevos tipos de errores con nombres específicos, como `InventarioError` y `PagoError`.

    ```javascript
    class InventarioError extends Error {
      constructor(message) {
        super(message);
        this.name = 'InventarioError';
      }
    }
    ```

2.  **`throw`**: Se utiliza para "lanzar" una instancia de nuestro error personalizado cuando una condición de falla se cumple. Esto detiene la ejecución normal de la función y pasa el control al bloque `catch` más cercano.

3.  **`try...catch`**: El bloque `try` envuelve el código que podría fallar. El bloque `catch` recibe el objeto de error si se lanza uno.

4.  **`instanceof`**: Dentro del bloque `catch`, usamos el operador `instanceof` para verificar de qué tipo es el error que recibimos. Esto nos permite ejecutar una lógica diferente para cada tipo de error.

    ```javascript
    catch (error) {
      if (error instanceof InventarioError) {
        // Lógica para errores de inventario
      } else if (error instanceof PagoError) {
        // Lógica para errores de pago
      }
    }
    ```

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutarlo:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-general/ejercicio-049/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará el resultado de tres intentos de compra: uno exitoso y dos fallidos, cada uno con su mensaje de error específico.

## Casos de Prueba

1.  **Prueba 1 (Venta Exitosa)**: Una compra válida que se procesa correctamente.
2.  **Prueba 2 (Error de Inventario)**: Se intenta comprar más productos de los que hay en stock. El sistema debe lanzar un `InventarioError` y mostrar un mensaje específico.
3.  **Prueba 3 (Error de Pago)**: Se intenta pagar con un método no aceptado. El sistema debe lanzar un `PagoError` y mostrar un mensaje diferente al del error de inventario.