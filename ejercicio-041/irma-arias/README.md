
# Reto: Filtros por condiciones - Inventario de Motos

## Descripción del Problema
El objetivo de este reto es gestionar un inventario de motos aplicando filtros lógicos basados en el estado, el kilometraje y el presupuesto. La prioridad principal es identificar riesgos (motos bloqueadas) antes de procesar cualquier opción de compra para el usuario.

## Análisis y Lógica Aplicada
Para resolver este ejercicio, seguí los siguientes pasos:
1. **Identificación de Entradas:** Un arreglo de objetos con atributos `id`, `marca`, `estado`, `precio` y `km`.
2. **Definición de Reglas:**
   - **Prioridad Crítica:** Las motos con estado "bloqueado" se extraen primero, independientemente de otros factores, para su revisión.
   - **Filtro de Selección:** Para las motos disponibles, apliqué una validación doble: deben tener menos de 500 km y estar dentro del rango de `presupuestoMax` proporcionado.
3. **Manejo de Casos Especiales:** Se incluyó una validación para inventarios vacíos o cuando no existen coincidencias tras aplicar los filtros.

## Reglas de Negocio
- Ninguna moto bloqueada debe aparecer como "disponible".
- Si no se cumplen las condiciones de presupuesto o kilometraje, la lista de opciones disponibles retornará vacía, pero se mantendrá la coherencia en la estructura de datos.

## Cómo Revisar la Solución
1. Asegúrate de tener instalado [Node.js](https://nodejs.org/).
2. Ubícate en la carpeta del ejercicio.
3. Ejecuta el archivo en tu terminal:
   ```bash
   node nombre-apellido.js