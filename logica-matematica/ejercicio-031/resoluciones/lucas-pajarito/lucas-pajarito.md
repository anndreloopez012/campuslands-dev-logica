# Plantilla de solución

## Análisis

### Entrada

- Una lista de categorías de kickboxing.
- Nombre de la categoría.
- Cantidad de peleadores inscritos.

### Proceso

1. Recorrer la lista de categorías.
2. Obtener la cantidad de peleadores.
3. Aplicar la fórmula del conteo combinatorio simple.
4. Mostrar la cantidad de posibles enfrentamientos.

### Salida

- Nombre de la categoría.
- Cantidad de peleadores.
- Número de enfrentamientos posibles.

---

## Reglas identificadas

1. Cada enfrentamiento se realiza entre **dos peleadores**.
2. Un peleador no puede enfrentarse consigo mismo.
3. No se repite un mismo enfrentamiento.
4. La cantidad de enfrentamientos se calcula con la fórmula:

\[
C(n,2)=\frac{n(n-1)}{2}
\]

donde **n** representa la cantidad de peleadores inscritos.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "categoria": "Peso Ligero",
    "peleadores": 8
}
```

**Cálculo**

```text
Enfrentamientos = (8 × 7) ÷ 2

Enfrentamientos = 56 ÷ 2

Enfrentamientos = 28
```

**Resultado esperado**

```text
Categoría: Peso Ligero
Peleadores: 8
Posibles enfrentamientos: 28
```

---

### Caso borde

**Entrada**

```python
{
    "categoria": "Peso Mosca",
    "peleadores": 1
}
```

**Cálculo**

```text
Enfrentamientos = (1 × 0) ÷ 2

Enfrentamientos = 0
```

**Resultado esperado**

```text
Categoría: Peso Mosca
Peleadores: 1
Posibles enfrentamientos: 0
```

> Este es un caso borde porque solo existe **un peleador** en la categoría. Al no haber otro participante disponible, no es posible formar ningún enfrentamiento.

---

## Explicación final

La solución funciona porque aplica el principio de **conteo combinatorio simple**, que permite calcular cuántas parejas diferentes pueden formarse a partir de un conjunto de peleadores. La fórmula **C(n,2)** evita contar enfrentamientos repetidos y garantiza que ningún participante compita contra sí mismo.

---

## Sugerencia

Cuando resuelvas problemas de **conteo combinatorio simple**, identifica primero cuántos elementos participan en el conjunto. Si necesitas formar parejas sin repetir combinaciones, utiliza la fórmula **C(n,2) = n(n-1)/2**, ya que ofrece una forma rápida y eficiente de obtener el número de posibles combinaciones.