
# Resolución: Ejercicio 010.2 - Redondeo y precisión (Viajes y Turismo)

## Pensamiento lógico
El manejo de dinero en software requiere precisión. He utilizado una técnica de redondeo estándar (`valor * 100 -> redondear -> / 100`) para asegurar que el resultado final siempre tenga exactamente dos decimales, evitando los errores de punto flotante comunes en computación.

## Reglas aplicadas
1. **Validación de seguridad:** Se descartan valores negativos inmediatamente.
2. **Transformación aritmética:** Aplicación de porcentaje simple.
3. **Control de precisión:** Normalización del resultado a formato moneda (2 decimales).

## Cómo ejecutar/revisar
Esta lógica es universal. Si el costo es 100.556 y el impuesto es 10%, el algoritmo calculará 110.6116 y lo redondeará a 110.61.

## Casos probados
1. **Caso Normal:** Costo 200, Impuesto 15% -> Resultado 230.00.
2. **Caso Borde (Decimales):** Costo 150.50, Impuesto 5% -> Resultado 158.03.
3. **Caso Borde (Negativo):** Costo -50, Impuesto 10% -> Resultado: "Error".