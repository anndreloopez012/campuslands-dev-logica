
# Ejercicio 015: Velocidad, Tiempo y Distancia en Dibujo Digital

## Pensamiento del problema
Para digitalizar un trazo, calculo la distancia cubierta multiplicando la velocidad del cursor por el tiempo de ejecución. Esto permite determinar si el trazado alcanza a cubrir la longitud necesaria del lienzo.

## Reglas aplicadas
1. **Fórmula:** Distancia = Velocidad * Tiempo.
2. **Validación:** Si la distancia supera los 500 píxeles, se marca como 'Lienzo completo'.

## Casos de prueba
- **Normal:** Velocidad 50px/s, Tiempo 10s -> Distancia 500 (Lienzo completo).
- **Caso Borde:** Velocidad 50px/s, Tiempo 0s -> Distancia 0 (Trazado parcial).