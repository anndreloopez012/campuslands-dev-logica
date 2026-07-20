# Logica matematica 059 - sistema de validación de estabilidad molecular

## Motor de Análisis de Carga Eléctrica Molecular

Este script evalúa la estabilidad electroquímica de una molécula basándose en la suma ponderada de las cargas de sus átomos constituyentes frente a un umbral de tolerancia definido.

* **Descripción del proceso:**
* **Cálculo de Carga Total**: Utiliza `.reduce()` para sumar el producto de la carga de cada átomo por su cantidad, obteniendo la carga neta de la estructura.
* **Evaluación de Estabilidad**: Determina si la molécula es estable comparando el valor absoluto de la carga total con un `umbral` permitido.
* **Clasificación Cualitativa**:
* **Neutra**: Carga exactamente cero.
* **Ion**: Carga dentro del umbral permitido pero distinta de cero.
* **Inestable**: Carga fuera del umbral establecido.


* **Reporte de Diagnóstico**: Retorna un objeto con la carga resultante, la clasificación obtenida y un resumen explicativo.


* **Tecnologías:**
* JavaScript (método `.reduce()`, funciones matemáticas `Math.abs()`, lógica condicional).



---

### Explicación técnica

1. **Eficiencia en la Acumulación**: La carga neta se calcula mediante una pasada única sobre el arreglo de átomos con `.reduce()`, garantizando una complejidad de tiempo lineal $O(n)$.
2. **Normalización por Valor Absoluto**: El uso de `Math.abs(cargaTotal)` permite que el sistema ignore si la carga es positiva o negativa durante la verificación de estabilidad, simplificando la lógica de comparación contra el umbral.

### Lógica del Código

```javascript
const validarMolecula = (atomos, umbral) => {
    // 1. Calcular carga total: Sumatoria de (carga * cantidad)
    const cargaTotal = atomos.reduce((acc, a) => acc + (a.carga * a.cantidad), 0);
    
    // 2. Evaluar estabilidad contra el umbral
    const esEstable = Math.abs(cargaTotal) <= umbral;

    // 3. Clasificar según carga
    let clasificacion = "Inestable";
    if (esEstable) {
        clasificacion = (cargaTotal === 0) ? "Neutra" : "Ion";
    }

    return {
        carga_total: cargaTotal,
        clasificacion: clasificacion,
        explicacion: `La molécula presenta una carga de ${cargaTotal}.`
    };
};

```

### Salida Esperada

```json
{
  "carga_total": 0,
  "clasificacion": "Neutra",
  "explicacion": "La molécula presenta una carga de 0."
}
{
  "carga_total": 0,
  "clasificacion": "Neutra",
  "explicacion": "La molécula presenta una carga de 0."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-059/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco