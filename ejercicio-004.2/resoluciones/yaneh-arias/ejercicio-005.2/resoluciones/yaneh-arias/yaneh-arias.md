
Algoritmo TallerMecanico
    // 1. Entradas
    Definir insumos Como Lista
    Definir limite_critico Como Entero
    insumos = [12, 18, 5, 30] // Niveles de aceite
    limite_critico = 10

    // 2. Buscar el mínimo
    Definir minimo Como Entero
    minimo = insumos[0]
    Para i desde 1 hasta Longitud(insumos) - 1 Hacer
        Si insumos[i] < minimo Entonces
            minimo = insumos[i]
        FinSi
    FinPara

    // 3. Evaluar límite
    Definir alerta Como Cadena
    Si minimo <= limite_critico Entonces
        alerta = "ALERTA: Reponer insumo inmediatamente"
    Sino
        alerta = "Niveles normales"
    FinSi

    // 4. Salida
    Escribir "Valor mínimo encontrado: ", minimo
    Escribir "Estado: ", alerta
FinAlgoritmo