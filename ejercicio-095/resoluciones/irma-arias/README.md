# Ejercicio 095: Dibujo digital - Reglas de negocio

## ¿Cómo pensé el problema?
Tratándose de un reto integrador controlado de nivel difícil, diseñé la arquitectura dividiendo el problema en funciones modulares. Primero, una función valida la integridad estructural de los datos del encargo. Segundo, otra función aplica de manera secuencial las reglas comerciales del estudio (verificación de resolución mínima de 300 DPI, cálculo de tarifas por hora, recargo por uso comercial y tarifas por entrega urgente).

## Reglas aplicadas
1. **Validación estructural:** Asegurar que el objeto de entrada contenga un nombre de cliente válido y no esté vacío.
2. **Control de calidad técnica:** Rechazar el encargo si la resolución del lienzo no cumple con el estándar profesional de 300 DPI.
3. **Cálculo comercial y de plazos:** Aplicar incrementos porcentuales justos según los requerimientos de licencia y urgencia solicitados.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-095/resoluciones/irma-arias/irma-arias.js