# Lógica general 056 - Matrices simples

## Análisis

**Entrada:**
- Matriz con los fotogramas de la animación.

**Proceso:**
- Recorrer la matriz.
- Validar las posiciones.
- Mostrar cada fotograma.
- Sumar todas las posiciones.

**Salida:**
- Fotogramas mostrados y suma total.

## Reglas identificadas

- Recorrer la matriz con ciclos.
- Validar que las posiciones sean mayores o iguales a 0.
- Usar una función y un acumulador.

## Pruebas

### Caso normal

**Entrada:**
```javascript
[
 [2,4,6],
 [4,6,8]
]
```

**Resultado esperado:**
```
Fotogramas mostrados.
Suma total: 30
```

### Caso borde

**Entrada:**
```javascript
[
 [0,0,0]
]
```

**Resultado esperado:**
```
Fotograma mostrado.
Suma total: 0
```

## Explicación final

La solución utiliza una matriz para representar los fotogramas de una animación 3D. Se recorren los datos con ciclos, se validan con condicionales y se calcula la suma de las posiciones mediante un acumulador.

## Sugerencia

Convierte cada regla del problema en una condición antes de programar.