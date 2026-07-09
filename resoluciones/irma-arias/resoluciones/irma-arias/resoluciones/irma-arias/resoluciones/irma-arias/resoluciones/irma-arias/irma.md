
ALGORITMO FiltrarInventarioMotos
    ENTRADA: lista_motos
    INICIALIZAR lista_filtrada COMO VACÍA

    PARA CADA moto EN lista_motos HACER
        SI moto.estado ES IGUAL A "disponible" Y moto.km < 5000 ENTONCES
            AGREGAR moto A lista_filtrada
        FIN SI
    FIN PARA

    RETORNAR lista_filtrada
FIN ALGORITMO