
# Resolución: Torneo de Esports

## Pensamiento del problema
Para resolver este reto, identifiqué que el problema es una búsqueda de valor máximo condicional. Utilicé `Array.prototype.reduce` porque permite comparar un elemento con el "acumulado" (el mejor hasta el momento), facilitando la lógica de desempate.

## Reglas aplicadas
1. **Prioridad primaria:** Puntos.
2. **Prioridad secundaria:** Partidas ganadas (solo si los puntos son iguales).
3. **Validación:** Se verifica que el arreglo no esté vacío.

## Cómo ejecutar
1. Asegúrate de tener instalado [Node.js](https://nodejs.org/).
2. Abre la terminal en la carpeta `resoluciones/nombre-apellido/`.
3. Ejecuta: `node nombre-apellido.js`.

## Casos probados
* **Caso normal:** Comparación directa de puntos donde un equipo supera al otro claramente.
* **Caso borde:** Empate en puntos donde la decisión recae en el número de partidas ganadas.
Consejos para tu entrega: