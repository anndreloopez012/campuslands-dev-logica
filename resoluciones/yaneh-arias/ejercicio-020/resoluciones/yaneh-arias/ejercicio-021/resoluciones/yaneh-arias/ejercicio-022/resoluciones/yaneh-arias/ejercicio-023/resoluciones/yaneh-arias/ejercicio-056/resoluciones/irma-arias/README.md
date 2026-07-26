# Ejercicio 056: Animación 3D - Presupuestos y descuentos

## ¿Cómo pensé el problema?
Para resolver este reto de nivel difícil enfocado en presupuestos y descuentos dentro del contexto de animación 3D, estructuré la solución de manera modular. Primero implementé un validador estricto para comprobar que los valores económicos y las cantidades de licencias fueran positivos. Luego, apliqué una lógica de descuentos escalonados basada en tramos de volumen (equipos pequeños, medianos y grandes estudios) para calcular el subtotal, el valor descontado y el total final a pagar.

## Reglas aplicadas
1. **Validación de entradas financieras:** Asegurar que tanto el costo unitario como la cantidad sean estrictamente mayores a cero.
2. **Descuento por volumen:** Otorgar porcentajes de rebaja progresivos (0%, 10%, 15% o 25%) dependiendo de cuántas licencias de software o render se adquieran.
3. **Cálculo de totales:** Restar el monto del descuento al subtotal bruto para obtener la cifra final verificable.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-056/resoluciones/irma-arias/irma-arias.js