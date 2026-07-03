# Ejercicio 003 - Torneo de Esports

**Camper:** Antonio Canux

## Analisis

- **Entrada:** La función recibe dos parámetros: el `estado` actual del jugador ("aprobado", "pendiente", "bloqueado") y la `prioridadTorneo` ("alta", "normal").
- **Proceso:** Se utiliza una estructura condicional `if/else if` para evaluar el estado y la prioridad en orden de importancia. Se interceptan primero los casos críticos (bloqueos), luego las urgencias (pendientes de alta prioridad) y finalmente los flujos estándar.
- **Salida:** Se retorna un objeto con dos propiedades (`accion` y `motivo`) que indican claramente qué debe hacer el sistema y por qué.

## Reglas identificadas

1. Cualquier jugador con estado "bloqueado" debe ser revisado primero para reducir los riesgos, sin importar la prioridad del torneo o cualquier otra cosa.
2. Si el jugador está "pendiente" y el torneo es de prioridad "alta", requiere una revisión urgente.
3. Si el jugador está "pendiente" pero en un torneo "normal", debe quedar en espera.
4. Los jugadores "aprobados" tienen el ingreso permitido automáticamente.

## Pruebas

### Caso normal

Entrada: `estado: "aprobado"`, `prioridadTorneo: "normal"`

Resultado esperado: 
```text
accion: "permitir ingreso"
motivo: "el jugador cumple con todos los requisitos del torneo."
```

### Caso borde

Entrada: `estado: "bloqueado"`,` prioridadTorneo: "alta"`

Resultado esperado:

```Plaintext
accion: "revisar bloqueado"
motivo: "la regla prioriza riesgos antes de tareas normales."
```

## Explicacion final
La solución funciona porque estructura la toma de decisiones respetando estrictamente el orden de prioridad del negocio del torneo de esports. Al procesar las condiciones desde la más crítica (riesgos/bloqueos) hasta la más rutinaria (aprobados), el código evita que un jugador bloqueado pase desapercibido o que una tarea de prioridad normal interrumpa una revisión urgente. El retorno de un objeto facilita la lectura de la salida y hace que el resultado sea fácilmente verificable.