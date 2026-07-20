# Solucion - Ejercicio 033

## Analisis

- Entrada: una lista de estudiantes de paracaidismo (nombre, peso, horas de entrenamiento, certificacion, revision de equipo) y el clima del dia.
- Proceso: verificar primero si el clima permite saltar (regla global). Si el clima es apto, evaluar a cada estudiante contra un conjunto de reglas individuales, en orden de prioridad, y detenerse en la primera que incumpla.
- Salida: una lista con el resultado de cada estudiante (`nombre`, `autorizado`, `motivo`).

## Reglas identificadas

1. Si el clima no es "bueno" o "moderado", nadie salta, sin importar sus datos individuales (regla global de mayor prioridad).
2. Si el clima es apto, cada estudiante debe cumplir en orden: estar certificado, tener un peso entre 40 y 120 kg, tener al menos 8 horas de entrenamiento y tener el equipo revisado.
3. Un estudiante solo esta autorizado si pasa todas las reglas individuales.

## Pruebas

### Caso normal

Entrada:

```js
grupoNormal = [
  { nombre: 'Ana', peso: 65, horasEntrenamiento: 10, certificado: true, equipoRevisado: true },
  { nombre: 'Luis', peso: 90, horasEntrenamiento: 5, certificado: true, equipoRevisado: true },
];
clima = 'bueno';
```

Resultado esperado:

```js
[
  { nombre: 'Ana', autorizado: true, motivo: 'cumple con todas las condiciones para saltar' },
  { nombre: 'Luis', autorizado: false, motivo: 'no cumple con las horas minimas de entrenamiento (8h)' },
]
```

### Caso borde

Entrada 1 (clima malo, estudiante que individualmente cumpliria todo):

```js
grupoClimaMalo = [
  { nombre: 'Carla', peso: 60, horasEntrenamiento: 20, certificado: true, equipoRevisado: true },
];
clima = 'malo';
```

Resultado esperado:

```js
[ { nombre: 'Carla', autorizado: false, motivo: 'clima no apto para saltar' } ]
```

Entrada 2 (lista vacia):

```js
procesarSaltos([], 'bueno');
```

Resultado esperado:

```js
[]
```

## Explicacion final

El clima se valida antes que cualquier dato del estudiante porque es una condicion global: si no es apto, cualquier otra regla queda sin efecto. Para las reglas individuales use un arreglo de objetos `{ motivo, incumple }` en lugar de una cadena de `if/else`, de modo que el orden de prioridad quede explicito en el orden del arreglo y `Array.prototype.find` se detenga en la primera regla incumplida. Esto hace la solucion facil de leer y de extender si se agregan mas reglas en el futuro. El caso de lista vacia se maneja de forma explicita al inicio de `procesarSaltos`, devolviendo un arreglo vacio sin intentar iterar.