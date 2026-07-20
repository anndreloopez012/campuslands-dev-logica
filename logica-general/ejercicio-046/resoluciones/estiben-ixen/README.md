# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo de autos hiperdeportivos.
  - El nombre del auto que se desea buscar.

- Proceso:
  - Validar que el arreglo no esté vacío.
  - Recorrer todos los elementos del arreglo.
  - Comparar cada elemento con el nombre buscado.
  - Si se encuentra, indicar la posición donde aparece.
  - Si no existe, informar que el elemento no fue encontrado.

- Salida:
  - Un mensaje indicando si el auto fue encontrado y en qué posición, o que no existe dentro de la lista.

## Reglas identificadas

1. Validar que la lista de autos contenga elementos.
2. Recorrer la lista comparando cada elemento con el valor buscado.
3. Mostrar el índice del elemento si existe o un mensaje indicando que no fue encontrado.

## Pruebas

### Caso normal

Entrada:

Lista:
- Bugatti Chiron
- Koenigsegg Jesko
- Rimac Nevera
- Pagani Huayra
- McLaren Speedtail

Buscar:
Koenigsegg Jesko

Resultado esperado:

Auto encontrado en la posición 1.

### Caso borde

Entrada:

Lista:
[]

Buscar:
Bugatti Chiron

Resultado esperado:

La lista está vacía.

## Explicacion final

La solución funciona porque primero valida que existan datos para evitar recorrer un arreglo vacío. Después utiliza una búsqueda secuencial recorriendo todos los elementos hasta encontrar el auto solicitado. Si existe devuelve su posición; en caso contrario informa que el elemento no está registrado.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.