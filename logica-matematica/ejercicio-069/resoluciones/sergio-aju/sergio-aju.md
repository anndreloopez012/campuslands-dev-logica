# Analisis del reto: Módulos y Divisibilidad en Películas de Miedo

## Analisis

- **Entrada:** Un arreglo de `tiempos_aparicion` (minutos donde ocurre un susto) y un `intervalo_alerta` (frecuencia en minutos).
- **Proceso:** Determinar qué sustos ocurren en múltiplos del `intervalo_alerta` (picos de tensión) y calcular el nivel de amenaza total.
- **Salida:** Un objeto con los `sustos_criticos` detectados (minutos divisibles por el intervalo) y el `nivel_amenaza` (total de críticos).

## Reglas identificadas

1. **Divisibilidad:** Un susto es "crítico" si `tiempo_aparicion % intervalo_alerta === 0`.
2. **Cálculo:** Contar cuántos sustos cumplen la condición de divisibilidad.
3. **Nivel de Amenaza:**
   - >= 3 sustos críticos: "Amenaza Inminente".
   - 1 - 2 sustos críticos: "Acecho Constante".
   - 0 sustos críticos: "Calma Tensa".

## Pruebas

### Caso normal

**Entrada:**
```text
tiempos_aparicion: [10, 20, 30, 45]
intervalo_alerta: 10