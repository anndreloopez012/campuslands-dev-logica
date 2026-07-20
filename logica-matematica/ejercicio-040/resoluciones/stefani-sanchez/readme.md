# Ejercicio 040 - Simulaciones con Fórmulas

## ¿Cómo pensé el problema?

Primero identifiqué las entradas:

- Lista de participantes.
- Bono.
- Penalización.

Después calculé el promedio de los participantes y a ese resultado le sumé el bono y le resté la penalización para obtener el puntaje final.

## Reglas aplicadas

1. Calcular el promedio de la lista.
2. Sumar el bono.
3. Restar la penalización.
4. Clasificar el resultado:
   - 30 o más: Competitivo.
   - Entre 20 y 29: Intermedio.
   - Menor de 20: Básico.
5. Validar que la lista no esté vacía.

## Cómo ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Entradas:

```text
participantes = [12,18,25,30]
bono = 8
penalizacion = 3
```

Resultado:

```text
puntaje_final: 27
clasificacion: intermedio
```

### Caso borde

Entradas:

```text
participantes = []
```

Resultado:

```text
La lista de participantes está vacía.
```

## Conclusión

La solución utiliza arreglos, ciclos, funciones, condicionales y validación de datos para resolver el problema de forma general.