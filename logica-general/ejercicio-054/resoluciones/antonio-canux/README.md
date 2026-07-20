# Ejercicio de Lógica 054 - Temática Tatuajes

**Camper:** Antonio Canux

## Análisis

- Entrada: 
  - `edadCliente`: Un número entero que representa la edad de la persona.
  - `zonaCuerpo`: Una cadena de texto indicando dónde se realizará el tatuaje.
  - `consentimientoFirmado`: Un booleano (`true`/`false`) que indica si se entregó el documento legal.
- Proceso: El sistema evalúa independientemente cada regla de negocio. En lugar de retornar un rechazo en el primer fallo, el sistema acumula los fallos en una lista (`arreglo`). Al final del flujo, se verifica si la lista de errores está vacía (aprobado) o contiene elementos (rechazado).
- Salida: Un objeto que indica el `estado` del trámite, un `mensaje` general y el `detalleErrores` con la lista exacta de las fallas encontradas.

## Reglas identificadas

1. Nadie menor de 18 años puede tatuarse bajo ninguna circunstancia.
2. Zonas muy visibles (cara, cuello, manos) requieren un nivel de madurez mayor; el cliente debe tener 21 años cumplidos o más para estas áreas.
3. El documento de consentimiento informado es obligatorio para cualquier procedimiento.

## Pruebas

### Caso normal

Entrada (Errores múltiples para ver el diagnóstico completo):
```javascript
edadCliente: 17
zonaCuerpo: "cara"
consentimientoFirmado: false
```

Resultado esperado:

```javascript
{
  estado: 'rechazado',
  mensaje: 'No se puede proceder con la sesión. Se encontraron los siguientes bloqueos:',
  detalleErrores: [
    'El cliente es menor de 18 años. Está prohibido tatuar a menores de edad.',
    "La zona elegida ('cara') está restringida para menores de 21 años.",
    'Falta la firma en el documento de consentimiento informado y riesgos médicos.'
  ]
}
```

### Caso borde
Entrada (Cliente con 21 años exactos pidiendo tatuaje en zona restringida como el cuello):

```javascript
edadCliente: 21
zonaCuerpo: "cuello"
consentimientoFirmado: true
```

Resultado esperado:

```javascript
{
  estado: 'aprobado',
  mensaje: 'Diagnóstico completado sin errores. La sesión de tatuaje puede comenzar.',
  detalleErrores: []
}
```

## Explicacion final
La solución es efectiva porque aplica un patrón de acumulación de errores. En diagnósticos de software o validaciones de formularios, detenerse en el primer error (retorno temprano) frustra al usuario, ya que tendría que corregir un problema, volver a intentar y descubrir que había otro problema oculto. Al usar el método .push() en un arreglo, la función recopila todas las fallas en una sola pasada, permitiendo al encargado del estudio de tatuajes informar al cliente de todos sus requisitos faltantes inmediatamente.