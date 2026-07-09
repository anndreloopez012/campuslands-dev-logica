
Algoritmo BuscarHiperdeportivo
    Definir listaAutos como Arreglo
    Definir autoBuscado como Cadena
    Definir encontrado como Booleano
    
    listaAutos <- ["Bugatti", "Pagani", "Koenigsegg", "Rimac"]
    autoBuscado <- "Pagani"
    encontrado <- Falso
    
    Para i desde 0 hasta longitud(listaAutos) - 1 hacer:
        Si listaAutos[i] == autoBuscado entonces:
            Mostrar "Auto encontrado en la posición: " + i
            encontrado <- Verdadero
            Romper ciclo (o terminar búsqueda)
        FinSi
    FinPara
    
    Si encontrado == Falso entonces:
        Mostrar "El vehículo no se encuentra en el inventario."
    FinSi
FinAlgoritmo