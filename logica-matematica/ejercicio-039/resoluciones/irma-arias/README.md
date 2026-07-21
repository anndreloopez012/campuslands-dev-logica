
# Ejercicio 039: Validaciones Numéricas (Fórmulas Químicas)

## 🚀 Descripción del Problema
Este reto consiste en procesar datos numéricos bajo la temática de fórmulas químicas, aplicando un ciclo acumulador con validaciones numéricas estrictas (control de rangos válidos, tipos de datos y filtrado de elementos erróneos), e integrando bonos y penalizaciones para el resultado final.

## 🛠️ Reglas Aplicadas
1. **Validación Estricta:** Se evalúa que la entrada no esté vacía y que cada número dentro del arreglo esté dentro del rango permitido (0 a 100) para considerarse válido químicamente.
2. **Ciclo y Acumulador:** Se recorre el arreglo sumando únicamente los valores que superan las validaciones de rango.
3. **Cálculo Numérico:** Se computa el puntaje final sumando el bono y restando la penalización sobre la suma validada.
4. **Condicionales:** Se clasifica el compuesto según el puntaje obtenido ("formula estable", "reaccion moderada", "compuesto volatil").

## 💻 Instrucciones de Ejecución
Ejecuta el archivo principal utilizando Node.js en la terminal:
```bash
node irma-arias.js