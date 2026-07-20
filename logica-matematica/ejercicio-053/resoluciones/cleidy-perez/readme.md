# Lógica general 053 - Coordenadas y distancia

## Análisis

### Entrada

```javascript
const saltosDeParacaidismo = [
    {
        id:1,
        participante:"Carlos",
        altura:4200,
        viento:18,
        equipo:"aprobado",
        avion:{x:10,y:20},
        aterrizaje:{x:30,y:45}
    },
    {
        id:2,
        participante:"Ana",
        altura:3800,
        viento:28,
        equipo:"aprobado",
        avion:{x:5,y:10},
        aterrizaje:{x:20,y:18}
    },
    {
        id:3,
        participante:"Luis",
        altura:4500,
        viento:35,
        equipo:"revisión",
        avion:{x:12,y:8},
        aterrizaje:{x:18,y:40}
    },
    {
        id:4,
        participante:"Sofía",
        altura:4000,
        viento:20,
        equipo:"aprobado",
        avion:{x:7,y:15},
        aterrizaje:{x:15,y:25}
    }
];
```

### Proceso

```text
1. Validar que existan registros.
2. Recorrer el arreglo.
3. Calcular la diferencia entre las coordenadas.
4. Calcular la distancia usando la fórmula de distancia.
5. Comparar la distancia y el estado del equipo.
6. Mostrar el resultado.
7. Contar las rutas seguras.
```

### Salida

```text
Nombre del participante.
Distancia entre el avión y el punto de aterrizaje.
Estado de la ruta.
Cantidad de rutas seguras.
```

## Reglas identificadas

```text
- El arreglo no debe estar vacío.
- La distancia se calcula con la fórmula:
  √((x2-x1)² + (y2-y1)²).
- Si la distancia es menor o igual a 30 km y el equipo está aprobado, la ruta es segura.
- Si la distancia es mayor de 30 km y menor o igual a 40 km, la ruta requiere precaución.
- Si la distancia es mayor a 40 km, la ruta no es recomendada.
```

## Pruebas

### Caso normal

#### Entrada

```javascript
calcularDistancia(saltosDeParacaidismo);
```

#### Resultado esperado

```text
Carlos
Distancia: 32.02 km
Ruta con precaución.

Ana
Distancia: 17.00 km
Ruta segura.

Luis
Distancia: 32.56 km
Ruta con precaución.

Sofía
Distancia: 12.81 km
Ruta segura.

Saltos seguros: 2
```

### Caso borde

#### Entrada

```javascript
calcularDistancia([]);
```

#### Resultado esperado

```text
No hay registros para calcular la distancia.
```

## Explicación final

```text
La solución valida que existan registros y recorre el arreglo de participantes. Para cada uno calcula la distancia entre las coordenadas del avión y el punto de aterrizaje utilizando la fórmula de distancia. Después compara la distancia y el estado del equipo para determinar si la ruta es segura, requiere precaución o no es recomendada. Finalmente muestra el resultado y la cantidad de rutas seguras.