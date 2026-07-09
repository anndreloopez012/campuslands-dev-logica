

Algoritmo InventarioMotos
    // 1. Entradas
    Definir inventario Como Lista
    Definir min_perm, max_perm Como Entero
    inventario = [12, 18, 25, 30] // Cantidad de motos por modelo
    min_perm = 10
    max_perm = 35

    // 2. Buscar el máximo
    Definir maximo Como Entero
    maximo = inventario[0]
    Para i desde 1 hasta Longitud(inventario) - 1 Hacer
        Si inventario[i] > maximo Entonces
            maximo = inventario[i]
        FinSi
    FinPara

    // 3. Evaluar rango
    Definir estado Como Cadena
    Si maximo > max_perm Entonces
        estado = "sobrestock"
    Sino Si maximo < min_perm Entonces
        estado = "bajo inventario"
    Sino
        estado = "optimo"
    FinSi

    // 4. Salida
    Escribir "Valor máximo encontrado: ", maximo
    Escribir "Estado del inventario: ", estado
FinAlgoritmo