# Plantilla de solucion

## Analisis

* **Entrada:** Un objeto que contiene un arreglo de puntajes (`participantes`), un valor de adición (`bono`) y un valor de descuento (`penalizacion`).
* **Proceso:** 
  1. Validar si el arreglo de participantes contiene elementos.
  2. Obtener el promedio de los puntajes sumándolos con `.reduce()` y dividiendo entre el total.
  3. Calcular el puntaje final aplicando la fórmula matemática `promedio + bono - penalizacion` redondeada al entero más cercano.
  4. Clasificar el rango del jugador según su puntaje final de forma descendente.
* **Salida:** Un objeto con las propiedades `{ puntaje_final: Number, clasificacion: String, explicacion: String }`.

### Reglas identificadas
* Si no hay participantes, el jugador queda "descalificado" con puntaje 0.
* Si el puntaje final es mayor o igual a 25, la clasificación es "competitivo".
* Si el puntaje final es mayor o igual a 15 (pero menor a 25), la clasificación es "Promedio".
* Cualquier puntaje inferior a 15 se clasifica como "amateur".

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