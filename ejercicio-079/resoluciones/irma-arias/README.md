# Ejercicio 079: Fórmulas químicas - Inventarios lógicos

## ¿Cómo pensé el problema?
Siguiendo los lineamientos del nivel intermedio aplicado, estructuré la solución dividiéndola en funciones modulares. Una función valida la integridad general del listado de inventario, otra analiza de forma individual cada reactivo químico comparando su cantidad disponible frente al stock mínimo de seguridad, y la función principal acumula las alertas para entregar un informe estructurado.

## Reglas aplicadas
1. **Validación inicial:** Asegurar que el registro de inventario de compuestos contenga elementos antes de iniciar el ciclo.
2. **Control de umbrales:** Identificar como estado crítico aquellos reactivos cuyas existencias actuales se encuentren por debajo o igual al stock mínimo permitido para la seguridad del laboratorio.
3. **Acumulación de reportes:** Generar un resumen detallado con el déficit exacto de los materiales que requieren reabastecimiento urgente.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-079/resoluciones/irma-arias/irma-arias.js