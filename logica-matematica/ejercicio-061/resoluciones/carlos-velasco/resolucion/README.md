# Plantilla de solucion

## Analisis

* **Entrada**: Un número `mmrBase`, un string `resultado` ("victoria" o "derrota"), un número `racha` y un booleano `desconexion`.
* **Proceso**: Cálculo jerárquico de un ajuste de puntos según eventos (penalización por desconexión, victoria con bono por racha o derrota con atenuación por racha), validación de piso mínimo en 0 y clasificación por rangos.
* **Salida**: Un objeto que contiene el `mmr_final`, la `clasificacion` de rango y una `explicacion` del ajuste.

## Reglas identificadas

1. **Penalización Prioritaria**: Si existe `desconexion`, el ajuste es siempre -50, ignorando el resultado de la partida.
2. **Bonificación de Racha**: En caso de victoria, el bono es $20 + (racha \times 5)$. En caso de derrota, si la racha es > 2, la penalización se reduce a -5 (en lugar de -15).
3. **Restricción de Rango**: El MMR resultante nunca puede ser inferior a 0. Los rangos se definen como: Oro ($\ge 2000$), Plata ($\ge 1000$) y Bronce ($< 1000$).

## Pruebas

### Caso normal

* **Entrada**: `1000, "victoria", 3, false`
* **Resultado esperado**: `{ mmr_final: 1035, clasificacion: "Plata", explicacion: "Ajuste aplicado: 35. " }`

### Caso borde

* **Entrada**: `100, "derrota", 0, true`
* **Resultado esperado**: `{ mmr_final: 50, clasificacion: "Bronce", explicacion: "Ajuste aplicado: -50. Penalización por desconexión." }`

## Explicacion final

La solución funciona mediante una lógica condicional encadenada que prioriza la seguridad del sistema (desconexión) sobre el desempeño del juego. El uso de `Math.max(0, ...)` es fundamental para garantizar la coherencia matemática del sistema, evitando valores negativos imposibles. Además, el sistema de escalabilidad por racha fomenta el juego continuo y recompensado, mientras que los umbrales estáticos aseguran una clasificación justa y predecible para los usuarios.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (Victoria, racha 3)**:
* Ajuste: $20 + (3 \times 5) = 20 + 15 = 35$.
* MMR Final: $1000 + 35 = 1035$.
* Rango: $1035 \ge 1000$ $\rightarrow$ "Plata".