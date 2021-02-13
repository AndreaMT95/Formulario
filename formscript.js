function mostrarValoracion() {
    const valoracion = document.getElementById('valoracion').value;
    const mensaje = "Has valorado con " + valoracion + "puntos";
    alert(mensaje);
}

function mostrarCuenta() {
    const pais = document.getElementById('pais').value;
    const iban = document.getElementById('iban').value;
    const entidad = document.getElementById('entidad').value;
    const sucursal = document.getElementById('sucursal').value;
    const dc = document.getElementById('dc').value;
    const cuenta = document.getElementById('cuenta').value;
    const mensaje = "Le informamos que su cuenta bancaria es: " + pais + iban + "-" + entidad + "-" + sucursal + "-" + dc + "-" + cuenta
    alert(mensaje);
}

function mostrarDiaDeLaSemana() {
    const fecha = document.getElementById('fecha').value;
    const currentDate = new Date(fecha).getDay();
    const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado'];
    const diaActual = dias[currentDate];
    const mensaje = "La fecha de la semana en el elemento fecha es un: " + diaActual;
    alert(mensaje);
}