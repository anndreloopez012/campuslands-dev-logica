# Logica general 058 - sistema de asignación inteligente de turnos

## Motor de Asignación Basado en Competencias y Urgencia

Este script automatiza la selección de personal operario para tareas específicas, optimizando la asignación según la criticidad del turno y el nivel de experiencia de los trabajadores disponibles.

* **Descripción del proceso:**
* **Filtrado de Disponibilidad**: Identifica únicamente a los operarios cuyo estado `estaDisponible` es `true`.
* **Manejo de Ausencia de Personal**: Retorna un estado de advertencia si no hay operarios aptos para cubrir el turno.
* **Ordenamiento Dinámico (Lógica de Negocio)**:
* **Urgencia "Alta"**: Prioriza al operario con mayor experiencia (descendente) para garantizar la calidad y rapidez en situaciones críticas.
* **Urgencia "Baja"**: Prioriza al operario con menor experiencia (ascendente) como oportunidad de aprendizaje y optimización de recursos.


* **Asignación**: Selecciona al primer candidato de la lista ordenada tras aplicar los criterios de urgencia.


* **Tecnologías:**
* JavaScript (métodos `.filter()` y `.sort()`, operadores ternarios, lógica de selección).



---

### Explicación técnica

1. **Ordenamiento Dinámico**: El uso de `sort()` con una función de comparación ternaria (`urgencia === "Alta" ? ... : ...`) permite cambiar la estrategia de asignación en tiempo de ejecución, haciendo el código altamente reutilizable y flexible ante diferentes niveles de prioridad.
2. **Eficiencia**: La solución filtra primero (reduciendo el conjunto de datos) y luego ordena solo los elementos necesarios, optimizando el rendimiento frente a listas grandes de personal.

### Lógica del Código

```javascript
const asignarTurno = (operarios, urgencia) => {
    // 1. Filtrar solo disponibles
    const disponibles = operarios.filter(o => o.estaDisponible);

    // 2. Validar disponibilidad
    if (disponibles.length === 0) {
        return { operario: "Ninguno", motivo: "No hay personal disponible para el turno." };
    }

    // 3. Ordenar según urgencia (Alta: más exp, Baja: menos exp)
    disponibles.sort((a, b) => urgencia === "Alta" ? b.experiencia - a.experiencia : a.experiencia - b.experiencia);

    // 4. Asignar el mejor candidato
    return {
        operario: disponibles[0].nombre,
        motivo: `Asignado por criterio de urgencia ${urgencia} (Experiencia: ${disponibles[0].experiencia}).`
    };
};

```

### Salida Esperada

```json
{
  "operario": "Ana",
  "motivo": "Asignado por criterio de urgencia Alta (Experiencia: 9)."
}
{
  "operario": "Luis",
  "motivo": "Asignado por criterio de urgencia Baja (Experiencia: 3)."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-058/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco