
# Ejercicio 028: Patrones de Puntuación (Ciencia Ficción)

## 🚀 Descripción del Problema
Este reto consiste en procesar una lista de puntajes de participantes en un contexto de ciencia ficción, aplicando un ciclo acumulador para sumar los valores base, aplicando un bono positivo y restando una penalización final para obtener un puntaje consolidado. A partir de ese resultado, se evalúa una condición para determinar la clasificación del grupo.

## 🛠️ Reglas Aplicadas
1. **Validación de entradas:** Se verifica que el arreglo de participantes no esté vacío.
2. **Cálculo numérico y ciclos:** Se recorre el arreglo utilizando un ciclo `for` clásico para acumular la suma total de los puntajes base.
3. **Operaciones aritméticas:** Se suma el bono y se resta la penalización al acumulado total (`sumaPuntajes + bono - penalizacion`).
4. **Condicionales de clasificación:**
   - Si el puntaje es mayor a 50: **"veterano estelar"**
   - Si el puntaje está entre 20 y 50: **"competitivo"**
   - Si es menor a 20: **"novato espacial"**

## 💻 Cómo Ejecutar la Solución
Asegúrate de tener instalado [Node.js](https://nodejs.org/). Abre tu terminal, dirígete a la carpeta de tu resolución y ejecuta el siguiente comando:

```bash
node irma-arias.js