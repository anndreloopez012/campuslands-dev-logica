# Logica matematica 062 - sistema de cálculo de efectividad deportiva

## Motor de Análisis de Rendimiento Competitivo

Este script calcula el porcentaje de efectividad de un equipo deportivo basándose en el sistema de puntos tradicional (3 por victoria, 1 por empate, 0 por derrota). El resultado permite clasificar al equipo en categorías de rendimiento según su desempeño en la temporada.

* **Descripción del proceso:**
* **Cálculo de Puntos**: Suma los puntos obtenidos (`ganados * 3 + empatados * 1`) y los compara con el máximo posible (`totalJugados * 3`).
* **Cálculo de Efectividad**: Determina el rendimiento mediante la fórmula:

$$\text{Efectividad} = \left( \frac{\text{Puntos Obtenidos}}{\text{Puntos Posibles}} \right) \times 100$$


* **Clasificación**: Asigna una etiqueta de rendimiento:
* **Élite**: $\ge 80\%$
* **Competitivo**: $\ge 50\%$
* **En desarrollo**: $< 50\%$


* **Reporte**: Genera un objeto con el porcentaje formateado, la categoría asignada y una explicación del rendimiento alcanzado.


* **Tecnologías:**
* JavaScript (cálculos aritméticos, formateo de cadenas, lógica condicional).



---

### Explicación técnica

1. **Gestión de Casos Nulos**: Incluye una validación inicial (`totalJugados === 0`) para evitar errores de división por cero y manejar equipos sin registro histórico.
2. **Formateo de Datos**: Utiliza `.toFixed(2)` para normalizar el resultado porcentual a dos decimales, garantizando consistencia en la visualización de los reportes financieros o deportivos.

### Lógica del Código

```javascript
const calcularEfectividad = (equipo) => {
    // 1. Calcular total de juegos para evitar división por cero
    const totalJugados = equipo.ganados + equipo.empatados + equipo.perdidos;
    if (totalJugados === 0) return { efectividad: 0, clasificacion: "Sin datos" };

    // 2. Calcular rendimiento
    const puntosObtenidos = (equipo.ganados * 3) + (equipo.empatados * 1);
    const puntosPosibles = totalJugados * 3;
    const efectividad = (puntosObtenidos / puntosPosibles) * 100;

    // 3. Clasificar equipo
    let clasificacion = "En desarrollo";
    if (efectividad >= 80) clasificacion = "Élite";
    else if (efectividad >= 50) clasificacion = "Competitivo";

    return {
        efectividad_porcentual: efectividad.toFixed(2) + "%",
        clasificacion: clasificacion,
        explicacion: `Equipo ${equipo.nombre} obtuvo ${puntosObtenidos} de ${puntosPosibles} puntos posibles.`
    };
};

```

### Salida Esperada

```json
{
  "efectividad_porcentual": "77.78%",
  "clasificacion": "Competitivo",
  "explicacion": "Equipo Dragones obtuvo 7 de 9 puntos posibles."
}
{
  "efectividad_porcentual": "0.00%",
  "clasificacion": "En desarrollo",
  "explicacion": "Equipo Novatos obtuvo 0 de 9 puntos posibles."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-062/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco