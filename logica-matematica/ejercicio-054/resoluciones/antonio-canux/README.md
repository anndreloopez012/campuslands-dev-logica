# Ejercicio 054: Áreas y Perímetros - Tatuajes

**Camper:** Antonio Canux

## Analisis

- Entrada: Tres valores numéricos: `anchoCm` y `altoCm` (dimensiones del diseño rectangular del tatuaje), y `precioPorCm2` (la tarifa del artista por centímetro cuadrado).
- Proceso: Primero se validan las entradas para evitar medidas negativas o iguales a cero. Luego, se calcula el área geométrica para determinar el costo, y el perímetro para estimar el tiempo de delineado (basado en una regla de 3 minutos por centímetro). Finalmente, se clasifica el trabajo según el área obtenida.
- Salida: Un objeto que contiene `area_cm2`, `perimetro_cm`, `costo_total`, `tiempo_estimado_minutos`, la `clasificacion` de tamaño y una `explicacion` en texto.

## Reglas identificadas

1. **Cálculo de Área:** Se utiliza la fórmula para el área de un rectángulo:
   $A = \text{base} \times \text{altura}$
2. **Cálculo de Perímetro:** Se suman las longitudes de los 4 lados del rectángulo:
   $P = 2 \times (\text{base} + \text{altura})$
3. **Validación de Datos:** Un objeto en el mundo real no puede tener dimensiones negativas o nulas, por lo que si `ancho` o `alto` $\le 0$, se interrumpe el cálculo devolviendo una clasificación "invalido".
4. **Escalas de Tamaño:**
   - Área $\ge 100 \text{ cm}^2$: "tatuaje grande"
   - Área $\ge 25 \text{ cm}^2$ y $< 100 \text{ cm}^2$: "tatuaje mediano"
   - Área $< 25 \text{ cm}^2$: "tatuaje pequeno"

## Pruebas

### Caso normal

Entrada:
- anchoCm: `5`
- altoCm: `10`
- precioPorCm2: `15`

Resultado esperado:
- area_cm2: `50`
- perimetro_cm: `30`
- costo_total: `750`
- tiempo_estimado_minutos: `90` (30 cm * 3 min)
- clasificacion: `"tatuaje mediano"`
- explicacion: `"El tatuaje tiene un area de 50 cm2 y un perimetro de 30 cm. El costo sera de $750 y tomara aprox. 90 minutos."`

### Caso borde

Entrada:
- anchoCm: `8`
- altoCm: `0`
- precioPorCm2: `20`

Resultado esperado:
- area_cm2: `0`
- perimetro_cm: `0`
- costo_total: `0`
- tiempo_estimado_minutos: `undefined / 0`
- clasificacion: `"invalido"`
- explicacion: `"Las dimensiones del tatuaje deben ser mayores a cero."`

## Explicacion final

Esta solución destaca porque no solo aplica fórmulas geométricas de forma plana, sino que las asocia a reglas de negocio reales (precio y tiempo). Al separar el uso del área (para el costo) y el perímetro (para el tiempo de contorno), demostramos que entendemos qué representa cada medida geométrica en el mundo físico. Además, incluir la validación inicial `if (anchoCm <= 0 || altoCm <= 0)` protege a la función de procesar datos sin sentido, lo cual es una excelente práctica de programación defensiva.