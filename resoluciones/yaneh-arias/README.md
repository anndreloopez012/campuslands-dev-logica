
# Ejercicio 009: Módulos y divisibilidad en películas de miedo

## Pensamiento del problema
Utilizo el operador de módulo (`%`) para resolver problemas de repartición. Si el residuo de la división es 0, significa que el conjunto de películas puede dividirse equitativamente entre los grupos de espectadores.

## Reglas aplicadas
1. **Módulo:** Se calcula `totalPeliculas % grupos`.
2. **Validación:** Si el resultado es 0, la divisibilidad es exacta.

## Cómo ejecutar
Ejecuta: `node yaneh-arias.js`

## Casos de prueba
- **Normal:** `20 películas / 4 grupos` -> Residuos 0 (Distribución perfecta).
- **Caso Borde:** `21 películas / 4 grupos` -> Residuos 1 (Sobran películas).