# Plantilla de solucion

## Autor

Sergio Ajú

## Analisis

- **Entrada:** Dos datos: `viento` (número en km/h) y `equipoVerificado` (booleano: true/false).
- **Proceso:** Se aplican filtros de seguridad en orden de importancia. Primero se verifica el factor ambiental (viento) y luego el factor técnico (equipo). Si alguno falla, el salto se cancela inmediatamente.
- **Salida:** Un objeto con el estado final (APROBADO o CANCELADO) y un motivo breve.

## Reglas identificadas

1. **Límite Ambiental:** Si el viento supera los 30 km/h, el salto se cancela sin importar el estado del equipo.
2. **Límite Técnico:** Si el equipo no está verificado, el salto se cancela por seguridad técnica.
3. **Autorización:** Solo si el viento es <= 30 y el equipo está verificado, el salto es APROBADO.

## Pruebas

### Caso normal

**Entrada:** `viento: 15, equipoVerificado: true`

**Resultado esperado:**
```json
{
  "estado": "APROBADO",
  "motivo": "Condiciones óptimas para el salto."
}