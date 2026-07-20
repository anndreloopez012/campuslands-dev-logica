def validar_formula_quimica(elementos, cantidades):
    if len(elementos) != len(cantidades):
        return "Error: Desajuste entre elementos y cantidades"
    
    for i in range(len(cantidades)):
        if cantidades[i] <= 0:
            return f"Error: La cantidad del elemento {elementos[i]} debe ser positiva"
        if cantidades[i] > 100:
            return f"Error: La cantidad de {elementos[i]} excede el límite permitido"
            
    return "Fórmula válida para procesamiento"

elementos = ["H", "O", "C"]
cantidades = [2, 1, 6]

resultado = validar_formula_quimica(elementos, cantidades)
print(resultado)