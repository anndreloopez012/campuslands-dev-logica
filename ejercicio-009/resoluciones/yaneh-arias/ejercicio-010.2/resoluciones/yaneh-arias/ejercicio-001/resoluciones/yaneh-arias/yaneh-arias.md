
# Algoritmo: Operaciones Aritméticas Competitivas

ALGORITMO procesar_competencia
    ENTRADAS: lista_puntajes, bono, penalizacion
    INICIALIZAR puntaje_final = 0

    PARA CADA puntaje EN lista_puntajes
        // Regla: Aplicar bonos y penalizaciones
        puntaje_final = puntaje_final + puntaje + bono - penalizacion
    FIN PARA

    // Definir clasificación
    SI puntaje_final > 20 ENTONCES
        clasificacion = "competitivo"
    SINO
        clasificacion = "novato"
    FIN SI

    RETORNAR puntaje_final, clasificacion
FIN ALGORITMO