# Plantilla de solucion

## Analisis

- **Entrada:** Una lista de estados de tareas o elementos (items), un nivel de urgencia (prioridad) y una directiva de ordenamiento (regla).
- **Proceso:** Validar la presencia de elementos en la lista. Evaluar los elementos según la regla de negocio establecida para identificar factores de riesgo o bloqueos críticos, ordenando la respuesta según la prioridad indicada.
- **Salida:** Un objeto explicativo que detalla la acción inmediata a tomar y el argumento lógico que justifica dicha decisión.

## Reglas identificadas

1. **Gestión de Riesgos:** Las tareas en estado crítico o bloqueado se evalúan con máxima prioridad para evitar retrasos operativos en el flujo de trabajo.
2. **Criterio de Exclusión:** Si la lista de elementos está vacía o no cuenta con parámetros válidos, el sistema retorna una acción de espera especificando la ausencia de datos.
3. **Jerarquía de Reglas:** La directiva explícita de la regla de negocio antepone la resolución de impedimentos antes de procesar el flujo normal de las actividades.

## Pruebas

### Caso normal

Entrada:
items: ["aprobado", "pendiente", "bloqueado"]
prioridad: alta
regla: revisar bloqueados primero

Resultado esperado:
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales.

### Caso borde

Entrada:
items: []
prioridad: baja
regla: revisar bloqueados primero

Resultado esperado:
accion: sin accion inmediata
motivo: no se encontraron elementos registrados en la lista para evaluar.

## Como revisar la solucion

1. Navegar hasta la ruta personal de la entrega.
2. Ejecutar el archivo de script principal utilizando el entorno de ejecución correspondiente en la terminal.
3. Verificar que los objetos de salida impresos en la consola coincidan exactamente con los escenarios descritos en las pruebas.

## Explicacion final

La solución funciona de forma excelente porque automatiza la clasificación de prioridades en un flujo operativo. Al evaluar dinámicamente el arreglo de estados y aplicar la regla condicional, el sistema detecta de inmediato si existe un bloqueo crítico que detenga el avance general. Gracias a esto, los riesgos se mitigan en primera instancia antes de saturar el sistema con tareas comunes, asegurando una toma de decisiones limpia, eficiente y ordenada basada en la urgencia real del contexto.