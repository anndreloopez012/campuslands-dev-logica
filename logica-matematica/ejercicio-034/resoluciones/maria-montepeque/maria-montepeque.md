# Solucion - Ejercicio 034 (logica-matematica)

## Analisis

- Entrada: una lista de disenos de tatuajes, cada uno con un `tipo` (circulo, cuadrado, rectangulo, triangulo) y sus medidas correspondientes.
- Proceso: por cada diseno se calcula su area y perimetro segun el tipo de figura, se clasifica por tamano y se calcula un precio de cotizacion (tarifa base + costo por area).
- Salida: un objeto con el detalle de cada diseno procesado, el total cotizado y un mensaje resumen.

## Reglas identificadas

1. Cada tipo de figura tiene su propia formula de area y perimetro (circulo, cuadrado, rectangulo, triangulo equilatero).
2. El tamano se clasifica en pequeno (area <= 50), mediano (area <= 150) o grande (area mayor a 150), usando un arreglo de rangos en lugar de condicionales encadenados.
3. El precio de cada diseno es la tarifa base de su figura mas el area multiplicada por un costo fijo por unidad de area.
4. Si la lista de entrada esta vacia, se retorna un resultado valido sin procesar nada, en lugar de fallar.
5. Si una figura no esta soportada, se marca con un error puntual y no detiene el procesamiento del resto de la lista.

## Pruebas

### Caso normal

Entrada:

```js
[
  { tipo: 'circulo', radio: 5 },
  { tipo: 'rectangulo', base: 10, altura: 4 },
  { tipo: 'triangulo', base: 6, altura: 4, lado: 5 },
]
```

Resultado esperado:

```json
{
  "disenos": [
    { "tipo": "circulo", "area": 78.54, "perimetro": 31.42, "categoria": "mediano", "precio": 246.35 },
    { "tipo": "rectangulo", "area": 40, "perimetro": 28, "categoria": "pequeno", "precio": 145 },
    { "tipo": "triangulo", "area": 12, "perimetro": 15, "categoria": "pequeno", "precio": 65 }
  ],
  "totalCotizado": 456.35,
  "mensaje": "Se procesaron 3 diseno(s)."
}
```

### Caso borde

Entrada:

```js
[]
```

Resultado esperado:

```json
{
  "disenos": [],
  "totalCotizado": 0,
  "mensaje": "No hay disenos para procesar."
}
```

Tambien se probo el caso de una figura no soportada (`rombo`), que se marca con un error sin detener el resto del procesamiento.

## Explicacion final

La solucion separa responsabilidades en tres funciones: `calcularAreaYPerimetro` (formulas geometricas por tipo), `clasificarPorArea` (regla de negocio de tamano) y `calcularDisenosTatuajes` (orquestacion y acumulacion del total). Usar un arreglo de rangos para la clasificacion evita anidar varios `if/else` y facilita agregar nuevas categorias en el futuro. Los casos borde (lista vacia y figura desconocida) se manejan explicitamente para que la funcion nunca falle de forma inesperada.

## Como ejecutar

```bash
node maria-montepeque.js
```