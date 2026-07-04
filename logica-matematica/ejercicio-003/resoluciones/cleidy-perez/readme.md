# Plantilla de solucion


## Analisis


- Entrada: Un arreglo de cadenas (`items`) que representa el estado de las tareas y una cadena (`prioridad`) con el nivel de urgencia.
- Proceso: Comprobar mediante una estructura condicional si el arreglo incluye el elemento crítico "bloqueado" al mismo tiempo que la prioridad es "alta".
- Salida: Un objeto con la `accion` a tomar y el `motivo` de la decisión.


## Reglas identificadas




1. Si la lista contiene "bloqueado" y la prioridad global es "alta", se debe priorizar obligatoriamente la revisión del bloqueo.
2. Si la prioridad no es alta o no existen elementos bloqueados, el sistema continúa con la gestión de tareas normales (pendientes/aprobados).
3. La solución debe ser directa y evitar dependencias de librerías externas.


## Pruebas


### Caso normal


Entrada:
- items: `["aprobado", "pendiente", "bloqueado"]`
- prioridad: `"alta"`


Resultado esperado:
- accion: `"revisar bloqueado"`
- motivo: `"la regla prioriza riesgos antes de tareas normales."`


### Caso borde


Entrada:
- items: `["aprobado", "pendiente"]`
- prioridad: `"baja"`


Resultado esperado:
- accion: `"revisar pendientes/aprobados"`
- motivo: `"no hay riesgos bloqueados con prioridad alta."`


## Explicacion final


Escribe aqui por que tu solucion funciona:
La solución funciona porque utiliza el método nativo `.includes()` de JavaScript, el cual evalúa de manera eficiente la existencia de un elemento en el arreglo en una sola línea de código. Al combinarlo con el operador lógico `&&`, se garantiza que la regla de negocio estricta solo se dispare cuando coincidan ambas condiciones críticas, resolviendo el problema de forma breve y ordenada.


## Sugerencia


Convierte cada regla del problema en una condicion clara antes de programar.

