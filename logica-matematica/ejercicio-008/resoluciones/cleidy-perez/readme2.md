# Solución: Patrones de Puntuación (Películas de Ciencia Ficción)

## Leer instrucciones e Identificar entradas
El objetivo de este ejercicio es hacer una calculadora que le dé un puntaje final a las películas de ciencia ficción usando unas reglas matemáticas muy sencillas. Dependiendo de los minutos que dure la película y del año en que salió, sus puntos van a subir o a bajar.
* **Entradas:** Una lista de películas. Cada una viene con su `titulo`, sus `puntosBase`, su `duracionMinutos` y su `anioLanzamiento`.

## Definir salidas
* **Salidas:** Una lista nueva que nos dice el título de la película, cuántos puntos le quedaron al final de las operaciones y si logró la categoría de "Obra Maestra" o se quedó en "Estándar".

## Reglas de negocio y Condicionales
Para revisar los puntos de cada película de forma ordenada, usamos un ciclo `for` y aplicamos estas dos reglas con condicionales `if`:
1. **Regla del Bono:** Si la película es larga y dura más de $120\text{ minutos}$, le regalamos un bono de $+10$ puntos.
2. **Regla de la Penalización:** Si la película se estrenó antes del año $2000$, se considera antigua y le restamos $-5$ puntos.
3. **Regla de Clasificación:** Si al hacer todas las operaciones la película saca $90$ o más puntos, se vuelve una "Obra Maestra". Si saca menos, es "Estándar".

## Cálculo numérico y Razonamiento cuantitativo
Aquí jugamos con sumas y restas básicas para alterar el valor inicial. Por ejemplo, "Interstellar" empieza con $85$ puntos. Como dura $169$ minutos (pasa de $120$), le sumamos $10$:

$$85 + 10 = 95$$

Como salió en el 2014, no se le quita nada. Su puntaje final es $95$, por lo que el programa razona que es mayor a $90$ y la corona como "Obra Maestra".

## Probar casos
* **Caso Normal:** Le pasamos dos películas bien diferentes. El programa hace los cálculos matemáticos uno por uno sin equivocarse, premiando a "Interstellar" y descontándole puntos a la versión vieja de "Blade Runner".
* **Caso Borde:** Si el cine no nos pasa ninguna película y la lista llega totalmente vacía, el primer `if` lo detecta al instante y detiene el código devolviendo un resultado vacío `[]` para que el programa no falle ni se trabe.