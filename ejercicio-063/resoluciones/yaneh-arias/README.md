# Ejercicio 063: Promedios y Medianas en Torneo de Esports

## ¿Cómo pensé el problema?
1. Analicé los datos de entrada: un conjunto de puntajes de participantes en un torneo de esports, un valor de bono y una penalización.
2. Ordené los puntajes de forma ascendente para poder hallar la mediana estadística del grupo.
3. Evalué si la cantidad de elementos era par o impar para calcular la mediana exacta.
4. Apliqué el bono sumándolo y la penalización restándola a la mediana obtenida.
5. Clasifiqué el resultado final en categorías (*elite*, *competitivo*, *novato*) mediante estructuras condicionales.

## Reglas Aplicadas
* Validación de arreglos vacíos para prevenir errores de ejecución.
* Ordenamiento de datos y cálculo de medianas matemáticas.
* Operaciones aritméticas controladas y redondeo de datos numéricos.

## ¿Cómo ejecutar o revisar tu solución?
1. Abre tu terminal en la ruta: \ejercicio-063/resoluciones/yaneh-arias/\
2. Ejecuta el comando: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Puntajes \[12, 18, 25, 30]\, bono de 8 y penalización de 3.
* **Caso Borde:** Arreglo con un solo elemento \[20]\, bono de 5 y penalización de 2.
