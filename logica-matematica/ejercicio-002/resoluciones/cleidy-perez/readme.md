# Plantilla de solucion

## Analisis

* **Entrada:**
  - Un objeto que contiene un arreglo numérico (`participantes`).
  - Un número entero positivo para adición (`bono`).
  - Un número entero positivo para sustracción (`penalizacion`).
* **Proceso:**
  1. Validar inmediatamente si el arreglo de participantes contiene elementos (`p.length`).
  2. Reducir el arreglo sumando todos los puntajes mediante `.reduce()` y dividiendo por la cantidad de elementos para obtener el promedio (`prom`).
  3. Calcular el puntaje final sumando el bono y restando la penalización, redondeando el resultado al entero más cercano con `Math.round()`.
  4. Clasificar el rango utilizando operadores ternarios encadenados de forma descendente.
* **Salida:**
  - Un objeto con la estructura exacta: `{ puntaje_final: Number, clasificacion: String, explicacion: String }`.

### Reglas identificadas
* Si la lista de participantes está vacía o no existe, el resultado es automático: puntaje 0 y clasificación "descalificado".
* Si el puntaje final calculado es igual o mayor a 25, la clasificación es "competitivo".
* Si el puntaje final calculado es igual o mayor a 15 (y menor a 25), la clasificación es "Promedio".
* Si el puntaje final es menor a 15, la clasificación por defecto es "amateur".

---

## Pruebas

### Caso normal

* **Entrada:**
  ```json
  {
    "participantes": [12, 18, 25, 30],
    "bono": 8,
    "penalizacion": 3
  }