# Analisis del reto: Normalización de Puntajes de Soldadura

## Analisis

- **Entrada:** Un arreglo de `puntajes_tecnicos` (evaluación de soldadura), un `bono_calidad` y una `penalizacion_seguridad`.
- **Proceso:** Calcular el puntaje normalizado (promedio ajustado), sumando el bono y restando la penalización por incidentes de seguridad.
- **Salida:** El `puntaje_final` (normalizado) y la `clasificacion` de competencia del soldador.

## Reglas identificadas

1. **Cálculo de normalización:** Obtener el promedio de los puntajes técnicos registrados.
2. **Aplicación de ajustes:** Al promedio, sumar el `bono_calidad` y restar la `penalizacion_seguridad`.
3. **Clasificación:**
   - Si el resultado es >= 80: "certificado experto".
   - Si el resultado es entre 50 y 79: "certificado básico".
   - Si el resultado es < 50: "requiere capacitación".

## Pruebas

### Caso normal

**Entrada:**
```text
puntajes_tecnicos: [70, 80, 90]
bono_calidad: 10
penalizacion_seguridad: 5