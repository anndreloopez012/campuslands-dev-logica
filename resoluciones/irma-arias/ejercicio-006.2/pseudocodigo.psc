
ALGORITMO BuscarAutoHiperdeportivo
    ENTRADA: catalogo, nombre_buscado
    
    // Normalizar criterio para búsqueda flexible
    criterio = CONVERTIR_A_MINUSCULAS(nombre_buscado)

    PARA CADA auto EN catalogo HACER
        SI CONVERTIR_A_MINUSCULAS(auto.modelo) == criterio ENTONCES
            RETORNAR auto
        FIN SI
    FIN PARA

    RETORNAR "Error: El auto no existe en el catálogo"
FIN ALGORITMO