# Lógica general 055 - Velocidad, tiempo y distancia

## Análisis

### Entrada

```javascript
Arreglo de dibujos con velocidad y tiempo.
```

### Proceso

```text
1. Validar que existan dibujos.
2. Recorrer el arreglo.
3. Calcular la distancia usando:
   distancia = velocidad × tiempo.
4. Verificar si la entrega fue completada.
5. Contar las entregas completadas.
```

### Salida

```text
Nombre del dibujo.
Distancia recorrida.
Estado de la entrega.
Cantidad de entregas completadas.
```

## Reglas identificadas

```text
- El arreglo no debe estar vacío.
- La distancia se calcula multiplicando la velocidad por el tiempo.
- Si la distancia es mayor o igual a 150 km, la entrega está completada.
- Si la distancia es menor a 150 km, la entrega queda pendiente.
```

## Pruebas

### Caso normal

#### Entrada

```javascript
calcularDistancia(misDibujosDigitales);
```

#### Resultado esperado

```text
Paisaje de la playa
Distancia: 160 km
Entrega completada.

Logotipo para negocio
Distancia: 180 km
Entrega completada.

Boceto de mi gato
Distancia: 70 km
Entrega pendiente.

Retrato familiar
Distancia: 360 km
Entrega completada.

Anuncio de internet
Distancia: 100 km
Entrega pendiente.

Total de entregas completadas: 3
```

### Caso borde

#### Entrada

```javascript
calcularDistancia([]);
```

#### Resultado esperado

```text
No hay dibujos registrados.
```

## Explicación final

```text
La solución verifica que existan dibujos registrados y recorre el arreglo. Para cada dibujo calcula la distancia multiplicando la velocidad por el tiempo. Después compara la distancia con el valor mínimo establecido para determinar si la entrega fue completada o sigue pendiente. Finalmente muestra el resultado y el total de entregas completadas.
```