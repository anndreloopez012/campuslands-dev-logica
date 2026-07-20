# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con los precios de las motos.

- **Proceso:**
  - Recorrer el arreglo para identificar el precio maximo.
  - Identificar el precio minimo.
  - Calcular el rango de precios.
  - Evaluar varias condiciones utilizando el precio maximo y el rango.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Precio maximo.
  - Precio minimo.
  - Rango.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El precio maximo y el precio minimo se obtienen recorriendo el arreglo de precios.
2. El rango se calcula restando el precio minimo al precio maximo.
3. Si el precio maximo es mayor o igual a 11000 y el rango es mayor o igual a 2500, la categoria es **inventario premium**. Si no cumple ambas condiciones pero el precio maximo es mayor o igual a 10000, la categoria es **inventario destacado**. En otro caso, la categoria es **inventario estandar**.

## Pruebas

### Caso normal

**Entrada:**

precios: [8200, 9500, 11200, 8700, 10500]

**Resultado esperado:**

precio_maximo: 11200

precio_minimo: 8200

rango: 3000

categoria: inventario premium

explicacion: se identificaron el precio maximo y el minimo para calcular el rango y clasificar el inventario.

### Caso borde

**Entrada:**

precios: [8400, 9800, 10100]

**Resultado esperado:**

precio_maximo: 10100

precio_minimo: 8400

rango: 1700

categoria: inventario destacado

explicacion: se identificaron el precio maximo y el minimo para calcular el rango y clasificar el inventario.

## Explicacion final

La solucion recorre el arreglo de precios para identificar el valor maximo y el minimo. Con estos datos calcula el rango de precios mediante una resta. Luego evalua varias condiciones: para clasificar el inventario como **premium** debe cumplir simultaneamente el precio maximo minimo requerido y el rango establecido. Si solo cumple el precio maximo, se clasifica como **inventario destacado**; en caso contrario, se considera un **inventario estandar**. Finalmente muestra todos los resultados obtenidos.