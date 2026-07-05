
## Entrega
- Nombre: Irma Yaneht Arias García
- Ejercicio: 007
- Area: logica-matematica / logica-general

## Checklist
- [x] Mi PR apunta a dev

## Pensamiento
El objetivo es limpiar los datos de una lista de reproducción. He definido "inconsistencias" como canciones sin título o con duración igual o menor a cero, utilizando un filtro para extraerlas.

## Reglas Aplicadas
1. Detectar títulos vacíos (`""`).
2. Detectar duraciones no válidas (<= 0).

## Cómo ejecutar
Ejecuta el archivo usando la terminal con el comando: `node irma-arias.js`

## Casos de Prueba
- **Normal**: Lista con canciones válidas e inválidas (Resultado: Muestra solo las inconsistentes).
- **Caso Borde**: Lista donde todas las canciones son válidas (Resultado: Lista vacía o mensaje de confirmación).