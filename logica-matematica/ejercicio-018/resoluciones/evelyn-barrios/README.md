# Solución Ejercicio 18: Verificador de Anagramas

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El objetivo de este ejercicio es crear una función que determine si dos cadenas de texto son anagramas la una de la otra.

Dos palabras son anagramas si tienen exactamente los mismos caracteres, con la misma frecuencia, pero en un orden diferente. Por ejemplo, "roma" y "amor" son anagramas.

## 2. Diseño de la Solución

Para implementar la solución, he creado una función `sonAnagramas` que recibe dos cadenas de texto. El enfoque más robusto es crear un mapa de frecuencias de caracteres para cada palabra y luego comparar los mapas.

El algoritmo es el siguiente:

1.  **Limpieza y Normalización**:
    *   Se limpian ambas cadenas de entrada: se eliminan los espacios y se convierten a minúsculas para asegurar que la comparación no sea sensible a mayúsculas/minúsculas ni a espacios (ej: "Amor Roma" y "roma amor").

2.  **Validación de Longitud**:
    *   Se comprueba si las cadenas limpias tienen la misma longitud. Si no la tienen, es imposible que sean anagramas, por lo que la función devuelve `false` inmediatamente.

3.  **Creación de Mapas de Frecuencia**:
    *   Se crea un mapa (un objeto de JavaScript) para cada cadena, donde las claves son los caracteres y los valores son el número de veces que aparecen.

4.  **Comparación de Mapas**:
    *   Se compara el número de claves únicas en ambos mapas. Si es diferente, no son anagramas.
    *   Se itera sobre uno de los mapas y se verifica que cada clave (carácter) exista en el segundo mapa con la misma frecuencia. Si se encuentra cualquier discrepancia, la función devuelve `false`.

5.  **Resultado**: Si todas las comprobaciones pasan, significa que las cadenas son anagramas, y la función devuelve `true`.

## 3. Pruebas Implementadas

Para validar la función, se han creado varios casos de prueba:
*   Un par de anagramas simples ("roma", "amor").
*   Un par que no son anagramas.
*   Anagramas con diferente capitalización y espacios.

## 4. Ejecución

El código es JavaScript puro. Se puede probar abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo directamente con Node.js.

```bash
# Si usas Node.js
node matematicas/ejercicio-18/resoluciones/evelyn-barrios/evelyn-barrios.js
```