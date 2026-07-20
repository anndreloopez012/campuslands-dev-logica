# Ejercicio 043 - Promedios y medianas

## ¿Cómo pensé el problema?

Primero identifiqué las entradas: una lista de participantes, un bono y una penalización.

Después calculé el promedio de la lista y la mediana ordenando los valores. Finalmente apliqué el bono y la penalización para obtener el puntaje final y clasificar el resultado.

## Reglas aplicadas

1. Validar que la lista no esté vacía.
2. Verificar que no existan valores negativos.
3. Calcular el promedio.
4. Calcular la mediana.
5. Sumar el bono.
6. Restar la penalización.
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
bono = 8
penalizacion = 3
```

**Resultado**

```text
promedio: 21.25
mediana: 21.5
puntaje_final: 26
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

- Arreglos.
- Funciones.
- Condicionales.
- Ciclos.
- Acumuladores.
- Promedio.
- Mediana.
- Validación de datos.

Cumple con todos los requisitos solicitados para el ejercicio.