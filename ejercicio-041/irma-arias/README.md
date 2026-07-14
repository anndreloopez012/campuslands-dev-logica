
# Resolución Lógica 042 - Validación de datos - Irma Arias

## Pensamiento del problema
La validación de datos es la primera línea de defensa en cualquier sistema. En lugar de simplemente devolver "true" o "false", diseñé la solución para que recolecte todos los errores encontrados, permitiendo al usuario corregirlos de una sola vez.

## Reglas aplicadas
1. **Filtro de Edad:** Mínimo 18 años para competencia profesional.
2. **Coherencia Numérica:** Los goles no admiten valores negativos.
3. **Rango de Identificación:** La camiseta debe estar entre 1 y 99.

## Ejecución
`node irma-arias.js`

## Casos probados
1. **Caso Normal:** Datos correctos. (Resultado: `valido: true`).
2. **Caso Borde:** Múltiples errores (edad, goles y camiseta a la vez). (Resultado: Lista detallada de errores).