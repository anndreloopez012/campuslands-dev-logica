# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de autos hiperdeportivos con la siguiente información:
    - Marca.
    - Modelo.
    - Velocidad máxima.
    - Disponibilidad.
  - El nombre del modelo que se desea buscar.

- **Proceso:**
  1. Recorrer el arreglo de autos.
  2. Comparar el modelo ingresado con el modelo de cada auto.
  3. Si el modelo existe, mostrar toda su información.
  4. Si no existe, indicar que el auto no fue encontrado.

- **Salida:**
  - La información completa del auto encontrado o un mensaje indicando que no existe.

---

## Reglas identificadas

1. El programa debe recorrer todos los autos del inventario.
2. Si el modelo buscado coincide con un auto, se muestran sus datos.
3. Si no existe coincidencia, se informa que el auto no fue encontrado.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
buscarAuto("Jesko");
```

**Resultado esperado:**

```text
=== AUTO ENCONTRADO ===
Marca: Koenigsegg
Modelo: Jesko
Velocidad Máxima: 483 km/h
Disponible: No
```

---

### Caso borde

**Entrada:**

```javascript
buscarAuto("Venom F5");
```

**Resultado esperado:**

```text
No se encontró un auto con ese modelo.
```

> Este es un caso borde porque el modelo buscado no existe dentro del inventario y el programa debe manejar correctamente esa situación.

---

## Explicación final

La solución funciona porque recorre el inventario de autos utilizando `forEach` y compara el modelo buscado con cada uno de los modelos almacenados. Si encuentra una coincidencia, muestra toda la información del vehículo. Si termina el recorrido sin encontrar coincidencias, informa que el auto no existe en el inventario. De esta manera se resuelve correctamente un problema de **búsqueda de elementos**.

---

## Sugerencia

Antes de programar, identifica cuál es el dato que utilizarás para realizar la búsqueda. En este caso, el **modelo** del automóvil es el criterio principal. Luego compara ese valor con cada elemento del arreglo hasta encontrar una coincidencia o determinar que el elemento no existe.