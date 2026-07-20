# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `inventario` (objetos con detalles del auto) y un objeto `criterio` (marca deseada y velocidad mínima).
* **Proceso**: Primero, se filtra el inventario para obtener candidatos que coincidan con la marca y superen la velocidad mínima. Si hay resultados, se aplica un proceso de reducción (`reduce`) para encontrar el auto más exclusivo (menor cantidad de unidades producidas).
* **Salida**: Un objeto que indica la `accion` a seguir, el `modelo_encontrado` y el `motivo` detallado de la elección.

## Reglas identificadas

1. **Filtrado Sensible**: La búsqueda debe ignorar mayúsculas/minúsculas y cumplir estrictamente con la marca y la velocidad mínima solicitada.
2. **Validación de Existencia**: Si no hay candidatos, el sistema debe notificar que no se encontraron resultados.
3. **Regla de Exclusividad**: Ante múltiples candidatos, el ganador es aquel con el valor numérico más bajo en `unidadesProducidas`.

## Pruebas

### Caso normal

* **Entrada**: `garajeGiga, { marcaDeseada: "Bugatti", velocidadMinima: 400 }`
* **Resultado esperado**: `{ accion: "Asignar vehículo al cliente", modelo_encontrado: "Bugatti Bolide", motivo: "Cumple con la velocidad de 501 km/h y es el espécimen más exclusivo con solo 40 unidades." }`

### Caso borde

* **Entrada**: `garajeGiga, { marcaDeseada: "Ferrari", velocidadMinima: 500 }`
* **Resultado esperado**: `{ accion: "Continuar búsqueda", modelo_encontrado: "Ninguno", motivo: "No se encontraron autos de la marca Ferrari que alcancen los 500 km/h." }`

## Explicacion final

La solución es altamente efectiva porque divide el problema en dos etapas lógicas: filtrado y selección por optimización. Al usar `filter` primero, reducimos el conjunto de trabajo, y con `reduce` encontramos el valor mínimo de exclusividad de forma lineal, lo que hace que el código sea performante incluso si el inventario crece significativamente. El uso de `toLowerCase()` garantiza una experiencia de usuario robusta, evitando errores comunes de escritura.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Filtro de marca**: `auto.marca.toLowerCase() === marcaDeseada.toLowerCase()`
* **Filtro de velocidad**: `auto.velocidadMax >= velocidadMinima`
* **Criterio de desempate**: `actual.unidadesProducidas < exclusivo.unidadesProducidas`