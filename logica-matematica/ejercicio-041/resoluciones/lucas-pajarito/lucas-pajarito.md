# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de videojuegos competitivos con:
    - Nombre del videojuego.
    - Partidas ganadas.
    - Partidas perdidas.

- **Proceso:**
  1. Recorrer la lista de videojuegos.
  2. Calcular el total de partidas jugadas.
  3. Calcular el porcentaje de victorias mediante la fórmula:

     **Porcentaje = (Partidas ganadas / Total de partidas) × 100**

  4. Mostrar el resultado para cada videojuego.

- **Salida:**
  - El nombre del videojuego.
  - El total de partidas.
  - El porcentaje de victorias.

---

## Reglas identificadas

1. El total de partidas es la suma de partidas ganadas y partidas perdidas.
2. El porcentaje de victorias se calcula dividiendo las partidas ganadas entre el total de partidas.
3. El resultado debe mostrarse con dos decimales.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Rocket League",
    "partidas_ganadas": 20,
    "partidas_perdidas": 5
}
```

**Resultado esperado**

```text
Total de partidas: 25
Porcentaje de victorias: 80.00%
```

**Cálculo**

```text
20 + 5 = 25

(20 ÷ 25) × 100 = 80%
```

---

### Caso borde

**Entrada**

```python
{
    "nombre": "Valorant",
    "partidas_ganadas": 0,
    "partidas_perdidas": 10
}
```

**Resultado esperado**

```text
Total de partidas: 10
Porcentaje de victorias: 0.00%
```

> Este es un caso borde porque el videojuego no registra ninguna victoria. El programa debe calcular correctamente un porcentaje de 0% sin producir errores.

---

## Explicación final

La solución funciona porque aplica operaciones aritméticas para calcular el total de partidas y el porcentaje de victorias de cada videojuego competitivo. Primero suma las partidas ganadas y perdidas para obtener el total y luego utiliza una división y una multiplicación por 100 para calcular el porcentaje de victorias. Finalmente, muestra los resultados de forma clara para cada videojuego.

---

## Sugerencia

Cuando un problema implique **porcentajes**, identifica primero los valores que forman el total. Después aplica la fórmula correspondiente y muestra el resultado con el formato adecuado para facilitar su interpretación.