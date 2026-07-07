
# Ejercicio 015: Reglas de Negocio - Dibujo Digital

## Pensamiento del problema
Para resolver este caso, identifiqué que el flujo no depende de un solo estado, sino de **propiedades cuantitativas** (capas) y **cualitativas** (estado). La lógica está estructurada de mayor a menor criticidad.

## Reglas aplicadas
1. **Prioridad de Bloqueo:** Si el sistema marca el archivo como 'bloqueado', se detiene de inmediato.
2. **Validación de Capas:** - < 3 capas: Incompleto.
   - > 50 capas: Requiere optimización por rendimiento.
3. **Flujo normal:** Si no se cumplen las condiciones anteriores, el dibujo es apto para exportar.

## Cómo ejecutar
Ejecuta el archivo en tu terminal con:
node nombre-apellido.js

## Casos de prueba
- **Caso Normal:** Dibujo de 10 capas -> "Exportar".
- **Caso Borde (Bajo):** Dibujo de 1 capa -> "Revisar".
- **Caso Borde (Alto):** Dibujo de 60 capas -> "Optimizar".