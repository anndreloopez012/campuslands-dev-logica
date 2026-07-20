# Resolucion - Logica general 052

## Como pensé el problema
Identifiqué que el núcleo del problema es ordenar la toma de decisiones mediante una escala de gravedad. En lugar de usar múltiples condiciones anidadas ("if/else"), utilicé un arreglo de control que representa la jerarquía de riesgos de mayor a menor. Esto permite que el sistema tome la decisión correcta evaluando los elementos en una sola iteración limpia.

## Reglas aplicadas
- Jerarquía de resolución fija: bloqueado > pendiente > aprobado.
- Validación de datos de entrada: si la lista está vacía, se detiene el proceso de inmediato.
- Salida consistente: siempre se devuelve un objeto estructurado con la acción y el motivo técnico.

## Pasos que se siguió al realizarlo
1. Declarar una constante global con el orden de prioridad estricto.
2. Comprobar que la entrada sea un arreglo con datos; si falla, retornar el estado de error.
3. Recorrer el arreglo de prioridades de arriba hacia abajo.
4. Validar si el estado actual del bucle existe en los elementos de entrada del usuario usando un método de búsqueda rápida.
5. Retornar la primera coincidencia encontrada para asegurar que siempre se atienda lo más grave primero.


## Casos probados
1. Caso normal: ["aprobado", "pendiente", "bloqueado"] → revisar bloqueado.
2. Caso borde vacío: [] → sin datos.
3. Caso borde sin riesgo: ["aprobado", "aprobado"] → revisar aprobado.