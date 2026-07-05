const entrada={
    items:["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta"
};

const salida={
    items:["aprobado", "pendiente"],
    prioridad:"alta"
}


function clasificacionDePrioridades(datos){
    const {items, prioridad}=datos;

    if (items || items.length === 0){
        return {
            accion: "Ninguna",
            motivo: "No hay items para clasificar"
        };
    }
    if (prioridad === "alta" && items.includes("bloqueado")){
        return{
            accion: "Revisar",
            motivo: "Hay items bloqueados con prioridad alta"
        };
    }
    if (items.includes("pendientes")){
        return{
            accion: "Revisar pendientes",
            motivo: "Hay items pendientes"
        };
    }
    return{
        accion: "revisar aprobados",
        motivo: "Hay items aprobados"
    };
}

console.log(clasificacionDePrioridades(entrada));
console.log(calisificacionDePrioridades())