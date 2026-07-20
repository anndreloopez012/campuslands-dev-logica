# Ejercicio de Lógica 057 - Temática Arquitectura 3D

**Camper:** Antonio Canux

## Análisis

- Entrada: 
  - `entorno`: Cadena de texto que indica el lugar del modelo 3D ("interior" o "exterior").
  - `momentoDia`: Cadena de texto que indica la hora simulada ("dia" o "noche").
- Proceso: El sistema unifica ambas entradas en una sola "clave" concatenada. Luego, utiliza esta clave para buscar directamente en un diccionario (tabla de decisiones) cuál es la configuración exacta que le corresponde a esa combinación de factores. Si la clave no se encuentra en el diccionario, se rechaza la solicitud.
- Salida: Un objeto que indica el `estado` de la operación, un `mensaje` descriptivo del perfil aplicado y los `parametros` técnicos para el motor de renderizado (estado de luces y cantidad de rebotes).

## Reglas identificadas

1. Interiores de día: Se apagan luces artificiales y se calculan rebotes medios (4) para simular luz por ventanas.
2. Interiores de noche: Se encienden luces artificiales y se bajan los rebotes (2).
3. Exteriores de día: Requieren el máximo cálculo de iluminación global (6 rebotes) con luces apagadas.
4. Exteriores de noche: Utilizan luces artificiales ambientales y los rebotes de luz mínimos (1).
5. Regla de integridad: Si se ingresa un entorno o momento no registrado, la tabla debe denegar la configuración en lugar de procesar valores por defecto.

## Pruebas

### Caso normal

Entrada:
```javascript
entorno: "interior"
momentoDia: "dia"
```

Resultado esperado:
```javascript
{
  estado: 'configurado',
  mensaje: 'Configuración aplicada exitosamente para el perfil: Luz natural optimizada por ventanas.',
  parametros: { lucesArtificiales: false, rebotesLuz: 4 }
}
```

### Caso borde
Entrada (El usuario intenta renderizar un momento del día no programado en la matriz de decisión):
```javascript
entorno: "fachada"
momentoDia: "tarde"
```

Resultado esperado:
```javascript
{
  estado: 'error',
  mensaje: "La combinación 'fachada' y 'tarde' no existe en la tabla de decisiones.",
  parametros: null
}
```

## Explicacion final 
La solución es altamente escalable gracias al uso de un objeto como tabla de decisión. Si se utilizaran estructuras tradicionales de if y else, tendríamos que anidar condiciones (ej. if (entorno === "interior") { if (momento === "dia") {...} }), lo que haría el código difícil de leer a medida que se agreguen más combinaciones (como "atardecer" o "sotano"). Al concatenar las entradas en una sola clave y buscarla en un objeto, obtenemos la respuesta de manera directa, lo que se conoce computacionalmente como una complejidad de tiempo $O(1)$. Además, centraliza las reglas en una sola estructura visualmente ordenada.