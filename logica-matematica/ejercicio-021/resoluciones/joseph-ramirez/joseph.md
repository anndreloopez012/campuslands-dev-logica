## Justificación de la Entrega - Logica matematica 021

Para resolver este vigesimoprimer ejercicio de logica matematica sobre operaciones aritmeticas controladas en videojuegos competitivos, mantuve el enfoque de desarrollo compacto, moderno y limpio utilizando JavaScript nativo.

### Como pense el problema y reglas aplicadas
En el desarrollo de sistemas de emparejamiento (*matchmaking*) para videojuegos competitivos, analizar los promedios de rendimiento de los jugadores ayuda a balancear el MMR o las puntuaciones de las salas de juego. Implemente el metodo nativo `.reduce()` para calcular en una sola linea de codigo la sumatoria de las muestras del arreglo, dividiendo el total por su longitud para encontrar la media estadistica base de la sala de espera.

Posteriormente, sume el bono por rachas de victorias consecutivas y reste la penalizacion por penalizaciones activas de la comunidad o abandonos segun las reglas de negocio. Para finalizar, aplique un `Math.round()` con el fin de blindar el calculo contra errores de punto flotante de java scrips, garantizando que la salida devuelva el numero entero exacto de 27 estipulado en la guia de Campuslands.

El script cuenta con un filtro de "early return" (`!participantes?.length`) en la primera linea para evitar que el motor tire un fallo critico si el sistema inyecta colecciones vacias o nulas de forma imprevista.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa de la coleccion `[12, 18, 25, 30]`, bono 8 y penalizacion 3, obteniendo un puntaje final de 27 calificado como competitivo.
2. **Caso borde:** Control preventivo ante arreglos vacios o nulos devolviendo un estado controlado seguro para el backend.
3. **Caso propio:** Simulacion numerica y balanceo de metricas en una escuadra competitiva registrada para un torneo oficial.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y desplázate hasta la ruta de esta entrega: `ejercicio-021/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js