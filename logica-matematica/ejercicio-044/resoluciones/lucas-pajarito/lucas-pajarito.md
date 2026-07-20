# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de equipos de fútbol sala con:
    - Nombre.
    - Partidos ganados.
    - Partidos empatados.
    - Partidos perdidos.

- **Proceso:**
  1. Recorrer la lista de equipos.
  2. Calcular los puntos de cada equipo utilizando la fórmula:

     **Puntos = (Partidos ganados × 3) + Partidos empatados**

  3. Mostrar el total de puntos obtenidos por cada equipo.

- **Salida:**
  - El nombre del equipo.
  - La cantidad de puntos obtenidos.

---

## Reglas identificadas

1. Cada victoria equivale a **3 puntos**.
2. Cada empate equivale a **1 punto**.
3. Cada derrota equivale a **0 puntos**.
4. El puntaje total es la suma de los puntos obtenidos por victorias y empates.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Rangers",
    "ganados": 8,
    "empatados": 2,
    "perdidos": 2
}
```

**Resultado esperado**

```text
Equipo: Rangers
Puntos obtenidos: 26
```

**Cálculo**

```text
(8 × 3) + 2 = 26
```

---

### Caso borde

**Entrada**

```python
{
    "nombre": "Panteras",
    "ganados": 0,
    "empatados": 0,
    "perdidos": 12
}
```

**Resultado esperado**

```text
Equipo: Panteras
Puntos obtenidos: 0
```

> Este es un caso borde porque el equipo no consiguió victorias ni empates. El programa debe calcular correctamente un puntaje de **0 puntos** sin producir errores.

---

## Explicación final

La solución funciona porque aplica una fórmula matemática para calcular los puntos de cada equipo. Multiplica la cantidad de partidos ganados por tres, suma los puntos obtenidos por los empates y muestra el resultado final. Este procedimiento permite conocer el rendimiento de cada equipo mediante operaciones aritméticas básicas.

---

## Sugerencia

Cuando un problema implique **cálculos de puntajes**, identifica el valor que aporta cada resultado (victoria, empate o derrota). Luego aplica la fórmula utilizando multiplicaciones y sumas para obtener el puntaje final de manera correcta.