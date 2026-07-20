def calcularMatchmakingMMR(partida):
    reporte = {
        "variacionMmr": 0,
        "nuevoMmr": 0,
        "estatus": "Registro Invalido"
    }

    mmr_actual = partida.get("mmrActual", -1)
    resultado = partida.get("resultado", "")
    bajas = partida.get("bajas", -1)
    muertes = partida.get("muertes", -1)
    penalizado = partida.get("penalizado", False)

    if mmr_actual < 0 or bajas < 0 or muertes < 0:
        return reporte

    divisor_muertes = 1 if muertes == 0 else muertes
    kd_ratio = bajas / divisor_muertes

    variacion = 0

    if resultado == "Victoria":
        variacion = 25
        if kd_ratio >= 2.0:
            variacion += 5
    elif resultado == "Derrota":
        variacion = -20
        if kd_ratio <= 0.5:
            variacion -= 5
    else:
        return reporte

    if penalizado:
        variacion -= 15

    nuevo_mmr = mmr_actual + variacion
    if nuevo_mmr < 0:
        nuevo_mmr = 0

    reporte["variacionMmr"] = variacion
    reporte["nuevoMmr"] = nuevo_mmr
    reporte["estatus"] = "Procesado Exitosamente"

    return reporte

def ejecutarPruebasMatchmaking():
    # Caso 1: Victoria destacada sin penalización
    jugador_pro = {
        "jugadorId": "EdgarS",
        "mmrActual": 1500,
        "resultado": "Victoria",
        "bajas": 12,
        "muertes": 4,
        "penalizado": False
    }
    res_1 = calcularMatchmakingMMR(jugador_pro)
    assert res_1["variacionMmr"] == 30
    assert res_1["nuevoMmr"] == 1530
    assert res_1["estatus"] == "Procesado Exitosamente"

    # Caso 2: Derrota con mal rendimiento e infracción
    jugador_troll = {
        "jugadorId": "NoobMaster",
        "mmrActual": 1000,
        "resultado": "Derrota",
        "bajas": 1,
        "muertes": 10,
        "penalizado": True
    }
    res_2 = calcularMatchmakingMMR(jugador_troll)
    assert res_2["variacionMmr"] == -40
    assert res_2["nuevoMmr"] == 960

ejecutarPruebasMatchmaking()