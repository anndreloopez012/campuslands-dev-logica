
# Ejercicio 014: Gestión de Puntajes

## Pensamiento del problema
El reto requiere clasificar jugadores basándose en su puntaje, manteniendo la integridad de los datos en caso de que dos jugadores obtengan el mismo resultado (empate técnico).

## Reglas aplicadas
1. **Ordenamiento:** Se utiliza `sort` para organizar los puntajes descendentemente.
2. **Validación de Empate:** Se compara el puntaje actual con el anterior; si son iguales, se asigna el estado 'Empate técnico'.
3. **Estructura:** Se devuelve un objeto mapeado con el puesto correspondiente.

## Cómo ejecutar
Ejecuta en tu terminal: `node yaneh-arias.js`

## Casos de prueba
- **Normal:** Jugadores con puntajes `90, 85, 90` -> Maneja el empate correctamente.
- **Caso Borde:** Lista con un solo jugador -> Retorna puesto 1.