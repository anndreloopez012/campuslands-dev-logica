# Plantilla de solución

## Análisis

### Entrada

- Una lista de tatuajes.
- Nombre del cliente.
- Ancho del diseño.
- Alto del diseño.

### Proceso

1. Recorrer la lista de tatuajes.
2. Obtener el ancho y el alto de cada diseño.
3. Calcular el área.
4. Calcular el perímetro.
5. Mostrar los resultados.

### Salida

- Nombre del cliente.
- Dimensiones del tatuaje.
- Área del diseño.
- Perímetro del diseño.

---

## Reglas identificadas

1. El ancho y el alto deben ser valores positivos.
2. El área de un rectángulo se calcula mediante:

\[
Área = ancho \times alto
\]

3. El perímetro de un rectángulo se calcula mediante:

\[
Perímetro = 2 \times (ancho + alto)
\]

4. Todos los resultados se expresan en centímetros.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "cliente": "Carlos",
    "ancho": 12,
    "alto": 8
}
```

**Cálculo**

```text
Área = 12 × 8

Área = 96 cm²

Perímetro = 2 × (12 + 8)

Perímetro = 40 cm
```

**Resultado esperado**

```text
Cliente: Carlos
Dimensiones: 12 cm x 8 cm
Área: 96 cm²
Perímetro: 40 cm
```

---

### Caso borde

**Entrada**

```python
{
    "cliente": "Prueba",
    "ancho": 1,
    "alto": 1
}
```

**Cálculo**

```text
Área = 1 × 1

Área = 1 cm²

Perímetro = 2 × (1 + 1)

Perímetro = 4 cm
```

**Resultado esperado**

```text
Cliente: Prueba
Dimensiones: 1 cm x 1 cm
Área: 1 cm²
Perímetro: 4 cm
```

> Este es un caso borde porque el diseño posee las dimensiones mínimas posibles. Aun así, el programa debe calcular correctamente el área y el perímetro.

---

## Explicación final

La solución calcula el **área** y el **perímetro** de un diseño rectangular para tatuajes. El área permite estimar la superficie que ocupará el tatuaje sobre la piel, mientras que el perímetro representa la longitud total de su contorno. Ambos cálculos son fundamentales para planificar el tamaño del diseño y estimar materiales o tiempo de trabajo.

---

## Sugerencia

Cuando resuelvas ejercicios sobre **áreas y perímetros**, identifica primero la figura geométrica. Una vez conocidas sus dimensiones, aplica la fórmula correspondiente para calcular el área y el perímetro de forma independiente, verificando siempre que las medidas sean positivas.