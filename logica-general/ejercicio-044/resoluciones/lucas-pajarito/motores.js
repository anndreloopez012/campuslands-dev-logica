const motos = [
    {
        marca: "Yamaha",
        modelo: "FZ25",
        año: 2022,
        estadoMotor: "Excelente"
    },
    {
        marca: "Honda",
        modelo: "CB190R",
        año: 2020,
        estadoMotor: "Bueno"
    },
    {
        marca: "Suzuki",
        modelo: "Gixxer 150",
        año: 2019,
        estadoMotor: "Regular"
    },
    {
        marca: "KTM",
        modelo: "200 Duke",
        año: 2018,
        estadoMotor: "Malo"
    },
    {
        marca: "Bajaj",
        modelo: "Pulsar NS200",
        año: 2021,
        estadoMotor: "Bueno"
    }
];

function revisarMotor(motos) {

    motos.forEach(moto => {

        if (moto.estadoMotor === "Excelente" || moto.estadoMotor === "Bueno") {
            console.log(`${moto.marca} ${moto.modelo}: Motor apto para seguir en uso.`);
        } else {
            console.log(`${moto.marca} ${moto.modelo}: Se recomienda cambiar el motor.`);
        }

    });

}

revisarMotor(motos);