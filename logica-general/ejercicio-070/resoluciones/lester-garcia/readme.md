# Plantilla de solucion

## Analisis

- Entrada:
  - destino: "Antigua Guatemala"
  - pasaporteValido: true
  - equipajeRegistrado: true
  - boletoConfirmado: true

- Proceso:
  - Verificar que el boleto esté confirmado.
  - Revisar que el pasaporte sea válido.
  - Comprobar que el equipaje esté registrado.
  - Seguir las instrucciones en el orden establecido hasta determinar la acción final.

- Salida:
  - instruccion: Abordar el transporte
  - motivo: Todos los requisitos del viaje se han cumplido.

## Reglas identificadas

1. El boleto debe estar confirmado antes de continuar.
2. El pasaporte debe ser válido para realizar el viaje.
3. El equipaje debe estar registrado antes del abordaje.
4. Si todas las condiciones se cumplen, el viajero puede abordar el transporte.

## Pruebas

### Caso normal

Entrada:

destino: "Antigua Guatemala"
pasaporteValido: true
equipajeRegistrado: true
boletoConfirmado: true

Resultado esperado:

instruccion: Abordar el transporte
motivo: Todos los requisitos del viaje se han cumplido.

### Caso borde

Entrada:

destino: "Antigua Guatemala"
pasaporteValido: false
equipajeRegistrado: true
boletoConfirmado: true

Resultado esperado:

instruccion: Renovar pasaporte
motivo: El pasaporte debe estar vigente para viajar.

## Explicacion final

La solución funciona porque interpreta las instrucciones en un orden específico. Cada requisito se verifica antes de pasar al siguiente, evitando continuar el proceso cuando falta una condición importante. Esto permite obtener una decisión clara, consistente y verificable para el viaje.