# Plantilla de solucion

## Analisis

- Entrada:
  - tintaDisponible: false
  - maquinaEsterilizada: true
  - clienteMayorEdad: true

- Proceso:
  - Verificar si la máquina está esterilizada.
  - Comprobar que exista tinta disponible.
  - Validar que el cliente sea mayor de edad.
  - Emitir un diagnóstico según la primera condición que presente un problema.

- Salida:
  - diagnostico: error de materiales
  - motivo: No hay tinta disponible para realizar el tatuaje.

## Reglas identificadas

1. Si la máquina no está esterilizada, se reporta un error de seguridad.
2. Si no hay tinta disponible, se reporta un error de materiales.
3. Si el cliente no es mayor de edad, se reporta un error de autorización.
4. Si todas las condiciones son correctas, no existen errores.

## Pruebas

### Caso normal

Entrada:

tintaDisponible: false
maquinaEsterilizada: true
clienteMayorEdad: true

Resultado esperado:

diagnostico: error de materiales
motivo: No hay tinta disponible para realizar el tatuaje.

### Caso borde

Entrada:

tintaDisponible: true
maquinaEsterilizada: false
clienteMayorEdad: true

Resultado esperado:

diagnostico: error de seguridad
motivo: La máquina no está esterilizada.

## Explicacion final

La solución funciona porque revisa cada requisito esencial para realizar un tatuaje de forma segura. Las condiciones se evalúan en un orden lógico de prioridad, permitiendo detectar el primer error encontrado o confirmar que no existen problemas cuando todos los requisitos se cumplen.