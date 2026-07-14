
# Ejercicio 031: Organización de Listas (Kickboxing)

## Pensamiento Lógico
Para resolver este problema, traté la lista como un sistema de ranking. La lógica principal consiste en usar una función de comparación doble: primero evaluamos la experiencia (victorias) y, si es igual, evaluamos la categoría física (peso) para desempatar.

## Reglas Aplicadas
1. **Prioridad de experiencia**: Los peleadores con más victorias ocupan las posiciones superiores.
2. **Desempate por categoría**: Ante el mismo número de victorias, se prioriza al peleador de menor peso (más ligero).

## Casos de Prueba
- **Caso Normal**: Lista con diferentes niveles de victorias.
- **Caso de Desempate**: Dos peleadores con 8 victorias; el de 70kg aparece antes que el de 75kg.
- **Caso Borde**: Lista vacía; el sistema retorna un mensaje de error controlado.