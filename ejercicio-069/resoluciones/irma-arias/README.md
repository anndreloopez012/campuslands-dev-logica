
# Ejercicio 069: Películas de Miedo - Simulación de estados

## ¿Cómo pensé el problema?
Analicé que simular estados dinámicos requiere modelar un ciclo que lea eventos secuenciales y modifique las variables de estado (como nivel de miedo y condición de supervivencia) en función de reglas lógicas condicionales.

## Reglas aplicadas
1. **Validación inicial:** Comprobar que el personaje y la lista de eventos contengan datos estructurados y no estén vacíos.
2. **Transición de estados:** Modificar el estado del personaje (*alerta*, *aterrorizado*, *en pánico*, *seguro* o *eliminado*) basándose en los incrementos o reducciones del nivel de miedo acumulado tras cada evento de terror.
3. **Condición de parada:** Detener la simulación si el personaje alcanza el estado terminal de eliminación.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-069/resoluciones/irma-arias/irma-arias.js