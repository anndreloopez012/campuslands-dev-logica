
# Reto: Lógica de Películas de Miedo (Módulos y Divisibilidad)

## 1. Análisis del Problema
El objetivo es procesar una lista de puntajes de participantes, aplicar reglas matemáticas basadas en divisibilidad (usando el operador de módulo) y determinar una clasificación final basada en el resultado obtenido.

## 2. Reglas Aplicadas
* **Suma Inicial**: Se calcula la suma total de todos los elementos presentes en el arreglo de `participantes`.
* **Regla de Bono**: Si el `total_suma` es divisible exactamente por el valor del `bono` (residuo = 0), se suma el valor del bono al total.
* **Regla de Penalización**: Si el `total_suma` es divisible exactamente por el valor de la `penalización` (residuo = 0), se resta el valor de la penalización al total.
* **Clasificación**: 
    * Si el puntaje es > 50: "experto en terror"
    * Si el puntaje es entre 20 y 50: "competitivo"
    * Si el puntaje es < 20: "aprendiz"

## 3. Ejecución
Para revisar la solución, ejecuta el archivo principal en tu terminal:
* Si usas Python: `python nombre-apellido.py`
* Si usas JavaScript: `node nombre-apellido.js`

## 4. Casos de Prueba

| Caso | Entrada (participantes, bono, penalizacion) | Resultado Esperado |
| :--- | :--- | :--- |
| **Normal** | [12, 18, 25, 30], 8, 3 | 82 (dependiendo de la suma) |
| **Borde (Vacío)** | [], 8, 3 | 0 (aprendiz) |

*Nota: La lógica valida que el residuo (MOD) sea cero para aplicar las reglas de ajuste.*