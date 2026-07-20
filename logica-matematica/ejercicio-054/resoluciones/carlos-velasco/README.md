# Logica matematica 054 - sistema de cotización de tatuajes

## Motor de Cálculo de Costos por Área y Trazo

Este script calcula el valor total de un tatuaje basado en dimensiones geométricas (área y perímetro). La lógica integra el costo por superficie (relleno) y el costo lineal (trazos del borde), permitiendo una clasificación automática según el presupuesto resultante.

* **Descripción del proceso:**
* **Cálculo Geométrico**: Para cada figura, se determina el área ($ancho \times alto$) y el perímetro ($2 \times (ancho + alto)$).
* **Aplicación de Tarifas**: Calcula el costo por figura sumando el producto del área por el precio unitario y el perímetro por el costo de trazo.
* **Clasificación de Complejidad**: Asigna una categoría ("Simple", "Estándar" o "Complejo") según el costo total acumulado.
* **Formateo de Salida**: Retorna el costo con dos decimales y un resumen del cálculo.


* **Tecnologías:**
* JavaScript (método `.forEach()`, aritmética básica, control de flujo).



---

### Explicación técnica

1. **Desglose de Costos**: La fórmula `(area * precioCm2) + (perimetro * costoTrazo)` separa eficazmente el trabajo de relleno del trabajo de línea (trazos), brindando un presupuesto más preciso según la naturaleza técnica del diseño.
2. **Escalabilidad**: Al utilizar un arreglo de objetos `figuras`, el script puede procesar diseños compuestos por múltiples secciones geométricas de manera eficiente.

### Lógica del Código

```javascript
const calcularCostoTatuaje = (figuras, precioCm2, costoTrazo) => {
    let totalCosto = 0;

    // 1. Calcular costo por cada figura geométrica
    figuras.forEach(f => {
        const area = f.ancho * f.alto;
        const perimetro = 2 * (f.ancho + f.alto);
        totalCosto += (area * precioCm2) + (perimetro * costoTrazo);
    });

    // 2. Clasificar según el valor total
    let clasificacion = "Simple";
    if (totalCosto > 500) clasificacion = "Complejo";
    else if (totalCosto > 200) clasificacion = "Estándar";

    return {
        costo_final: totalCosto.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Cálculo basado en ${figuras.length} áreas geométricas.`
    };
};

```

### Salida Esperada

```json
{
  "costo_final": "240.00",
  "clasificacion": "Estándar",
  "explicacion": "Cálculo basado en 1 áreas geométricas."
}
{
  "costo_final": "12.00",
  "clasificacion": "Simple",
  "explicacion": "Cálculo basado en 1 áreas geométricas."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-054/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco