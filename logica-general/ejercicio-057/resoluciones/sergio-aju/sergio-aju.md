# Analisis del reto: Tablas de Decisión - Arquitectura 3D

## Analisis

- **Entrada:** Un objeto con propiedades: `material` (madera, concreto, acero) y `complejidad` (baja, media, alta).
- **Proceso:** Utilizar una tabla de decisión lógica para determinar el `tipo_de_corte` y el `tiempo_estimado` de procesamiento en la máquina de arquitectura 3D.
- **Salida:** Un objeto con el `tipo_de_corte` asignado y el `tiempo_estimado` calculado.

## Reglas identificadas

1. **Madera:** Corte laser, tiempo: baja (1h), media (2h), alta (4h).
2. **Concreto:** Corte CNC, tiempo: baja (3h), media (6h), alta (10h).
3. **Acero:** Corte plasma, tiempo: baja (5h), media (10h), alta (20h).

## Pruebas

### Caso normal

**Entrada:**
```json
{
  "material": "madera",
  "complejidad": "media"
}