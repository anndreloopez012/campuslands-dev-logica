# Analisis del reto: Toma de Decisiones en Torneo de Esports

## Analisis

- **Entrada:** Un objeto `partida` que contiene `estado_servidor` (estable, inestable, crítico) y `jugadores_conectados` (entero).
- **Proceso:** Determinar si la partida debe continuar, pausarse o cancelarse basándose en la estabilidad técnica y el quórum mínimo de jugadores.
- **Salida:** Un objeto con la `accion` (continuar, pausar, cancelar) y el `motivo` de la decisión.

## Reglas identificadas

1. **Estado Crítico:** Si el servidor está en estado 'crítico', la partida se cancela inmediatamente por seguridad.
2. **Estado Inestable:** Si hay menos de 5 jugadores conectados, la partida se pausa. Si hay 5 o más, continúa pero con advertencia.
3. **Estado Estable:** Si el servidor está estable, la partida continúa normalmente.

## Pruebas

### Caso normal

**Entrada:**
```javascript
{
  estado_servidor: "inestable",
  jugadores_conectados: 6
}