# Diagnóstico de Seguridad para Sesión de Tatuajes

## Análisis
- **Entrada:** Objeto de estado con variables booleanas de higiene y legalidad.
- **Proceso:** Evaluación de riesgos mediante condicionales jerárquicos.
- **Salida:** Estado de procedencia y mensaje de diagnóstico.

## Reglas aplicadas
1. Prioridad sanitaria (agujas y área).
2. Validación legal (menores de edad).

## Instrucciones
Ejecuta el archivo principal con `node nombre-apellido.js`.

## Explicación final
El problema se aborda mediante una validación en cascada. Se prioriza la seguridad biológica porque es un riesgo irreversible, dejando la validación legal para un segundo nivel, lo que garantiza un diagnóstico seguro y organizado.