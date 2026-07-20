# Logica general 064 - sistema de filtrado de inventario

## Motor de Filtrado Inteligente para Concesionario

Este script permite gestionar y consultar un inventario de motocicletas mediante un sistema de filtrado multicriterio. El objetivo es asistir al usuario en la búsqueda de modelos que se ajusten a sus preferencias personales, manteniendo la integridad de disponibilidad en tiempo real.

* **Descripción del proceso:**
* **Validación de Criterios (Filtro)**: Utiliza el método `.filter()` para evaluar tres condiciones simultáneas sobre cada motocicleta:
1. **Disponibilidad**: Solo se consideran unidades activas (`disponible: true`).
2. **Compatibilidad**: El `tipo` debe coincidir exactamente con la preferencia del usuario.
3. **Asequibilidad**: El `precio` debe ser menor o igual al `presupuestoMax` definido.


* **Gestión de Resultados**:
* Si el filtro no arroja resultados, retorna un estado de "no encontrado".
* Si existen coincidencias, extrae únicamente los nombres de los modelos (`.map()`) y genera un reporte positivo.




* **Tecnologías:**
* JavaScript (métodos de arreglos funcionales: `.filter()`, `.map()`).



---

### Explicación técnica

1. **Eficiencia en la Consulta**: El filtrado encadenado garantiza que la búsqueda se realice en una sola pasada sobre el inventario, optimizando el rendimiento.
2. **Transformación de Datos**: La separación entre el objeto completo de la moto y el retorno del modelo simplifica la salida de datos para el cliente final, devolviendo solo la información necesaria.

### Lógica del Código

```javascript
const filtrarMotos = (inventario, preferencias) => {
    // 1. Filtrar inventario según reglas de negocio
    const resultados = inventario.filter(moto => 
        moto.disponible && 
        moto.tipo === preferencias.tipoDeseado && 
        moto.precio <= preferencias.presupuestoMax
    );

    // 2. Gestionar la ausencia de resultados
    if (resultados.length === 0) {
        return { encontrado: false, mensaje: "No hay motos que cumplan con tus criterios." };
    }

    // 3. Retornar modelos encontrados
    return { 
        encontrado: true, 
        modelos: resultados.map(m => m.modelo),
        motivo: "Se filtraron los resultados por disponibilidad, tipo y presupuesto."
    };
};

```

### Salida Esperada

```json
{
  "encontrado": true,
  "modelos": ["Urban-Basic"],
  "motivo": "Se filtraron los resultados por disponibilidad, tipo y presupuesto."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-064/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco