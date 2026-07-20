# Plantilla de solucion

## Analisis

- Entrada:
  - autos:
    - { modelo: "Bugatti Chiron", disponible: false, velocidadMaxima: 420 }
    - { modelo: "Koenigsegg Jesko", disponible: true, velocidadMaxima: 483 }
    - { modelo: "Rimac Nevera", disponible: true, velocidadMaxima: 412 }

- Proceso:
  - Recorrer la lista de autos.
  - Verificar que el auto esté disponible.
  - Comprobar que su velocidad máxima sea superior a 450 km/h.
  - Detener la búsqueda al encontrar el primer auto que cumpla ambas condiciones.

- Salida:
  - auto: Koenigsegg Jesko
  - motivo: Está disponible y supera los 450 km/h de velocidad máxima.

## Reglas identificadas

1. Solo se consideran autos que estén disponibles.
2. La velocidad máxima debe ser mayor a 450 km/h.
3. Se selecciona el primer auto que cumpla todas las condiciones.
4. Si ningún auto cumple los requisitos, se informa que no hubo coincidencias.

## Pruebas

### Caso normal

Entrada:

autos:
- { modelo: "Bugatti Chiron", disponible: false, velocidadMaxima: 420 }
- { modelo: "Koenigsegg Jesko", disponible: true, velocidadMaxima: 483 }
- { modelo: "Rimac Nevera", disponible: true, velocidadMaxima: 412 }

Resultado esperado:

auto: Koenigsegg Jesko
motivo: Está disponible y supera los 450 km/h de velocidad máxima.

### Caso borde

Entrada:

autos:
- { modelo: "Bugatti Chiron", disponible: false, velocidadMaxima: 420 }
- { modelo: "Rimac Nevera", disponible: true, velocidadMaxima: 412 }

Resultado esperado:

auto: Ningún auto encontrado
motivo: No existe un auto que cumpla todas las condiciones.

## Explicacion final

La solución funciona porque recorre la lista de autos hiperdeportivos y aplica dos condiciones de búsqueda al mismo tiempo: que el vehículo esté disponible y que su velocidad máxima sea superior a 450 km/h. Al encontrar el primer elemento que cumple ambas reglas, finaliza la búsqueda y devuelve un resultado claro y verificable. Si no existe ninguna coincidencia, informa que no se encontró un auto válido.