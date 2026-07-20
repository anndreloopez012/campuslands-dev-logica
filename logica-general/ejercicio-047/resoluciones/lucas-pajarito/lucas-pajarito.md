# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de canciones con la siguiente información:
    - Título.
    - Artista.
    - Duración en segundos.

- **Proceso:**
  1. Recorrer la playlist.
  2. Revisar la duración de cada canción.
  3. Si la duración es menor o igual a 0, marcarla como inconsistente.
  4. Si la duración es mayor que 0, indicar que la información es correcta.

- **Salida:**
  - Un mensaje indicando si cada canción tiene información correcta o presenta una inconsistencia.

---

## Reglas identificadas

1. Toda canción debe tener una duración mayor que 0 segundos.
2. Si la duración es 0 o negativa, existe una inconsistencia.
3. Si la duración es positiva, la canción se considera válida.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
{
    titulo: "Shape of You",
    artista: "Ed Sheeran",
    duracion: 233
}
```

**Resultado esperado:**

```text
Shape of You: Información correcta.
```

---

### Caso borde

**Entrada:**

```javascript
{
    titulo: "Bad Habits",
    artista: "Ed Sheeran",
    duracion: 0
}
```

**Resultado esperado:**

```text
Bad Habits: Duración inválida. Revisar la información de la canción.
```

> Este es un caso borde porque una duración de **0 segundos** representa el límite entre una canción válida y una canción con información incorrecta.

---

## Explicación final

La solución funciona porque recorre todas las canciones de la playlist y verifica que cada una tenga una duración válida. Mediante una estructura `if...else`, detecta aquellas canciones cuya duración es igual o menor a cero y las marca como inconsistentes. De esta forma, es posible identificar registros erróneos dentro de la playlist antes de utilizarlos.

---

## Sugerencia

Cuando un problema consiste en detectar inconsistencias, primero identifica qué datos deben cumplir una condición para ser considerados válidos. Luego implementa esa condición utilizando `if` y `else` para separar los registros correctos de los que contienen errores.