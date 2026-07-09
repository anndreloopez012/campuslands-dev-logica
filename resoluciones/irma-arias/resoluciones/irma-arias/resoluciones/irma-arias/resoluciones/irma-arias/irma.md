
ALGORITMO ClasificarEquipoEsports
    ENTRADA: puntos, partidas, penalizado

    SI penalizado ES VERDADERO ENTONCES
        RETORNAR {estado: "descalificado", motivo: "Penalización activa"}
    FIN SI

    SI partidas < 5 ENTONCES
        RETORNAR {estado: "descalificado", motivo: "No cumple mínimo de partidas"}
    FIN SI

    SI puntos < 10 ENTONCES
        RETORNAR {estado: "descalificado", motivo: "Puntaje insuficiente"}
    FIN SI

    RETORNAR {estado: "clasificado", motivo: "Cumple todos los requisitos"}
FIN ALGORITMO