# Lógica general 055 - Reglas del negocio

## Análisis

### Entrada

```javascript
const misDibujosDigitales = [
    {id:1, nombreDelDibujo:"Paisaje de la playa", ancho:1920, alto:1080, cantidadDeCapas:5, paraDondeEs:"Pantalla", tipoDeArchivo:"Imagen normal"},
    {id:2, nombreDelDibujo:"Logotipo para negocio", ancho:500, alto:500, cantidadDeCapas:1, paraDondeEs:"Imprimir en papel", tipoDeArchivo:"Editable de diseño"},
    {id:3, nombreDelDibujo:"Boceto de mi gato", ancho:0, alto:800, cantidadDeCapas:2, paraDondeEs:"Pantalla", tipoDeArchivo:"Imagen normal"},
    {id:4, nombreDelDibujo:"Retrato familiar", ancho:2000, alto:2000, cantidadDeCapas:200, paraDondeEs:"Pantalla", tipoDeArchivo:"Imagen normal"},
    {id:5, nombreDelDibujo:"Anuncio de internet", ancho:800, alto:600, cantidadDeCapas:3, paraDondeEs:"Imprimir en papel", tipoDeArchivo:"Imagen de WhatsApp/Web"}
];
```

### Proceso

```text
1. Validar que existan dibujos registrados.
2. Recorrer el arreglo.
3. Verificar que el ancho y el alto sean mayores que cero.
4. Calcular la resolución.
5. Aplicar las reglas del negocio según el destino y el tipo de archivo.
6. Contar los dibujos aprobados.
```

### Salida

```text
Nombre del dibujo.
Resolución.
Estado de aprobación.
Cantidad de dibujos aprobados.
```

## Reglas identificadas

```text
- El arreglo no debe estar vacío.
- El ancho y el alto deben ser mayores que cero.
- La resolución se calcula multiplicando el ancho por el alto.
- Si el dibujo es para pantalla, debe tener una resolución de al menos 1,000,000 de píxeles y un máximo de 50 capas.
- Si el dibujo es para imprimir en papel, debe ser un archivo editable de diseño.
- Si no cumple las condiciones anteriores, el dibujo no es aprobado.
```

## Pruebas

### Caso normal

#### Entrada

```javascript
validarDibujos(misDibujosDigitales);
```

#### Resultado esperado

```text
Paisaje de la playa
Resolución: 2073600 píxeles
Aprobado para pantalla.

Logotipo para negocio
Resolución: 250000 píxeles
Aprobado para impresión.

Boceto de mi gato
Dimensiones inválidas.

Retrato familiar
Resolución: 4000000 píxeles
No cumple las reglas del negocio.

Anuncio de internet
Resolución: 480000 píxeles
No cumple las reglas del negocio.

Total de dibujos aprobados: 2
```

### Caso borde

#### Entrada

```javascript
validarDibujos([]);
```

#### Resultado esperado

```text
No hay dibujos registrados.
```

## Explicación final

```text
La solución valida que existan dibujos registrados y recorre el arreglo. Para cada dibujo verifica que las dimensiones sean válidas, calcula la resolución y aplica las reglas del negocio según el destino del dibujo y el tipo de archivo. Finalmente muestra el resultado de cada dibujo y la cantidad total de dibujos aprobados.
```