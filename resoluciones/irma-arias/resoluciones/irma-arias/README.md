
# Ejercicio 001 - Clasificación por Reglas (Videojuegos Competitivos)

## Descripción
Solución lógica para la clasificación de estados de elementos en un entorno de desarrollo de videojuegos. El objetivo es priorizar acciones basadas en reglas de negocio específicas.

## Análisis del Problema
Para resolver este reto, identifiqué las siguientes variables:
- **Entrada:** Una lista de estados (`items`) y una prioridad (`prioridad`).
- **Salida:** Un objeto con la `accion` a realizar y el `motivo` de la decisión.

### Reglas aplicadas:
1. **Validación:** Se verifica si la lista de entrada está vacía para evitar errores.
2. **Prioridad de Riesgo:** Si el estado "bloqueado" existe en la lista, se prioriza su revisión sobre cualquier otra tarea, independientemente de la prioridad asignada.
3. **Flujo Normal:** Si no hay bloqueos, se evalúa la prioridad para determinar si se requiere acción inmediata.

## Cómo revisar la solución
1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) para ejecutar código JavaScript.
2. Abre la terminal en esta carpeta.
3. Ejecuta el archivo con el comando: `node irma-arias.js`

## Casos de prueba realizados
1. **Caso Normal (Ejemplo):** 
   - Entrada: `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`
   - Resultado: Se prioriza la revisión del bloqueado.
   
2. **Caso Borde (Lista vacía):**
   - Entrada: `items: []`, `prioridad: "baja"`
   - Resultado: El sistema devuelve un mensaje de espera indicando que no hay datos.