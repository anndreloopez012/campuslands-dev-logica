
# Ejercicio 060: Estrategias de Selección - Comida Urbana

## Estudiante
Irma Arias

## ¿Cómo pensé el problema?
Se analizó el flujo de un negocio de comida urbana donde es necesario atender primero los pedidos que tienen mayor urgencia o son de tipo express para optimizar el servicio y evitar retrasos operativos.

## Reglas aplicadas
1. **Validación de datos**: Se verifica que la entrada no esté vacía para evitar errores de ejecución.
2. **Priorización por urgencia**: El algoritmo busca de manera inteligente el primer pedido que contenga prioridad `alta` o tipo `express`.
3. **Respaldo por defecto**: Si ningún pedido cumple con la condición de urgencia, se procesa el primer elemento disponible en la lista.

## Casos probados
- **Caso Normal**: Una lista con varios platos de comida urbana con diferentes niveles de prioridad y tipo de entrega.
- **Caso Borde**: Una lista completamente vacía para comprobar la robustez y evitar fallos del sistema.

## ¿Cómo ejecutar o revisar la solución?
Abre la terminal integrada en Visual Studio Code y ejecuta el siguiente comando:

```bash
node ejercicio-060/resoluciones/irma-arias/irma-arias.js