# Plantilla de solucion

## Analisis

* **Entrada**: Dos valores numéricos, `hp` (caballos de fuerza) y `mph` (millas por hora).
* **Proceso**: Conversión de unidades al sistema métrico (KW y KPH) utilizando factores de conversión estándar, seguida de una evaluación lógica para clasificar el vehículo según su velocidad.
* **Salida**: Un objeto que contiene los valores convertidos (`potencia_kw`, `velocidad_kph`), la `clasificacion` asignada y una `explicacion` del proceso.

## Reglas identificadas

1. **Factores de Conversión**: Se aplica $1 \text{ HP} = 0.7457 \text{ KW}$ y $1 \text{ MPH} = 1.60934 \text{ KPH}$.
2. **Jerarquía de Clasificación**:
* Velocidad $> 400 \text{ KPH}$: "Hiperdeportivo".
* Velocidad entre $250 \text{ KPH}$ y $400 \text{ KPH}$: "Superdeportivo".
* Velocidad $\le 250 \text{ KPH}$: "Deportivo".


3. **Formateo**: Los valores calculados deben redondearse a 2 decimales y convertirse a tipo numérico final.

## Pruebas

### Caso normal

* **Entrada**: `1000, 250`
* **Resultado esperado**: `{ potencia_kw: 745.7, velocidad_kph: 402.34, clasificacion: "Hiperdeportivo", explicacion: "Conversión realizada: 1000HP a 745.70KW y 250MPH a 402.34KPH." }`

### Caso borde

* **Entrada**: `200, 100`
* **Resultado esperado**: `{ potencia_kw: 149.14, velocidad_kph: 160.93, clasificacion: "Deportivo", explicacion: "Conversión realizada: 200HP a 149.14KW y 100MPH a 160.93KPH." }`

## Explicacion final

La solución funciona porque encapsula de manera eficiente los factores de conversión dentro de un flujo lineal, garantizando que los cálculos se realicen antes de cualquier evaluación lógica. La estructura de `if-else` permite una clasificación jerárquica clara, donde las condiciones más restrictivas se evalúan primero. El uso de `parseFloat` junto con `toFixed(2)` asegura que los datos sean precisos pero también operables como números, lo cual es vital para cualquier sistema de gestión de datos técnicos posterior.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (1000 HP, 250 MPH)**:
* $1000 \times 0.7457 = 745.70$.
* $250 \times 1.60934 = 402.335 \approx 402.34$.
* $402.34 > 400 \rightarrow$ "Hiperdeportivo".