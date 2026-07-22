# Ejercicio 050 - Logica general 050 - lectura de instrucciones

## ¿Cómo pensé el problema?

Diseñé un procesador de itinerarios turísticos que analiza una serie de instrucciones de viaje, calcula los costos acumulados, determina si se requieren documentos especiales (como pasaporte) y valida si el presupuesto cubre todo el recorrido.

## Entradas

- `instrucciones`: Arreglo de actividades planeadas (`[{ accion: string, costo: number, internacional: boolean }]`).
- `presupuesto`: Monto total asignado para el viaje (`number`).

## Reglas aplicadas

- Validar que las instrucciones contengan un arreglo estructurado.
- Sumar los costos de cada instrucción válida.
- Identificar si alguna de las actividades es internacional para marcar la exigencia de pasaporte.
- Comparar el gasto total acumulado contra el presupuesto disponible.

## Salida

Objeto resumen con el estado de aprobación, gasto total, requerimiento de pasaporte, lista de actividades procesadas y mensaje descriptivo.

## Casos de prueba

### Caso normal

Entrada:

```text
instrucciones: [
  { accion: "Vuelo internacional a Cancun", costo: 450, internacional: true },
  { accion: "Reserva de Hotel 4 noches", costo: 350, internacional: false },
  { accion: "Tour a ruinas mayas", costo: 100, internacional: false }
]
presupuesto: 1000
```

Salida:

```text
{
  exito: true,
  totalGasto: 900,
  presupuesto: 1000,
  requierePasaporte: true,
  actividades: [
    'Vuelo internacional a Cancun',
    'Reserva de Hotel 4 noches',
    'Tour a ruinas mayas'
  ],
  mensaje: 'Itinerario aprobado y dentro del presupuesto.'
}
```

### Caso borde

Entrada:

```text
instrucciones: []
presupuesto: 500
```

Salida:

```text
{
  exito: false,
  totalGasto: 0,
  mensaje: 'No se proporcionaron instrucciones de viaje validas.'
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
