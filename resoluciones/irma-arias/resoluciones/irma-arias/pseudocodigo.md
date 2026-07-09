
INICIO
    VARIABLES
        lista_participantes = [12, 18, 25, 30]
        bono = 8
        penalizacion = 3
        total_suma = 0
        puntaje_final = 0
        clasificacion = ""

    // Paso 1: Sumar participantes
    PARA CADA participante EN lista_participantes HACER
        total_suma = total_suma + participante
    FIN PARA

    // Paso 2: Aplicar reglas de divisibilidad
    puntaje_final = total_suma

    SI (total_suma MOD bono == 0) ENTONCES
        puntaje_final = puntaje_final + bono
    FIN SI

    SI (total_suma MOD penalizacion == 0) ENTONCES
        puntaje_final = puntaje_final - penalizacion
    FIN SI

    // Paso 3: Clasificación
    SI puntaje_final > 50 ENTONCES
        clasificacion = "experto en terror"
    SINO SI puntaje_final >= 20 ENTONCES
        clasificacion = "competitivo"
    SINO
        clasificacion = "aprendiz"
    FIN SI

    MOSTRAR "Puntaje Final: " + puntaje_final
    MOSTRAR "Clasificación: " + clasificacion
FIN