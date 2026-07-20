# Plantilla de solución

## Análisis

### Entrada

- Una lista de proyectos de animación 3D.
- Nombre del cliente.
- Presupuesto inicial.
- Porcentaje de descuento.

### Proceso

1. Recorrer la lista de proyectos.
2. Obtener el presupuesto inicial.
3. Calcular el monto del descuento.
4. Restar el descuento al presupuesto.
5. Mostrar los resultados.

### Salida

- Nombre del cliente.
- Presupuesto inicial.
- Descuento aplicado.
- Monto del descuento.
- Total a pagar.

---

## Reglas identificadas

1. El presupuesto debe ser un valor positivo.
2. El descuento debe estar entre **0% y 100%**.
3. El descuento se calcula mediante:

**Descuento = Presupuesto × (Porcentaje ÷ 100)**

4. El total se calcula mediante:

**Total = Presupuesto − Descuento**

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "cliente": "Carlos",
    "presupuesto": 2500,
    "descuento": 10
}
```

**Cálculo**

```text
Descuento = 2500 × 0.10

Descuento = 250

Total = 2500 - 250

Total = 2250
```

**Resultado esperado**

```text
Cliente: Carlos
Presupuesto inicial: Q2500.00
Descuento: 10%
Monto del descuento: Q250.00
Total a pagar: Q2250.00
```

---

### Caso borde

**Entrada**

```python
{
    "cliente": "Proyecto Demo",
    "presupuesto": 1500,
    "descuento": 0
}
```

**Cálculo**

```text
Descuento = 1500 × 0

Descuento = 0

Total = 1500 - 0

Total = 1500
```

**Resultado esperado**

```text
Cliente: Proyecto Demo
Presupuesto inicial: Q1500.00
Descuento: 0%
Monto del descuento: Q0.00
Total a pagar: Q1500.00
```

> Este es un caso borde porque el descuento es **0%**. El programa debe calcular correctamente que no existe rebaja y que el cliente paga el presupuesto completo.

---

## Explicación final

La solución aplica el cálculo de **presupuestos y descuentos** para determinar el monto que un cliente debe pagar por un proyecto de animación 3D. Primero calcula el valor monetario del descuento a partir de un porcentaje y luego lo resta del presupuesto inicial para obtener el total final.

---

## Sugerencia

Cuando resuelvas ejercicios de **presupuestos y descuentos**, calcula primero el valor del descuento utilizando el porcentaje correspondiente. Después réstalo del precio original y verifica que el porcentaje aplicado se encuentre dentro de un rango válido entre **0% y 100%**.