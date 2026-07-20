const rankingDeFutbolSala=[
    { nombre: "Los Tigres" },
    { nombre: "Los Leones" }
];

function validacionDeDatos(futbol){

    if(!futbol || futbol-length === 0){
        console.log("No hay equipos registrados.");
        return;
    }
    
    const nombre = prompt("Registre el nombre del equipo: ");

    const nombreRegistrado = futbol.filter(
        equipo => equipo.nombre.trim().toLowerCase()=== nombre.trim().toLowerCase()
    );
        if(nombreRegistrado.lenght >0){
        console.log("El nombre del equipo de futbol ya existe")
        return;
    };
    console.log("El nombre del equipo está disponible para registrarlo")

};

validacionDeDatos(rankingDeFutbolSala);