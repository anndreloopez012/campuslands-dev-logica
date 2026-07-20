# Validación numérica de fórmulas químicas

## Análisis

**Entrada:**
- Arreglo con fórmulas químicas y cantidades.

**Proceso:**
- Validar que la cantidad sea numérica y no negativa.
- Recorrer el arreglo.
- Clasificar el inventario y sumar las cantidades válidas.

**Salida:**
- Estado de cada fórmula y total de frascos.

## Reglas identificadas

- La cantidad debe ser un número mayor o igual a 0.
- 0: agotado.
- Menor que 10: stock bajo.
- 10 o más: stock suficiente.

## Pruebas

### Caso normal

**Entrada:**
```javascript
[{ nombre: "Agua", cantidad: 8 }]
```

**Resultado esperado:**
```text
Agua: stock bajo
Total de frascos: 8
```

### Caso borde

**Entrada:**
```javascript
[{ nombre: "Prueba", cantidad: "cinco" }]
```

**Resultado esperado:**
```text
Prueba: cantidad inválida
Total de frascos: 0
```

## Explicación final

La solución valida los datos numéricos antes de procesarlos. Luego usa ciclos, condicionales y un acumulador para determinar el estado del inventario y calcular el total.

## Sugerencia

Convierte cada regla del problema en una condición antes de programar.