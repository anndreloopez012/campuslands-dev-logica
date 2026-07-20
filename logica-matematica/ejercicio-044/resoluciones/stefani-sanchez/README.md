# Ejercicio 044 - Rangos y máximos

## ¿Cómo pensé el problema?

Primero identifiqué las entradas del problema:

- Lista de motos con su modelo y precio.
- Rango mínimo permitido.
- Rango máximo permitido.

Después recorrí el inventario para encontrar la moto con mayor precio y también identificar cuáles motos se encuentran dentro del rango establecido.

## Reglas aplicadas

1. Validar que el inventario no esté vacío.
2. Recorrer todas las motos.
3. Comparar precios para encontrar el máximo.
4. Revisar cuáles motos pertenecen al rango indicado.
5. Mostrar la cantidad de motos encontradas.

## Cómo ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Prueba normal

**Entrada**

```text
motos:
Moto A = 5000
Moto B = 8500
Moto C = 12000
Moto D = 3000

rango:
4000 - 10000
```

**Resultado**

```text
moto_maxima: Moto C
precio_maximo: 12000
cantidad_en_rango: 2
```

### Caso borde

**Entrada**

```text
motos = []
```

**Resultado**

```text
El inventario está vacío.
```

## Conclusión

La solución utiliza:

- Arreglos.
- Objetos.
- Funciones.
- Ciclos.
- Condicionales.
- Comparaciones.
- Validación de datos.

Cumple con los requisitos del ejercicio de rangos y máximos.