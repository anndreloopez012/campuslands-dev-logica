# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con solicitudes de tatuajes.
  - Cada solicitud incluye nombre, edad y diseño solicitado.

- Proceso:
  - Recorrer todas las solicitudes.
  - Verificar que el nombre y el diseño no estén vacíos.
  - Comprobar que el cliente sea mayor de edad.
  - Registrar las solicitudes que presenten errores.

- Salida:
  - Lista de solicitudes con datos inválidos.

## Reglas identificadas

1. El cliente debe tener 18 años o más.
2. El nombre y el diseño del tatuaje son obligatorios.
3. Toda solicitud que incumpla alguna regla debe reportarse como error.

## Pruebas

### Caso normal

Entrada:

- Laura, 25 años, Dragón
- Carlos, 16 años, Lobo

Resultado esperado:

- Carlos: Solicitud con datos inválidos

### Caso borde

Entrada:

- Nombre: ""
- Edad: 20
- Diseño: Rosa

Resultado esperado:

- Sin nombre: Solicitud con datos inválidos

## Explicacion final

La solución funciona porque revisa cada solicitud aplicando las reglas de validación establecidas. Si detecta un nombre vacío, un diseño sin especificar o un cliente menor de edad, registra la solicitud como inválida para facilitar el diagnóstico de errores.