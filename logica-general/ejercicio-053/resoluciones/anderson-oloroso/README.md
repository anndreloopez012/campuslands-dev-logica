# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con la información de varios saltos.
  - Cada registro contiene el nombre del participante, la altura del salto y si el paracaídas fue abierto.

- Proceso:
  - Recorrer todos los saltos.
  - Evaluar cada caso según las condiciones establecidas.
  - Asignar un estado al resultado de cada salto.

- Salida:
  - Lista de participantes con el estado de su salto.

## Reglas identificadas

1. Si la altura es menor a 1000 metros, el salto se considera con altura insuficiente.
2. Si el paracaídas no fue abierto, el estado es de emergencia.
3. En cualquier otro caso, el salto se considera exitoso.

## Pruebas

### Caso normal

Entrada:

- Luis: 3500 m, paracaídas abierto
- Ana: 800 m, paracaídas abierto
- Carlos: 3000 m, paracaídas cerrado

Resultado esperado:

- Luis: Salto exitoso
- Ana: Altura insuficiente
- Carlos: Emergencia

### Caso borde

Entrada:

- Sofía: 1000 m, paracaídas abierto

Resultado esperado:

- Sofía: Salto exitoso

## Explicacion final

La solución funciona porque analiza cada salto de forma independiente utilizando condiciones. Según la altura y el estado del paracaídas, clasifica correctamente cada caso y genera un resultado que resume la situación de cada participante.