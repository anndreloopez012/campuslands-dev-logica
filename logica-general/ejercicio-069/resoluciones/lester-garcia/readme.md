# Plantilla de solucion

## Analisis

- Entrada:
  - pelicula: "La Casa Oscura"
  - lucesApagadas: true
  - volumen: 70
  - pausa: false

- Proceso:
  - Verificar si la reproducción está en pausa.
  - Revisar si las luces están apagadas.
  - Comprobar que el volumen sea adecuado.
  - Determinar el estado final de la reproducción.

- Salida:
  - estado: Reproduciendo
  - motivo: La película se reproduce con las condiciones ideales.

## Reglas identificadas

1. Si la reproducción está en pausa, ese será el estado principal.
2. Si las luces están encendidas, se recomienda activar el modo ambiente.
3. Si el volumen es menor a 50, se informa que el volumen es bajo.
4. Si todas las condiciones son adecuadas, la película permanece reproduciéndose.

## Pruebas

### Caso normal

Entrada:

pelicula: "La Casa Oscura"
lucesApagadas: true
volumen: 70
pausa: false

Resultado esperado:

estado: Reproduciendo
motivo: La película se reproduce con las condiciones ideales.

### Caso borde

Entrada:

pelicula: "La Casa Oscura"
lucesApagadas: false
volumen: 40
pausa: true

Resultado esperado:

estado: Pausada
motivo: La reproducción fue detenida por el usuario.

## Explicacion final

La solución funciona porque simula diferentes estados de la reproducción mediante una secuencia de condiciones evaluadas por prioridad. Primero verifica si la película está en pausa, luego revisa el ambiente y el volumen, y finalmente determina el estado correspondiente. Esto garantiza un resultado consistente, verificable y fácil de comprender.