
# Ejercicio 062: Validación de Datos - Ranking de Fútbol Sala

## ¿Cómo pensaste el problema?
Se identificó que un sistema de ranking de fútbol sala puede fallar si recibe datos corruptos, cadenas vacías o tipos de datos erróneos (como texto en campos numéricos). Por ello, el análisis se centró primero en validar que cada entrada cumpla estrictamente con las reglas lógicas antes de calcular métricas secundarias como la diferencia de goles.

## Reglas aplicadas
1. **Validación de Identidad:** El nombre del equipo no puede estar vacío ni contener espacios en blanco inválidos.
2. **Validación de Rangos Numéricos:** Los puntos, goles a favor y goles en contra deben ser obligatoriamente números mayores o iguales a cero (evitando negativos).
3. **Validación de Estado:** El estado de actividad (`activo`) debe ser estrictamente de tipo booleano (`true` o `false`).
4. **Regla de Caso Borde:** Si se ingresan datos erróneos, vacíos o tipos de datos incorrectos, el sistema rechaza la entrada de inmediato entregando un motivo claro sin detener la ejecución global.

## ¿Cómo ejecutar o revisar tu solución?
Abre la terminal integrada de Visual Studio Code en la raíz del proyecto y ejecuta el siguiente comando:

```bash
node ejercicio-062/resoluciones/irma-arias/irma-arias.js