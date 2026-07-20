// Ejercicio 046 - Conversion de unidades
// Tema: Autos hiperdeportivos

function convertirVelocidad(kmh) {
    const mph = kmh * 0.621371;

    return {
        kilometros_hora: kmh,
        millas_hora: Number(mph.toFixed(2))
    };
}

function convertirDistancia(km) {
    const millas = km * 0.621371;

    return {
        kilometros: km,
        millas: Number(millas.toFixed(2))
    };
}

function analizarAuto(auto) {

    if (!auto.nombre || auto.velocidad <= 0) {
        return {
            error: "Datos del auto no validos"
        };
    }

    return {
        auto: auto.nombre,
        velocidad_convertida: convertirVelocidad(auto.velocidad),
        distancia_prueba: convertirDistancia(auto.distancia),
        mensaje: "Conversion realizada correctamente"
    };
}


// Prueba normal
const auto = {
    nombre: "Hyper GT",
    velocidad: 400,
    distancia: 100
};

console.log(analizarAuto(auto));


// Caso borde
const autoInvalido = {
    nombre: "",
    velocidad: 0,
    distancia: 0
};

console.log(analizarAuto(autoInvalido));