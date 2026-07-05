# Solución: Lectura de Instrucciones (Viajes y Turismo)

## Leer instrucciones e Identificar entradas
El objetivo de este reto es leer y procesar una lista de destinos turísticos para armarle una guía paso a paso a los viajeros. Dependiendo del país al que vayan, el sistema debe leer las reglas y decirles qué papeles llevar y qué tipo de ropa meter en la maleta.
* **Entradas:** Una lista de países o ciudades. Cada una tiene su `nombre`, si `requiereVisa` (verdadero o falso) y su `clima` (un texto como "frio" o "caliente").

## Definir salidas
* **Salidas:** Una lista organizada que le dice al turista, destino por destino, qué hacer en el Paso 1 (papeles) y en el Paso 2 (maleta).

## Reglas de negocio y Condicionales
Para interpretar las instrucciones de cada viaje, usamos un ciclo `for` para ver los destinos uno por uno y aplicamos estas condiciones `if`:
1. **Regla de Documentos (Visa):** Si la instrucción dice que el país pide visa (`true`), el sistema avisa que hay que tramitarla. Si es falso (`false`), le dice que con el pasaporte alcanza.
2. **Regla de Clima (Ropa):** Si el clima guardado es igual a "frio", el sistema le instruye al viajero llevar abrigos pesados. Si es cualquier otro clima, le dice que empaque ropa ligera.

## Probar casos
* **Caso Normal:** Probamos con dos destinos diferentes. Para "París" (que tiene visa y frío), el código responde correctamente: Paso 1 tramitar visa, Paso 2 empacar abrigos. Para "Cancún" (sin visa y caliente), el código dice: Pasaporte y ropa ligera. Las instrucciones se leyeron a la perfección.
* **Caso Borde:** Si el usuario no selecciona ningún destino y la lista llega vacía, el primer `if` del programa lo detecta inmediatamente y devuelve un resultado vacío `[]` de forma segura para no trabar la aplicación.