
# Resolución Ejercicio 002.2 - Videojuegos Competitivos

## Reglas
1. Recibir lista de puntajes y un valor de bono.
2. Si el puntaje individual es > 50, aplicar bono doble.
3. Si el puntaje es <= 50, aplicar bono normal.

## Pseudocódigo
ALGORITMO calcular_puntajes_competitivos
    ENTRADAS: lista_puntajes, bono
    INICIALIZAR total = 0

    PARA CADA puntaje EN lista_puntajes
        SI (puntaje > 50) ENTONCES
            total = total + puntaje + (bono * 2)
        SINO
            total = total + puntaje + bono
        FIN SI
    FIN PARA

    RETORNAR total
FIN ALGORITMO