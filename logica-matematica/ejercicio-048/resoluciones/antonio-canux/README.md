# Ejercicio 048 - Patrones de puntuación (Películas de Ciencia Ficción)

**Camper:** Antonio Canux

## Analisis

- Entrada: Un arreglo de números enteros (`reseñas`) que representan calificaciones del 1 al 10 dadas por los usuarios a una película de ciencia ficción.
- Proceso: Se itera sobre el arreglo para calcular la suma total de las calificaciones (puntaje base). Durante el recorrido, se evalúa si la calificación actual y la calificación inmediatamente anterior son ambas iguales a 10. Si este patrón se cumple, se suman 5 puntos a un acumulador de bonos. Finalmente, se suma el puntaje base más el bono y se clasifica la película.
- Salida: Un objeto que desglosa el `puntaje_base`, los `bonos_aplicados`, el `puntaje_total`, un valor booleano `patron_detectado` y la `clasificacion` de la película.

## Reglas identificadas

1. **Acumulación lineal:** El puntaje base es la suma estricta de todos los elementos del arreglo.
2. **Reconocimiento del patrón:** Para que se active el bono, deben existir dos calificaciones de valor `10` en posiciones consecutivas del arreglo (índices consecutivos). 
3. **Bonificación:** Cada vez que se detecta el patrón, se otorgan 5 puntos extra al total de la película.
4. **Umbral de clasificación:** Si el puntaje total (base + bono) alcanza o supera los 45 puntos, la película recibe la categoría de "Obra Maestra de Sci-Fi".

## Pruebas

### Caso normal

Entrada: `reseñas: [8, 10, 10, 9, 10]`

Resultado esperado:
```text
puntaje_base: 47
bonos_aplicados: 5
puntaje_total: 52
patron_detectado: true
clasificacion: "Obra Maestra de Sci-Fi"
```

### Caso borde
Entrada: `reseñas: [6, 7, 8, 7, 9]`

Resultado esperado:

```text
puntaje_base: 37
bonos_aplicados: 0
puntaje_total: 37
patron_detectado: false
clasificacion: "Película Estándar"
```

## Explicacion final
Esta solución funciona porque permite a un algoritmo ir más allá de la simple suma o promedio, dándole la capacidad de "leer el contexto" de los datos mediante el análisis de posiciones consecutivas (reseñas[i] comparado con reseñas[i - 1]). Implementar la validación i > 0 dentro del condicional es vital, ya que evita que el programa intente buscar un índice negativo (-1) en la primera iteración del bucle, lo cual prevendría errores silenciosos o fallos de ejecución al procesar las respuestas de la base de datos de películas.