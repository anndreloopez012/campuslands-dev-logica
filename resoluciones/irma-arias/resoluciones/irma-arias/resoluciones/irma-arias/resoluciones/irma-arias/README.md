
# Resolución: Ejercicio 003.2 - Toma de decisiones (Esports)

## Pensamiento lógico
He utilizado un modelo de "decisión secuencial". Al evaluar primero las condiciones excluyentes (penalización), evito procesar datos que ya sabemos que resultarán en una descalificación, haciendo el flujo más eficiente y claro.

## Reglas aplicadas
1. **Filtro de integridad:** La penalización anula cualquier otro logro deportivo.
2. **Filtro de cantidad:** Mínimo de 5 participaciones.
3. **Filtro de calidad:** Mínimo de 10 puntos de rendimiento.

## Cómo ejecutar/revisar
Esta lógica puede seguirse manualmente: si alguno de los `SI` se cumple, el algoritmo termina (Early Return). Si ninguno se cumple, el equipo clasifica.

## Casos probados
1. **Caso Normal:** 15 puntos, 6 partidas, no penalizado -> Resultado: clasificado.
2. **Caso Borde (Penalización):** 50 puntos, 10 partidas, penalizado -> Resultado: descalificado.
3. **Caso Borde (Incompleto):** 12 puntos, 2 partidas, no penalizado -> Resultado: descalificado.