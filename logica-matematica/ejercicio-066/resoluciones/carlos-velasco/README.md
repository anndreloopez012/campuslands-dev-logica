# Logica matematica 066 - sistema de conversión y clasificación automotriz

## Motor de Conversión de Unidades Técnicas

Este script realiza la conversión precisa de unidades imperiales (caballos de fuerza y millas por hora) a unidades del sistema métrico (kilovatios y kilómetros por hora) para vehículos. Adicionalmente, clasifica el vehículo en una categoría basada en su velocidad máxima alcanzada en el sistema métrico.

* **Descripción del proceso:**
* **Conversión de Potencia**: Aplica el factor de conversión $1 \text{ HP} \approx 0.7457 \text{ KW}$.
* **Conversión de Velocidad**: Aplica el factor de conversión $1 \text{ MPH} \approx 1.60934 \text{ KPH}$.
* **Clasificación por Rendimiento**:
* **Hiperdeportivo**: Velocidad superior a $400 \text{ KPH}$.
* **Superdeportivo**: Velocidad entre $250 \text{ KPH}$ y $400 \text{ KPH}$.
* **Deportivo**: Velocidad menor o igual a $250 \text{ KPH}$.


* **Formateo**: Utiliza `.toFixed(2)` para limitar la precisión decimal y `parseFloat` para retornar los valores como tipos numéricos válidos.


* **Tecnologías:**
* JavaScript (operaciones aritméticas, lógica condicional, métodos de formateo numérico).



---

### Explicación técnica

1. **Precisión Decimal**: El uso de `toFixed(2)` es esencial para estandarizar los reportes técnicos, evitando errores de precisión flotante en las salidas de datos.
2. **Jerarquía Lógica**: El sistema evalúa primero la condición más exigente (Hiperdeportivo), permitiendo que las demás categorías se definan por descarte.

### Lógica del Código

```javascript
const convertirUnidades = (hp, mph) => {
    // 1. Cálculos de conversión
    const kw = (hp * 0.7457).toFixed(2);
    const kph = (mph * 1.60934).toFixed(2);

    // 2. Clasificación basada en velocidad métrica
    let clasificacion = "Deportivo";
    if (kph > 400) clasificacion = "Hiperdeportivo";
    else if (kph > 250) clasificacion = "Superdeportivo";

    // 3. Retorno de objeto estructurado
    return {
        potencia_kw: parseFloat(kw),
        velocidad_kph: parseFloat(kph),
        clasificacion: clasificacion,
        explicacion: `Conversión realizada: ${hp}HP a ${kw}KW y ${mph}MPH a ${kph}KPH.`
    };
};

```

### Salida Esperada

```json
{
  "potencia_kw": 745.7,
  "velocidad_kph": 402.34,
  "clasificacion": "Hiperdeportivo",
  "explicacion": "Conversión realizada: 1000HP a 745.70KW y 250MPH a 402.34KPH."
}
{
  "potencia_kw": 149.14,
  "velocidad_kph": 160.93,
  "clasificacion": "Deportivo",
  "explicacion": "Conversión realizada: 200HP a 149.14KW y 100MPH a 160.93KPH."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-066/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco