# Lógica general 053 - Resolución de problemas 

## Análisis

### Entrada

```javascript
const saltosDeParacaidismo = [
    {id:1, participante:"Carlos", altura:4200, viento:18, equipo:"aprobado"},
    {id:2, participante:"Ana", altura:3800, viento:28, equipo:"aprobado"},
    {id:3, participante:"Luis", altura:4500, viento:35, equipo:"revisión"},
    {id:4, participante:"Sofía", altura:4000, viento:20, equipo:"aprobado"}
];
```

### Proceso

```text
1. Validar que existan registros.
2. Recorrer el arreglo.
3. Calcular el índice de seguridad.
4. Evaluar las condiciones del viento y el equipo.
5. Mostrar el resultado.
6. Contar los saltos seguros.
```

### Salida

```text
Participante.
Índice de seguridad.
Estado del salto.
Cantidad de saltos seguros.
```

## Reglas identificadas

```text
- El arreglo no debe estar vacío.
- El equipo debe estar aprobado.
- El viento debe ser menor o igual a 20 km/h para que el salto sea seguro.
- El índice de seguridad debe ser mayor o igual a 3000.
- Si el viento es mayor de 20 y menor o igual a 30, el salto requiere revisión.
- Si el equipo no está aprobado o el viento supera los 30 km/h, el salto no debe realizarse.
```

## Pruebas

### Caso normal

#### Entrada

```javascript
evaluarSaltos(saltosDeParacaidismo);
```

#### Resultado esperado

```text
Carlos: Salto seguro.
Ana: Requiere revisión.
Luis: No debe realizar el salto.
Sofía: Salto seguro.

Total de saltos seguros: 2
```

### Caso borde

#### Entrada

```javascript
evaluarSaltos([]);
```

#### Resultado esperado

```text
No hay saltos para evaluar.
```

## Explicación final

```text
La solución valida que existan datos y recorre el arreglo de participantes. Para cada registro calcula un índice de seguridad usando la altura y la velocidad del viento. Luego compara el estado del equipo, el viento y el índice de seguridad para decidir si el salto es seguro, requiere revisión o no debe realizarse. Al final muestra cuántos saltos fueron considerados seguros.
```