# Lógica general 054 - Diagnostico de errores


## Estructura del Objeto Moto

Cada elemento dentro del inventario debe cumplir con la siguiente estructura de datos:

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | Number | Identificador único de la motocicleta. |
| `marca` | String | Marca del fabricante (ej. Honda, Yamaha). |
| `modelo` | String | Línea o modelo de la moto. No puede estar vacío. |
| `anio` | Number | Año de fabricación (Rango válido: 1900 - Año Actual). |
| `kilometraje` | Number | Distancia recorrida. No puede ser un valor negativo. |
| `estado` | String | Estado actual del vehículo (`"segura"` o `"Falla eléctrica"`). |

## Reglas de Diagnóstico (Validaciones)

El script evalúa de forma automática las siguientes condiciones de error:

1. **Datos Faltantes:** Identifica si los campos de `marca` o `modelo` se encuentran vacíos o contienen sólo espacios en blanco.
2. **Kilometraje Negativo:** Filtra registros donde el kilometraje sea menor a 0.
3. **Anacronismo de Fechas:** Reporta motos cuyo año de fabricación sea menor a 1900 o superior al año en curso.
4. **Falsos Positivos de Seguridad:** Detecta si una moto está etiquetada bajo el estado `"segura"` pero simultáneamente viola alguna de las reglas numéricas o de texto anteriores.
5. **Alertas Mecánicas:** Clasifica directamente a las motos que tengan un estado explícito de `"Falla eléctrica"`.