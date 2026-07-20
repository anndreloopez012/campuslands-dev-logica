# Logica matematica 069 - sistema de clasificación temporal de eventos

## Motor de Clasificación por Divisibilidad

Este script implementa un sistema para clasificar eventos (sustos) dentro de una línea de tiempo, basándose en las propiedades matemáticas de los segundos en los que ocurren. El sistema utiliza el operador de módulo (`%`) para determinar patrones periódicos.

* **Descripción del proceso:**
* **Identificación de Ciclos**:
* **Susto Crítico**: Ocurre en segundos múltiplos de 10 (divisibilidad exacta por 10).
* **Susto Leve**: Ocurre en segundos pares (divisibilidad exacta por 2, excluyendo múltiplos de 10).
* **Tensión Acumulada**: Ocurre en segundos impares.


* **Generación de Reporte**: Retorna un objeto con el valor original, la categoría asignada y una breve explicación del criterio aplicado.


* **Tecnologías:**
* JavaScript (operador de residuo o módulo `%`, lógica condicional jerárquica).



---

### Explicación técnica

1. **Jerarquía de Evaluación**: El sistema evalúa primero la condición más restrictiva (`segundos % 10 === 0`). Esto es vital, ya que todos los múltiplos de 10 también son múltiplos de 2; al evaluar el caso del "Susto Crítico" primero, evitamos que los eventos críticos sean clasificados erróneamente como "Sustos Leves".
2. **Lógica de Módulos**: El uso de `%` permite detectar patrones cíclicos sin necesidad de almacenar listas o rangos complejos, optimizando la memoria del programa.

### Lógica del Código

```javascript
const clasificarSucesos = (segundos) => {
    let tipo = "";
    
    // 1. Evaluación de jerarquía (Prioridad: múltiplos de 10 > pares > impares)
    if (segundos % 10 === 0) {
        tipo = "Susto Critico";
    } else if (segundos % 2 === 0) {
        tipo = "Susto Leve";
    } else {
        tipo = "Tension Acumulada";
    }

    // 2. Retorno de objeto con detalles
    return {
        segundos: segundos,
        tipo_susto: tipo,
        explicacion: `El evento ocurrio en el segundo ${segundos}, clasificado segun divisibilidad.`
    };
};

```

### Salida Esperada

```json
{
  "segundos": 20,
  "tipo_susto": "Susto Critico",
  "explicacion": "El evento ocurrio en el segundo 20, clasificado segun divisibilidad."
}
{
  "segundos": 7,
  "tipo_susto": "Tension Acumulada",
  "explicacion": "El evento ocurrio en el segundo 7, clasificado segun divisibilidad."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-069/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco