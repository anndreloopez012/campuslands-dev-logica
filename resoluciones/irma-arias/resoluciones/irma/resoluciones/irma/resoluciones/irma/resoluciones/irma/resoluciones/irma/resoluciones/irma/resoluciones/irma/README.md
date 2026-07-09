
# Resolución: Ejercicio 007 - Detección de inconsistencias (Playlist)

## Pensamiento lógico
Para identificar inconsistencias, utilicé un conjunto (`set`) llamado `ids_vistos`. Esto permite verificar en tiempo constante $O(1)$ si un ID ya ha sido procesado anteriormente, haciendo el algoritmo eficiente.

## Reglas aplicadas
1. **Validación de Identidad:** Se descartan canciones sin ID definido.
2. **Unicidad:** Se rechaza cualquier canción que intente reutilizar un ID ya registrado.
3. **Validación de Rango:** Se descartan canciones con duración igual o menor a cero.

## Cómo ejecutar
Ejecuta el archivo directamente con Python:
`python irma.py`

## Casos probados
1. **Caso Normal:** Lista con una canción duplicada y una con duración cero -> El sistema filtra ambas y retorna solo las correctas.
2. **Caso Borde:** Lista vacía -> El programa responde con listas vacías sin errores.