
# Ejercicio 030: Gestión de Viajes y Turismo

## Pensamiento Lógico
El problema se resolvió utilizando una estructura de control condicional (`if-else if`) que mapea el nivel de urgencia con el servicio correspondiente. Se añadió una validación para asegurar que, si el servicio prioritario solicitado no existe en la lista del usuario, el sistema tome el primer elemento disponible por defecto.

## Reglas Aplicadas
1. **Seguridad (Urgencia Alta)**: Prioridad máxima al seguro.
2. **Logística (Urgencia Media)**: Prioridad al vuelo.
3. **Comodidad (Urgencia Baja)**: Prioridad al hotel.

## Casos de Prueba
- **Normal**: Urgencia alta con seguro en la lista. Resultado: Gestión de seguro.
- **Caso Borde**: Lista vacía. Resultado: Error reportado.
- **Caso Alternativo**: Urgencia alta sin seguro en la lista. Resultado: Gestión del primer elemento disponible (ej: vuelo).