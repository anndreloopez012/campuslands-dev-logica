# Plantilla de solución

## Análisis

### Entrada

- Una lista de muestras químicas.
- Nombre del compuesto.
- Valor de pH.
- Temperatura de la muestra.

### Proceso

1. Recorrer la lista de muestras.
2. Verificar que el valor del pH esté dentro del rango permitido.
3. Verificar que la temperatura sea válida.
4. Mostrar el resultado de las validaciones.

### Salida

- Nombre del compuesto.
- Valor de pH.
- Temperatura.
- Resultado de las validaciones.

---

## Reglas identificadas

1. El valor del **pH** debe estar entre **0 y 14**.
2. La temperatura debe ser un valor numérico.
3. Para este ejercicio, la temperatura no puede ser negativa.
4. Si un valor no cumple las condiciones, debe indicarse como inválido.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "compuesto": "Agua (H2O)",
    "ph": 7,
    "temperatura": 25
}
```

**Cálculo**

```text
0 ≤ 7 ≤ 14 → Verdadero

25 ≥ 0 → Verdadero
```

**Resultado esperado**

```text
Compuesto: Agua (H2O)
pH: 7
Temperatura: 25 °C
Validación de pH: Correcta
Temperatura válida
```

---

### Caso borde

**Entrada**

```python
{
    "compuesto": "Muestra Experimental",
    "ph": 15,
    "temperatura": -5
}
```

**Cálculo**

```text
15 > 14 → pH inválido

-5 < 0 → Temperatura inválida
```

**Resultado esperado**

```text
Compuesto: Muestra Experimental
pH: 15
Temperatura: -5 °C
Validación de pH: Incorrecta
Temperatura inválida
```

> Este es un caso borde porque ambos valores se encuentran fuera de los límites establecidos. El programa debe detectar correctamente que tanto el pH como la temperatura son inválidos.

---

## Explicación final

La solución aplica **validaciones numéricas** para verificar que los datos de una muestra química sean correctos antes de utilizarlos. Primero comprueba que el valor del **pH** pertenezca al intervalo de **0 a 14**, que corresponde a la escala estándar. Después valida que la temperatura no sea negativa. Estas comprobaciones ayudan a detectar datos erróneos y garantizan que la información utilizada en los cálculos sea confiable.

---

## Sugerencia

Cuando resuelvas ejercicios de **validaciones numéricas**, define primero los límites permitidos para cada dato. Después utiliza operadores de comparación para verificar que cada valor pertenezca al rango establecido antes de realizar cualquier cálculo.