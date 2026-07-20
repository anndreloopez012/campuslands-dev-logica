# Logica matematica 041 - operaciones aritmeticas controladas

## Analisis

- Entrada: Un arreglo de números (participantes), un número para bono y un número para penalización.
- Proceso: Sumar todos los números del arreglo, sumar el bono y restar la penalización. Luego clasificar el resultado.
- Salida: El puntaje final y la clasificación correspondiente.

## Reglas identificadas

1. Sumar todos los números del arreglo de participantes.
2. Al resultado sumarle el bono.
3. Al resultado restarle la penalización.
4. Si el puntaje final es mayor o igual a 25, clasifica como "competitivo".
5. Si es menor a 25, clasifica como "normal".

## Pruebas

### Caso normal

Entrada: participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3

Resultado esperado: puntaje_final: 90, clasificacion: competitivo

### Caso borde

Entrada: participantes: [], bono: 0, penalizacion: 0

Resultado esperado: puntaje_final: 0, clasificacion: normal

## Explicacion final

La solución suma todos los números del arreglo, luego aplica el bono y la penalización. Con el resultado final, revisa si es mayor o igual a 25 para dar la clasificación. Si el arreglo está vacío, la suma es 0.