# Lógica matemática 051 - conteo combinatorio simple
Analisis
Entrada:
- Arreglo de "jugadoresDeKickboxing":
    - id
    - jugador
    - punteos
    - estado

Proceso: Esto recorre el arreglo atraves de *for* para obtener: punteo, estado y jugadores.

Salida:
- Cantida de los jugadores activos
- Promedio de puntos
- Número de combinaciones posibles

## Reglas identificadas
Pruebas
Caso normal
Entrada: El arreglo de *jugadoresDeKickboxing*

Resultado esperado:
- Juan promedio: 58.25
- Mario promedio: 44
- Jennifer promeedio: 57.25

- jugadores activos que cumplen: 2

Caso borde
Entrada:
- por ejemplo: *conteoConbinatorio([], 50)*

Resultado esperado:
- No hay jugadores para realizar la ejecución

Explicacion final
La solución funciona porque primero verifica que exista una lista de jugadores. Después recorre el arreglo utilizando un ciclo for. Mediante una condición if evalúa únicamente a los jugadores con estado "activo". Para cada uno utiliza otro ciclo para sumar todos sus punteos (acumulador), calcula el promedio dividiendo la suma entre la cantidad de punteos y, si el promedio es mayor o igual al valor mínimo establecido, incrementa un contador. Al finalizar el recorrido muestra el número total de jugadores activos que cumplen la condición.