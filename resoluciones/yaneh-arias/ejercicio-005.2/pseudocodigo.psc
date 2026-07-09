
Algoritmo OrdenarTaller
    Definir listaVehiculos como Arreglo
    listaVehiculos <- ["revision", "urgente", "mantenimiento", "urgente"]
    
    // Regla: Ordenar por prioridad definida
    // 1. Urgente, 2. Mantenimiento, 3. Revision
    
    Para cada vehiculo en listaVehiculos:
        Si vehiculo es "urgente" entonces:
            Agregar a listaPrioritaria
        Si vehiculo es "mantenimiento" entonces:
            Agregar a listaMantenimiento
        Si vehiculo es "revision" entonces:
            Agregar a listaRevision
            
    ResultadoFinal <- Concatenar(listaPrioritaria, listaMantenimiento, listaRevision)
    Mostrar ResultadoFinal
FinAlgoritmo