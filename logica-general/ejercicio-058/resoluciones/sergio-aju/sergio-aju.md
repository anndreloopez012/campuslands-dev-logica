# Analisis del reto: Sistema de Turnos de Soldadura

## Analisis

- **Entrada:** Un arreglo de `soldadores` (nombres) y una variable `tipo_turno` (diurno, nocturno, especial).
- **Proceso:** Asignar el turno correspondiente basándose en el tipo de jornada, aplicando reglas de rotación para soldadura de alta precisión.
- **Salida:** Un objeto con el `turno_asignado` y el `equipo_de_seguridad` requerido.

## Reglas identificadas

1. **Turno Diurno:** Uso de equipo básico, asignación estándar.
2. **Turno Nocturno:** Uso de equipo de alta visibilidad, asignación con descanso compensatorio.
3. **Turno Especial:** Uso de equipo especializado (protección radiológica), asignación prioritaria.

## Pruebas

### Caso normal

**Entrada:**
```javascript
{
  soldadores: ["Juan", "Ana"],
  tipo_turno: "nocturno"
}