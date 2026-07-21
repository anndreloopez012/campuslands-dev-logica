# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con los sustos por minuto, un bono por atmósfera y una penalización por clichés.
- **Proceso:** Validar si el arreglo de sustos está vacío para retornar 0, y calcular el puntaje final sumando la cantidad de escenas analizadas en el arreglo más el bono, restando finalmente la penalización.
- **Salida:** Un valor numérico que representa el puntaje final de la película de terror.

## Reglas identificadas

1. Si no hay escenas registradas en el arreglo, el puntaje resultante es 0.
2. El cálculo base es la suma de la cantidad de elementos en el arreglo (`escenasAnalizadas`) y el `bonoAtmoxfera`.
3. El `puntajeFinal` resulta de restar la `penalizacionCliche` al resultado del cálculo base.

## Pruebas

### Caso normal

Entrada:
```json
{ 
  "sustosPorMinuto": [3, 5, 2, 6], 
  "bonoAtmoxfera": 8, 
  "penalizacionCliche": 3 
}
```

Resultado esperado:

``` 9 ```

### Caso borde
Entrada:

```json
{ 
  "sustosPorMinuto": [1, 2], 
  "bonoAtmoxfera": 2, 
  "penalizacionCliche": 50 
}
```

Resultado esperado:

``` -46 ```

### Explicacion final
La función calcula el puntaje basándose en la cantidad total de escenas analizadas que componen el arreglo ```sustosPorMinuto```. La lógica es directa y cuenta con una validación inicial para evitar procesar arreglos vacíos. Al igual que en los casos anteriores, la fórmula depende estrictamente de la longitud del arreglo, ignorando los valores numéricos individuales contenidos dentro del mismo para determinar el resultado final.