# Gestor de Workflow de Dibujo Digital

## Análisis
- **Entrada:** Lista de proyectos y tipo de jornada.
- **Proceso:** Filtrado de estados y ordenamiento según urgencia.
- **Salida:** Proyecto recomendado y justificación.

## Reglas
1. Producción: No tocar bloqueados.
2. Revisión: Priorizar bloqueados.
3. Prioridad: Alta urgencia siempre va primero.

## Instrucciones
Ejecuta el script con `node nombre-apellido.js`.

## Explicación final
El problema se resuelve separando la lógica de filtrado (reglas del día) de la lógica de ordenamiento (prioridades). Esto permite cambiar las reglas de negocio sin afectar la estructura principal del programa.