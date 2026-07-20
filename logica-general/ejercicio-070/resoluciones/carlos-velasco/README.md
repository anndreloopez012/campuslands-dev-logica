# Logica general 070 - sistema de procesamiento de itinerarios

## Motor de Generación de Rutas de Viaje

Este script transforma una lista de instrucciones abstractas (objetos con una `accion` y un `destino`) en un itinerario narrativo y estructurado. Es ideal para aplicaciones de planificación de viajes que necesitan convertir datos crudos en descripciones legibles para el usuario.

* **Descripción del proceso:**
* **Iteración**: Recorre cada objeto dentro del arreglo `instrucciones` utilizando `.forEach()`.
* **Clasificación de Transporte**:
* **"volar"**: Genera una descripción de transporte aéreo.
* **"tren"**: Genera una descripción de transporte terrestre.
* **Otro**: Registra el destino como una actividad estándar.


* **Consolidación**: Devuelve un objeto que contiene el listado de los pasos procesados y el conteo total de paradas o actividades.


* **Tecnologías:**
* JavaScript (iteración de arreglos, estructuras condicionales, manipulación de cadenas).



---

### Explicación técnica

1. **Transformación de Datos**: El script actúa como un transformador de datos (o *mapper*), donde la lógica interna traduce un código de acción en una oración descriptiva completa.
2. **Flexibilidad**: Al utilizar una cláusula `else` como captura de errores o eventos predeterminados, el sistema garantiza que cualquier instrucción, sin importar su tipo, sea registrada en el itinerario final.

### Lógica del Código

```javascript
const procesarItinerario = (instrucciones) => {
    let ruta = [];
    
    // 1. Procesar cada instrucción individualmente
    instrucciones.forEach(paso => {
        if (paso.accion === "volar") {
            ruta.push(`Viaje a ${paso.destino} por aire.`);
        } else if (paso.accion === "tren") {
            ruta.push(`Viaje a ${paso.destino} por tierra.`);
        } else {
            ruta.push(`Actividad: ${paso.destino}.`);
        }
    });

    // 2. Retornar resumen del itinerario construido
    return {
        itinerario_final: ruta,
        total_paradas: ruta.length
    };
};

```

### Salida Esperada

```json
{
  "itinerario_final": [
    "Viaje a Paris por aire.",
    "Viaje a Berlin por tierra.",
    "Actividad: Museo."
  ],
  "total_paradas": 3
}
{
  "itinerario_final": [],
  "total_paradas": 0
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-070/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco