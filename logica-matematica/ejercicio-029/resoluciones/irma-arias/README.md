
# Ejercicio 029: Módulos y Divisibilidad (Películas de Miedo)

## 🚀 Descripción del Problema
Este reto consiste en analizar una lista numérica bajo la temática de películas de miedo, aplicando operaciones de acumulación, evaluación de módulos (`%`) para detectar números pares/divisibles, y aplicando bonos y penalizaciones para obtener una clasificación final.

## 🛠️ Reglas Aplicadas
1. **Validación:** Se verifica que la lista de participantes contenga elementos.
2. **Ciclo y Acumulador:** Se recorre el arreglo sumando los valores base y evaluando mediante el operador módulo (`% 2 === 0`) cuántos números son pares.
3. **Cálculo Numérico:** Se calcula el puntaje final sumando el bono y restando la penalización.
4. **Condicionales:** Se clasifica al grupo según la cantidad de números pares y el puntaje obtenido ("superviviente experto", "en peligro", "fantasma atrapado").

## 💻 Instrucciones de Ejecución
Ejecuta el archivo principal utilizando Node.js en la terminal:
```bash
node irma-arias.js