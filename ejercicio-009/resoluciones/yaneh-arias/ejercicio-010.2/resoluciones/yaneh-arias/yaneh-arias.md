
Algoritmo CalcularPuntajeTurismo
    // Entradas
    Definir participantes Como Lista de Enteros
    Definir bono, penalizacion Como Entero
    
    participantes = [12, 18, 25, 30]
    bono = 8
    penalizacion = 3
    
    // Proceso
    Definir suma, i, promedio, puntaje_final Como Real
    suma = 0
    Para i desde 0 hasta longitud(participantes) - 1 Hacer
        suma = suma + participantes[i]
    FinPara
    
    promedio = suma / longitud(participantes)
    puntaje_final = redondear(promedio + bono - penalizacion)
    
    // Clasificación
    Definir clasificacion Como Texto
    Si puntaje_final >= 25 Entonces
        clasificacion = "competitivo"
    Sino Si puntaje_final >= 15 Entonces
        clasificacion = "promedio"
    Sino
        clasificacion = "principiante"
    FinSi
    
    // Salida
    Escribir "Puntaje final: ", puntaje_final
    Escribir "Clasificación: ", clasificacion
FinAlgoritmo