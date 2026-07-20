# Plantilla de solucion

## Analisis

- Entrada: una lista de autos hiperdeportivos, cada uno con su nombre y su velocidad maxima en km/h.
- Proceso: convertir la velocidad de cada auto a mph y m/s, y clasificarlo segun rangos de velocidad.
- Salida: una lista de autos con sus conversiones y categoria, mas un resumen con la cantidad de autos por categoria.

## Reglas identificadas

1. La conversion de km/h a mph se hace multiplicando por 0.621371, y a m/s dividiendo entre 3.6.
2. La categoria del auto depende de rangos de velocidad: extremo (>=350), elite (>=300), estandar (>=250) y fuera de categoria (<250).
3. Si la lista de autos esta vacia, la solucion debe devolver una lista y un resumen vacios sin lanzar error.

## Pruebas

### Caso normal

Entrada:

```text
[
  { nombre: "Bugatti Chiron", velocidadKmh: 380 },
  { nombre: "Koenigsegg Jesko", velocidadKmh: 330 },
  { nombre: "McLaren 720S", velocidadKmh: 340 },
  { nombre: "Ferrari SF90", velocidadKmh: 340 },
  { nombre: "Corvette Z06", velocidadKmh: 315 }
]
```

Resultado esperado:

```text
5 autos convertidos con su velocidad en mph y m/s.
resumen: { "hipercoche extremo": 1, "hipercoche elite": 4 }
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{ autos: [], resumen: {} }
```

## Explicacion final

La solucion usa un arreglo de categorias ordenado de mayor a menor limite y `find` para ubicar la primera categoria que cumple la condicion, evitando condicionales anidados. Las conversiones se calculan con constantes claras y se redondean a dos decimales para que el resultado sea legible. El resumen se construye acumulando un contador por categoria mientras se recorre la lista, y el caso de lista vacia se valida al inicio para devolver una estructura consistente sin procesar nada.