
# Resolución: Ejercicio 007.2 - Secuencias numéricas (Lista de reproducción)

## Pensamiento lógico
He desglosado el problema en tres etapas: **acumulación** (sumar los valores de la lista), **ajuste** (aplicar bonos y penalizaciones) y **categorización** (definir el nivel del usuario según el resultado). Esta separación facilita tanto la lectura como la corrección de errores.

## Reglas aplicadas
1. **Sumatoria aritmética:** Proceso iterativo para obtener el total base.
2. **Jerarquía de ajuste:** Los bonos y penalizaciones se aplican después de la base.
3. **Clasificación condicional:** Bifurcación basada en el resultado final (umbral de 25).

## Cómo ejecutar/revisar
El algoritmo es determinista: dados los mismos números, bono y penalización, siempre entregará el mismo resultado. Es ideal para validar el rendimiento de los usuarios en la plataforma.

## Casos probados
1. **Caso Normal:** Entrada: [12, 18, 25, 30], Bono: 8, Penalización: 3 -> Total: 90 (Clasificación: competitivo).
2. **Caso Borde (Bajo puntaje):** Entrada: [1, 2], Bono: 0, Penalización: 0 -> Total: 3 (Clasificación: básico).