# Ejercicio de Lógica 053 - Temática Paracaidismo

**Camper:** Antonio Canux

## Análisis

- Entrada: 
  - `viento`: Un número entero que representa la velocidad del viento en km/h.
  - `altitud`: Un número entero que representa la altura de la aeronave en metros.
  - `equipoOk`: Un valor booleano (`true`/`false`) que indica si el paracaídas está en condiciones operativas óptimas.
- Proceso: Realizar validaciones en cascada empezando por la más crítica (estado del equipo). Luego evaluar las condiciones ambientales y físicas externas (viento y altitud). Si alguna regla de exclusión se activa, se detiene el proceso y se aborta el salto. Si supera todos los filtros, se aprueba.
- Salida: Un objeto con la `accion` ("saltar" o "abortar") y un `motivo` detallado de la resolución del caso.

## Reglas identificadas

1. El estado del equipo es una condición binaria y obligatoria; si es `false`, el salto se aborta de inmediato sin importar las demás variables.
2. La velocidad del viento permitida es de máximo 30 km/h. Cualquier valor estrictamente mayor (`> 30`) cancela el salto.
3. La altitud mínima requerida para un salto seguro es de 1200 metros. Valores inferiores cancelan la operación.

## Pruebas

### Caso normal

Entrada:
```javascript
viento: 20
altitud: 1500
equipoOk: true
```

Resultado esperado:

```javascript
{
  accion: 'saltar',
  motivo: 'Todas las condiciones (viento, altitud y equipo) están en rangos óptimos y seguros.'
}
```

### Caso borde
Entrada (Viento y altitud exactamente en los límites de tolerancia aprobados):

```javascript
viento: 30
altitud: 1200
equipoOk: true
```

Resultado esperado:

```javascript
{
  accion: 'saltar',
  motivo: 'Todas las condiciones (viento, altitud y equipo) están en rangos óptimos y seguros.'
}
```

## Explicación final
La solución funciona porque utiliza un enfoque de "retorno temprano" (early return). En lugar de anidar múltiples estructuras if-else complejas, el flujo evalúa individualmente cada criterio de peligro en orden de criticidad. Si una condición falla, la función termina inmediatamente entregando la acción de abortar. El caso borde demuestra que los operadores relacionales empleados (> y <) respetan de manera exacta los límites inclusivos definidos por el negocio, permitiendo el salto justo en la frontera de los parámetros de seguridad sin generar falsos rechazos.