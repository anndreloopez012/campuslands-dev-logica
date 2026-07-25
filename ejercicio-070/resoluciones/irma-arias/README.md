# Ejercicio 070: Viajes y Turismo - Lectura de instrucciones

## ¿Cómo pensé el problema?
Analicé que interpretar instrucciones de un proceso turístico requiere examinar detalladamente las condiciones del itinerario frente a los requisitos legales del viajero (como pasaportes, visados y vigencias) antes de emitir un veredicto de aprobación.

## Reglas aplicadas
1. **Validación inicial:** Verificar que la información del itinerario y del pasajero no sea nula para prevenir fallas de ejecución.
2. **Verificación internacional:** Comprobar si el destino exige pasaporte con un tiempo mínimo de vigencia.
3. **Control de visado:** Bloquear el viaje si el destino requiere visa y el usuario carece de ella.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-070/resoluciones/irma-arias/irma-arias.js