# Logica matematica 071 - sistema de cálculo combinatorio de enfrentamientos

## Motor de Análisis Combinatorio de Torneos

Este script calcula el número total de enfrentamientos únicos posibles en un grupo de participantes (tipo torneo "todos contra todos"), asegurando que cada par de peleadores se enfrente exactamente una vez.

* **Descripción del proceso:**
* **Validación de Capacidad**: Verifica que el grupo tenga al menos 2 participantes; de lo contrario, no es posible generar enfrentamientos.
* **Cálculo Combinatorio**: Aplica la fórmula matemática de combinaciones para un grupo de tamaño $n$ tomados de 2 en 2:

$$\frac{n(n - 1)}{2}$$


* **Reporte de Resultados**: Retorna el conteo total de participantes, el número resultante de enfrentamientos y una breve explicación de la lógica aplicada.


* **Tecnologías:**
* JavaScript (cálculo aritmético simple, validación de condiciones).



---

### Explicación técnica

1. **Eficiencia Matemática**: En lugar de utilizar bucles anidados (que tendrían una complejidad de $O(n^2)$), este algoritmo utiliza una fórmula matemática directa con complejidad $O(1)$, lo que garantiza un rendimiento constante independientemente del número de participantes.
2. **Validación de Integridad**: La cláusula `if (n < 2)` protege al sistema contra errores lógicos al procesar grupos individuales o vacíos.

### Lógica del Código

```javascript
const calcularPosiblesEnfrentamientos = (participantes) => {
    const n = participantes.length;
    
    // 1. Validación de requisitos mínimos
    if (n < 2) return { posibles: 0, explicacion: "Se requieren al menos 2 peleadores." };

    // 2. Cálculo combinatorio usando la fórmula n*(n-1)/2
    const combinaciones = (n * (n - 1)) / 2;

    // 3. Retorno de resultados
    return {
        participantes_totales: n,
        posibles_enfrentamientos: combinaciones,
        explicacion: `Con ${n} peleadores, cada uno puede enfrentarse contra todos los demás una sola vez.`
    };
};

```

### Salida Esperada

```json
{
  "participantes_totales": 4,
  "posibles_enfrentamientos": 6,
  "explicacion": "Con 4 peleadores, cada uno puede enfrentarse contra todos los demás una sola vez."
}
{
  "posibles": 0,
  "explicacion": "Se requieren al menos 2 peleadores."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-071/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco