
# Ejercicio 014: Diagnóstico de Errores - Tatuajes

## Descripción
Este programa tiene como objetivo automatizar la validación de un flujo de trabajo para el retoque de tatuajes, asegurando que se sigan los protocolos de seguridad antes de comenzar cualquier procedimiento.

## Pensamiento del problema
Para resolver este ejercicio, estructuré la lógica basándome en una **jerarquía de riesgos**:
1. **Prioridad Crítica:** Identificar si existe algún elemento bloqueado. Si es así, se detiene el proceso sin importar el estado de los demás.
2. **Prioridad Secundaria:** Identificar si existen elementos pendientes. Esto requiere intervención humana antes de proceder.
3. **Estado Ideal:** Solo si todos los elementos están aprobados, se otorga la autorización para proceder.

## Reglas aplicadas
- **Detener:** Se activa si al menos un elemento de la lista contiene el estado "bloqueado".
- **Revisar:** Se activa si no hay bloqueos, pero existen elementos en estado "pendiente".
- **Proceder:** Se activa únicamente si la totalidad de los elementos están en estado "aprobado".

## Instrucciones de ejecución
El proyecto está desarrollado en JavaScript puro. Para ejecutarlo, asegúrate de tener instalado [Node.js](https://nodejs.org/) y sigue estos pasos:

1. Abre una terminal en la carpeta `resoluciones/tu-nombre/`.
2. Ejecuta el siguiente comando:
   ```bash
   node tu-nombre.js