# Ejercicio 098: Soldadura - Sistemas de turnos

## ¿Cómo pensé el problema?
Tratándose de un reto integrador controlado de nivel difícil, diseñé una arquitectura modular dividiendo el problema en tres partes: una función inicial para validar la existencia de la cola de espera, una función matemática encargada de calcular puntajes de prioridad basados en el tipo de proceso de soldadura (TIG, MIG, Electrodo), la urgencia industrial y los años de experiencia, y finalmente una función de ordenamiento y asignación de puestos en las estaciones disponibles.

## Reglas aplicadas
1. **Validación estructural:** Comprobar que el arreglo de entrada contenga registros válidos de soldadores en espera.
2. **Jerarquización por especialidad y urgencia:** Asignar mayor peso a procesos complejos (como TIG estructural) y proyectos marcados como urgentes.
3. **Distribución de estaciones:** Asignar turnos secuenciales y rotativos entre las estaciones de trabajo del taller.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-098/resoluciones/irma-arias/irma-arias.js