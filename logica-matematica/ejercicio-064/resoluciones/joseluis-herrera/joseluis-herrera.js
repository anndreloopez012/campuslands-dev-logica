function evaluarEstadoInventario(motos) {
    let maximoKilometraje = 0;
    let motoConMasUso = "";

    for (let i = 0; i < motos.length; i++) {
        let modelo = motos[i][0];
        let kilometraje = motos[i][1];
        
        if (kilometraje > maximoKilometraje) {
            maximoKilometraje = kilometraje;
            motoConMasUso = modelo;
        }
    }

    console.log(`La moto con mayor uso es: ${motoConMasUso} con ${maximoKilometraje} km.`);
    
    for (let i = 0; i < motos.length; i++) {
        let modelo = motos[i][0];
        let km = motos[i][1];
        
        if (km < 5000) {
            console.log(`${modelo}: Estado - Como nueva`);
        } else if (km <= 15000) {
            console.log(`${modelo}: Estado - Kilometraje medio`);
        } else {
            console.log(`${modelo}: Estado - Requiere revisión técnica profunda`);
        }
    }
}

const inventarioMotos = [
    ["Yamaha MT-07", 3000],
    ["Honda CB500", 12000],
    ["Kawasaki Z900", 22000],
    ["Suzuki GSX-S750", 8000]
];

evaluarEstadoInventario(inventarioMotos);