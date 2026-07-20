# Lógica general 062 - Validación de datos

## Entrada:
Un arreglo con los nombres de los equipos de fútbol sala y un nombre ingresado por el usuario.

## Proceso:
Se valida que el arreglo tenga datos. Luego se solicita el nombre de un equipo y se compara con los nombres ya registrados. Si el nombre ya existe, se informa al usuario; de lo contrario, se indica que puede registrarse.

## Salida:
- Mensaje indicando si el nombre del equipo ya existe.
- Mensaje indicando que el nombre está disponible para registrarse.

# Reglas identificadas

- El arreglo debe contener equipos registrados.
- El nombre ingresado no debe estar repetido.
- La comparación no distingue entre mayúsculas y minúsculas.

# Pruebas

## Caso normal

### Entrada:
Nombre ingresado: `Los Tigres`

### Resultado esperado:
Se muestra el mensaje: **"El nombre del equipo de fútbol ya existe."**

## Caso borde

### Entrada:
Un arreglo vacío (`[]`).

### Resultado esperado:
Se muestra el mensaje: **"No hay equipos registrados."**

# Explicación final

La solución funciona porque primero verifica que existan equipos registrados. Después solicita un nombre y utiliza `filter()` para buscar si ya existe dentro del arreglo. Si encuentra una coincidencia, informa que el nombre está repetido; en caso contrario, indica que el nombre está disponible para registrarse.

# Sugerencia

Antes de registrar un nuevo dato, valida que no exista previamente para evitar información duplicada.