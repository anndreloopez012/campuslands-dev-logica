# Plantilla de solucion


## Analisis


- Entrada: Es una arreglo de cadenas (`itmes`) que representa el estado de las tareas y una cadena (`prioridad`) con el nivel que urgencia.
- Proceso: Es comprobar através de un estructura de condicional si el arreglo incluye el elemento crítico "bloquedo" al mismo tiempor que la prioridad es "alta".
- Salida: es un objeto con la `acción` a tomar y el `motivo` de la decisión.


## Reglas identificadas
"
1. Si la lista tienen "bloqueado" y la prioridad global es "alta", se debe priorizar obligatoriamente la revisión del bloqueo.
2. Si la prioridad no es alta o no exidten elementos bloqueados el sistema continúa con la gestión de tareas normales (pendientes/aprobados).
3. La solución debe ser directa y evitar dependencias de librerías externas.
