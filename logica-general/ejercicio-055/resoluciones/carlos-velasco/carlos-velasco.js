const diagnosticarCapa = (capa) => {
    if (capa.esFondo) {
        return { accion: "Bloqueada", motivo: "Capa base protegida por seguridad." };
    }
    if (capa.bloqueada) {
        return { accion: "Bloqueada", motivo: "Capa bloqueada manualmente por el usuario." };
    }
    if (capa.opacidad < 10) {
        return { accion: "Bloqueada", motivo: "Capa casi invisible, riesgo de error de trazado." };
    }
    
    return { accion: "Editable", motivo: "La capa está lista para trabajar." };
};

// Pruebas
console.log(diagnosticarCapa({ nombre: "Boceto", bloqueada: false, opacidad: 50, esFondo: false }));
console.log(diagnosticarCapa({ nombre: "Fondo", bloqueada: false, opacidad: 100, esFondo: true }));