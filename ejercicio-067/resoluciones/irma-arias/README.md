
# Ejercicio 067: Lista de Reproducción Musical - Detección de inconsistencias

## ¿Cómo pensé el problema?
Analicé que una lista de reproducción puede corromperse o contener errores de captura humana (como campos incompletos, tiempos negativos o identificadores repetidos). Por ello, el algoritmo debe examinar cada elemento de manera individual aplicando filtros lógicos estrictos para reportar anomalías con precisión.

## Reglas aplicadas
1. Validar que la estructura principal de la lista no esté vacía.
2. Comprobar la obligatoriedad de los atributos esenciales (`id`, `titulo`, `artista`).
3. Verificar que los valores numéricos de tiempo sean estrictamente mayores a cero.
4. Utilizar estructuras de control para identificar registros duplicados mediante sus identificadores únicos.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal con el comando:
   ```bash
   node ejercicio-067/resoluciones/irma-arias/irma-arias.j