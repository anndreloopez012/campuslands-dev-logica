# Plantilla de solución

## Análisis

### Entrada

- Una lista de soldadores.
- Nombre del soldador.
- Puntaje obtenido en la evaluación.

### Proceso

1. Obtener el puntaje mínimo y el puntaje máximo.
2. Recorrer la lista de soldadores.
3. Aplicar la fórmula de normalización.
4. Mostrar el puntaje original y el puntaje normalizado.

### Salida

- Nombre del soldador.
- Puntaje original.
- Puntaje normalizado.

---

## Reglas identificadas

1. Todos los puntajes deben ser numéricos.
2. La normalización transforma los puntajes a una escala de **0 a 100**.
3. Se utiliza la fórmula:

**Puntaje normalizado = ((Puntaje − Mínimo) ÷ (Máximo − Mínimo)) × 100**

4. Si todos los puntajes son iguales, el puntaje normalizado será **100**.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Laura",
    "puntaje": 95
}
```

**Cálculo**

```text
Mínimo = 76

Máximo = 95

((95 - 76) ÷ (95 - 76)) × 100

(19 ÷ 19) × 100

100
```

**Resultado esperado**

```text
Soldador: Laura
Puntaje original: 95
Puntaje normalizado: 100.00
```

---

### Caso borde

**Entrada**

```python
[
    {
        "nombre": "Carlos",
        "puntaje": 80
    },
    {
        "nombre": "Laura",
        "puntaje": 80
    }
]
```

**Cálculo**

```text
Máximo = 80

Mínimo = 80

No es posible dividir entre cero.

Se asigna un puntaje normalizado de 100.
```

**Resultado esperado**

```text
Soldador: Carlos
Puntaje original: 80
Puntaje normalizado: 100.00

Soldador: Laura
Puntaje original: 80
Puntaje normalizado: 100.00
```

> Este es un caso borde porque todos los participantes obtuvieron el mismo puntaje. Como el valor máximo y el mínimo coinciden, la fórmula produciría una división entre cero. Para evitar este problema, el programa asigna un puntaje normalizado de **100** a todos los participantes.

---

## Explicación final

La solución utiliza la **normalización Min-Max**, una técnica que transforma un conjunto de puntajes a una escala común entre **0 y 100**. Primero identifica el puntaje mínimo y el máximo de la evaluación y luego aplica la fórmula de normalización a cada participante. Esto facilita la comparación del rendimiento de los soldadores, independientemente de la escala original utilizada en la evaluación.

---

## Sugerencia

Cuando trabajes con **normalización de puntajes**, identifica primero los valores mínimo y máximo del conjunto de datos. Antes de aplicar la fórmula, verifica que ambos sean diferentes para evitar una división entre cero y obtener resultados válidos.