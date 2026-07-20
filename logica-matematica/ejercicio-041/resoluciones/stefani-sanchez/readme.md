# Ejercicio 041 - Operaciones aritméticas controladas

## ¿Cómo pensé el problema?

Primero identifiqué las entradas del ejercicio:

- Lista de participantes.
- Bono.
- Penalización.

Después definí una función que calcula el promedio de los participantes y aplica las operaciones solicitadas para obtener un puntaje final.

## Reglas aplicadas

1. Validar que la lista de participantes no esté vacía.
2. Verificar que no existan valores negativos.
3. Calcular la suma de todos los participantes.
4. Obtener el promedio.
5. Sumar el bono.
6. Restar la penalización.
7. Clasificar el resultado:
   - **Competitivo:** 30 o más.
   - **Intermedio:** entre 20 y 29.
   - **Básico:** menor de 20.

## Cómo ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Prueba normal

**Entrada**

```text
participantes = [12, 18, 25, 30]
bono = 8
penalizacion = 3
```

**Salida**

```text
puntaje_final: 27
clasificacion: intermedio
```

### Caso borde

**Entrada**

```text
participantes = []
```

**Salida**

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
- Validación de datos.

Cumple con los requisitos solicitados para el ejercicio.