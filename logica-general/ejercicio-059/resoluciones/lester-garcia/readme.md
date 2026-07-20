# Plantilla de solucion

## Analisis

- Entrada:
  - inventario:
    - { formula: "H2O", cantidad: 12, vencido: false }
    - { formula: "NaCl", cantidad: 8, vencido: true }
    - { formula: "H2SO4", cantidad: 0, vencido: false }
    - { formula: "CO2", cantidad: 5, vencido: false }

- Proceso:
  - Recorrer el inventario de fórmulas químicas.
  - Verificar si algún compuesto está vencido o no tiene existencias.
  - Reportar el primer compuesto que presente una inconsistencia.
  - Si todos los registros son válidos, indicar que el inventario está correcto.

- Salida:
  - compuesto: NaCl
  - motivo: El compuesto está vencido y debe reemplazarse.

## Reglas identificadas

1. Cada compuesto debe tener una cantidad mayor que cero.
2. Ningún compuesto debe estar vencido.
3. Se reporta el primer compuesto que incumpla alguna de las condiciones.
4. Si todos los compuestos cumplen las reglas, el inventario se considera correcto.

## Pruebas

### Caso normal

Entrada:

inventario:
- { formula: "H2O", cantidad: 12, vencido: false }
- { formula: "NaCl", cantidad: 8, vencido: true }
- { formula: "H2SO4", cantidad: 0, vencido: false }
- { formula: "CO2", cantidad: 5, vencido: false }

Resultado esperado:

compuesto: NaCl
motivo: El compuesto está vencido y debe reemplazarse.

### Caso borde

Entrada:

inventario:
- { formula: "H2O", cantidad: 10, vencido: false }
- { formula: "NaCl", cantidad: 6, vencido: false }
- { formula: "CO2", cantidad: 3, vencido: false }

Resultado esperado:

compuesto: Inventario correcto
motivo: Todos los compuestos tienen existencias y están vigentes.

## Explicacion final

La solución funciona porque recorre el inventario y verifica dos condiciones para cada compuesto: que tenga existencias disponibles y que no esté vencido. Cuando encuentra el primer registro que incumple alguna regla, lo reporta inmediatamente. Si todos los compuestos son válidos, informa que el inventario está correcto, produciendo un resultado claro y verificable.