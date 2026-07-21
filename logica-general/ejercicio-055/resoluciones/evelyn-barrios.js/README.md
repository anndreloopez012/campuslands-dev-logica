# Solución Ejercicio 055: Patrones de Diseño - Factory

## Razonamiento del Problema

El desafío es implementar el patrón de diseño **Factory (Fábrica)**. Este patrón proporciona una interfaz para crear objetos en una superclase, pero permite que las subclases alteren el tipo de objetos que se crearán. En su forma más simple (Simple Factory), centraliza la lógica de creación de objetos en un solo lugar.

En el contexto de nuestro food truck, queremos enviar diferentes tipos de notificaciones (SMS, Email, Push) a los clientes. En lugar de que el código principal tenga que saber cómo crear cada tipo de notificación (`new NotificacionSMS(...)`, `new NotificacionEmail(...)`), delegamos esa responsabilidad a una "fábrica".

## Reglas y Conceptos Aplicados

1.  **Patrón Factory**: Su objetivo es encapsular la lógica de creación de objetos. El código "cliente" solo necesita pedir a la fábrica un objeto de un tipo determinado, sin preocuparse por los detalles de su instanciación.

2.  **Producto (Interfaz/Clase Base)**: Se define una clase base `Notificacion` que establece un contrato común para todos los objetos que la fábrica puede crear. Todos deben tener un método `enviar()`.

3.  **Productos Concretos**: Son las clases específicas que heredan de la clase base, como `NotificacionSMS`, `NotificacionEmail` y `NotificacionPush`. Cada una implementa el método `enviar()` con su propia lógica.

4.  **La Fábrica (`NotificacionFactory`)**: Es una clase (o a veces solo una función) que contiene un método estático (ej. `crearNotificacion`). Este método recibe un parámetro (`tipo`) y, basándose en él, utiliza una estructura condicional (`if/else` o `switch`) para decidir qué clase concreta instanciar y devolver.

5.  **Desacoplamiento**: La principal ventaja es que el código que utiliza las notificaciones no está "acoplado" a las clases concretas. Si en el futuro queremos añadir un nuevo tipo de notificación (ej. `NotificacionWhatsapp`), solo necesitamos crear la nueva clase y modificar la fábrica. El resto del código de la aplicación no necesita cambiar.

## Cómo Ejecutar la Solución

El código está implementado en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutarlo:

1.  Abre una terminal.
2.  Navega a la carpeta: `logica-general/ejercicio-055/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script con Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida mostrará los mensajes de envío de cada tipo de notificación, demostrando que la fábrica creó los objetos correctos.

## Casos de Prueba

El caso de prueba principal demuestra el uso de la fábrica para crear un conjunto de notificaciones diferentes:

1.  **Creación de SMS**:
    *   Se llama a `NotificacionFactory.crearNotificacion('sms', ...)`
    *   **Resultado Esperado**: La fábrica devuelve una instancia de `NotificacionSMS`.

2.  **Creación de Email**:
    *   Se llama a `NotificacionFactory.crearNotificacion('email', ...)`
    *   **Resultado Esperado**: La fábrica devuelve una instancia de `NotificacionEmail`.

3.  **Creación de Push**:
    *   Se llama a `NotificacionFactory.crearNotificacion('push', ...)`
    *   **Resultado Esperado**: La fábrica devuelve una instancia de `NotificacionPush`.

Luego, se itera sobre el arreglo de notificaciones creadas y se llama al método `enviar()` de cada una, demostrando que, aunque se crearon a través de la misma fábrica, cada objeto tiene su propio comportamiento específico.