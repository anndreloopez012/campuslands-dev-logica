# Solución: Módulos y Divisibilidad (Maratón de Películas de Miedo)

## Leer instrucciones e Identificar entradas
El reto de hoy es organizar las salas de un cine para un maratón de películas de terror. Queremos acomodar a la gente en filas que tengan exactamente la misma cantidad de asientos y descubrir mediante matemáticas si van a quedar personas sueltas/solas en la última fila.
* **Entradas:** * `peliculas`: Una lista de películas donde cada una tiene su `titulo` y el número de `espectadores` que van a verla.
  * `asientosPorFila`: Un número que dice cuántas sillas tiene cada fila de la sala.

## Definir salidas
* **Salidas:** Una lista nueva que nos dice el nombre de la película, cuántas personas sobraron al llenar las filas, si la sala quedó "Perfecta" o "Incompleta" y qué instrucción darle al acomodador del cine.

## Reglas de negocio y Condicionales
Para revisar el público de cada película, usamos un ciclo `for` y evaluamos los números con estas reglas:
1. **Regla del Módulo (Residuo):** Usamos el operador `%` en JavaScript. Este operador divide los espectadores entre los asientos por fila, pero no nos da el resultado de la división, sino que nos dice *cuánto sobra*.
2. **Regla de Divisibilidad (Condicional `if`):** Si lo que sobra es exactamente $0$, significa que el número es divisible. Las filas quedan perfectas. Si sobra cualquier otro número, la fila queda incompleta.

## Cálculo numérico y Razonamiento cuantitativo
Aquí usamos la aritmética del residuo. Si para ver "El Exorcista" entran $34$ personas y las filas son de $10$ asientos, el programa hace el siguiente análisis:
* Entran 3 filas completas ($3 \times 10 = 30$ personas).
* Restamos: $34 - 30 = 4$.

El módulo es $4$ ($34 \pmod{10} = 4$). Como $4$ no es igual a $0$, nuestro código razona que la sala está "Incompleta" y manda a acomodar a esos 4 sobrevivientes en la parte de atrás.

## Probar casos
* **Caso Normal:** Probamos organizando filas de 10 asientos. "Scream" tiene 30 personas, da residuo $0$ y sale "Perfecta". "El Exorcista" tiene 34 personas, da residuo $4$ y nos avisa del problema.
* **Caso Borde:** Si la lista de películas viene vacía o el tamaño de las filas es cero, el primer `if` del código se da cuenta del error de datos y frena todo devolviendo un arreglo vacío `[]` para que el sistema de boletos no se caiga.