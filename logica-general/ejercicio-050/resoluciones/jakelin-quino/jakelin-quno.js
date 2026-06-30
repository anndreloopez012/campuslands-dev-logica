function validarPaqueteViaje(turista) {
    const presupuestoMinimo = 500;
    
    if (turista.presupuesto < presupuestoMinimo) {
        return { aprobado: false, razon: "Presupuesto insuficiente." };
    }    
    if (turista.edad < 18 && turista.esInternacional) {
        return { aprobado: false, razon: "Menores requieren tutor para viajes internacionales." };
    }    
    if (turista.edad > 70 && turista.tipo === "aventura") {
        return { aprobado: false, razon: "Destino no apto para mayores de 70 años." };
    }
    return { aprobado: true, razon: "Reserva confirmada con éxito." };
}

const turistaNormal = { edad: 25, esInternacional: true, presupuesto: 1000, tipo: "relax" };
const turistaBorde = { edad: 16, esInternacional: true, presupuesto: 600, tipo: "relax" };

console.log(validarPaqueteViaje(turistaNormal));
console.log(validarPaqueteViaje(turistaBorde));