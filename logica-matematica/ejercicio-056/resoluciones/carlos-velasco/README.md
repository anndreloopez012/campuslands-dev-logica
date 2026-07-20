# Logica matematica 056 - sistema de presupuesto para animación

## Motor de Cálculo de Costos en Proyectos de Animación

Este script automatiza la generación de presupuestos para proyectos de animación, consolidando costos de múltiples servicios, gestionando incentivos por volumen de trabajo y aplicando cargas impositivas finales.

* **Descripción del proceso:**
* **Consolidación de Costos**: Utiliza el método `.reduce()` para sumar el valor de cada servicio contratado.
* **Aplicación de Descuento por Volumen**: Si el cliente contrata más de 3 servicios, se aplica un porcentaje de descuento definido sobre el subtotal.
* **Cálculo de Impuestos**: Aplica la tasa impositiva sobre el subtotal resultante (tras el descuento, si aplica).
* **Categorización de Proyecto**: Clasifica el presupuesto en "Básico", "Estándar" o "Premium" según el costo final obtenido.
* **Informe Detallado**: Retorna un objeto con el costo final formateado, la categoría asignada y una descripción del cálculo.


* **Tecnologías:**
* JavaScript (método `.reduce()`, lógica de decisión, formateo numérico).



---

### Explicación técnica

1. **Eficiencia en la Acumulación**: `.reduce()` abstrae la lógica de iteración, permitiendo sumar costos sin necesidad de variables contadoras externas, lo que hace el código más limpio.
2. **Lógica Condicional de Negocio**: La aplicación del descuento es dinámica y depende estrictamente de la cantidad de servicios contratados, asegurando que el beneficio por volumen se aplique solo bajo las reglas estipuladas.

### Lógica del Código

```javascript
const calcularPresupuestoAnimacion = (servicios, descuento, impuesto) => {
    // 1. Acumular subtotal
    let subtotal = servicios.reduce((acc, s) => acc + s.costo, 0);
    
    // 2. Aplicar descuento si supera los 3 servicios
    if (servicios.length > 3) {
        subtotal -= (subtotal * descuento);
    }
    
    // 3. Aplicar impuestos
    const totalFinal = subtotal * (1 + impuesto);
    
    // 4. Clasificar según el total
    let categoria = "Básico";
    if (totalFinal > 1000) categoria = "Premium";
    else if (totalFinal > 500) categoria = "Estándar";
    
    return {
        costo_final: totalFinal.toFixed(2),
        clasificacion: categoria,
        explicacion: `Calculado con ${servicios.length} servicios, aplicando impuestos e incentivos por volumen.`
    };
};

```

### Salida Esperada

```json
{
  "costo_final": "1039.50",
  "clasificacion": "Premium",
  "explicacion": "Calculado con 4 servicios, aplicando impuestos e incentivos por volumen."
}
{
  "costo_final": "105.00",
  "clasificacion": "Básico",
  "explicacion": "Calculado con 1 servicios, aplicando impuestos e incentivos por volumen."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-056/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco