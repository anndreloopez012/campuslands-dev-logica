def gestionar_items(items, prioridad_global):
    """
    Analiza la lista de ítems y determina la acción a seguir.
    """
    # 1. Validación de datos vacíos
    if not items:
        return {"accion": "esperar", "motivo": "No hay ítems en la lista."}

    # 2. Aplicación de reglas (Prioridad: Bloqueado > Pendiente > Aprobado)
    if "bloqueado" in items:
        return {
            "accion": "revisar bloqueado",
            "motivo": "la regla prioriza riesgos antes de tareas normales."
        }
    
    if "pendiente" in items:
        return {
            "accion": "gestionar pendiente",
            "motivo": "se requiere procesar tareas pendientes con prioridad " + prioridad_global
        }

    if all(item == "aprobado" for item in items):
        return {"accion": "finalizado", "motivo": "todos los ítems han sido aprobados."}

    return {"accion": "revisar", "motivo": "estado desconocido en los ítems."}

# --- Pruebas ---
# Caso 1: Ejemplo dado (Normal)
print("Caso 1:", gestionar_items(["aprobado", "pendiente", "bloqueado"], "alta"))

# Caso 2: Caso Borde (Todo aprobado)
print("Caso 2:", gestionar_items(["aprobado", "aprobado"], "baja"))

# Caso 3: Caso Borde (Lista vacía)
print("Caso 3:", gestionar_items([], "normal"))