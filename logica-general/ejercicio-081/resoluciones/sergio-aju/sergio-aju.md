# Plantilla de solucion

## Analisis

- Entrada: Un arreglo de objetos llamado `participantes_torneo` que contiene propiedades como `gamertag`, `proporcion_kp`, `encuentros` y `reputacion`.
- Proceso: Validar si el arreglo está vacío; si no lo está, recorrer cada elemento con `.forEach()` evaluando las reglas mediante la función flecha `verificar_criterio_diamante`, y acumular los elementos que cumplan con la condición en el arreglo `seleccionados_diamante`.
- Salida: Un mensaje en consola impreso con `console.log()` que muestra la longitud del arreglo `seleccionados_diamante`.

## Reglas identificadas

1. El valor de `proporcion_kp` debe ser mayor o igual a 3.0.
2. El valor de `encuentros` debe ser mayor o igual a 90.
3. El valor de `reputacion` debe ser mayor o igual a 3.

## Pruebas

### Caso normal

Entrada:
```javascript
[
    { gamertag: "BlazeRunner", proporcion_kp: 3.8, encuentros: 110, reputacion: 5 },
    { gamertag: "FrostByte", proporcion_kp: 2.1, encuentros: 60, reputacion: 2 },
    { gamertag: "ShadowStrike", proporcion_kp: 4.5, encuentros: 150, reputacion: 4 },
    { gamertag: "PixelQueen", proporcion_kp: 1.2, encuentros: 40, reputacion: 1 },
    { gamertag: "Vortex_99", proporcion_kp: 3.1, encuentros: 95, reputacion: 3 }
]