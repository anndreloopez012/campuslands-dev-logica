# Plantilla de solución

## Analisis

- Entrada:

    Las entradas de este proceso son: `nombre_equipo`, `partidos`, `ganados`, `Empatados`, `Perdidos`.

- Proceso:

    El proceso del ejercicio era evaluar la cantidad de partidos gandados y empatados donde dichos valores de entrada se utilizaran para calcular la cantidad de puntos de un equipo y determinar si a clasificado.

- Salida:

    La salida esperada es: 
    ```text
    Equipo: Águilas, Puntos: 8, Resultado: Subcampeón
    ```
## Reglas identificadas

1. Segun la cantidad de partidos gandos de le suman 3 puntos, partidos empatados 1 punto, partidos perdidos 0 puntos

2. Para que el equipo clasificara debia completar como minimo 7 puuntos.

3. Si el equipo no llega a la cantidad minima de puntos queda eliminada.

## Pruebas

### Caso normal

Entrada:
```
    {
        nombre_equipo: "Titanes",
        partidos: 4,
        ganados: 3,
        empatados: 1,
        perdidos: 0
    }
```

Resultado esperado:

```
Equipo: Titanes, Puntos: 11, Resultado: Campeón
```

### Caso borde

Entrada:
```
    {
        nombre_equipo: "Leones",
        partidos: 4,
        ganados: 1,
        empatados: 2,
        perdidos: 1
    }
```

Resultado esperado:
```
Equipo: Leones, Puntos: 7, Resultado: Subcampeón
```

## Explicacion final

La elaboracion de este ejercicio es una calculadora para los puntos de un equipo de futbol, la cantidad de partidos gandados suma 3 puntos al esquipo el cual puede tener mas posibilidades de clasificar, los partidos empatados unicamente suman 1 punto a cada equipo.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
