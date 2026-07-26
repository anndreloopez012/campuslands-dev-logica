# Ejercicio 096: Animación 3D - Matrices simples

## ¿Cómo pensé el problema?
Tratándose de un reto integrador controlado de nivel difícil, diseñé una arquitectura modular dividiendo el problema en dos partes esenciales: una función robusta para validar la existencia, formato y consistencia bidimensional de la matriz (asegurando que ninguna fila esté vacía), y una función de recorrido mediante ciclos anidados para extraer métricas espaciales clave (promedios de coordenadas, límites máximos y mínimos).

## Reglas aplicadas
1. **Validación estructural de matrices:** Comprobar que el arreglo principal contenga filas válidas y que cada fila posea elementos numéricos integrales.
2. **Procesamiento de datos bidimensionales:** Recorrer de forma exhaustiva cada celda de la matriz para calcular acumuladores y estadísticas de los vértices o fotogramas.
3. **Gestión de excepciones:** Rechazar estructuras vacías o irregulares para evitar fallas en tiempo de ejecución.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-096/resoluciones/irma-arias/irma-arias.js