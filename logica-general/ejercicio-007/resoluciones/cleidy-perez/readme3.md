# Solución: Detección de Inconsistencias (Playlist Musical)

## Leer instrucciones e Identificar entradas
El objetivo de este reto es crear un limpiador automático para una aplicación de música. A veces los archivos se suben mal o quedan incompletos, por lo que debemos revisar la lista para separar las canciones que tienen errores.
* **Entradas:** Una lista llamada `canciones` donde cada canción tiene un `id`, `titulo`, `artista` y `duracionSegundos`.

## Definir salidas
* **Salidas:** Una lista nueva que solo contiene las canciones dañadas, explicando detalladamente qué error tienen y qué debe hacer el usuario para arreglarlo.

## Reglas de negocio y Razonamiento lógico
Para encontrar las canciones dañadas de forma ordenada, revisamos la lista una por una usando un ciclo `for` y aplicamos las siguientes pruebas de control:
1. **Filtro de Tiempo Lógico:** Una canción real no puede durar cero segundos ni tampoco tener tiempo negativo. Si pasa eso, es un error.
2. **Filtro de Textos Vacíos:** Si el título de la canción o el nombre del artista están vacíos (o llenos de puros espacios en blanco usando `.trim()`), el registro está incompleto.

## Probar casos
* **Caso Normal:** Le pasamos una lista con 4 canciones. El programa funciona perfectamente detectando que la canción 2 no tiene un título real y que la canción 3 tiene una duración imposible de $-10$ segundos. Al final, nos devuelve una lista detallada con esos 2 errores.
* **Caso Borde:** Si la playlist se encuentra totalmente vacía, el primer condicional lo nota de inmediato y nos devuelve una lista vacía `[]` de forma segura, evitando que el programa se detenga por completo.