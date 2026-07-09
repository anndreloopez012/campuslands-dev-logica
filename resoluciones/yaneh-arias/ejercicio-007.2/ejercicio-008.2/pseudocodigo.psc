
Algoritmo CalcularPuntajesSciFi
    Definir puntuaciones como Arreglo
    Definir bono, penalizacion, total, promedio como Entero
    
    puntuaciones <- [12, 18, 25, 30]
    bono <- 8
    penalizacion <- 3
    total <- 0
    
    Para cada p en puntuaciones hacer:
        p_ajustado <- p + bono - penalizacion
        total <- total + p_ajustado
    FinPara
    
    promedio <- total / longitud(puntuaciones)
    
    Si promedio > 25 entonces:
        clasificacion <- "Elite"
    Sino:
        clasificacion <- "Competitivo"
    FinSi
    
    Mostrar "Puntaje final acumulado: " + total
    Mostrar "Clasificación: " + clasificacion
FinAlgoritmo