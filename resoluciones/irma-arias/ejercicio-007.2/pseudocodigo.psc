
ALGORITMO CalcularPuntajeMusical
    ENTRADA: lista_numeros, bono, penalizacion
    
    // Paso 1: Sumatoria de los elementos
    suma_total = 0
    PARA CADA numero EN lista_numeros HACER
        suma_total = suma_total + numero
    FIN PARA

    // Paso 2: Aplicar reglas aritméticas
    puntaje_final = suma_total + bono - penalizacion

    // Paso 3: Clasificación lógica
    SI puntaje_final >= 25 ENTONCES
        clasificacion = "competitivo"
    SINO
        clasificacion = "básico"
    FIN SI

    RETORNAR {puntaje: puntaje_final, clase: clasificacion}
FIN ALGORITMO