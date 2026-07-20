# Solución de Ejercicio-001.

## Analisis

- Entrada: Nombres, Victorias, Derotas y Puntos.

- Proceso: 
  </br>Si el equipo tiene 12 o más puntos y 4 o más victorias, clasifica.
Si no cumple ambas condiciones, queda eliminado.

- Salida:

La salida muestra sin un equipo determinado pasa o no pasa a la sigueinte ronda.

## Reglas identificadas

1. Cada equipo debe tener un nombre, número de victorias, derrotas y puntos.

2. Un equipo clasifica a la siguiente ronda si tiene 12 o más puntos.

3. Además, debe tener 4 o másLas dos condiciones deben cumplirse al mismo tiempo. victorias.

4. Si alguna de las condiciones no se cumple, el equipo queda eliminado.

## Pruebas

### Caso normal

Entrada:

```text
    {
        nombre: "Dragons",
        victorias: 5,
        derrotas: 1,
        puntos: 15
    }
```

Resultado esperado:

    Dragons clasifica a la siguiente ronda.
### Caso borde

Entrada:

```text
    {
        nombre: "Titans",
        victorias: 4,
        derrotas: 2,
        puntos: 12
    }
```

Resultado esperado:

    Phoenix clasifica a la siguiente ronda.

## Explicacion final

La solucion funciona de un manera correcta ya que cumple estricatemnte las reglas solicitadas durante el proceso,  ya que en ambos casos ya sea normal o borde devuelven un resultado tomando en cuenta las reglas aplicadas.

## Sugerencia
 Antes de comenzar a programar, identifica las reglas del problema y conviértelas en condiciones lógicas. Es decir, escribe qué debe cumplirse para que ocurra cada resultado y luego tradúcelo a un `if`, `else` o un operador lógico (`&&`, `||`).
