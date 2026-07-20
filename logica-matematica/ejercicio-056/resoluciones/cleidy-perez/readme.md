# Lógica matemática 056 - presupuesto y descuentos

## Análisis

**Entrada:**
- Arreglo con proyectos y su precio.

**Proceso:**
- Recorrer el arreglo.
- Verificar si el precio es mayor o igual a Q1000.
- Aplicar descuento del 15%.
- Sumar el total.

**Salida:**
- Descuento aplicado y total a pagar.

## Reglas identificadas

- Usar un arreglo.
- Recorrer con un ciclo.
- Aplicar un condicional.
- Usar una función.
- Acumular el total.

## Pruebas

### Caso normal

**Entrada:**

```javascript
[
 {nombre:"Casa", precio:500},
 {nombre:"Personaje", precio:1200}
]
```

**Resultado esperado:**

```
Casa no tiene descuento.
Personaje tiene 15% de descuento.
Total a pagar: Q1520
```

### Caso borde

**Entrada:**

```javascript
[
 {nombre:"Logo", precio:1000}
]
```

**Resultado esperado:**

```
Logo tiene 15% de descuento.
Total a pagar: Q850
```

## Explicación final

La solución recorre un arreglo de proyectos, verifica si aplica descuento y calcula el total utilizando ciclos, condicionales, funciones y un acumulador.

## Sugerencia

Convierte cada regla del problema en una condición antes de programar.