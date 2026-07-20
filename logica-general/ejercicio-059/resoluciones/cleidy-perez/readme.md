# Inventario lógico de fórmulas químicas

## Análisis

**Entrada:**
- Arreglo con fórmulas químicas y cantidades.

**Proceso:**
- Recorrer el arreglo.
- Verificar el nivel de existencias.
- Sumar las cantidades.

**Salida:**
- Estado de cada fórmula y total de frascos.

## Reglas identificadas

- Cantidad 0: Agotado.
- Cantidad menor que 10: Stock bajo.
- Cantidad de 10 o más: Stock suficiente.

## Pruebas

### Caso normal

**Entrada:**
```javascript
[
  {nombre:"Agua", cantidad:12},
  {nombre:"Sal común", cantidad:5}
]
```

**Resultado esperado:**
```
Agua: Stock suficiente
Sal común: Stock bajo
Total de frascos: 17
```

### Caso borde

**Entrada:**
```javascript
[
  {nombre:"CO2", cantidad:0}
]
```

**Resultado esperado:**
```
CO2: Agotado
Total de frascos: 0
```

## Explicación final

La solución usa un arreglo, una función, ciclos, condicionales y un acumulador para controlar el inventario y realizar el cálculo del total de existencias.

## Sugerencia

Convierte cada regla del problema en una condición antes de programar.