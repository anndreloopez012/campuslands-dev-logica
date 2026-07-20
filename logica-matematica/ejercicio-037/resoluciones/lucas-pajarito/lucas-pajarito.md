# Plantilla de solución

## Análisis

### Entrada

- Una lista de proyectos de arquitectura 3D.
- Nombre del proyecto.
- Puntaje obtenido.

### Proceso

1. Recorrer la lista de proyectos.
2. Ordenar los proyectos según su puntaje de mayor a menor.
3. Asignar una posición a cada proyecto.
4. Mostrar el ranking completo.

### Salida

- Posición en el ranking.
- Nombre del proyecto.
- Puntaje obtenido.

---

## Reglas identificadas

1. Todos los puntajes deben ser numéricos.
2. El ranking se ordena de mayor a menor puntaje.
3. El proyecto con mayor puntaje ocupa la posición 1.
4. Cada proyecto ocupa una posición única dentro del ranking.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "proyecto": "Puente Moderno",
    "puntaje": 97
}
```

**Resultado esperado**

```text
Posición: 1
Proyecto: Puente Moderno
Puntaje: 97
```

---

### Caso borde

**Entrada**

```python
[
    {
        "proyecto": "Proyecto Único",
        "puntaje": 88
    }
]
```

**Resultado esperado**

```text
Posición: 1
Proyecto: Proyecto Único
Puntaje: 88
```

> Este es un caso borde porque únicamente existe un proyecto. En este escenario, el proyecto ocupa automáticamente la primera posición del ranking.

---

## Explicación final

La solución genera un **ranking de proyectos de arquitectura 3D** ordenando los puntajes de mayor a menor. Después de ordenar la información, asigna una posición a cada proyecto según su desempeño. Este tipo de análisis permite identificar fácilmente cuáles proyectos obtuvieron las mejores evaluaciones.

---

## Sugerencia

Cuando resuelvas ejercicios relacionados con **estadísticas de ranking**, ordena primero los datos utilizando el criterio de evaluación correspondiente. Una vez ordenados, asigna una posición secuencial para construir un ranking claro y fácil de interpretar.