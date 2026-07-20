# Plantilla de solución

## Análisis

- **Entrada:**
  - Un arreglo de motos con la siguiente información:
    - Marca.
    - Modelo.
    - Año.
    - Estado del motor (`Excelente`, `Bueno`, `Regular` o `Malo`).

- **Proceso:**
  1. Recorrer el arreglo de motos.
  2. Evaluar el estado del motor de cada moto.
  3. Si el estado es **Excelente** o **Bueno**, recomendar que la moto es apta para seguir en uso.
  4. Si el estado es **Regular** o **Malo**, recomendar el cambio del motor.

- **Salida:**
  - Un mensaje indicando si cada moto es **apta para seguir en uso** o **requiere cambio de motor**.

---

## Reglas identificadas

1. Cada moto debe tener una marca, modelo, año y estado del motor.
2. Si el estado del motor es **Excelente** o **Bueno**, la moto es apta para seguir en uso.
3. Si el estado del motor es **Regular** o **Malo**, se recomienda cambiar el motor.

---

## Pruebas

### Caso normal

**Entrada:**

```javascript
{
    marca: "Honda",
    modelo: "CB190R",
    año: 2020,
    estadoMotor: "Bueno"
}
```

**Resultado esperado:**

```text
Honda CB190R: Motor apto para seguir en uso.
```

---

### Caso borde

**Entrada:**

```javascript
{
    marca: "Suzuki",
    modelo: "Gixxer 150",
    año: 2019,
    estadoMotor: "Regular"
}
```

**Resultado esperado:**

```text
Suzuki Gixxer 150: Se recomienda cambiar el motor.
```

> Este es un **caso borde** porque el estado **Regular** representa el límite entre un motor que aún funciona y uno que ya requiere reemplazo.

---

## Explicación final

La solución funciona porque recibe un arreglo con la información de varias motos y recorre cada una utilizando un ciclo. Para cada moto evalúa el estado del motor mediante una estructura `if...else`. Si el estado es **Excelente** o **Bueno**, indica que la moto puede seguir utilizándose. Si el estado es **Regular** o **Malo**, recomienda cambiar el motor. De esta manera se aplican correctamente las reglas del problema y se obtiene un resultado verificable.

---

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar. En este ejercicio, primero identifica qué estados del motor significan que una moto es apta para seguir en uso y cuáles indican que necesita un cambio de motor. Luego traduce esas reglas a condiciones utilizando `if`, `else` y operadores lógicos.