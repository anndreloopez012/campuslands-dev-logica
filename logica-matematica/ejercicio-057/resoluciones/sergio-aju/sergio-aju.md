# Analisis del reto: Estadísticas de Ranking de Arquitectura 3D

## Analisis

- **Entrada:** Un arreglo de `puntajes` (representando la evaluación de diferentes diseños arquitectónicos), un `bono_calidad` y una `penalizacion_tiempo`.
- **Proceso:** Calcular el promedio de los puntajes, aplicar el bono y restar la penalización para obtener el `puntaje_final`. Luego, categorizar el diseño según su desempeño.
- **Salida:** El `puntaje_final` calculado y la `clasificacion` del proyecto.

## Reglas identificadas

1. **Cálculo base:** Obtener el promedio de la lista `puntajes` (suma de todos los elementos dividida por la cantidad de elementos).
2. **Aplicación de ajustes:** Al promedio calculado se le suma el `bono_calidad` y se le resta la `penalizacion_tiempo`.
3. **Clasificación:**
   - Si el resultado es >= 20: "diseño de vanguardia".
   - Si el resultado es entre 10 y 19: "estándar".
   - Si el resultado es < 10: "en revisión".

## Pruebas

### Caso normal

**Entrada:**
```text
puntajes: [15, 20, 25]
bono_calidad: 5
penalizacion_tiempo: 2