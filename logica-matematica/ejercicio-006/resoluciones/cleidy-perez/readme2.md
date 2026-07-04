# Solución: Conversión de Unidades (Autos Hiperdeportivos)

## Leer instrucciones e Identificar entradas
El ejercicio nos pide revisar una lista de autos que tienen su velocidad medida en millas por hora (Mph) de Estados Unidos y pasarlas al sistema internacional que usamos aquí, que son kilómetros por hora (Kmh).
* **Entradas:** Una lista de autos, donde cada uno tiene su `nombre` y su `velocidadMph` (número).

## Definir salidas
* **Salidas:** Una lista nueva que muestra los mismos autos, pero con la velocidad ya convertida a kilómetros por hora (`velocidadKmh`) y una etiqueta que dice qué tan rápido es.

## Reglas de negocio y Condicionales
1. **Regla de Conversión:** Para pasar de millas a kilómetros hay que multiplicar la velocidad por $1.60934$.
2. **Regla del Límite:** Usamos un condicional `if` para ver si el auto alcanza o supera los $400\text{ Kmh}$. Si los pasa, se gana la etiqueta de "Hiperdeportivo Leyenda". Si no los alcanza, se queda como "Deportivo de alta gama".

## Cálculo numérico y Razonamiento cuantitativo
Aquí usamos matemáticas básicas. Hacemos una multiplicación para cambiar la unidad de medida:

$$\text{Velocidad en Kmh} = \text{Velocidad en Mph} \times 1.60934$$

Después usamos `Math.round()` para quitar los decimales largos y dejar números enteros más limpios y fáciles de entender para cualquier persona.

## Probar casos
* **Caso Normal:** El Bugatti tiene 261 Mph. Al multiplicarlo nos da $420\text{ Kmh}$. Como $420$ es mayor a $400$, el código lo clasifica correctamente como "Hiperdeportivo Leyenda". El Ferrari tiene 217 Mph, cambia a $349\text{ Kmh}$ y se queda en "Deportivo de alta gama".
* **Caso Borde:** Si nos pasan una lista vacía sin autos, el programa lo detecta al inicio y nos devuelve un resultado vacío `[]` de forma segura para evitar que la aplicación falle.