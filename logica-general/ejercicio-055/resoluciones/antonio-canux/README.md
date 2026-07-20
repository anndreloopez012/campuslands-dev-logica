# Ejercicio de Lógica 055 - Temática Dibujo Digital

**Camper:** Antonio Canux
 
## Análisis

- Entrada: 
  - `destino`: Una cadena de texto indicando el uso final del dibujo ("web" o "impresion").
  - `modoColor`: Una cadena de texto indicando el perfil de color del software ("RGB" o "CMYK").
  - `dpi`: Un número entero que representa la densidad de píxeles por pulgada.
- Proceso: El sistema bifurca la evaluación principal basándose en el `destino`. Dentro de cada escenario, se aplican reglas específicas de la industria del diseño digital para verificar si el color y la resolución son los adecuados. Si una regla falla, se acumula una recomendación técnica en un arreglo.
- Salida: Un objeto que detalla el `estado` de la configuración, un `mensaje` de retroalimentación y la lista de `ajustes` puntuales que el dibujante debe realizar.

## Reglas identificadas

1. Las piezas destinadas a "impresion" exigen una resolución mínima de 300 dpi para evitar pixelado físico, y un perfil de color "CMYK" correspondiente a las tintas.
2. Las piezas destinadas a formato "web" requieren un perfil de color "RGB" (luces de pantalla). Las resoluciones mayores a 150 dpi son penalizadas porque generan archivos pesados que ralentizan la carga sin mejora visual real.
3. El destino del arte solo puede ser "web" o "impresion"; cualquier otro valor bloquea la evaluación.

## Pruebas

### Caso normal

Entrada (Dibujo digital para redes sociales configurado correctamente):
```javascript
destino: "web"
modoColor: "RGB"
dpi: 72
```

Resultado esperado:

```javascript
{
  estado: 'aprobado',
  mensaje: 'Configuración de lienzo perfecta para su publicación en web.',
  ajustes: []
}
```

### Caso borde
Entrada (Dibujo para póster impreso donde el artista olvidó cambiar el perfil de color, pero sí ajustó la resolución):

```javascript
destino: "impresion"
modoColor: "RGB"
dpi: 300
```

Resultado esperado:

```javascript
{
  estado: 'requiere_configuracion',
  mensaje: 'El lienzo no cumple con los estándares para su publicación en impresion.',
  ajustes: [
    'El modo de color actual es RGB. Para impresión, debe ser estrictamente CMYK.'
  ]
}
```

## Explicación final
La solución implementa una estructura de reglas de negocio robusta mediante el uso de árboles de decisión (condicionales anidados lógicamente). Al segmentar primero la variable más determinante (el destino), evitamos evaluar reglas innecesarias. Además, se emplea el mismo principio de acumulación de datos del ejercicio anterior (el arreglo de ajustesRequeridos), lo cual permite entregarle al artista un reporte completo de todo lo que debe corregir en su software de dibujo antes de empezar a trabajar, ahorrándole reprocesos futuros.