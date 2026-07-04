# Resolución: Clasificación por Reglas (Videojuegos Competitivos)

## Análisis

* **Entrada:** Un objeto con una lista de estados (`items` como Array) y el nivel de urgencia (`prioridad` como String).
* **Proceso:** Validar que existan datos. Luego, verificar mediante condicionales si existen elementos críticos ("bloqueado" con prioridad alta), elementos secundarios ("pendiente") o tareas rutinarias ("aprobado").
* **Salida:** Un objeto con la `accion` a tomar y el `motivo` de la decisión.

### Reglas identificadas
1. Si no hay ítems, la acción es "Ninguna".
2. Riesgo Crítico: Si la prioridad es "alta" y hay algún ítem "bloqueado", se debe "Revisar" de inmediato.
3. Tareas Pendientes: Si hay ítems "pendiente", se pasa a revisar la cola de pendientes.
4. Por defecto: Si solo hay aprobados, se procede a revisar los aprobados.

---

## Pruebas

### Caso normal
* **Entrada:**
  ```json
  {
    "items": ["aprobado", "pendiente", "bloqueado"],
    "prioridad": "alta"
  }