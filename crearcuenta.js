function crearCuenta() {
    var codigoPostal2 = document.getElementById("codigoPostal").value;
    var numTelefono = document.getElementById("Telefono").value;
    var resultado = false;
    var resultado2 = false;

    if (!/^(?:\d{5})$/.test(codigoPostal2)) {
        alert("Codigo Postal Invalido");
        resultado = false;
    } else {
        console.log("Cogigo Postal Correcto");
        resultado = true;
    }

    if (!(/^([0-9]{10})$/.test(numTelefono))) {
        alert("Numero de telefono Invalido");
        resultado2 = false;
    } else {
        console.log("Telefono Correcto");
        resultado2 = true;
    }

    if (resultado && resultado2) {
        alert("Registro Exitoso");
        return true;
    } else {
        return false;
    }
}