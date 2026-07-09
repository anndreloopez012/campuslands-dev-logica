
# Resolución: Ejercicio 009 - Módulos y Divisibilidad

## Análisis
El objetivo es procesar una lista de puntajes de películas. Si un puntaje es divisible por un valor específico, se suma un bono; de lo contrario, se aplica una penalización.

## Reglas
1. **Divisibilidad:** Usar la operación módulo (MOD).
2. **Condición:** Si `puntaje MOD divisor == 0`, sumar bono.
3. **Alternativa:** Si no es divisible, restar penalización.

## Pseudocódigo
ALGORITMO calcular_puntaje
    ENTRADAS: lista_participantes, bono, penalizacion, divisor
    INICIALIZAR puntaje_final = 0

    PARA CADA puntaje EN lista_participantes
        SI (puntaje MOD divisor == 0) ENTONCES
            puntaje_final = puntaje_final + puntaje + bono
        SINO
            puntaje_final = puntaje_final + puntaje - penalizacion
        FIN SI
    FIN PARA

    MOSTRAR "Puntaje final calculado:", puntaje_final
FIN ALGORITMO