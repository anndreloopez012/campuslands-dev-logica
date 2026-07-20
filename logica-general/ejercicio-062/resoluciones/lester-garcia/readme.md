# Plantilla de solucion

## Analisis

- **Entrada:**
  - Cantidad de partidos jugados.
  - Cantidad de partidos ganados.
  - Cantidad de partidos empatados.

- **Proceso:**
  - Calcular el porcentaje de victorias.
  - Evaluar el porcentaje junto con la cantidad de empates.
  - Asignar la categoria correspondiente segun las condiciones.
  - Mostrar el porcentaje y la categoria obtenida.

- **Salida:**
  - Porcentaje de victorias.
  - Categoria.
  - Explicacion del resultado.

## Reglas identificadas

1. El porcentaje de victorias se calcula dividiendo los partidos ganados entre los partidos jugados y multiplicando por 100.
2. Si el porcentaje de victorias es mayor o igual a 75 y los empates son menores o iguales a 5, la categoria es **lider**.
3. Si no cumple la regla anterior pero el porcentaje de victorias es mayor o igual a 60, la categoria es **clasificado**; en otro caso, la categoria es **en competencia**.

## Pruebas

### Caso normal

**Entrada:**

partidosJugados: 24

partidosGanados: 18

partidosEmpatados: 3

**Resultado esperado:**

porcentaje_victorias: 75

categoria: lider

explicacion: se calculo el porcentaje de victorias y se evaluaron las condiciones de empates para determinar la categoria.

### Caso borde

**Entrada:**

partidosJugados: 20

partidosGanados: 15

partidosEmpatados: 6

**Resultado esperado:**

porcentaje_victorias: 75

categoria: clasificado

explicacion: se calculo el porcentaje de victorias y se evaluaron las condiciones de empates para determinar la categoria.

## Explicacion final

La solucion recibe la cantidad de partidos jugados, ganados y empatados. Primero calcula el porcentaje de victorias mediante una proporcion. Luego evalua varias condiciones: para ser **lider** debe cumplir simultaneamente el porcentaje minimo de victorias y el limite de empates. Si no cumple ambas condiciones, se revisa si alcanza el porcentaje necesario para ser **clasificado**. En caso contrario, el equipo queda **en competencia**. Finalmente se muestran el porcentaje obtenido, la categoria asignada y la explicacion del resultado.