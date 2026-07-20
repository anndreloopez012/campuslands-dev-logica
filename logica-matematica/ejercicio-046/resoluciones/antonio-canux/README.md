# Ejercicio 046 - Conversión de Unidades (Autos Hiperdeportivos)

**Camper:** Antonio Canux

## Analisis

- Entrada: Valores numéricos para `velocidadMph` (velocidad máxima en millas por hora) y `potenciaHp` (potencia en caballos de fuerza).
- Proceso: Multiplica el valor de la velocidad por el factor constante de conversión de millas a kilómetros (1.60934). De forma similar, multiplica la potencia por el factor de conversión de caballos de fuerza a kilovatios (0.7457). Con los nuevos datos en sistema métrico, evalúa si la velocidad final supera el umbral de los 400 km/h para clasificar el nivel del vehículo.
- Salida: Un objeto que agrupa las especificaciones originales, las especificaciones convertidas al sistema métrico (con dos decimales de precisión) y la clasificación de rendimiento correspondiente.

## Reglas identificadas

1. **Equivalencia de Velocidad:** Una milla por hora equivale exactamente a 1.60934 kilómetros por hora. El cálculo debe ser multiplicativo directo.
2. **Equivalencia de Potencia:** Un caballo de fuerza mecánico (hp) equivale a 0.7457 kilovatios (kW).
3. **Criterio de Categoría:** Si el resultado de la conversión de velocidad da un valor igual o superior a 400 km/h, el auto recibe la etiqueta de "Hypercar - Leyenda (Megacar)", de lo contrario se queda como "Hypercar - Estándar".

## Pruebas

### Caso normal

Entrada: `velocidadMph: 261`, `potenciaHp: 1500`

Resultado esperado:
```text
especificaciones_originales: { velocidad_mph: "261 mph", potencia_hp: "1500 hp" }
especificaciones_metricas: { velocidad_kmh: "420.04 km/h", potencia_kw: "1118.55 kW" }
clasificacion_rendimiento: "Hypercar - Leyenda (Megacar)"
```

### Caso borde
Entrada: `velocidadMph: 0`, `potenciaHp: 0`

Resultado esperado:

```text
especificaciones_originales: { velocidad_mph: "0 mph", potencia_hp: "0 hp" }
especificaciones_metricas: { velocidad_kmh: "0 km/h", potencia_kw: "0 kW" }
clasificacion_rendimiento: "Hypercar - Estándar"
```

## Explicacion final
Esta solución funciona porque utiliza factores de conversión estandarizados internacionalmente como multiplicadores constantes, asegurando la precisión matemática necesaria al evaluar vehículos de alta competencia. Mediante el uso del método .toFixed(2) combinado con parseFloat(), el algoritmo elimina las largas colas de decimales flotantes propias de JavaScript, entregando datos limpios y legibles para el usuario sin desconfigurar el tipo de dato numérico primario. Quedo listo para recibir el contexto del ejercicio 7.