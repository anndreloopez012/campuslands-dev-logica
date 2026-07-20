# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `cita` que contiene tres propiedades booleanas: `equipoEsterilizado`, `insumosSuficientes` y `clientePreparado`.
* **Proceso**: Evaluación secuencial de protocolos de seguridad y disponibilidad mediante una estructura de retornos tempranos (*early returns*).
* **Salida**: Un objeto que define la `accion` a tomar (Suspender, Reprogramar, Esperar o Iniciar sesión) y un `motivo` que explica la decisión.

## Reglas identificadas

1. La seguridad es la prioridad absoluta: si el equipo no está esterilizado, la cita se suspende de inmediato.
2. La disponibilidad de insumos es la segunda prioridad: si faltan materiales, la cita debe reprogramarse.
3. El estado del cliente es la tercera prioridad: si no está preparado, se debe esperar antes de iniciar.

## Pruebas

### Caso normal

* **Entrada**: `{ equipoEsterilizado: true, insumosSuficientes: true, clientePreparado: true }`
* **Resultado esperado**: `{ accion: "Iniciar sesión", motivo: "Apta para proceder." }`

### Caso borde

* **Entrada**: `{ equipoEsterilizado: false, insumosSuficientes: false, clientePreparado: false }`
* **Resultado esperado**: `{ accion: "Suspender", motivo: "Peligro: Equipo no estéril." }`

## Explicacion final

La solución funciona gracias a la jerarquización de condiciones mediante *early returns*. Al evaluar primero las condiciones más críticas (como la esterilización), el sistema garantiza que los riesgos graves sean detectados antes que los problemas operativos menores. Este enfoque mantiene el código limpio, legible y asegura que solo se autorice el inicio de sesión cuando se cumplen estrictamente todos los protocolos de seguridad y preparación.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de seguridad**: `!cita.equipoEsterilizado`
* **Condición de materiales**: `!cita.insumosSuficientes`
* **Condición de cliente**: `!cita.clientePreparado`