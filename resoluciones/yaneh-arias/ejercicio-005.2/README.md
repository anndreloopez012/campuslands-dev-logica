
# Ejercicio 005.2: Ordenamiento de Prioridades - Taller Mecánico

## Pensamiento del problema
He abordado este reto dividiendo la lista desordenada en tres sub-listas (cubetas) según la urgencia del vehículo. Luego, al unir estas listas, garantizo que el orden sea siempre el correcto según las reglas del taller.

## Reglas aplicadas
1. **Prioridad Alta:** Los vehículos "urgentes" siempre van al inicio.
2. **Prioridad Media:** Los de "mantenimiento" siguen a los urgentes.
3. **Prioridad Baja:** Las "revisiones" cierran la fila de atención.

## Cómo revisar la solución
La lógica está explicada mediante pseudocódigo en el archivo `irma-arias.md`. Este método permite entender el flujo sin depender de la sintaxis de un lenguaje específico.

## Casos de prueba
- **Caso Normal:** ["revision", "urgente", "mantenimiento"] -> ["urgente", "mantenimiento", "revision"]
- **Caso Borde:** ["urgente", "urgente"] -> ["urgente", "urgente"]