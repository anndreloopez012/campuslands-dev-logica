# Plantilla de solucion

## Analisis

- **Entrada:**
  - Presupuesto inicial.
  - Porcentaje de descuento.
  - Cantidad de escenas.

- **Proceso:**
  - Calcular el monto del descuento.
  - Restar el descuento al presupuesto inicial.
  - Evaluar el presupuesto final y la cantidad de escenas.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Presupuesto final.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El presupuesto final se obtiene restando al presupuesto inicial el monto calculado mediante el porcentaje de descuento.
2. Si el presupuesto final es menor o igual a 2800 y la cantidad de escenas es mayor o igual a 10, la categoria es **proyecto optimizado**.
3. Si no cumple ambas condiciones pero el presupuesto final es menor o igual a 3000, la categoria es **proyecto rentable**; en otro caso, la categoria es **proyecto costoso**.

## Pruebas

### Caso normal

**Entrada:**

presupuesto: 3200

descuento: 15

escenas: 12

**Resultado esperado:**

presupuesto_final: 2720

categoria: proyecto optimizado

explicacion: se calculo el presupuesto final aplicando el descuento y se evaluo junto con la cantidad de escenas.

### Caso borde

**Entrada:**

presupuesto: 3000

descuento: 5

escenas: 8

**Resultado esperado:**

presupuesto_final: 2850

categoria: proyecto rentable

explicacion: se calculo el presupuesto final aplicando el descuento y se evaluo junto con la cantidad de escenas.

## Explicacion final

La solucion recibe el presupuesto inicial, el porcentaje de descuento y la cantidad de escenas del proyecto. Primero calcula el monto del descuento y obtiene el presupuesto final. Luego evalua varias condiciones: para clasificar el proyecto como **proyecto optimizado** debe cumplir simultaneamente un presupuesto final dentro del limite establecido y una cantidad minima de escenas. Si solo cumple el criterio del presupuesto, se clasifica como **proyecto rentable**; en caso contrario, como **proyecto costoso**. Finalmente se muestran todos los resultados obtenidos.