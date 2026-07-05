# Solución: Secuencias Numéricas en una Playlist

## Leer instrucciones e Identificar entradas
El objetivo de este ejercicio es revisar que las canciones de una lista de reproducción lleven un orden numérico correcto ($1, 2, 3, 4\dots$) y no tengan números saltados o repetidos.
* **Entradas:** Una lista de canciones donde cada una tiene su `titulo` y su `numeroOrden`.

## Definir salidas
* **Salidas:** Una nueva lista que nos revisa canción por canción, nos dice si su número es correcto o no, y nos da la solución para arreglarlo.

## Reglas de negocio y Condicionales
1. **Regla de la Secuencia:** En la programación, las listas empiezan a contarse desde el número $0$. Por eso, para saber qué número le toca de verdad a una canción, sumamos su posición actual más $1$:

$$\text{Número Esperado} = \text{Posición en la Lista} + 1$$

2. **Condicional de Control:** Usamos un `if` para comparar el número que trae la canción con el número que calculamos. Si no son iguales, el programa detecta el error y cambia su estado a "Inconsistente".

## Cálculo numérico y Razonamiento cuantitativo
Usamos sumas básicas para descubrir el orden real. Si la canción "Starboy" está guardada en el segundo lugar de la computadora (posición $1$), matemáticamente le corresponde el número $1 + 1 = 2$. Como la canción tenía escrito el número $3$, nuestro razonamiento cuantitativo encuentra la falla inmediatamente.

## Probar casos
* **Caso Normal:** Probamos con una lista donde la segunda canción tiene el número $3$ en lugar del $2$. El programa la encuentra, avisa que está mal y nos dice exactamente qué número ponerle.
* **Caso Borde:** Si metemos una lista que no tiene ninguna canción, el programa lo nota enseguida gracias a una condición al inicio y nos devuelve un mensaje de error limpio en vez de trabarse.