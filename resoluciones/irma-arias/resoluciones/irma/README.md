
# Resolución: Clasificación por Reglas

## Pensamiento lógico
Para resolver este problema, identifiqué que la jerarquía es más importante que la cantidad de datos. Utilicé una estructura condicional que evalúa primero los estados críticos ("bloqueado") antes de pasar a tareas administrativas ("pendiente").

## Reglas aplicadas
1. **Prioridad Crítica:** El estado "bloqueado" siempre tiene la máxima prioridad.
2. **Prioridad Operativa:** El estado "pendiente" solo se procesa si no existen bloqueos.
3. **Validación:** Se incluyó un chequeo de lista vacía para evitar errores en tiempo de ejecución.

## Ejecución
El script no requiere librerías externas. Solo necesitas tener instalado Python 3.x.
Ejecuta en la terminal: `python juan-perez.py`

## Casos de prueba
* **Caso Normal:** Lista con [aprobado, pendiente, bloqueado] -> Resultado: revisar bloqueado.
* **Caso Borde:** Lista vacía -> Resultado: esperar (manejado como error de control).
* **Caso Borde:** Todos aprobados -> Resultado: finalizado.