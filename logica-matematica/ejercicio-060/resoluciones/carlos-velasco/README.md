# Logica general 061 - sistema de simulación de ventas

## Motor de Proyección Financiera para Jornadas de Ventas

Este script calcula el desempeño financiero de una jornada de ventas basándose en el flujo de clientes por hora, el ticket promedio y un factor de propina porcentual, clasificando el éxito de la jornada según el monto total recaudado.

* **Descripción del proceso:**
* **Agregación de Datos**: Utiliza `.reduce()` para sumar el total de clientes atendidos a lo largo de las distintas horas de la jornada.
* **Cálculo de Ingresos**: Determina la `ventaBase` y la suma de las `propinas` aplicadas sobre dicha base, obteniendo el `totalRecaudado`.
* **Clasificación Automática**: Asigna una etiqueta cualitativa ("Exitoso", "Rentable" o "En proceso") según el nivel de recaudación alcanzado.
* **Generación de Reporte**: Retorna un objeto detallado con el total ajustado a dos decimales y un desglose explicativo.


* **Tecnologías:**
* JavaScript (método `.reduce()`, lógica de acumulación, formateo de números).



---

### Explicación técnica

1. **Eficiencia en la Acumulación**: El cálculo de `totalClientes` mediante `reduce` permite procesar dinámicamente cualquier cantidad de periodos horarios sin modificar la lógica principal.
2. **Desacoplamiento de Datos**: Al separar el `factorPropina` del `precioPromedio`, el sistema permite ajustar los parámetros de simulación ante cambios en la política de precios o el comportamiento de los clientes.

### Lógica del Código

```javascript
const simularVentas = (clientesPorHora, precioPromedio, factorPropina) => {
    // 1. Calcular clientes totales
    const totalClientes = clientesPorHora.reduce((acc, c) => acc + c, 0);
    
    // 2. Calcular montos financieros
    const ventaBase = totalClientes * precioPromedio;
    const totalPropinas = ventaBase * factorPropina;
    const totalRecaudado = ventaBase + totalPropinas;

    // 3. Clasificar jornada
    let clasificacion = "En proceso";
    if (totalRecaudado > 1000) clasificacion = "Exitoso";
    else if (totalRecaudado > 500) clasificacion = "Rentable";

    return {
        total_recaudado: totalRecaudado.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Jornada con ${totalClientes} clientes. Venta base: $${ventaBase}, más propinas.`
    };
};

```

### Salida Esperada

```json
{
  "total_recaudado": "1237.50",
  "clasificacion": "Exitoso",
  "explicacion": "Jornada con 45 clientes. Venta base: $1125, más propinas."
}
{
  "total_recaudado": "5.00",
  "clasificacion": "En proceso",
  "explicacion": "Jornada con 1 clientes. Venta base: $5, más propinas."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-061/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco