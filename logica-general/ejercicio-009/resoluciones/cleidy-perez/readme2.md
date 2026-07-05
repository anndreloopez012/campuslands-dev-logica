# Solución: Simulación de Estados (Páginas de Películas de Miedo)

## Leer instrucciones e Identificar entradas
Este ejercicio nos pide simular cómo cambia el "estado" (la situación actual) de las películas de terror antes de salir en una aplicación de streaming. Las películas pasan por un control para saber si se pueden mostrar al público o si hay que editarlas.
* **Entradas:** Una lista de películas. Cada una tiene su `titulo`, su `estadoInicial` (un texto como "En revisión") y si `tieneEscenasFuertes` (verdadero o falso).

## Definir salidas
* **Salidas:** Una lista nueva que nos muestra cómo estaba la película antes, cuál es su nuevo estado modificado por las reglas y qué acción debe tomar el sistema.

## Reglas de negocio y Condicionales
Para simular los estados usamos un bucle `for` y evaluamos la situación usando condiciones `if` y `else if`:
1. **Regla de Aprobación:** Si una película está "En revisión" y no da miedo exagerado (`tieneEscenasFuertes` es falso), su estado cambia automáticamente a "Aprobada".
2. **Regla de Bloqueo o Censura:** Si está "En revisión" pero sí es demasiado gráfica (verdadero), su nuevo estado cambia a "Bajo Censura" para que la arreglen.
3. **Regla de Permanencia:** Si una película ya venía "Aprobada" desde el inicio, el código no le cambia nada y la deja lista para ver.

## Probar casos
* **Caso Normal:** Probamos con tres películas diferentes. "El Conjuro" pasa de "En revisión" a "Aprobada". "Saw" pasa de "En revisión" a "Bajo Censura" porque tiene escenas muy fuertes. Y "Gasparín" se queda "Aprobada" porque ya estaba lista. El simulador cambió los estados correctamente.
* **Caso Borde:** Si el sistema intenta procesar una lista que no tiene películas (un arreglo vacío), la primera condición frena el código y devuelve `[]` de forma segura para evitar errores en la pantalla.