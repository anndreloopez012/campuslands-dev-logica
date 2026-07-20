# Ejercicio 050 - Redondeo y precisión

## ¿Cómo pensé el problema?

Primero calculé el promedio de los valores ingresados. Después sumé el bono, resté la penalización y redondeé el resultado a dos decimales utilizando `Math.round()`.

## Reglas aplicadas

- Calcular la suma de los participantes.
- Obtener el promedio.
- Sumar el bono.
- Restar la penalización.
- Redondear el resultado a dos decimales.
- Clasificar:
  - 30 o más: elite.
  - 20 a 29.99: competitivo.
  - Menor de 20: básico.
- Si no hay participantes, devolver "sin datos".

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

- Se obtiene el puntaje final redondeado y su clasificación.

### Caso borde

Entrada:

- Participantes: []
- Bono: 8
- Penalización: 3

Resultado:

- Puntaje final: 0.
- Clasificación: sin datos.