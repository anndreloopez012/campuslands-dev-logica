
ALGORITMO ValidarRankingEquipo
    ENTRADA: nombre, goles_favor, goles_contra, ganados, jugados

    // Regla 1: Validar negativos
    SI goles_favor < 0 O goles_contra < 0 O ganados < 0 O jugados < 0 ENTONCES
        RETORNAR {estado: "rechazado", motivo: "Valores negativos no permitidos"}
    FIN SI

    // Regla 2: Coherencia deportiva
    SI ganados > jugados ENTONCES
        RETORNAR {estado: "rechazado", motivo: "Partidos ganados exceden partidos jugados"}
    FIN SI

    // Si pasa las validaciones
    RETORNAR {estado: "apto", motivo: "Estadísticas validadas para el ranking"}
FIN ALGORITMO