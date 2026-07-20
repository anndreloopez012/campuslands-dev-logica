# Analisis del reto: Ordenamiento de Prioridades en Taller Mecánico

## Analisis

- **Entrada:** Un arreglo de objetos `vehiculos` (con nombre y tipo de avería: 'urgente', 'mantenimiento', 'estético') y una variable `capacidad_taller`.
- **Proceso:** Ordenar los vehículos según su nivel de prioridad para asegurar que los casos más críticos sean atendidos primero, respetando el límite de espacio.
- **Salida:** Un objeto con la `lista_atencion` ordenada y el `estado_taller` (ocupado o disponible).

## Reglas identificadas

1. **Prioridad 1 (Urgente):** Deben ser los primeros en la lista de atención.
2. **Prioridad 2 (Mantenimiento):** Se atienden después de los casos urgentes.
3. **Prioridad 3 (Estético):** Se atienden al final si hay espacio disponible en el taller.

## Pruebas

### Caso normal

**Entrada:**
```javascript
vehiculos: [
  {nombre: "Auto A", averia: "estético"},
  {nombre: "Auto B", averia: "urgente"}
],
capacidad_taller: 2