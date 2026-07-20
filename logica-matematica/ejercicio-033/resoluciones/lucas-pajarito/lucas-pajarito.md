# Plantilla de solución

## Análisis

### Entrada

- Una lista de paracaidistas.
- Nombre del paracaidista.
- Coordenada X.
- Coordenada Y.

### Proceso

1. Recorrer la lista de paracaidistas.
2. Obtener las coordenadas X y Y.
3. Calcular la distancia desde el origen utilizando el Teorema de Pitágoras.
4. Mostrar los resultados.

### Salida

- Nombre del paracaidista.
- Coordenadas de aterrizaje.
- Distancia al punto de referencia.

---

## Reglas identificadas

1. Las coordenadas deben ser valores numéricos.
2. La distancia siempre será un valor positivo.
3. Se utiliza la fórmula:

\[
d=\sqrt{x^2+y^2}
\]

4. El resultado se muestra con dos decimales.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "paracaidista": "Carlos",
    "x": 12,
    "y": 8
}
```

**Cálculo**

```text
d = √(12² + 8²)

d = √(144 + 64)

d = √208

d = 14.42
```

**Resultado esperado**

```text
Paracaidista: Carlos
Coordenadas: (12, 8)
Distancia al punto de aterrizaje: 14.42 metros
```

---

### Caso borde

**Entrada**

```python
{
    "paracaidista": "Prueba",
    "x": 0,
    "y": 0
}
```

**Cálculo**

```text
d = √(0² + 0²)

d = 0
```

**Resultado esperado**

```text
Paracaidista: Prueba
Coordenadas: (0, 0)
Distancia al punto de aterrizaje: 0.00 metros
```

> Este es un caso borde porque el paracaidista aterriza exactamente en el punto de referencia. La distancia calculada es **0 metros**, lo que representa el valor mínimo posible.

---

## Explicación final

La solución aplica el **Teorema de Pitágoras** para calcular la distancia entre el punto de aterrizaje y el origen del sistema de coordenadas. Para cada paracaidista se elevan al cuadrado las coordenadas X y Y, se suman y posteriormente se obtiene la raíz cuadrada del resultado. Este procedimiento permite determinar la distancia recorrida en un plano cartesiano.

---

## Sugerencia

Cuando resuelvas ejercicios de **coordenadas y distancia**, identifica primero las coordenadas del punto. Después aplica la fórmula de distancia utilizando el Teorema de Pitágoras y muestra el resultado con una cantidad adecuada de decimales para mejorar la precisión.