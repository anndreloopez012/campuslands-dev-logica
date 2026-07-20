# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de equipos de fútbol sala con la siguiente información:
    - Nombre del equipo.
    - Partidos jugados.
    - Victorias.
    - Empates.
    - Derrotas.
    - Puntos.

- **Proceso:**
  1. Recorrer el arreglo de equipos.
  2. Ordenar los equipos de mayor a menor según la cantidad de puntos.
  3. Asignar la posición correspondiente en el ranking (Top 1, Top 2, Top 3, Top 4 y Top 5).
  4. Mostrar el nombre del equipo junto con su posición y sus puntos.

- **Salida:**
  - Un ranking de los cinco equipos ordenados por puntos, mostrando su posición, nombre y cantidad de puntos.

---

## Reglas identificadas

1. Los equipos deben ordenarse de mayor a menor según sus puntos.
2. El equipo con más puntos ocupa el **Top 1**, el siguiente el **Top 2**, y así sucesivamente.
3. El programa debe mostrar el ranking completo con la posición, nombre del equipo y puntos obtenidos.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
const equipos = [
  { nombre: "Tigres FS", puntos: 19 },
  { nombre: "Leones FS", puntos: 17 },
  { nombre: "Águilas FS", puntos: 13 },
  { nombre: "Panteras FS", puntos: 11 },
  { nombre: "Lobos FS", puntos: 7 }
];
```

**Resultado esperado:**

```text
Top 1: Tigres FS - 19 puntos
Top 2: Leones FS - 17 puntos
Top 3: Águilas FS - 13 puntos
Top 4: Panteras FS - 11 puntos
Top 5: Lobos FS - 7 puntos
```

### Caso borde

**Entrada:**

```javascript
const equipos = [
  { nombre: "Tigres FS", puntos: 19 },
  { nombre: "Leones FS", puntos: 19 },
  { nombre: "Águilas FS", puntos: 13 },
  { nombre: "Panteras FS", puntos: 11 },
  { nombre: "Lobos FS", puntos: 7 }
];
```

**Resultado esperado:**

```text
Top 1: Tigres FS - 19 puntos
Top 2: Leones FS - 19 puntos
Top 3: Águilas FS - 13 puntos
Top 4: Panteras FS - 11 puntos
Top 5: Lobos FS - 7 puntos
```

---

## Explicación final

La solución funciona porque recibe la información de los equipos en un arreglo, los ordena de mayor a menor según la cantidad de puntos utilizando el método `sort()`. Después recorre el arreglo con un ciclo para asignar automáticamente la posición de cada equipo en el ranking y muestra el **Top 1** hasta el **Top 5** junto con sus puntos.

---

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar. En este caso, la regla principal es que el equipo con mayor cantidad de puntos ocupa la primera posición del ranking, por lo que primero se ordenan los equipos y luego se muestran según su posición.