# Solución: Taller Mecánico - Mínimos y Límites

## Leer instrucciones e Identificar entradas
Se requiere evaluar el desempeño del personal del taller controlando un límite mínimo de horas productivas requeridas.
* **Entradas:** * `mecanicos` (Arreglo de objetos con `nombre`, `horasTrabajadas` y `puntuacionBase`).
  * `limiteMinimoHoras` (Número entero que marca el umbral de cumplimiento).

## Definir salidas
* **Salidas:** Un nuevo arreglo de objetos con el nombre del mecánico, su `puntuacionFinal` recalculada y su `clasificacion` de rendimiento.

## Reglas de negocio y Condicionales
1. **Límite Mínimo:** Si las `horasTrabajadas` son mayores o iguales al `limiteMinimoHoras`, se aplica un condicional para sumar un beneficio de $+5$ puntos.
2. **Penalización por Mínimo:** Si no se alcanza el límite analizado, se restan $-2$ puntos de la base.

## Cálculo numérico y Razonamiento cuantitativo
El programa realiza operaciones aritméticas directas sobre variables cuantitativas discretas:

$$\text{Puntuación Final} = \text{Puntuación Base} \pm \text{Modificador}$$

Posteriormente, usa un límite relacional ($\ge 85$) para segregar los resultados en las categorías cualitativas "Excelente" o "Regular".

## Probar casos
* **Caso Normal:** Con un límite de $40$ horas, Carlos ($45$h) supera el mínimo y sube de $82$ a $87$ puntos ("Excelente"). Ana ($38$h) queda por debajo del límite y baja de $86$ a $84$ puntos ("Regular").
* **Caso Borde:** Si el arreglo de mecánicos ingresa vacío, el condicional de control lo detecta inmediatamente y retorna un arreglo `[]` seguro.