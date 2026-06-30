# Analisis

- **Entrada:** `turista` (objeto con `edad`, `esInternacional`, `presupuesto`, `tipo`).
- **Proceso:** Se utiliza una serie de condicionales de guardia para descartar automáticamente a los turistas que no cumplen con los requisitos mínimos legales o de seguridad.
- **Salida:** Un objeto con el estado `aprobado` y la `razon` de la decisión.

## Reglas aplicadas

1. **Suficiencia Económica:** El presupuesto debe ser igual o mayor a 500.
2. **Protección al Menor:** Se bloquean viajes internacionales para menores de 18 años.
3. **Seguridad del Adulto Mayor:** Se restringen viajes de "aventura" para personas mayores de 70 años.

## Casos probados

### Caso normal
- **Entrada:** { edad: 25, esInternacional: true, presupuesto: 1000, tipo: "relax" }
- **Resultado:** { aprobado: true, razon: "Reserva confirmada con éxito." }

### Caso borde
- **Entrada:** { edad: 16, esInternacional: true, presupuesto: 600, tipo: "relax" }
- **Resultado:** { aprobado: false, razon: "Menores requieren tutor para viajes internacionales." }

## Explicacion final

Al filtrar los datos de entrada por presupuesto y edad antes de procesar el tipo de viaje, se logra un código ordenado donde cada regla se evalúa de manera independiente.