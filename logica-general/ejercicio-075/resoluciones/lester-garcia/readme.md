# Plantilla de solucion

## Analisis

- Entrada:
  - tipoCuenta: "premium"
  - capas: 18
  - formato: "PSD"

- Proceso:
  - Verificar si la cuenta del usuario es premium.
  - Comprobar que el número de capas no exceda el límite permitido.
  - Aplicar las reglas de negocio para permitir o rechazar la exportación.

- Salida:
  - resultado: exportacion aprobada
  - motivo: El proyecto cumple todas las reglas para exportar en formato PSD.

## Reglas identificadas

1. Solo los usuarios con cuenta premium pueden exportar en formato PSD.
2. El proyecto no debe superar las 20 capas.
3. Si ambas condiciones se cumplen, la exportación es aprobada.

## Pruebas

### Caso normal

Entrada:

tipoCuenta: "premium"
capas: 18
formato: "PSD"

Resultado esperado:

resultado: exportacion aprobada
motivo: El proyecto cumple todas las reglas para exportar en formato PSD.

### Caso borde

Entrada:

tipoCuenta: "basica"
capas: 18
formato: "PSD"

Resultado esperado:

resultado: exportacion rechazada
motivo: Solo las cuentas premium pueden exportar en formato PSD.

## Explicacion final

La solución funciona porque evalúa las reglas de negocio en un orden lógico. Primero verifica si el usuario tiene permisos para realizar la exportación y luego comprueba que el proyecto cumpla con el límite de capas. De esta manera, la decisión final siempre depende de las reglas establecidas y produce un resultado claro y verificable.