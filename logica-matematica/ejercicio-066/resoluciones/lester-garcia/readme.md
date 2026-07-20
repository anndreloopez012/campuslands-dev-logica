# Plantilla de solucion

## Analisis

- **Entrada:**
  - Velocidad en kilometros por hora.
  - Tiempo en minutos.

- **Proceso:**
  - Convertir el tiempo de minutos a horas.
  - Convertir la velocidad de kilometros por hora a metros por segundo.
  - Calcular la distancia recorrida.
  - Clasificar el recorrido segun la distancia obtenida.

- **Salida:**
  - Tiempo en horas.
  - Velocidad en metros por segundo.
  - Distancia recorrida.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El tiempo en horas se obtiene dividiendo los minutos entre 60 y la velocidad en metros por segundo se obtiene dividiendo los kilometros por hora entre 3.6.
2. La distancia se calcula multiplicando la velocidad en kilometros por hora por el tiempo convertido a horas.
3. Si la distancia es mayor o igual a 200, la categoria es **recorrido largo**. Si es mayor o igual a 100, la categoria es **recorrido medio**. En otro caso, la categoria es **recorrido corto**.

## Pruebas

### Caso normal

**Entrada:**

velocidadKmh: 324

tiempoMinutos: 45

**Resultado esperado:**

tiempo_horas: 0.75

velocidad_ms: 90

distancia: 243

categoria: recorrido largo

explicacion: se convirtieron las unidades de tiempo y velocidad antes de calcular la distancia recorrida.

### Caso borde

**Entrada:**

velocidadKmh: 180

tiempoMinutos: 30

**Resultado esperado:**

tiempo_horas: 0.5

velocidad_ms: 50

distancia: 90

categoria: recorrido corto

explicacion: se convirtieron las unidades de tiempo y velocidad antes de calcular la distancia recorrida.

## Explicacion final

La solucion recibe la velocidad en kilometros por hora y el tiempo en minutos. Antes de realizar cualquier calculo organiza los datos convirtiendo el tiempo a horas y la velocidad a metros por segundo. Con el tiempo convertido calcula la distancia recorrida y finalmente clasifica el recorrido segun el resultado obtenido, mostrando todas las conversiones y los valores calculados.