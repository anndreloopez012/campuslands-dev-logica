# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `jugador` con las propiedades `tasaVictorias` (número) y `reportesToxicidad` (número).
* **Proceso**: Evaluación jerárquica: primero se filtra la conducta (toxicidad) y, si es apta, se categoriza según umbrales de desempeño competitivo.
* **Salida**: Un objeto con la `categoria` asignada y el `motivo` de la misma.

## Reglas identificadas

1. **Prioridad Absoluta**: Cualquier jugador con más de 5 reportes de toxicidad es clasificado inmediatamente como "Suspendido".
2. **Umbral Pro**: Si la tasa de victorias es igual o superior al 70%, el jugador es "Pro".
3. **Umbral Casual/Novato**: El rango de 40% a 69% es "Casual", mientras que un valor inferior al 40% es "Novato".

## Pruebas

### Caso normal

* **Entrada**: `{ nombre: "PlayerOne", tasaVictorias: 85, reportesToxicidad: 1 }`
* **Resultado esperado**: `{ categoria: "Pro", motivo: "Excelente tasa de victorias." }`

### Caso borde

* **Entrada**: `{ nombre: "ToxicoBoy", tasaVictorias: 90, reportesToxicidad: 10 }`
* **Resultado esperado**: `{ categoria: "Suspendido", motivo: "Exceso de reportes por comportamiento tóxico." }`

## Explicacion final

La solución funciona mediante una estructura de control condicional de "corte temprano". Al verificar la toxicidad como primera regla, garantizamos que el sistema de juego mantenga un ambiente saludable sin importar qué tan hábil sea el jugador. La jerarquía de `if-else` subsiguiente asegura que cada usuario reciba una clasificación única y lógica basada estrictamente en sus estadísticas, evitando solapamientos entre las categorías.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de suspensión**: `jugador.reportesToxicidad > 5`
* **Condición de jugador Pro**: `jugador.tasaVictorias >= 70`
* **Condición de jugador Casual**: `jugador.tasaVictorias >= 40`