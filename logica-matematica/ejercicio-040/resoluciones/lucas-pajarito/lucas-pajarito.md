# Plantilla de solución

## Análisis

### Entrada

- Una lista de pedidos.
- Nombre del cliente.
- Cantidad de hamburguesas.
- Cantidad de papas.
- Cantidad de bebidas.

### Proceso

1. Recorrer la lista de pedidos.
2. Calcular el subtotal del pedido.
3. Calcular el impuesto del 12%.
4. Calcular el total a pagar.
5. Mostrar los resultados.

### Salida

- Nombre del cliente.
- Subtotal.
- Impuesto.
- Total a pagar.

---

## Reglas identificadas

1. El precio de una hamburguesa es **Q35.00**.
2. El precio de una porción de papas es **Q15.00**.
3. El precio de una bebida es **Q10.00**.
4. Se aplica un impuesto del **12%** sobre el subtotal.
5. El total se calcula mediante:

**Total = Subtotal + Impuesto**

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "cliente": "Carlos",
    "hamburguesas": 2,
    "papas": 1,
    "bebidas": 2
}
```

**Cálculo**

```text
Subtotal = (2 × 35) + (1 × 15) + (2 × 10)

Subtotal = 70 + 15 + 20

Subtotal = Q105

Impuesto = 105 × 0.12

Impuesto = Q12.60

Total = 105 + 12.60

Total = Q117.60
```

**Resultado esperado**

```text
Cliente: Carlos
Subtotal: Q105.00
Impuesto (12%): Q12.60
Total a pagar: Q117.60
```

---

### Caso borde

**Entrada**

```python
{
    "cliente": "Cliente Nuevo",
    "hamburguesas": 0,
    "papas": 0,
    "bebidas": 0
}
```

**Cálculo**

```text
Subtotal = 0

Impuesto = 0

Total = 0
```

**Resultado esperado**

```text
Cliente: Cliente Nuevo
Subtotal: Q0.00
Impuesto (12%): Q0.00
Total a pagar: Q0.00
```

> Este es un caso borde porque el cliente no solicitó ningún producto. El programa debe calcular correctamente que tanto el subtotal, el impuesto y el total son **Q0.00**.

---

## Explicación final

La solución utiliza una **simulación basada en fórmulas matemáticas** para calcular el costo total de un pedido. Primero obtiene el subtotal multiplicando la cantidad de cada producto por su precio unitario. Luego calcula el impuesto aplicando el 12% sobre el subtotal y finalmente obtiene el total a pagar sumando ambos valores. Este procedimiento representa el funcionamiento básico de un sistema de facturación.

---

## Sugerencia

Cuando desarrolles simulaciones con fórmulas, divide el problema en pequeños cálculos. Primero calcula cada parte del proceso (subtotal, impuestos, descuentos, etc.) y al final combina los resultados para obtener el valor total. Esto hace que el código sea más claro, fácil de mantener y sencillo de verificar.
