# Plantilla de solución

## Análisis

### Entrada

- Una lista de proyectos de dibujo digital.
- Nombre del artista.
- Velocidad de dibujo (cm/min).
- Tiempo de trabajo (min).

### Proceso

1. Recorrer la lista de proyectos.
2. Obtener la velocidad de dibujo.
3. Obtener el tiempo empleado.
4. Calcular la distancia recorrida por el lápiz.
5. Mostrar los resultados.

### Salida

- Nombre del artista.
- Velocidad de dibujo.
- Tiempo empleado.
- Distancia recorrida.

---

## Reglas identificadas

1. La velocidad debe ser un número positivo.
2. El tiempo debe ser un número positivo.
3. La distancia se calcula mediante:

Distancia = Velocidad × Tiempo

4. El resultado se expresa en centímetros.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "artista": "Carlos",
    "velocidad": 12,
    "tiempo": 4
}
```

**Cálculo**

```text
Distancia = 12 × 4

Distancia = 48 cm
```

**Resultado esperado**

```text
Artista: Carlos
Velocidad de dibujo: 12 cm/min
Tiempo de trabajo: 4 min
Distancia recorrida por el lápiz: 48 cm
```

---

### Caso borde

**Entrada**

```python
{
    "artista": "Prueba",
    "velocidad": 0,
    "tiempo": 5
}
```

**Cálculo**

```text
Distancia = 0 × 5

Distancia = 0 cm
```

**Resultado esperado**

```text
Artista: Prueba
Velocidad de dibujo: 0 cm/min
Tiempo de trabajo: 5 min
Distancia recorrida por el lápiz: 0 cm
```

> Este es un caso borde porque la velocidad es **0 cm/min**. Aunque el artista permanezca trabajando durante un tiempo determinado, no existe desplazamiento del lápiz, por lo que la distancia recorrida es **0 cm**.

---

## Explicación final

La solución aplica la relación entre **velocidad, tiempo y distancia**, utilizando la fórmula **Distancia = Velocidad × Tiempo**. En este contexto, la velocidad representa el avance del lápiz sobre la superficie de trabajo y el tiempo corresponde a la duración del dibujo. El resultado permite conocer la distancia total recorrida durante la realización del diseño.

---

## Sugerencia

Cuando resuelvas ejercicios de **velocidad, tiempo y distancia**, identifica las dos variables conocidas y aplica la fórmula correspondiente. Verifica siempre que las unidades sean compatibles antes de realizar el cálculo para obtener resultados correctos.