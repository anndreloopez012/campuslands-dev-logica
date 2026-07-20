# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo de autos hiperdeportivos con marca, modelo y velocidad.
  - Una marca de auto que se desea buscar.

- Proceso:
  - Recorrer todos los autos registrados.
  - Comparar la marca de cada auto con la marca buscada.
  - Guardar los autos que coincidan.

- Salida:
  - Lista de autos encontrados con la marca indicada.

## Reglas identificadas

1. La búsqueda debe comparar las marcas sin importar mayúsculas o minúsculas.
2. Solo se deben guardar autos cuya marca coincida con la búsqueda.
3. Si no existen coincidencias, se debe retornar una lista vacía.

## Pruebas

### Caso normal

Entrada:

- Autos:
  - Ferrari SF90
  - Bugatti Chiron
  - Ferrari Purosangue
  - Lamborghini Revuelto

- Marca buscada: Ferrari

Resultado esperado:

- Ferrari SF90
- Ferrari Purosangue

### Caso borde

Entrada:

- Autos:
  - Bugatti Chiron

- Marca buscada: Ferrari

Resultado esperado:

- Lista vacía

## Explicacion final

La solución funciona porque recorre el arreglo de autos y compara la marca de cada elemento con la marca solicitada. Cuando encuentra una coincidencia, agrega el vehículo a un nuevo arreglo, permitiendo obtener todos los autos que cumplen con el criterio de búsqueda.