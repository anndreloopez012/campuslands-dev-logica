# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de reparaciones con la siguiente información:
    - Vehículo.
    - Costo de mano de obra.
    - Costo de los repuestos.

- **Proceso:**
  1. Recorrer la lista de reparaciones.
  2. Calcular el subtotal sumando la mano de obra y los repuestos.
  3. Calcular el IVA del 12%.
  4. Calcular el total a pagar sumando el subtotal y el IVA.
  5. Mostrar los resultados.

- **Salida:**
  - El subtotal.
  - El valor del IVA.
  - El total a pagar por cada reparación.

---

## Reglas identificadas

1. El subtotal es la suma de la mano de obra y los repuestos.
2. El IVA corresponde al **12%** del subtotal.
3. El total a pagar es la suma del subtotal más el IVA.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "vehiculo": "Toyota Corolla",
    "mano_obra": 350,
    "repuestos": 1200
}
```

**Resultado esperado**

```text
Vehículo: Toyota Corolla
Subtotal: Q1550.00
IVA (12%): Q186.00
Total a pagar: Q1736.00
```

**Cálculo**

```text
350 + 1200 = 1550

1550 × 0.12 = 186

1550 + 186 = 1736
```

---

### Caso borde

**Entrada**

```python
{
    "vehiculo": "Mazda 3",
    "mano_obra": 0,
    "repuestos": 0
}
```

**Resultado esperado**

```text
Vehículo: Mazda 3
Subtotal: Q0.00
IVA (12%): Q0.00
Total a pagar: Q0.00
```

> Este es un caso borde porque no existen costos de mano de obra ni de repuestos. El programa debe realizar los cálculos correctamente y mostrar un total de **Q0.00** sin producir errores.

---

## Explicación final

La solución funciona porque aplica operaciones aritméticas básicas para calcular el costo de cada reparación. Primero obtiene el subtotal sumando el costo de la mano de obra y los repuestos. Luego calcula el IVA aplicando el 12% sobre el subtotal y finalmente suma ambos valores para obtener el total a pagar. Esto permite conocer de forma clara el costo final de cada reparación.

---

## Sugerencia

Cuando un problema implique **costos y porcentajes**, realiza los cálculos en un orden lógico: primero suma los valores base para obtener el subtotal, después calcula el porcentaje correspondiente (como el IVA) y finalmente suma ambos resultados para obtener el total.