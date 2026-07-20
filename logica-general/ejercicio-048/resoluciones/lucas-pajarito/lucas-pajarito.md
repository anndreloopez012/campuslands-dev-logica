# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de películas con la siguiente información:
    - Título.
    - Disponibilidad.
    - Edad mínima.
  - El título de la película que desea ver el usuario.
  - La edad del usuario.

- **Proceso:**
  1. Buscar la película seleccionada.
  2. Verificar si está disponible.
  3. Si está disponible, verificar si el usuario cumple con la edad mínima.
  4. Si cumple ambas condiciones, iniciar la reproducción.

- **Salida:**
  - Un mensaje indicando cada paso realizado y el resultado final del proceso.

---

## Reglas identificadas

1. La película debe estar disponible para poder reproducirse.
2. El usuario debe cumplir con la edad mínima requerida.
3. Solo si ambas condiciones se cumplen, la película puede reproducirse.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
reproducirPelicula("Interstellar", 18);
```

**Resultado esperado:**

```text
Película seleccionada: Interstellar
Paso 1: Verificar disponibilidad.
Paso 2: Verificar edad.
Paso 3: Iniciar reproducción.
Resultado: Disfruta la película.
```

---

### Caso borde

**Entrada:**

```javascript
reproducirPelicula("Avatar", 18);
```

**Resultado esperado:**

```text
Película seleccionada: Avatar
Paso 1: Verificar disponibilidad.
Resultado: La película no está disponible.
```

> Este es un caso borde porque la película existe, pero no está disponible para reproducirse. El flujo se detiene en el primer paso y no continúa con las siguientes verificaciones.

---

## Explicación final

La solución funciona porque sigue un flujo ordenado de decisiones. Primero busca la película seleccionada, luego verifica si está disponible y, si lo está, comprueba que el usuario tenga la edad mínima requerida. Solo cuando todas las condiciones se cumplen, el programa inicia la reproducción. Este proceso representa un **flujo paso a paso**, donde cada etapa depende del resultado de la anterior.

---

## Sugerencia

Cuando un problema requiere seguir un proceso, divide la solución en pasos. Cada paso debe completarse antes de pasar al siguiente. Implementa cada decisión con estructuras `if` y `else` para representar claramente el flujo del proceso.