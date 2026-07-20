# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `duraciones` (números que representan minutos por canción) y un número `meta` (tiempo objetivo).
* **Proceso**: Suma acumulativa de los elementos del arreglo mediante un ciclo, utilizando una condición de salida temprana (`break`) al alcanzar o superar el valor de la meta, contando simultáneamente las iteraciones realizadas.
* **Salida**: Un objeto que resume la cantidad de `canciones_reproducidas`, el `tiempo_total` acumulado, el `estado` (cumplimiento de la meta) y una explicación descriptiva.

## Reglas identificadas

1. **Acumulación Secuencial**: Las canciones deben sumarse en el orden en que aparecen en el arreglo.
2. **Corte por Meta**: La iteración debe finalizar inmediatamente cuando `total >= meta`.
3. **Contabilidad Precisa**: El contador de canciones debe reflejar solo aquellas procesadas hasta el momento del corte.

## Pruebas

### Caso normal

* **Entrada**: `[3, 5, 2, 8, 4], 10`
* **Resultado esperado**: `{ canciones_reproducidas: 3, tiempo_total: 10, estado: "Meta alcanzada", explicacion: "Se acumularon 10 minutos usando 3 canciones." }`

### Caso borde

* **Entrada**: `[2, 1], 10`
* **Resultado esperado**: `{ canciones_reproducidas: 2, tiempo_total: 3, estado: "Meta no alcanzada", explicacion: "Se acumularon 3 minutos usando 2 canciones." }`

## Explicacion final

La solución es eficiente porque combina un ciclo de recorrido simple (`O(n)`) con un mecanismo de interrupción temprana. Esto garantiza que no se desperdicien recursos de cómputo calculando el resto de la lista una vez que el objetivo ha sido satisfecho. El uso de variables acumuladoras separadas para el tiempo y el contador permite mantener un estado claro del progreso en todo momento, facilitando tanto la lógica de control como la generación final del informe de resultados.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo (Caso [3, 5, 2, 8, 4], 10)**:
* Ciclo 1: $3$ (Total: $3$).
* Ciclo 2: $3 + 5 = 8$ (Total: $8$).
* Ciclo 3: $8 + 2 = 10$ (Total: $10$).
* $10 \ge 10 \rightarrow$ ¡Meta alcanzada!