
# Ejercicio 026 - Conversión de Unidades (Autos Hiperdeportivos)

## Análisis del Problema
Los autos hiperdeportivos suelen utilizar distintos estándares internacionales. El reto consiste en normalizar estos valores (HP a kW y MPH a KM/H) aplicando factores de conversión precisos para evitar errores en las especificaciones técnicas.

## Reglas Aplicadas
1. **Factor de Conversión:**
   - Potencia: Multiplicar por `0.7457`.
   - Velocidad: Multiplicar por `1.60934`.
2. **Precisión:** Se utiliza `.toFixed(2)` para estandarizar la salida a dos decimales, garantizando que no existan errores de redondeo excesivo.
3. **Inmutabilidad:** Se utiliza `.map()` para transformar los datos sin alterar el arreglo original, cumpliendo con buenas prácticas de programación.

## Ejecución
`node nombre-apellido.js`

## Pruebas Realizadas
1. **Caso Normal:** Conversión de una lista de potencias de HP a kW.
2. **Caso Borde:** Conversión de velocidad de una lista pequeña, verificando la precisión con el factor `1.60934`.