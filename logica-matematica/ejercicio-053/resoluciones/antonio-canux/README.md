# Ejercicio 053: Coordenadas y Distancia - Paracaidismo

**Camper:** Antonio Canux

## Analisis

- Entrada: Cuatro valores numéricos que representan coordenadas en un plano (metros): `xParacaidista`, `yParacaidista` (punto de impacto) y `xObjetivo`, `yObjetivo` (centro de la zona de aterrizaje).
- Proceso: Calcular la distancia lineal entre el punto de impacto y el objetivo utilizando la fórmula de la distancia euclidiana (derivada del teorema de Pitágoras). Luego, redondear el resultado a dos decimales y usar estructuras condicionales para clasificar la precisión del aterrizaje.
- Salida: Un objeto que contiene `distancia_metros` (número), `clasificacion` (cadena de texto) y una `explicacion` de los resultados (cadena de texto).

## Reglas identificadas

1. **Fórmula de distancia:** Se utiliza la fórmula matemática para calcular la distancia en un plano cartesiano 2D: 
   $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
2. **Redondeo:** La distancia resultante debe redondearse a dos decimales para estandarizar los reportes del torneo.
3. **Zonas de clasificación:**
   - Si la distancia es **0**: "diana perfecta"
   - Si la distancia es mayor a **0** y menor o igual a **10**: "aterrizaje aceptable"
   - Si la distancia es mayor a **10**: "fuera de zona"

## Pruebas

### Caso normal

Entrada:
- Coordenadas Paracaidista: `x = 6`, `y = 8`
- Coordenadas Objetivo: `x = 0`, `y = 0`

Resultado esperado:
- distancia_metros: `10`
- clasificacion: `"aterrizaje aceptable"`
- explicacion: `"El paracaidista aterrizo a 10 metros del objetivo, lo que resulta en una clasificacion de 'aterrizaje aceptable'."`

### Caso borde

Entrada:
- Coordenadas Paracaidista: `x = -15`, `y = 20`
- Coordenadas Objetivo: `x = -15`, `y = 20`

Resultado esperado:
- distancia_metros: `0`
- clasificacion: `"diana perfecta"`
- explicacion: `"El paracaidista aterrizo a 0 metros del objetivo, lo que resulta en una clasificacion de 'diana perfecta'."`

## Explicacion final

La solución es altamente efectiva porque traduce un problema físico (distancia en el mundo real) a un plano cartesiano (X e Y) y lo resuelve con matemáticas universales (Pitágoras). Al usar los métodos incorporados `Math.pow` y `Math.sqrt`, el código garantiza precisión independientemente de si las coordenadas son positivas o negativas, ya que elevar un número negativo al cuadrado siempre resulta en un valor positivo, evitando errores en la raíz cuadrada.