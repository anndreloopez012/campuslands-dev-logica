# Ejercicio de Lógica 051: Temática Kickboxing

**Camper:** Antonio Canux

## Análisis

- **Entrada:** Un arreglo de cadenas de texto (`items`) que representan los estados de los practicantes de kickboxing (ej. "apto", "pesaje_pendiente", "lesionado"), un nivel de `prioridad` y una `regla` de negocio en formato de texto.
- **Proceso:** Mapear cada estado a un valor numérico para poder ordenar el arreglo de mayor a menor urgencia. Luego, evaluar el primer elemento de la lista ordenada a través de una estructura condicional para determinar qué acción tomar.
- **Salida:** Un objeto que contiene la `accion` a realizar, el `motivo` que justifica esa decisión y la `lista_ordenada` para visibilidad del proceso completo.

## Reglas identificadas

1. Los practicantes con estado "lesionado" representan un riesgo y deben ser atendidos antes que cualquier otra tarea.
2. El estado "pesaje_pendiente" es un bloqueo administrativo, por lo que va después de las urgencias médicas pero antes de los combates.
3. Los practicantes con estado "apto" ya cumplieron todos los requisitos y tienen la prioridad de atención más baja en la sala de espera.

## Pruebas

### Caso normal

Entrada:
```javascript
items: ["apto", "pesaje_pendiente", "lesionado"]
prioridad: "alta"
regla: "revisar lesionados primero"
```

Resultado esperado:

```javascript
{
  accion: 'revisar lesionado',
  motivo: 'la regla prioriza riesgos médicos antes que trámites normales.',
  lista_ordenada: [ 'lesionado', 'pesaje_pendiente', 'apto' ]
}
```

### Caso borde
Entrada (Lista donde todos están listos para pelear):

```javascript
items: ["apto", "apto", "apto"]
prioridad: "baja"
regla: "revisar lesionados primero"
```

Resultado esperado:

```javascript
{
  accion: 'enviar al ring',
  motivo: 'todos los peleadores están aptos y listos para competir.',
  lista_ordenada: [ 'apto', 'apto', 'apto' ]
}
```

## Explicación final
La solución funciona porque no depende de múltiples sentencias if/else anidadas para buscar elementos específicos, lo cual sería difícil de escalar. En su lugar, utiliza una estructura de datos (un mapa/diccionario de prioridades) que asigna un peso numérico a cada estado. Al usar el método .sort() de JavaScript, la lista se organiza automáticamente garantizando que el elemento en el índice [0] siempre será el que requiera nuestra atención inmediata. Las condicionales finales solo se encargan de traducir ese estado prioritario a una acción legible para el usuario.