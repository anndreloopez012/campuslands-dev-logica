# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo con los puntajes obtenidos.
  - Un puntaje que se desea evaluar.

- **Proceso:**
  - Identificar el puntaje minimo y el puntaje maximo.
  - Aplicar la formula de normalizacion al puntaje seleccionado.
  - Evaluar el puntaje normalizado y el puntaje original.
  - Determinar la categoria correspondiente.

- **Salida:**
  - Puntaje normalizado.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El puntaje normalizado se calcula con la formula `(puntajeEvaluado - minimo) / (maximo - minimo)`.
2. Si el puntaje normalizado es mayor o igual a 0.7 y el puntaje original es mayor o igual a 80, la categoria es **soldadura certificada**.
3. Si no cumple ambas condiciones pero el puntaje normalizado es mayor o igual a 0.5, la categoria es **soldadura aceptable**; en otro caso, la categoria es **requiere practica**.

## Pruebas

### Caso normal

**Entrada:**

puntajes: [65, 78, 92, 85, 88]

puntajeEvaluado: 85

**Resultado esperado:**

puntaje_normalizado: 0.7407407407407407

categoria: soldadura certificada

explicacion: se normalizo el puntaje evaluado utilizando los valores minimo y maximo y se verifico el puntaje original para clasificar el resultado.

### Caso borde

**Entrada:**

puntajes: [60, 70, 80, 90]

puntajeEvaluado: 75

**Resultado esperado:**

puntaje_normalizado: 0.5

categoria: soldadura aceptable

explicacion: se normalizo el puntaje evaluado utilizando los valores minimo y maximo y se verifico el puntaje original para clasificar el resultado.

## Explicacion final

La solucion recibe un conjunto de puntajes y un puntaje especifico para evaluar. Primero identifica el valor minimo y el maximo del conjunto mediante un recorrido del arreglo. Despues aplica la formula de normalizacion para obtener un valor entre 0 y 1. Finalmente evalua varias condiciones: para clasificar el resultado como **soldadura certificada** debe cumplir simultaneamente un puntaje normalizado minimo y un puntaje original minimo. Si solo cumple el criterio del puntaje normalizado, se clasifica como **soldadura aceptable**; en caso contrario, se considera que **requiere practica**. Finalmente se muestran el puntaje normalizado, la categoria y la explicacion correspondiente.