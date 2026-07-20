# Plantilla de solucion

## Analisis

* **Entrada**: Un número entero `segundos` que indica el momento en el que ocurre un evento.
* **Proceso**: Evaluación de la divisibilidad del número de segundos mediante el operador módulo (`%`) para determinar su categoría, siguiendo una jerarquía de prioridades.
* **Salida**: Un objeto que detalla el `segundos` original, el `tipo_susto` clasificado y una `explicacion` textual.

## Reglas identificadas

1. **Prioridad Crítica**: Todo número divisible por 10 es un "Susto Crítico".
2. **Prioridad Par**: Todo número divisible por 2 (que no sea divisible por 10) es un "Susto Leve".
3. **Prioridad Impar**: Cualquier otro número (que no sea divisible por 2) es "Tensión Acumulada".

## Pruebas

### Caso normal

* **Entrada**: `20`
* **Resultado esperado**: `{ segundos: 20, tipo_susto: "Susto Critico", explicacion: "El evento ocurrio en el segundo 20, clasificado segun divisibilidad." }`

### Caso borde

* **Entrada**: `7`
* **Resultado esperado**: `{ segundos: 7, tipo_susto: "Tension Acumulada", explicacion: "El evento ocurrio en el segundo 7, clasificado segun divisibilidad." }`

## Explicacion final

La solución funciona gracias a la jerarquía de evaluación implementada en la estructura `if-else`. Al verificar primero la condición más restrictiva (`segundos % 10 === 0`), nos aseguramos de capturar los eventos críticos antes de que sean absorbidos por la regla general de los números pares. Este enfoque de "filtrado descendente" permite clasificar correctamente cualquier número entero utilizando únicamente operaciones matemáticas básicas, garantizando rapidez y eficiencia en la ejecución del código.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (10)**: $10 \% 10 = 0$ $\rightarrow$ "Susto Critico".
* **Ejemplo manual (4)**: $4 \% 10 = 4$ (no es 0); $4 \% 2 = 0$ $\rightarrow$ "Susto Leve".
* **Ejemplo manual (3)**: $3 \% 10 = 3$ (no es 0); $3 \% 2 = 1$ (no es 0) $\rightarrow$ "Tension Acumulada".