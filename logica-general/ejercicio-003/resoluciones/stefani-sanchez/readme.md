<<<<<<< HEAD
# Solución Logica General 003 - Toma de decisiones

## Estudiante

stefani-sanchez

## Cómo pensé el problema

Primero analicé las reglas del reto y separé la información en entradas, proceso y salida.

El problema consiste en tomar una decisión dependiendo del estado de los jugadores de un torneo de esports. La prioridad es detectar primero los casos de riesgo y después revisar situaciones menos urgentes.

## Entradas

La solución recibe:

* Una lista de jugadores con su nombre y estado.
* Una prioridad que indica la importancia de la revisión.

Ejemplo:

```text
jugadores:
- Ana: aprobado
- Luis: pendiente
- Carlos: bloqueado

prioridad:
alta
```

## Reglas aplicadas

1. Si existe al menos un jugador con estado **bloqueado**, se debe revisar primero.
2. Si no hay jugadores bloqueados pero existen jugadores **pendientes** y la prioridad es alta, se revisan los pendientes.
3. Si todos los jugadores están aprobados, el torneo puede continuar.

## Proceso de solución

La solución realiza los siguientes pasos:

1. Lee la información de los jugadores.
2. Clasifica los jugadores según su estado.
3. Aplica las reglas en orden de prioridad.
4. Devuelve una acción y el motivo de la decisión.

## Salida esperada

La solución muestra:

* La acción recomendada.
* La razón por la cual se tomó esa decisión.

Ejemplo:

```text
Accion: revisar bloqueado

Motivo:
La regla prioriza riesgos antes de tareas normales.
```

## Cómo ejecutar la solución

1. Abrir una terminal dentro de la carpeta del ejercicio.
2. Ejecutar:
=======
# Ejercicio 003 - Toma de decisiones

## ¿Cómo pensé el problema?

Analicé las entradas y definí reglas para decidir el estado de un equipo según la cantidad de puntos obtenidos en un torneo de esports.

## Reglas aplicadas

- Validar que el nombre exista.
- Validar que los puntos sean un número mayor o igual a cero.
- Si tiene 20 puntos o más, clasifica directamente.
- Si tiene entre 10 y 19 puntos, juega repechaje.
- Si tiene menos de 10 puntos, queda eliminado.

## ¿Cómo ejecutar?
>>>>>>> 0f99bf7 (feat: resolver ejercicio 003)

```bash
node stefani-sanchez.js
```

<<<<<<< HEAD
3. Revisar el resultado mostrado en consola.

## Casos probados

### Caso 1: Prueba normal

Entrada:

```text
Maria: aprobado
Pedro: pendiente
Prioridad: alta
```

Resultado esperado:

```text
Accion: revisar pendientes
```

Explicación:

Existe un jugador pendiente y la prioridad es alta, por lo tanto se debe revisar.

---

### Caso 2: Caso borde

Entrada:

```text
Sofia: aprobado
Juan: aprobado
Prioridad: baja
```

Resultado esperado:

```text
Accion: continuar torneo
```

Explicación:

No existen jugadores bloqueados ni pendientes, por lo que el torneo puede continuar.

## Conclusión

La solución aplica reglas de negocio mediante condicionales para tomar una decisión ordenada. Se priorizan los casos críticos antes de continuar con el proceso normal.
=======
## Casos probados

### Caso normal

Entrada

```text
Nombre: Dragons
Puntos: 22
```

Salida

```text
Dragons: Clasifica directamente a la siguiente ronda.
```

### Caso borde

Entrada

```text
Nombre: Phoenix
Puntos: 0
```

Salida

```text
Phoenix: Queda eliminado del torneo.
```
>>>>>>> 0f99bf7 (feat: resolver ejercicio 003)
