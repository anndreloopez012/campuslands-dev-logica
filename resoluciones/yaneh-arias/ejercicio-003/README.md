
# Ejercicio 003: Torneo de Esports

## Lógica aplicada
- **Promedio:** Sumatoria de los puntajes dividida por la cantidad de participantes.
- **Regla:** Se toma el promedio, se suma un bono y se resta una penalización.
- **Clasificación:** Si el resultado es >= 25, es "competitivo", de lo contrario es "en_formacion".

## Pruebas
1. **Caso Ejemplo:** Entrada [12, 18, 25, 30], Bono 8, Penalización 3 -> Resultado 27 (competitivo).
2. **Caso Borde:** Entrada [5, 5, 5], Bono 0, Penalización 0 -> Resultado 5 (en_formacion).