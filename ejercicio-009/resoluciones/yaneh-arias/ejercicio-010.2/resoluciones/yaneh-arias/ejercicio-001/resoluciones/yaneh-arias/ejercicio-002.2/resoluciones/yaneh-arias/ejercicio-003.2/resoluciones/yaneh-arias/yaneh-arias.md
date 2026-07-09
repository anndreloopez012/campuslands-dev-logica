
Algoritmo TorneoEsports
    // 1. Entradas
    Definir puntajes Como Lista
    Definir bono, penalizacion Como Entero
    puntajes = [30, 12, 25, 18] // Ejemplo desordenado
    bono = 8
    penalizacion = 3
    
    // 2. Calcular Mediana
    // Paso A: Ordenar puntajes
    Ordenar(puntajes) // Ahora es [12, 18, 25, 30]
    
    Definir mediana Como Real
    Definir n Como Entero
    n = Longitud(puntajes)
    
    Si n % 2 != 0 Entonces
        mediana = puntajes[n / 2]
    Sino
        mediana = (puntajes[(n/2) - 1] + puntajes[n/2]) / 2
    FinSi
    
    // 3. Aplicar Reglas
    Definir puntaje_final Como Real
    puntaje_final = mediana + bono - penalizacion
    
    // 4. Clasificacion
    Definir clasificacion Como Cadena
    Si puntaje_final >= 25 Entonces
        clasificacion = "competitivo"
    Sino Si puntaje_final >= 15 Entonces
        clasificacion = "promedio"
    Sino
        clasificacion = "principiante"
    FinSi
    
    // 5. Salida
    Escribir "Mediana: ", mediana
    Escribir "Puntaje Final: ", puntaje_final
    Escribir "Clasificacion: ", clasificacion
FinAlgoritmo