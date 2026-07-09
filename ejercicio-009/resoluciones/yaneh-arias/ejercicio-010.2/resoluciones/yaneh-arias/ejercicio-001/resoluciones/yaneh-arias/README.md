
# Entrega Ejercicio 001 - Videojuegos Competitivos

## Pensamiento del problema
Para resolver el reto, definí un acumulador que procesa cada puntaje sumando los bonos y restando las penalizaciones de manera secuencial. Clasifiqué el resultado final basándome en un umbral lógico.

## Reglas aplicadas
1. Se procesa cada elemento de la lista.
2. El bono se aplica como un beneficio neto.
3. La penalización se resta para controlar el puntaje.

## Pruebas realizadas
- **Caso Normal:** [12, 18, 25, 30] con bono 8 y penalización 3.
- **Caso Borde:** Lista vacía [] -> Resultado 0.