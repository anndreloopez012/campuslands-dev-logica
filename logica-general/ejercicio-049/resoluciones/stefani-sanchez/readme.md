# Ejercicio 049 - Logica general 049 - simulacion de estados

## ¿Cómo pensé el problema?

Diseñé un autómata de estados para simular cómo reacciona un personaje dentro de una película de terror a medida que ocurren eventos atemorizantes secuenciales, calculando la evolución de su estado psicológico y nivel de estrés acumulado.

## Entradas

- `eventos`: Lista de eventos ocurridos (`["ruido_extranio", "apagon", "aparicion"]`).
- `estadoInicial`: Estado inicial del personaje (`"tranquilo"`).

## Reglas aplicadas

- Validar que los eventos sean ingresados como un arreglo.
- Transicionar el estado del personaje según cada evento recibido:
  - `ruido_extranio` cambia a `"alerta"` (+25 de estrés).
  - `apagon` cambia a `"asustado"` (+35 de estrés).
  - `aparicion` cambia a `"panico"` (+40 de estrés).
  - `huida_exitosa` cambia a `"a_salvo"` (-50 de estrés).
- Limitar el estrés acumulado en un máximo de 100 y mínimo de 0.

## Salida

Objeto con el estado final, nivel de estrés final, historial de transiciones y un mensaje descriptivo.

## Casos de prueba

### Caso normal

Entrada:

```text
eventos: ["ruido_extranio", "apagon", "aparicion"]
estadoInicial: "tranquilo"
```

Salida:

```text
{
  estadoFinal: 'panico',
  nivelEstres: 100,
  historial: [ 'tranquilo', 'alerta', 'asustado', 'panico' ],
  mensaje: 'Simulacion completada con estado final: panico.'
}
```

### Caso borde

Entrada:

```text
eventos: []
estadoInicial: "alerta"
```

Salida:

```text
{
  estadoFinal: 'alerta',
  nivelEstres: 0,
  historial: [ 'alerta' ],
  mensaje: 'Simulacion completada con estado final: alerta.'
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
