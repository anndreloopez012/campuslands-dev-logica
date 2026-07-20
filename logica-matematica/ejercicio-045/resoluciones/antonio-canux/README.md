# Ejercicio 045 - Taller Mecánico

**Camper:** Antonio Canux

## Analisis

- Entrada: Un arreglo de números (`lecturas`) que representa los registros de temperatura capturados por un escáner, y un número entero (`limiteCritico`) que representa la temperatura máxima segura.
- Proceso: Se itera sobre el arreglo de lecturas. Se compara cada valor con una variable que guarda el mínimo encontrado hasta el momento, actualizándola si el valor actual es menor. Paralelamente, se verifica si la lectura actual iguala o supera el límite crítico; de ser así, se activa una bandera de advertencia y se guarda el valor anómalo.
- Salida: Un objeto que detalla la `temperatura_minima_registrada`, un valor booleano `supero_limite`, un arreglo con los `picos_registrados`, y un `diagnostico` en formato de texto.

## Reglas identificadas

1. **Búsqueda del mínimo:** Para encontrar el valor más bajo, se asume temporalmente que el primer elemento del arreglo es el mínimo, y luego se compara con el resto para reemplazarlo si se encuentra uno menor.
2. **Control de límites (Threshold):** Cualquier lectura que sea mayor o igual al parámetro `limiteCritico` se considera un fallo técnico y debe registrarse para el reporte.
3. **Diagnóstico condicionado:** El estado final depende de una compuerta lógica simple: si al menos un valor superó el límite (bandera en `true`), el diagnóstico es "Fallo térmico detectado"; en caso contrario, es "Operación normal".

## Pruebas

### Caso normal

Entrada: `lecturas: [85, 92, 98, 106, 110, 102, 95]`, `limiteCritico: 105`

Resultado esperado:
```text
temperatura_minima_registrada: 85
supero_limite: true
picos_registrados: [106, 110]
diagnostico: "Fallo térmico detectado"
```

### Caso borde
Entrada: `lecturas: [40, 55, 68, 75, 82, 80]`, `limiteCritico: 105`

Resultado esperado:

```text
temperatura_minima_registrada: 40
supero_limite: false
picos_registrados: []
diagnostico: "Operación normal"
```

## Explicacion final
Esta solución funciona porque separa claramente las dos responsabilidades matemáticas dentro del mismo ciclo de evaluación. Encontrar el mínimo garantiza saber desde qué punto partió la medición (útil en mecánica para asegurar que se probó desde frío), mientras que la lógica del límite máximo actúa como un filtro. Al guardar no solo un valor booleano sino también los números exactos que cruzaron el límite, la función devuelve información útil y procesable, ideal para el diagnóstico de componentes.