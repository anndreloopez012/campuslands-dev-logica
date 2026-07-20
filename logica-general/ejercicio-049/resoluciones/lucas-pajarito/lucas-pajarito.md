# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de películas de miedo con la siguiente información:
    - Título.
    - Estado de reproducción (Pendiente, Reproduciendo, Pausada o Finalizada).

- **Proceso:**
  1. Recorrer el arreglo de películas.
  2. Leer el estado de cada película.
  3. Mostrar un mensaje según el estado actual de la reproducción.

- **Salida:**
  - Un mensaje indicando el estado actual de cada película.

---

## Reglas identificadas

1. Si el estado es **Pendiente**, la película aún no ha comenzado.
2. Si el estado es **Reproduciendo**, la película se encuentra en reproducción.
3. Si el estado es **Pausada**, la reproducción está detenida temporalmente.
4. Si el estado es **Finalizada**, la película ya terminó.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
{
    titulo: "It",
    estado: "Reproduciendo"
}
```

**Resultado esperado:**

```text
It: La película se está reproduciendo.
```

---

### Caso borde

**Entrada:**

```javascript
{
    titulo: "La Monja",
    estado: "Pausada"
}
```

**Resultado esperado:**

```text
La Monja: La reproducción está en pausa.
```

> Este es un caso borde porque el estado **Pausada** representa una situación intermedia: la película ya comenzó, pero aún no ha finalizado.

---

## Explicación final

La solución funciona porque analiza el estado de reproducción de cada película y muestra un mensaje correspondiente. Mediante una estructura `if...else if...else`, el programa simula los diferentes estados por los que puede pasar una película durante su reproducción. Esto permite representar claramente el comportamiento del sistema en cada momento.

---

## Sugerencia

Cuando un problema implica **simular estados**, identifica todos los estados posibles del sistema antes de programar. Después, utiliza estructuras `if...else if` o `switch` para representar el comportamiento correspondiente a cada uno de ellos.