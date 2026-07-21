# Solución Ejercicio 054: Patrones de Diseño - Singleton

## Razonamiento del Problema

El desafío es implementar el patrón de diseño **Singleton**. Este patrón restringe la creación de objetos de una clase a una única instancia y proporciona un punto de acceso global a ella. En el contexto de nuestro food truck, es perfecto para modelar recursos que deben ser únicos y compartidos, como la caja registradora principal. No tendría sentido tener múltiples cajas registradoras independientes si todas deben reflejar el mismo total de dinero.

## Reglas y Conceptos Aplicados

1.  **Patrón Singleton**: Su objetivo es garantizar que solo exista un objeto de un tipo determinado y ofrecer un único punto de acceso a él.

2.  **Instancia Estática Privada (`static #instancia`)**: Se declara una propiedad estática y privada dentro de la clase. Esta variable guardará la única instancia que se creará. Al ser estática, pertenece a la clase, no a los objetos individuales.

3.  **Constructor Controlado**: El constructor se modifica para evitar que se puedan crear nuevas instancias libremente usando `new`. En esta implementación, si se intenta crear una segunda instancia, se lanza un error.

4.  **Método de Acceso Estático (`static getInstancia()`)**: Este es el único punto de entrada para obtener el objeto. La primera vez que se llama, crea la instancia y la guarda en la variable estática. En las llamadas posteriores, simplemente devuelve la instancia ya existente.

5.  **Propiedades Privadas (`#saldo`)**: Usamos la sintaxis de campos privados de JavaScript para encapsular el saldo, asegurando que solo pueda ser modificado a través de los métodos de la clase (como `agregarDinero`).

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutarlo:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-general/ejercicio-054/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida demostrará que ambas variables (`caja1` y `caja2`) apuntan al mismo objeto en memoria.

## Casos de Prueba

1.  **Prueba de Identidad**:
    *   Se obtienen dos "instancias" de la `CajaRegistradora` usando `getInstancia()`.
    *   Se comparan ambas variables con el operador de igualdad estricta (`===`).
    *   **Resultado Esperado**: La comparación debe devolver `true`, probando que ambas variables apuntan al mismo y único objeto.

2.  **Prueba de Estado Compartido**:
    *   Se utiliza una de las variables (`caja1`) para agregar dinero al saldo.
    *   Se utiliza la otra variable (`caja2`) para obtener el saldo actual.
    *   **Resultado Esperado**: El saldo obtenido a través de `caja2` debe reflejar el cambio hecho a través de `caja1`, confirmando que están operando sobre el mismo estado compartido.