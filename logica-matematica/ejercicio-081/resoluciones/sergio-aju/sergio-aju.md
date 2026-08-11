# Plantilla de solucion

## Analisis

- Entrada: Un arreglo de números llamado `puntajes_base` que contiene los valores numéricos, junto con dos constantes numéricas llamadas `bono_otorgado` y `penalizacion_aplicada`.
- Proceso: Validar que el arreglo no esté vacío; si contiene elementos, recorrerlo mediante un ciclo `for` acumulando la suma de los valores en una variable, y posteriormente sumar el bono y restar la penalización para obtener el resultado final, determinando también su clasificación mediante un operador ternario.
- Salida: Los resultados impresos en consola que muestran el `puntaje_final`, la `clasificacion` y la `explicacion`.

## Reglas identificadas

1. Se debe sumar cada uno de los elementos numéricos del arreglo base mediante un acumulador.
2. Se debe sumar el valor del bono al acumulador total de los puntajes.
3. Se debe restar el valor de la penalización al total obtenido.
4. Se clasifica como "competitivo" si el puntaje final es mayor o igual a 50, o de lo contrario como "estandar".

## Pruebas

### Caso normal

Entrada:
```javascript
puntajes_base = [12, 18, 25, 30]
bono_otorgado = 8
penalizacion_aplicada = 3