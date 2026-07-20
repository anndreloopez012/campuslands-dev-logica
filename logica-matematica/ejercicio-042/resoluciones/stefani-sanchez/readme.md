# Ejercicio 042 - Porcentajes y proporciones

## ¿Cómo pensé el problema?

Primero identifiqué las entradas:

- Lista de participantes.
- Porcentaje de bono.
- Porcentaje de penalización.

Luego calculé el promedio de los participantes y apliqué un porcentaje de aumento y otro de descuento para obtener el puntaje final.

## Reglas aplicadas

1. Validar que la lista no esté vacía.
2. Verificar que no existan valores negativos.
3. Calcular el promedio.
4. Aplicar el porcentaje de bono.
5. Aplicar el porcentaje de penalización.
6. Obtener el puntaje final.
7. Clasificar el resultado.

- Competitivo: 30 o más.
- Intermedio: entre 20 y 29.
- Básico: menor de 20.

## Cómo ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Prueba normal

**Entrada**

```text
participantes = [12,18,25,30]
bono = 8%
penalizacion = 3%
```

**Resultado**

```text
puntaje_final: 23
clasificacion: intermedio
```

### Caso borde

**Entrada**

```text
participantes = []
```

**Resultado**

```text
La lista de participantes está vacía.
```

## Conclusión

La solución utiliza:

- Funciones.
- Arreglos.
- Ciclos.
- Condicionales.
- Acumuladores.
- Operaciones con porcentajes.
- Validación de datos.

Cumple con los requisitos del ejercicio.