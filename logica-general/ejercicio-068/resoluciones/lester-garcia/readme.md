# Plantilla de solucion

## Analisis

- Entrada:
  - titulo: "Galaxia Infinita"
  - clasificacion: "A"
  - disponible: true
  - subtitulos: true

- Proceso:
  - Verificar si la película está disponible.
  - Comprobar su clasificación.
  - Revisar si cuenta con subtítulos.
  - Generar el resultado correspondiente siguiendo el flujo de decisión.

- Salida:
  - resultado: Iniciar reproducción
  - motivo: La película está disponible y cuenta con subtítulos.

## Reglas identificadas

1. Si la película no está disponible, se cancela la reproducción.
2. Si la clasificación no es "A", el acceso queda restringido.
3. Si la película está disponible y cumple la clasificación, se inicia la reproducción.
4. Se informa si la reproducción será con o sin subtítulos.

## Pruebas

### Caso normal

Entrada:

titulo: "Galaxia Infinita"
clasificacion: "A"
disponible: true
subtitulos: true

Resultado esperado:

resultado: Iniciar reproducción
motivo: La película está disponible y cuenta con subtítulos.

### Caso borde

Entrada:

titulo: "Galaxia Infinita"
clasificacion: "A"
disponible: false
subtitulos: true

Resultado esperado:

resultado: Reproducción cancelada
motivo: La película no está disponible.

## Explicacion final

La solución funciona porque sigue un flujo paso a paso donde cada condición depende del resultado de la anterior. Primero verifica la disponibilidad, luego la clasificación y finalmente la presencia de subtítulos. Este orden garantiza que solo se permita la reproducción cuando se cumplen los requisitos establecidos y produce un resultado claro y verificable.