# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de vehículos con la siguiente información:
    - Propietario.
    - Vehículo.
    - Problema reportado.
    - Nivel de prioridad (Alta, Media o Baja).

- **Proceso:**
  1. Recorrer el arreglo de vehículos.
  2. Evaluar el nivel de prioridad de cada reparación.
  3. Determinar el orden en que debe ser atendido cada vehículo.
  4. Mostrar un mensaje indicando la prioridad de atención.

- **Salida:**
  - Un mensaje indicando si el vehículo debe atenderse de forma inmediata, después de las prioridades altas o puede esperar su turno.

---

## Reglas identificadas

1. Si la prioridad es **Alta**, el vehículo debe atenderse inmediatamente.
2. Si la prioridad es **Media**, el vehículo debe atenderse después de los casos de prioridad alta.
3. Si la prioridad es **Baja**, el vehículo puede esperar su turno.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
{
    propietario: "Ana López",
    vehiculo: "Honda Civic",
    problema: "Frenos desgastados",
    prioridad: "Alta"
}
```

**Resultado esperado:**

```text
Honda Civic: Atención inmediata.
```

---

### Caso borde

**Entrada:**

```javascript
{
    propietario: "Luis Gómez",
    vehiculo: "Mazda 3",
    problema: "Revisión del motor",
    prioridad: "Media"
}
```

**Resultado esperado:**

```text
Mazda 3: Atender después de las prioridades altas.
```

> Este es un caso borde porque la prioridad **Media** representa el nivel intermedio entre una atención urgente y una que puede esperar.

---

## Explicación final

La solución funciona porque recorre la lista de vehículos y evalúa el nivel de prioridad asignado a cada reparación. Mediante una estructura `if...else if...else`, el programa determina el orden de atención y muestra un mensaje indicando cuándo debe ser atendido cada vehículo. Esto permite organizar el trabajo del taller de forma eficiente.

---

## Sugerencia

Convierte cada nivel de prioridad en una condición antes de programar. Define qué casos son urgentes, cuáles pueden esperar un poco y cuáles pueden programarse para más adelante. Después implementa esas reglas utilizando `if`, `else if` y `else`.