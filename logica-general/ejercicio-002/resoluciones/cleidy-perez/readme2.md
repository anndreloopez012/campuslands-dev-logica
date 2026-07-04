# Plantilla de Solución

## Análisis

**Entrada:**
* Un objeto `datos` que contiene:
  * `items`: Un arreglo (Array) de cadenas de texto que representan el estado de los elementos (ej. `"aprobado"`, `"pendiente"`, `"bloqueado"`).
  * `prioridad`: Una cadena de texto que define la urgencia (`"alta"`, `"media"`, `"baja"`).

**Proceso:**
1. **Validación Inicial:** Comprobar si el objeto `datos` o su propiedad `items` no existen, o si el arreglo `items` está vacío.
2. **Evaluación de Riesgo Alto:** Verificar si la `prioridad` es `"alta"` y simultáneamente la lista de `items` contiene el estado `"bloqueado"`.
3. **Evaluación de Pendientes:** Verificar si la lista de `items` contiene el estado `"pendiente"`.
4. **Resolución por Defecto:** Si no se cumple ninguna condición anterior, se asume un estado estable de monitoreo.

**Salida:**
* Un objeto con la estructura: `{ accion: string, motivo: string }`

**Reglas identificadas:**
* **Regla 1 (Vacío):** Si `items` no tiene elementos $\rightarrow$ Acción: `"ninguna"`.
* **Regla 2 (Bloqueo Crítico):** Prioridad `"alta"` + item `"bloqueado"` $\rightarrow$ Acción: `"revisar el bloqueo"`.
* **Regla 3 (Gestión de Espera):** Item `"pendiente"` presente $\rightarrow$ Acción: `"revisar el pendiente"`.
* **Regla 4 (General):** En cualquier otro caso $\rightarrow$ Acción: `"monitorear"`.

---

## Pruebas

### Caso normal

**Entrada:**
```javascript
const entradaPendientes = {
    items: ["aprobado", "pendiente"],
    prioridad: "media"
};