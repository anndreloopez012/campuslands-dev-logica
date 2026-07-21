

# Ejercicio 027: Secuencias numéricas - Lista de reproducción musical

## Autor
Yaneh Arias

## ¿Cómo lo pensé?
1. Se analizaron las entradas: un arreglo con las duraciones de las canciones, un factor multiplicativo de secuencia y un umbral máximo permitido.
2. Se validó que el arreglo no estuviera vacío para evitar fallos lógicos.
3. Se aplicó una transformación mediante un ciclo (`map`) combinando la duración con la posición de cada pista.
4. Se acumuló el valor total de la secuencia (`reduce`) y se contrastó con el umbral mediante una estructura condicional.

## Reglas aplicadas
* Validación de entradas nulas o vacías.
* Transformación de secuencias numéricas basadas en índices y factores externos.
* Acumulación y filtrado por rangos máximos.

## Cómo ejecutar
Ejecuta el script directamente utilizando Node.js en tu terminal:
```bash
node yaneh-arias.js