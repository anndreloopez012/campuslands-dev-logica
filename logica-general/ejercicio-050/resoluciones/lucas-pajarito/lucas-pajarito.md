# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo con las instrucciones del viaje.
  - Cada instrucción contiene:
    - Número del paso.
    - Descripción de la acción que debe realizar el viajero.

- **Proceso:**
  1. Recorrer el arreglo de instrucciones.
  2. Leer cada paso en el orden establecido.
  3. Mostrar cada instrucción al usuario para que pueda seguir correctamente el proceso del viaje.

- **Salida:**
  - Una lista ordenada de instrucciones que el viajero debe seguir antes de abordar su vuelo.

---

## Reglas identificadas

1. Las instrucciones deben mostrarse en el orden de los pasos.
2. Cada paso debe contener una descripción clara de la acción a realizar.
3. El usuario debe seguir cada instrucción antes de pasar a la siguiente.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
mostrarItinerario(itinerario);
```

**Resultado esperado:**

```text
=== INSTRUCCIONES DEL VIAJE ===

Paso 1: Presentar el pasaporte en el mostrador de la aerolínea.
Paso 2: Registrar el equipaje.
Paso 3: Pasar por el control de seguridad.
Paso 4: Esperar en la sala de abordaje.
Paso 5: Abordar el avión cuando se anuncie el vuelo.
```

---

### Caso borde

**Entrada:**

```javascript
const itinerario = [];
mostrarItinerario(itinerario);
```

**Resultado esperado:**

```text
=== INSTRUCCIONES DEL VIAJE ===
```

> Este es un **caso borde** porque el itinerario no contiene instrucciones. El programa debe ejecutarse sin errores, aunque no haya pasos para mostrar.

---

## Explicación final

La solución funciona porque recibe un arreglo con las instrucciones del viaje y las recorre utilizando `forEach`. Cada instrucción se muestra respetando el orden de los pasos, permitiendo que el usuario siga el proceso de forma organizada. Este tipo de solución representa un caso de **lectura de instrucciones**, donde el objetivo es presentar información secuencial para completar una tarea correctamente.

---

## Sugerencia

Cuando un problema consiste en **leer instrucciones**, organiza la información en el orden en que debe ejecutarse. Luego recorre cada elemento del arreglo para mostrar los pasos de forma clara y secuencial, facilitando que el usuario siga el procedimiento sin omitir ninguna acción.