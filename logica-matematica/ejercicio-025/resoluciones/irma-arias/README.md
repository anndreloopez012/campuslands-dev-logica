
# Ejercicio 025: Mínimos y límites - Taller mecánico

## Autor
Yaneh Arias

## ¿Cómo lo pensé?
1. Se analizaron las entradas del problema: una lista de tiempos de reparación, un límite máximo permitido y una penalización en caso de excederlo.
2. Se contempló un filtro inicial para validar arreglos vacíos y evitar errores.
3. Se utilizó un acumulador (`reduce`) para sumar el total de los tiempos.
4. Se aplicó una condición para evaluar si el total supera el límite establecido, sumando la penalización de ser necesario.

## Reglas aplicadas
* Validación de datos de entrada (evitar listas vacías).
* Acumulación numérica de los tiempos de taller.
* Condicional de límites con aplicación de penalización extra si se excede el máximo.

## Cómo ejecutar
Ejecuta el archivo con Node.js desde tu terminal:
```bash
node yaneh-arias.js