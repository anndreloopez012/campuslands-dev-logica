
# Ejercicio 030 - Redondeo y Precisión (Viajes y Turismo)

## Análisis del Problema
En la industria turística, los cálculos de presupuestos involucran porcentajes de impuestos (IVA, tasas aeroportuarias) que generan números decimales. Es necesario aplicar reglas de redondeo claras para presentar facturas finales al usuario.

## Reglas Aplicadas
1. **Precisión Matemática:** Los cálculos se realizan inicialmente con todos los decimales para evitar el "error de acumulación".
2. **Estrategias de Redondeo:**
   - `Math.round()`: Utilizado para obtener un valor entero comercial.
   - `.toFixed(2)`: Utilizado para formato de moneda estándar, garantizando que siempre se muestren dos decimales.
3. **Validación:** Se bloquean entradas con valores negativos.

## Ejecución
`node nombre-apellido.js`

## Pruebas Realizadas
1. **Caso Normal:** Paquete de 1250.55 con 19% de impuesto -> Verifica precisión decimal.
2. **Caso Borde:** Paquete de valor pequeño (99.99) -> Verifica comportamiento ante centavos.