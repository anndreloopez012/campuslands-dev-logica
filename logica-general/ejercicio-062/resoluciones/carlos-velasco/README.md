# Logica general 062 - sistema de validación de registros deportivos

## Motor de Validación de Integridad de Datos Deportivos

Este script garantiza la coherencia estadística de los datos de un equipo deportivo antes de ser procesados o almacenados. Valida que las cifras ingresadas sigan las reglas lógicas fundamentales de una competencia.

* **Descripción del proceso:**
* **Validación de Integridad Física**: Asegura que los indicadores de goles (`golesFavor` y `golesContra`) sean números positivos, evitando errores de entrada de datos.
* **Validación de Coherencia de Torneo**: Verifica que la sumatoria de resultados (`partidosGanados` + `partidosEmpatados`) no exceda el total de `partidosJugados` registrados, previniendo discrepancias estadísticas.
* **Resultado de Validación**: Devuelve un objeto binario (`valido: true/false`) acompañado de un mensaje descriptivo para facilitar la corrección de errores por parte del usuario.


* **Tecnologías:**
* JavaScript (desestructuración de objetos, lógica booleana, validación de datos).



---

### Explicación técnica

1. **Desestructuración de Objetos**: Facilita la extracción de las propiedades del objeto `equipo`, haciendo el código más legible y manejable.
2. **Validación por Capas (Guard Clauses)**: El uso de condiciones de retorno temprano permite que el sistema falle rápido ante un dato incorrecto, evitando el procesamiento de estadísticas imposibles.

### Lógica del Código

```javascript
const validarEquipo = (equipo) => {
    const { partidosJugados, partidosGanados, partidosEmpatados, golesFavor, golesContra } = equipo;

    // 1. Validar que no haya valores imposibles
    if (golesFavor < 0 || golesContra < 0) {
        return { valido: false, mensaje: "Los goles no pueden ser negativos." };
    }

    // 2. Validar consistencia matemática de los partidos
    if ((partidosGanados + partidosEmpatados) > partidosJugados) {
        return { valido: false, mensaje: "La suma de resultados excede los partidos jugados." };
    }

    return { valido: true, mensaje: "Registro de equipo validado correctamente." };
};

```

### Salida Esperada

```json
{
  "valido": true,
  "mensaje": "Registro de equipo validado correctamente."
}
{
  "valido": false,
  "mensaje": "La suma de resultados excede los partidos jugados."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-062/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco