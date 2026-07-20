# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo de canciones con título, artista y duración.

- Proceso:
  - Recorrer cada canción de la playlist.
  - Verificar que tenga información válida.
  - Identificar canciones con datos incompletos o incorrectos.
  - Guardar las canciones que presentan inconsistencias.

- Salida:
  - Lista de canciones con errores encontrados.

## Reglas identificadas

1. Una canción debe tener título y artista registrados.
2. La duración de una canción debe ser mayor que cero.
3. Las canciones que incumplan alguna regla deben clasificarse como inconsistentes.

## Pruebas

### Caso normal

Entrada:

- Canciones:
  - Blinding Lights - The Weeknd - 200 segundos
  - Believer - Imagine Dragons - 210 segundos
  - Song Test - Artist - 0 segundos

Resultado esperado:

- Canciones con inconsistencias:
  - Song Test - Artist - 0 segundos

### Caso borde

Entrada:

- Canciones:
  - Canción sin título
  - Artista: Grupo X
  - Duración: 180 segundos

Resultado esperado:

- Canciones con inconsistencias:
  - Canción sin título - Grupo X - 180 segundos

## Explicacion final

La solución funciona porque recorre cada elemento de la playlist y aplica reglas de validación para encontrar errores. Utiliza condiciones para comprobar si faltan datos importantes o si la duración no es válida, almacenando únicamente las canciones que presentan inconsistencias.