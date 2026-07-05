# Ejercicio 010 - Redondeo y precisión

## ¿Cómo pensé el problema?

Primero leí el enunciado para identificar qué datos entran y qué resultado debía obtener.

Después observé que era necesario tomar un puntaje, sumarle un bono y restarle una penalización. Al final usé redondeo para asegurar que el resultado fuera un número entero.

## Reglas que apliqué

- Tomar el puntaje más alto de la lista.
- Sumar el bono.
- Restar la penalización.
- Redondear el resultado.
- Si el puntaje final es 25 o más, la clasificación es **competitivo**.
- Si es menor de 25, la clasificación es **basico**.
- Si la lista de participantes está vacía, mostrar un mensaje indicando que no se puede realizar el cálculo.

## ¿Cómo ejecutar la solución?

1. Abrir una terminal.
2. Entrar a la carpeta donde está el archivo.
3. Ejecutar:

```bash
node nombre-apellido.js
```

## Casos que probé

### Caso del ejercicio

- Participantes: 12, 18, 25 y 30
- Bono: 8
- Penalización: 3

Resultado:

- Puntaje final: 35
- Clasificación: competitivo

### Prueba propia

- Participantes: 10, 14 y 19
- Bono: 5
- Penalización: 2

Resultado:

- Puntaje final: 22
- Clasificación: basico

### Caso borde

Probé una lista de participantes vacía para verificar que el programa no falle y muestre un mensaje indicando que no es posible realizar el cálculo.