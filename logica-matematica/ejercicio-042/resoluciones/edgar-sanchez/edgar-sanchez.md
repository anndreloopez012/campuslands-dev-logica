# Pensamiento y Resolución del Problema de Rendimiento Competitivo

El problema se abordó desde la perspectiva de la analítica de datos en videojuegos competitivos (eSports), donde se requiere evaluar el impacto real de un jugador en sus partidas mediante un indicador de rendimiento controlado algebraicamente (KDA ajustado por resultado).

El diseño de la solución se estructuró bajo las siguientes reglas de negocio y control numérico:
1. **Prevención de Indeterminaciones**: En partidas perfectas donde el jugador tiene 0 muertes, la división tradicional para calcular el KDA daría como resultado infinito ($KDA = (K + A) / 0$). Se implementó un control para tratar las 0 muertes como 1, manteniendo la coherencia aritmética.
2. **Impacto del Resultado**: Ganar o perder afecta directamente la percepción del desempeño. Se aplica un multiplicador de bonificación por victoria (+20%) o penalización por derrota (-10%).
3. **Control de Límites (Clamping)**: Se asegura matemáticamente que el rendimiento final nunca sea un número negativo, estableciendo un piso absoluto de cero.

## Elección del Lenguaje: JavaScript (.js)

Se seleccionó JavaScript por su idoneidad para procesar flujos de datos JSON, comunes en las APIs de videojuegos (como Riot Games, Steam o Blizzard). La capacidad de mutar y mapear colecciones de datos de forma nativa sin necesidad de bucles imperativos pesados hace que la lógica de cálculo sea limpia, directa y sumamente eficiente en entornos de ejecución tanto del lado del cliente como del servidor.

## Contenido del Código

El script define una colección de partidas con estadísticas básicas de juego. La función procesadora mapea este historial aplicando las reglas aritméticas descritas, calculando el divisor de manera segura mediante un operador ternario y limitando el resultado inferior mediante una función matemática nativa. No requiere de ninguna instalación previa de paquetes y se encuentra autocontenido.