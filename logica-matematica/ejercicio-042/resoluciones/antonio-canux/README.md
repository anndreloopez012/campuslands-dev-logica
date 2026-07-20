# Ejercicio 042 - Ranking Fútbol Sala

**Camper:** Antonio Canux
 
## Analisis

- Entrada: Valores numéricos para `partidosJugados`, `partidosGanados`, `golesFavor` y `golesContra`.
- Proceso: Se obtiene el porcentaje de victorias dividiendo los partidos ganados entre los jugados. Luego se obtiene la proporción de efectividad goleadora (goles a favor respecto al total de goles del equipo en la pista). Se aplica un sistema de pesos (70% para victorias, 30% para goles) para obtener un puntaje final y definir si el equipo avanza o es eliminado.
- Salida: Un objeto que detalla el `porcentaje_victorias`, la `proporcion_goles`, el `puntaje_final` ponderado y el `estado` del equipo en el torneo.

## Reglas identificadas

1. **Porcentaje de éxito:** Se calcula la relación directa entre victorias y juegos disputados, multiplicada por 100.
2. **Proporción de goles:** Representa qué porcentaje del total de goles en los partidos del equipo fueron anotados por ellos mismos.
3. **Ponderación del Ranking:** Las victorias tienen mayor valor en el ranking de futsal (70%), mientras que el desempeño goleador sirve como complemento (30%).
4. **Corte de clasificación:** Un equipo necesita un puntaje ponderado igual o superior a 60 para avanzar a la liguilla.

## Pruebas

### Caso normal

Entrada: `partidosJugados: 10`, `partidosGanados: 7`, `golesFavor: 35`, `golesContra: 15`

Resultado esperado:
```text
porcentaje_victorias: "70%"
proporcion_goles: "70%"
puntaje_final: 70
estado: "Avanza a liguilla"
```

### Caso borde
Entrada: `partidosJugados: 5`, `partidosGanados: 1`, `golesFavor: 10`, `golesContra: 30`

Resultado esperado:

```text
porcentaje_victorias: "20%"
proporcion_goles: "25%"
puntaje_final: 21.5
estado: "Zona de eliminación"
```

## Explicacion final
Esta solución funciona porque estandariza el desempeño de distintos equipos, sin importar si han jugado una cantidad diferente de partidos, convirtiendo los datos brutos en porcentajes comparables. Al separar el peso de las victorias del peso de los goles, el algoritmo recompensa principalmente a los equipos que ganan, pero utiliza la proporción de goles como un factor de calidad de juego. Las validaciones iniciales previenen errores fatales como la división por cero si un equipo recién inscrito aún no ha debutado.