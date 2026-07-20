# Plantilla de solucion

## Analisis

- Entrada: una lista de estaciones de tatuaje, cada una con un `nombre` y un arreglo `errores` (strings) que describe las fallas detectadas en esa estacion.
- Proceso: por cada estacion se identifica el error mas critico segun un mapa de prioridad numerico, se define la accion a tomar y el motivo. Luego se determina cual estacion, entre todas, tiene el nivel de urgencia mas alto.
- Salida: un objeto con el estado del diagnostico, el detalle por estacion y la estacion prioritaria a atender.

## Reglas identificadas

1. Un error de salud (`sin_esterilizar`, `aguja_reutilizada`) siempre es mas urgente que uno legal o administrativo.
2. Si una estacion no reporta errores, se trata como `sin_error` y su accion es `continuar_operacion`.
3. Si una estacion tiene varios errores, se conserva unicamente el de mayor prioridad (numero mas bajo) para decidir la accion.
4. Un error que no esta en el mapa de prioridad no se descarta ni rompe el programa: se le asigna la prioridad de `ficha_incompleta` (nivel administrativo) para no perder el reporte.
5. Si la lista de estaciones esta vacia, no se genera un diagnostico por estacion; se devuelve un estado `sin_datos`.

## Pruebas

### Caso normal

Entrada:

```js
[
  { nombre: 'estacion-1', errores: ['tinta_vencida', 'ficha_incompleta'] },
  { nombre: 'estacion-2', errores: ['sin_esterilizar'] },
  { nombre: 'estacion-3', errores: [] },
]
```

Resultado esperado:

```js
{
  estado: 'diagnostico_completo',
  totalEstaciones: 3,
  estacionPrioritaria: 'estacion-2',
  nivelMasAlto: 1
}
```

### Caso borde

Entrada:

```js
[]
```

Resultado esperado:

```js
{
  estado: 'sin_datos',
  mensaje: 'No hay estaciones para diagnosticar.',
  diagnostico: []
}
```

Tambien se probo un caso borde adicional con un error que no existe en el mapa de prioridad (`error_no_registrado`), confirmando que la solucion no falla y lo clasifica con prioridad administrativa por defecto.

## Explicacion final

La solucion evita condicionales anidados usando un objeto de mapeo (`PRIORIDAD_ERRORES`) para traducir cada tipo de error a un nivel numerico de urgencia. Esto hace que agregar un nuevo tipo de error en el futuro solo requiera anadir una entrada al mapa, sin tocar la logica de comparacion. La estacion mas critica del estudio se obtiene comparando los niveles ya calculados por estacion, y el caso de lista vacia se resuelve antes de cualquier procesamiento para evitar errores al leer un arreglo sin elementos.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.