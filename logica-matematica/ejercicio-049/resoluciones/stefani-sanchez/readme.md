# Ejercicio 049 - Módulos y divisibilidad

## ¿Cómo pensé el problema?

Analicé cada número de la lista utilizando el operador módulo (%). Si el número era par, se sumó el bono; si era impar, se aplicó una penalización. Finalmente se calculó el puntaje total y su clasificación.

## Reglas aplicadas

- Recorrer la lista de participantes.
- Si el número es par (`% 2 === 0`), sumar el bono.
- Si es impar, restar la penalización.
- Acumular el puntaje total.
- Clasificar el resultado:
  - 100 o más: elite.
  - 50 a 99: competitivo.
  - Menor de 50: básico.
- Si la lista está vacía, mostrar "sin datos".

## ¿Cómo ejecutar?

```bash
node stefani-sanchez.js
```

## Casos de prueba

### Caso normal

Entrada:

- Participantes: [12, 18, 25, 30]
- Bono: 8
- Penalización: 3

Resultado:

- Se calcula el puntaje total aplicando las reglas de divisibilidad.

### Caso borde

Entrada:

- Participantes: []
- Bono: 8
- Penalización: 3

Resultado:

- Puntaje final: 0.
- Clasificación: sin datos.