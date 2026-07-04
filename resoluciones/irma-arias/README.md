
## Entrega
- Nombre: Irma Yaneht Arias García
- Ejercicio: 003
- Area: logica-matematica / logica-general

## Checklist
- [x] Mi PR apunta a dev

## Pensamiento
Para este reto de Esports, identifiqué que la entrada es una lista de objetos (equipos). La lógica requiere evaluar dos condiciones independientes (victorias y nivel) para determinar si un equipo clasifica.

## Reglas Aplicadas
1. Si un equipo tiene 3 o más victorias, clasifica.
2. Si un equipo tiene nivel de habilidad mayor a 8, clasifica.
3. Si no cumple ninguna de las anteriores, queda eliminado.

## Cómo ejecutar
Ejecuta el archivo usando la terminal con el comando: `node irma-arias.js`

## Casos de Prueba
- **Normal**: Equipo "CyberKnights" con 4 victorias (Resultado: Clasificado).
- **Caso Borde**: Equipo "DataGhosts" con 1 victoria pero nivel 9 (Resultado: Clasificado por habilidad).