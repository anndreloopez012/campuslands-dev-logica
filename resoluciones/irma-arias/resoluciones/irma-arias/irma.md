
ALGORITMO ClasificarTareas
    ENTRADA: lista_items, prioridad_global

    SI lista_items ESTÁ VACÍO ENTONCES
        RETORNAR {accion: "esperar", motivo: "No hay tareas"}
    FIN SI

    SI "bloqueado" EN lista_items ENTONCES
        RETORNAR {accion: "revisar bloqueado", motivo: "Riesgo alto detectado"}
    SINO SI "pendiente" EN lista_items ENTONCES
        RETORNAR {accion: "gestionar pendiente", motivo: "Prioridad " + prioridad_global}
    SINO
        RETORNAR {accion: "nada", motivo: "Todos los items aprobados"}
    FIN SI
FIN ALGORITMO