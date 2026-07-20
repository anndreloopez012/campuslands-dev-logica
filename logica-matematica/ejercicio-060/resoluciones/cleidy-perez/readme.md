# Simulación con fórmulas en comida urbana

## Análisis

**Entrada:**
- Arreglo con comidas, precio y ventas.

**Proceso:**
- Validar los datos numéricos.
- Calcular el ingreso (`precio × ventas`).
- Clasificar cada comida según su ingreso.
- Acumular el ingreso total.

**Salida:**
- Nivel de venta de cada comida.
- Ingreso total.

## Reglas identificadas

- Precio y ventas deben ser números no negativos.
- Si el ingreso es de Q100 o más, la venta es alta.
- En otro caso, la venta es baja.

## Pruebas

### Caso normal

**Entrada:**
```javascript
[{nombre:"Tacos", precio:20, ventas:5}]
```

**Resultado esperado:**
```text
Tacos: venta alta
Ingreso total: Q100
```

### Caso borde

**Entrada:**
```javascript
[{nombre:"Prueba", precio:-1, ventas:2}]
```

**Resultado esperado:**
```text
Prueba: datos inválidos
Ingreso total: Q0
```

## Explicación final

La solución utiliza arreglos, funciones, ciclos, condicionales y un acumulador para simular ventas y calcular ingresos mediante una fórmula sencilla.

## Sugerencia

Convierte cada regla del problema en una condición antes de programar.