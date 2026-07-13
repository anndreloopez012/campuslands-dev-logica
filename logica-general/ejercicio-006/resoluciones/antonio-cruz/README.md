# Ejercicio 006 - Busqueda de elementos

## Analisis

### Entrada

* Un arreglo con autos hiperdeportivos.
* El nombre del modelo que se desea buscar.

### Proceso

Se recorre el arreglo comparando cada modelo con el nombre ingresado.

Si se encuentra una coincidencia, se devuelve la informacion del auto.

Si no existe o el arreglo esta vacio, se muestra un mensaje.

### Salida

El objeto del auto encontrado o un mensaje indicando que no existe.

---

## Reglas identificadas

* Buscar un modelo por su nombre.
* Si existe, mostrar sus datos.
* Si no existe, informar que no fue encontrado.
* Si el inventario esta vacio, indicar que no hay autos registrados.

---

## Como ejecutar

1. Abrir la carpeta del ejercicio.
2. Ejecutar:

```bash
node eduardo-cruz.js
```

---

## Casos de prueba

### Caso normal

**Entrada**

```javascript
buscarAuto(autos, "Pagani Huayra")
```

**Resultado esperado**

```text
{
    modelo: "Pagani Huayra",
    velocidadMaxima: 383
}
```

### Caso borde

**Entrada**

```javascript
buscarAuto([], "Ferrari SF90")
```

**Resultado esperado**

```text
No hay autos registrados.
```

---

## Explicacion final

La solucion funciona porque recorre cada elemento del arreglo hasta encontrar el modelo solicitado. Si existe, devuelve su informacion. Si no existe o no hay datos, devuelve un mensaje para evitar errores.
