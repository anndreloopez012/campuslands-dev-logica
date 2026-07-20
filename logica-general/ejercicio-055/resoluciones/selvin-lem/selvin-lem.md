# Resolucion - Logica general 055

## Como pensé el problema
El reto plantea un escenario de clasificación de estados basado en jerarquías de riesgo bajo un contexto de dibujo digital, donde identificar bloqueos (como fallos en el renderizado, archivos de lienzo corruptos o capas bloqueadas de la ilustración) es el primer paso crítico antes de continuar con la producción de las capas aprobadas o pendientes. Diseñé la solución centralizando los criterios de control en una única lista inmutable de prioridades, lo cual descarta la necesidad de utilizar estructuras condicionales acopladas difíciles de escalar y mantiene el análisis lineal directo.

## Reglas aplicadas
- Jerarquía estricta de evaluación: bloqueado > pendiente > aprobado.
- Control preliminar de flujo: si los datos de entrada son inexistentes o carecen de longitud, el algoritmo detiene su ejecución indicando falta de parámetros.
- Determinación de estado nulo: cuando ninguno de los elementos suministrados se encuentra dentro del estándar de control conocido, el sistema define un estado sin acción requerida.

## Pasos que se siguió al realizarlo
1. Definición externa del orden prioritario de los elementos bajo un índice estático de criticidad.
2. Comprobación estructural del parámetro que almacena las opciones para rechazar conjuntos vacíos antes de la carga de lógica.
3. Ejecución de un ciclo lineal que compara secuencialmente los ítems provistos contra el orden de riesgo jerárquico.
4. Ruptura anticipada del flujo y retorno de resultados al procesar el estado prioritario detectado más peligroso.


## Casos probados
1. Caso normal: ["aprobado", "pendiente", "bloqueado"] → revisar bloqueado.
2. Caso borde vacío: [] → sin datos.
3. Caso borde sin riesgo conocido: ["aprobado", "aprobado"] → revisar aprobado.