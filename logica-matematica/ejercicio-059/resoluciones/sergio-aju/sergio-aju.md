# Analisis del reto: Validaciones Numéricas de Fórmulas Químicas

## Analisis

- **Entrada:** Un arreglo de `pesos_atomicos` (valores numéricos de elementos en una fórmula), un `factor_pureza` (valor porcentual) y un `margen_error` (valor de corrección).
- **Proceso:** Sumar todos los pesos atómicos, aplicar el factor de pureza (multiplicativo) y restar el margen de error para obtener el `peso_molecular_final`.
- **Salida:** El `peso_molecular_final` calculado y la `clasificacion_calidad` del compuesto.

## Reglas identificadas

1. **Cálculo base:** Sumar todos los elementos del arreglo `pesos_atomicos`.
2. **Aplicación de ajustes:** Aplicar el `factor_pureza` al total (multiplicar), luego restar el `margen_error`.
3. **Clasificación:**
   - Si el resultado es >= 500: "alta pureza".
   - Si el resultado es entre 200 y 499: "estándar".
   - Si el resultado es < 200: "inestable".

## Pruebas

### Caso normal

**Entrada:**
```text
pesos_atomicos: [100, 200, 300]
factor_pureza: 0.9
margen_error: 50