## Justificación de la Entrega - Logica general 021

Para resolver este vigesimoprimer ejercicio sobre clasificacion por reglas enfocado en videojuegos competitivos, mantuve el mismo patron de desarrollo moderno, limpio y de alta eficiencia utilizando JavaScript nativo.

### Como pense el problema y reglas aplicadas
En el backend de un videojuego competitivo, la clasificacion automatizada de perfiles y reportes en las salas de espera (*matchmaking lobbies*) es esencial para evitar la degradacion de la experiencia de juego. Configure la logica del script para escanear de manera prioritaria e ininterrumpida si existen cuentas o registros en estado `bloqueado` (asociados a trampas, reportes de toxicidad o restricciones de red). Utilizando variables booleanas optimizadas mediante el metodo nativo `.includes()`, el sistema escanea el arreglo en un solo ciclo de memoria. Si halla una coincidencia con la regla, frena el emparejamiento inmediatamente para mitigar riesgos de juego sucio antes de dar paso a usuarios con solicitudes `pendientes` prioritarias.

El script incluye un filtro de seguridad en la primera linea (`!items?.length`) para atajar entradas corruptas o huerfanas, asegurando que la consola de comandos responda un objeto controlado y descriptivo en lugar de romper el flujo del software.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa con la salida exacta estipulada en las instrucciones (`accion: revisar bloqueado`).
2. **Caso borde:** Inyeccion controlada de datos nulos y vacios para certificar la resiliencia del "guardrail".
3. **Caso propio:** Evaluacion de un lobby competitivo con jugadores aprobados para dar luz verde a la carga de la partida.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y desplázate hasta el directorio del reto: `ejercicio-021/resoluciones/joseph-ramirez/`.
2. Corre el script principal ejecutando:
   ```bash
   node joseph-ramirez.js