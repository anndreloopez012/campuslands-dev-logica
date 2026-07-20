# Logica matematica 070 - sistema de cálculo de presupuesto internacional

## Motor de Conversión y Ajuste de Presupuesto

Este script automatiza el cálculo de presupuestos de viaje que involucran conversión de divisas y aplicación de impuestos porcentuales. El sistema garantiza precisión financiera mediante la normalización de resultados a dos decimales, ideal para manejo de transacciones monetarias.

* **Descripción del proceso:**
* **Validación de Datos**: Verifica la presencia de gastos; si el arreglo está vacío, retorna un mensaje de error.
* **Sumatoria de Gastos**: Utiliza `.reduce()` para agregar todos los gastos en la moneda base.
* **Conversión de Divisa**: Multiplica el total local por la `tasaCambio` proporcionada.
* **Cálculo de Impuestos**: Aplica un recargo porcentual sobre el total convertido.
* **Normalización Financiera**: Utiliza `toFixed(2)` para limitar la precisión a centavos y `parseFloat()` para asegurar que el resultado final sea un número válido y no una cadena de texto.


* **Tecnologías:**
* JavaScript (método de reducción `.reduce()`, manipulación de precisión decimal `toFixed`, conversión de tipos).



---

### Explicación técnica

1. **Precisión Financiera**: El uso de `toFixed(2)` es una práctica estándar para representar divisas, evitando errores de visualización con números decimales extensos.
2. **Encadenamiento de Operaciones**: La lógica sigue una secuencia clara: Acumulación $\rightarrow$ Conversión $\rightarrow$ Recargo $\rightarrow$ Formateo, garantizando que el impuesto se calcule sobre el valor ya convertido, no sobre el valor original.

### Lógica del Código

```javascript
const calcularPresupuestoViaje = (gastos, tasaCambio, impuestos) => {
    // 1. Validación preventiva
    if (!gastos || gastos.length === 0) return { error: "No hay gastos" };

    // 2. Cálculo secuencial
    const totalLocal = gastos.reduce((acc, gasto) => acc + gasto, 0);
    const totalConvertido = totalLocal * tasaCambio;
    const totalConImpuestos = totalConvertido * (1 + impuestos / 100);

    // 3. Retorno del presupuesto normalizado
    return {
        presupuesto_total: parseFloat(totalConImpuestos.toFixed(2)),
        moneda: "Extranjera",
        explicacion: `Total convertido y redondeado a 2 decimales aplicando ${impuestos}% de impuestos.`
    };
};

```

### Salida Esperada

```json
{
  "presupuesto_total": 414,
  "moneda": "Extranjera",
  "explicacion": "Total convertido y redondeado a 2 decimales aplicando 15% de impuestos."
}
{
  "presupuesto_total": 34.64,
  "moneda": "Extranjera",
  "explicacion": "Total convertido y redondeado a 2 decimales aplicando 5% de impuestos."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-070/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco