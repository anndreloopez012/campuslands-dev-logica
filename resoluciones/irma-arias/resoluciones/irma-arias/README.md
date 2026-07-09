
# Resolución: Ejercicio 001.2 - Clasificación por reglas (Pseudocódigo)

## Pensamiento lógico
He modelado el problema como un sistema de filtrado jerárquico. Las reglas se evalúan en un orden estricto de criticidad: primero los bloqueos (riesgos), luego los pendientes (operativos) y finalmente el estado completado.

## Reglas aplicadas
1. **Regla de Prioridad Máxima:** Si el estado 'bloqueado' aparece, cualquier otra tarea pasa a segundo plano.
2. **Validación de seguridad:** Se verifica si la entrada está vacía antes de procesar para evitar errores lógicos.

## Cómo revisar
Este pseudocódigo sigue una estructura de control de flujo estándar (`SI/SINO SI`). Es independiente del lenguaje y puede traducirse directamente a Python, JavaScript o Java.

## Casos probados
1. **Caso Normal:** ["aprobado", "pendiente", "bloqueado"] -> Resultado: revisar bloqueado.
2. **Caso Borde:** Lista vacía [] -> Resultado: esperar.
3. **Caso Borde:** ["aprobado", "aprobado"] -> Resultado: nada.