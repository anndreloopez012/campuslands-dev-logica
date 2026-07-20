# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de clientes.
  - Consumo promedio por cliente.
  - Costo total de los ingredientes.

- **Proceso:**
  - Calcular el ingreso estimado multiplicando los clientes por el consumo promedio.
  - Calcular la ganancia restando el costo de los ingredientes al ingreso estimado.
  - Evaluar varias condiciones utilizando la ganancia y la cantidad de clientes.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Ingreso estimado.
  - Ganancia.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El ingreso estimado se obtiene multiplicando la cantidad de clientes por el consumo promedio y la ganancia se calcula restando el costo de los ingredientes.
2. Si la ganancia es mayor o igual a 400 y la cantidad de clientes es mayor o igual a 40, la categoria es **negocio exitoso**.
3. Si no cumple ambas condiciones pero la ganancia es mayor o igual a 250, la categoria es **negocio rentable**; en otro caso, la categoria es **negocio en crecimiento**.

## Pruebas

### Caso normal

**Entrada:**

clientes: 48

consumoPromedio: 14

costoIngredientes: 220

**Resultado esperado:**

ingreso_estimado: 672

ganancia: 452

categoria: negocio exitoso

explicacion: se simularon los ingresos y la ganancia del negocio utilizando una formula simple y se evaluo la cantidad de clientes.

### Caso borde

**Entrada:**

clientes: 30

consumoPromedio: 16

costoIngredientes: 180

**Resultado esperado:**

ingreso_estimado: 480

ganancia: 300

categoria: negocio rentable

explicacion: se simularon los ingresos y la ganancia del negocio utilizando una formula simple y se evaluo la cantidad de clientes.

## Explicacion final

La solucion recibe la cantidad de clientes, el consumo promedio por cliente y el costo total de los ingredientes. Primero calcula el ingreso estimado mediante una multiplicacion y luego obtiene la ganancia restando los costos. Finalmente evalua varias condiciones: para clasificar el negocio como **negocio exitoso** debe cumplir simultaneamente una ganancia minima y una cantidad minima de clientes. Si solo cumple el criterio de la ganancia, se clasifica como **negocio rentable**; en caso contrario, como **negocio en crecimiento**. Finalmente muestra todos los resultados obtenidos.