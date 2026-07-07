# Plantilla de solucion

## Analisis
- **Entrada:** `tienePasaporte` (boolean), `mesesVigencia` (number), `tieneVisa` (boolean).
- **Proceso:** Se revisan tres condiciones simples en orden. Si alguna falla, el proceso se detiene inmediatamente.
- **Salida:** Un mensaje de texto indicando si el turista puede viajar o cuál es el error específico.

## Reglas aplicadas
1. **Identificación:** Es obligatorio tener pasaporte.
2. **Vigencia:** El pasaporte debe tener al menos 6 meses de vigencia.
3. **Legalidad:** Se requiere visa para el viaje.

## Pruebas

### Caso normal
**Entrada:** `pasaporte: true`, `vigencia: 10`, `visa: true`
**Resultado esperado:** `"Abordaje aprobado."`

### Caso borde
**Entrada:** `pasaporte: true`, `vigencia: 3`, `visa: true`
**Resultado esperado:** `"No puede viajar: Pasaporte próximo a vencer."`

## Explicacion final
He pensado este problema como una fila de chequeo en el aeropuerto. Si una persona no tiene un documento, no pasa al siguiente filtro. He usado condicionales `if` sencillos para que sea fácil de entender y mantener.

## Sugerencia
Antes de programar, puedes ver el flujo como una lista de tareas:

| Tarea | Condición | Resultado |
| :--- | :--- | :--- |
| Revisar Pasaporte | `== false` | Rechazado |
| Revisar Vigencia | `< 6` | Rechazado |
| Revisar Visa | `== false` | Rechazado |