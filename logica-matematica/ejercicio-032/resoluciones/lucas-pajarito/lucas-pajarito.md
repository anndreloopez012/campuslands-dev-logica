# Plantilla de solución

## Análisis

### Entrada

- Una lista de jugadores.
- Nombre del jugador.
- Cantidad de victorias.
- Cantidad de partidos jugados.

### Proceso

1. Recorrer la lista de jugadores.
2. Obtener el número de victorias y de partidos jugados.
3. Calcular la probabilidad de ganar.
4. Mostrar los resultados.

### Salida

- Nombre del jugador.
- Cantidad de victorias.
- Partidos jugados.
- Probabilidad de ganar.

---

## Reglas identificadas

1. La cantidad de partidos jugados debe ser mayor que cero.
2. Las victorias no pueden superar el número de partidos jugados.
3. La probabilidad se calcula mediante:

\[
P=\frac{\text{Victorias}}{\text{Partidos jugados}}
\]

4. El resultado se expresa como un valor entre **0** y **1**.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "jugador": "Carlos",
    "victorias": 18,
    "partidos": 20
}
```

**Cálculo**

```text
Probabilidad = 18 ÷ 20

Probabilidad = 0.90
```

**Resultado esperado**

```text
Jugador: Carlos
Victorias: 18
Partidos jugados: 20
Probabilidad de ganar: 0.90
```

---

### Caso borde

**Entrada**

```python
{
    "jugador": "Jugador Nuevo",
    "victorias": 0,
    "partidos": 0
}
```

**Cálculo**

```text
No es posible dividir entre cero.

Probabilidad = 0
```

**Resultado esperado**

```text
Jugador: Jugador Nuevo
Victorias: 0
Partidos jugados: 0
Probabilidad de ganar: 0.00
```

> Este es un caso borde porque el jugador aún no ha disputado ningún partido. El programa debe evitar la división entre cero y asignar una probabilidad de **0.00**.

---

## Explicación final

La solución funciona porque aplica el concepto de **probabilidad básica**, dividiendo el número de victorias entre el total de partidos jugados. Además, incluye una validación para evitar errores cuando un jugador aún no ha participado en ningún encuentro.

---

## Sugerencia

Cuando resuelvas ejercicios de **probabilidad básica**, identifica primero el número de casos favorables y el número total de casos posibles. Antes de realizar la división, verifica que el total de casos sea mayor que cero para evitar errores y obtener un resultado válido.