
# Resolución: Ejercicio 006.2 - Búsqueda de elementos (Autos Hiperdeportivos)

## Pensamiento lógico
He utilizado la técnica de **normalización de entrada**. Al convertir tanto la búsqueda como los datos almacenados a minúsculas, garantizo que el sistema sea robusto ante errores humanos de escritura (ej: escribir "BUGATTI" cuando el sistema tiene guardado "Bugatti").

## Reglas aplicadas
1. **Normalización:** Homologación de texto mediante conversión a minúsculas.
2. **Búsqueda secuencial:** Recorrido simple que permite devolver resultados instantáneamente al encontrar una coincidencia.
3. **Manejo de estados:** Retorno de un mensaje de error explícito si el ciclo termina sin encontrar coincidencias.

## Cómo ejecutar/revisar
El algoritmo es lineal. Al ingresar un nombre, este recorrerá el catálogo comparando cada modelo. Si el nombre coincide, se retorna el objeto completo del auto.

## Casos probados
1. **Caso Normal:** Buscar "Bugatti Chiron" (escribiendo "bugatti chiron"). Resultado: Datos del auto.
2. **Caso Borde:** Buscar un auto inexistente (ej: "Tesla"). Resultado: "Error: El auto no existe".