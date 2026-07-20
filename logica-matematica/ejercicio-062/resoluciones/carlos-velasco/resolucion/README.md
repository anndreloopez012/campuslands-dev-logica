# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `equipo` que contiene `nombre`, `ganados`, `empatados` y `perdidos`.
* **Proceso**: Cálculo del total de partidos, determinación de puntos obtenidos ($3 \times \text{ganados} + 1 \times \text{empatados}$), cálculo de puntos posibles ($3 \times \text{totalJugados}$), obtención de porcentaje y clasificación por rangos.
* **Salida**: Un objeto con la `efectividad_porcentual`, la `clasificacion` y una `explicacion` detallada.

## Reglas identificadas

1. **Validación de Datos**: Si el total de partidos jugados es 0, el sistema retorna "Sin datos" para evitar errores de división por cero.
2. **Sistema de Puntos**: Cada victoria suma 3 puntos y cada empate suma 1 punto.
3. **Rangos de Clasificación**:
* Élite: $\ge 80\%$ de efectividad.
* Competitivo: $\ge 50\%$ de efectividad.
* En desarrollo: $< 50\%$ de efectividad.



## Pruebas

### Caso normal

* **Entrada**: `{ nombre: "Dragones", ganados: 2, empatados: 1, perdidos: 0 }`
* **Resultado esperado**: `{ efectividad_porcentual: "77.78%", clasificacion: "Competitivo", explicacion: "Equipo Dragones obtuvo 7 de 9 puntos posibles." }`

### Caso borde

* **Entrada**: `{ nombre: "Novatos", ganados: 0, empatados: 0, perdidos: 3 }`
* **Resultado esperado**: `{ efectividad_porcentual: "0.00%", clasificacion: "En desarrollo", explicacion: "Equipo Novatos obtuvo 0 de 9 puntos posibles." }`

## Explicacion final

Esta solución es efectiva porque normaliza el rendimiento deportivo a una escala porcentual común, permitiendo comparar equipos independientemente de la cantidad de partidos que hayan jugado. Al separar el cálculo de puntos de la clasificación, el código se vuelve modular y fácil de mantener. El uso de `toFixed(2)` asegura que la salida sea legible y profesional, mientras que el manejo preventivo del caso de "cero partidos" protege la integridad del programa ante situaciones de inicio de temporada.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo (Caso Dragones)**:
* Partidos: $2+1+0 = 3$.
* Puntos: $(2 \times 3) + (1 \times 1) = 7$.
* Posibles: $3 \times 3 = 9$.
* Efectividad: $(7 / 9) \times 100 = 77.777...\% \rightarrow 77.78\%$.