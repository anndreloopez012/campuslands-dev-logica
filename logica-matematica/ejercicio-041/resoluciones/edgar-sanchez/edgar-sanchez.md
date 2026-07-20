# Solucion: Problema 50 - Videojuegos Competitivos

## Analisis del Problema
Se requiere diseñar un sistema de emparejamiento (matchmaking) y cálculo de puntuación para un videojuego competitivo en formato MMR (Matchmaking Rating). El algoritmo debe evaluar el rendimiento de un jugador al finalizar una partida, calculando la variación neta de sus puntos de liga basándose en su rendimiento individual, la dificultad del rival y penalizaciones por inactividad o mala conducta.

- Entrada: Un objeto con los datos de la partida (`jugadorId` [texto/entero], `mmrActual` [entero], `resultado` [texto: "Victoria", "Derrota"], `bajas` [entero], `muertes` [entero], y `penalizado` [booleano]).
- Proceso:
  1. Validar la integridad y consistencia de los datos numéricos.
  2. Calcular el ratio K/D (Kill/Death Ratio) como métrica de rendimiento individual.
  3. Determinar el cambio base de MMR según el resultado y ajustarlo mediante multiplicadores de rendimiento.
  4. Aplicar penalizaciones absolutas si el jugador incurrió en infracciones.
- Salida: Estructura con la variación neta del MMR, el nuevo puntaje total del jugador y el estatus final de la cuenta.

## Reglas de Negocio
1. Control de Integridad: Si `mmrActual` es menor a cero, o si `bajas` o `muertes` son negativos, la partida se descarta y el estado se define como `"Registro Invalido"`.
2. Cálculo de Rendimiento Individual (K/D Ratio): 
   - Si `muertes` es igual a 0, el divisor se asume como 1 para evitar divisiones por cero.
   - El ratio K/D es igual a $bajas / muertes$.
3. Cambio Base de MMR y Modificadores:
   - Victoria: Genera $+25$ puntos base. Si el K/D es mayor o igual a 2.0, se otorga una bonificación de desempeño del **20%** sobre los puntos base ($+5$ puntos).
   - Derrota: Resta $-20$ puntos base. Si el K/D es menor o igual a 0.5, se aplica una penalización de rendimiento del **25%** extra sobre los puntos restados (pierde $-5$ puntos adicionales).
4. Impacto por Infracción: Si `penalizado` es `true`, el jugador pierde $15$ puntos adicionales directos al final de cualquier cálculo previo. El MMR final nunca puede ser inferior a 0.

## Casos de Prueba

### Caso 1: Victoria destacada sin penalización
Entrada:
```json
{
  "jugadorId": "EdgarS",
  "mmrActual": 1500,
  "resultado": "Victoria",
  "bajas": 12,
  "muertes": 4,
  "penalizado": false
}