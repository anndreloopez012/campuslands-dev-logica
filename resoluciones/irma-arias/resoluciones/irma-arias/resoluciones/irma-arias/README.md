
## Entrega
- Nombre: Irma Yaneht Arias García
- Ejercicio: 005
- Area: logica-matematica / logica-general

## Checklist
- [x] Mi PR apunta a dev

## Pensamiento
Para ordenar las reparaciones, utilicé un objeto de referencia que asigna un valor numérico a cada nivel de prioridad. Luego, apliqué el método `.sort()` para organizar la lista de menor a mayor valor (de mayor a menor urgencia).

## Reglas Aplicadas
1. Prioridad Alta (Emergencia) debe atenderse primero.
2. Prioridad Media y Baja siguen en orden descendente.

## Cómo ejecutar
Ejecuta el archivo con: `node irma-arias.js`

## Casos de Prueba
- **Normal**: Lista desordenada con tres niveles de prioridad (Resultado: Ordenado de alta a baja).
- **Caso Borde**: Lista con solo vehículos de prioridad "baja" (Resultado: Se mantiene el orden original).