# Ejercicio 044 - Inventario de Motos

**Camper:** Antonio Canux

## Analisis

- Entrada: Un arreglo de objetos (`inventario`), donde cada objeto representa una motocicleta con propiedades como `marca`, `modelo`, `cilindraje` y `precio`.
- Proceso: Se recorre la lista de motocicletas. Por cada unidad, se evalúa su cilindraje para clasificarla en un rango específico (baja, media, alta) incrementando el contador correspondiente. Simultáneamente, se compara el precio de la moto actual con el precio máximo registrado hasta el momento, actualizando la referencia si se encuentra una más cara.
- Salida: Un objeto de reporte que contiene el total de motos procesadas, la distribución por rangos de cilindraje y los datos de la motocicleta con el precio más alto.

## Reglas identificadas

1. **Rangos de clasificación:** Las motocicletas se dividen por su motor: "baja" (menos de 250cc), "media" (entre 250cc y 600cc inclusive) y "alta" (estrictamente mayor a 600cc).
2. **Búsqueda del máximo:** Se asume inicialmente que la primera motocicleta es la más cara. En cada iteración, si el precio de la moto evaluada supera al máximo actual, esta pasa a ser la nueva referencia.
3. **Eficiencia:** Ambas tareas (clasificación en rangos y búsqueda del máximo) se deben realizar dentro de un único ciclo de iteración para optimizar el rendimiento.

## Pruebas

### Caso normal

Entrada: 
```text
[
    { marca: "Honda", modelo: "Navi", cilindraje: 110, precio: 1500 },
    { marca: "Honda", modelo: "CBR500R", cilindraje: 471, precio: 7000 },
    { marca: "BMW", modelo: "S 1000 RR", cilindraje: 999, precio: 20000 },
    { marca: "Yamaha", modelo: "MT-03", cilindraje: 321, precio: 5500 }
]
```

Resultado esperado:

```text
total_motos: 4
clasificacion_cc: { baja: 1, media: 2, alta: 1 }
unidad_top: { marca: "BMW", modelo: "S 1000 RR", precio_maximo: 20000 }
```

### Caso borde
Entrada:

```text
[
    { marca: "Suzuki", modelo: "AX100", cilindraje: 100, precio: 1000 },
    { marca: "Bajaj", modelo: "Boxer 150", cilindraje: 150, precio: 1200 }
]
```

Resultado esperado:

```text
total_motos: 2
clasificacion_cc: { baja: 2, media: 0, alta: 0 }
unidad_top: { marca: "Bajaj", modelo: "Boxer 150", precio_maximo: 1200 }
```

## Explicacion final
Esta solución funciona porque utiliza el patrón de diseño de acumuladores y rastreo de máximos dentro de un ciclo forEach. En lugar de hacer múltiples recorridos (uno para contar rangos y otro para buscar la moto más cara, o depender de métodos como Math.max que requerirían extraer primero los precios), la lógica resuelve todo en una sola lectura secuencial del inventario. Esto garantiza que el código sea predecible, escalable y mantenga un orden lógico similar a como se haría un inventario físico en un taller.