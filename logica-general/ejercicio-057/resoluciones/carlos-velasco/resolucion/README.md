Aquí tienes la plantilla de solución para el sistema de diagnóstico de renderizado, completada con la información del README generado:

# Plantilla de solucion

## Analisis

* **Entrada**: Un string `material` (ej. "Metal", "Vidrio", "Madera") y un string `iluminacion` (ej. "Alta", "Media", "Baja").
* **Proceso**: Evaluación mediante una regla especial de excepción (Madera) y una tabla de búsqueda (mapeo) para materiales complejos, incluyendo validación de seguridad para combinaciones no reconocidas.
* **Salida**: Un objeto que contiene la `accion` (tipo de renderizado o error) y un `motivo` explicativo.

## Reglas identificadas

1. La "Madera" tiene un comportamiento universal y siempre retorna "Renderizado Natural" independientemente de la iluminación.
2. "Metal" y "Vidrio" requieren configuraciones específicas basadas en el nivel de iluminación consultado en la tabla de decisión.
3. Si la combinación de material e iluminación no existe en la tabla de mapeo, el sistema debe reportar un "Error" controlado.

## Pruebas

### Caso normal

* **Entrada**: `"Metal", "Alta"`
* **Resultado esperado**: `{ accion: "Renderizado Épico", motivo: "Configuración aplicada para Metal con luz Alta." }`

### Caso borde

* **Entrada**: `"Plástico", "Media"`
* **Resultado esperado**: `{ accion: "Error", motivo: "Combinación de material/luz no reconocida." }`

## Explicacion final

La solución funciona mediante una estrategia de búsqueda eficiente. Al usar una estructura de datos tipo tabla (objeto) en lugar de múltiples condicionales `if-else`, el código se vuelve más limpio y fácil de mantener. El uso del encadenamiento opcional `?.` permite manejar de forma segura las consultas a la tabla, garantizando que el programa siempre devuelva una respuesta clara para el usuario, incluso cuando se introducen materiales o niveles de luz no contemplados originalmente.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de excepción**: `material === "Madera"`
* **Condición de búsqueda**: `tabla[material]?.[iluminacion]`
* **Condición de error**: `resultado === undefined` (manejado mediante el operador ternario)