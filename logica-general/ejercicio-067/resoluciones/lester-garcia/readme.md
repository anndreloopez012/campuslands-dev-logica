# Plantilla de solucion

## Analisis

- Entrada:
  - playlist:
    - { titulo: "Canción A", duracion: 210, disponible: true }
    - { titulo: "Canción B", duracion: -15, disponible: true }
    - { titulo: "Canción C", duracion: 180, disponible: false }

- Proceso:
  - Recorrer la playlist.
  - Verificar que la duración de cada canción sea mayor que cero.
  - Comprobar que la canción esté disponible.
  - Reportar la primera inconsistencia encontrada.

- Salida:
  - inconsistencia: Canción B
  - motivo: La duración de la canción no es válida.

## Reglas identificadas

1. La duración de una canción debe ser mayor que cero.
2. La canción debe estar disponible.
3. Se reporta la primera inconsistencia encontrada.
4. Si ninguna canción presenta errores, se indica que no existen inconsistencias.

## Pruebas

### Caso normal

Entrada:

playlist:
- { titulo: "Canción A", duracion: 210, disponible: true }
- { titulo: "Canción B", duracion: -15, disponible: true }
- { titulo: "Canción C", duracion: 180, disponible: false }

Resultado esperado:

inconsistencia: Canción B
motivo: La duración de la canción no es válida.

### Caso borde

Entrada:

playlist:
- { titulo: "Canción A", duracion: 200, disponible: true }
- { titulo: "Canción B", duracion: 180, disponible: true }

Resultado esperado:

inconsistencia: Sin inconsistencias
motivo: Todas las canciones tienen datos válidos.

## Explicacion final

La solución funciona porque recorre la playlist verificando dos condiciones para cada canción: que su duración sea válida y que esté disponible. Al detectar la primera inconsistencia, la reporta inmediatamente. Si todas las canciones cumplen las reglas, informa que la playlist no presenta errores, generando un resultado claro y verificable.