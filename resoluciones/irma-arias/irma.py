def validar_reserva(tiene_pasaporte, presupuesto, costo_viaje):
    """
    Evalúa la viabilidad de una reserva turística.
    """
    # Regla 1: Pasaporte
    if not tiene_pasaporte:
        return {"estado": "rechazado", "motivo": "Se requiere pasaporte vigente."}
    
    # Regla 2: Presupuesto
    if presupuesto < costo_viaje:
        falta = costo_viaje - presupuesto
        return {"estado": "rechazado", "motivo": f"Presupuesto insuficiente. Faltan {falta} unidades."}
    
    # Éxito
    return {"estado": "aprobado", "motivo": "Reserva confirmada con éxito."}

# --- Pruebas ---
# Prueba normal: Todo correcto
print(validar_reserva(True, 1500, 1000))

# Caso borde: Sin pasaporte
print(validar_reserva(False, 2000, 1000))

# Caso borde: Presupuesto insuficiente
print(validar_reserva(True, 500, 1000))