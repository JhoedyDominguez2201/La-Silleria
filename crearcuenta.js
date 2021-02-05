//Funcion para validar
function validar() {
    const errorCodPostal = document.getElementById('errorCodPostal');
    const errorTel = document.getElementById('errorTel');
    const errorEmail = document.getElementById('errorEmail');
    const errorContraseña = document.getElementById('errorContraseña');
    const errorConfcontraseña = document.getElementById('errorConfcontraseña');
    const regExitoso = document.getElementById('regExitoso')
    const codigoPostal = document.getElementById('codigoPostal');
    const Telefono = document.getElementById('Telefono');
    const email = document.getElementById('email');
    const Contraseña = document.getElementById('Contraseña');
    const confirmarContraseña = document.getElementById('confirmarContraseña');
    var resultado = false;
    var resultado2 = false;
    var resultado3 = false;
    var resultado4 = false;

        //Expresiones regulares
        if (!(/^(77)\d{3}$/.test(codigoPostal.value))) {
            errorCodPostal.setAttribute("class","text-danger")
            errorCodPostal.innerHTML = ("Codigo postal invalido");
            console.log("Codigo Postal Invalido");
            resultado = false;
        } else {
            errorCodPostal.innerHTML = ("");
            console.log("Codigo Postal Correcto");
            resultado = true;
        }
        if (!(/^(983|984|987|997|998)\d{7}$/.test(Telefono.value))) {
            errorTel.setAttribute("class","text-danger")
            errorTel.innerHTML = ("Numero de telefono invalido");
            console.log("Numero de telefono Invalido");
            resultado2 = false;
        } else {
            errorTel.innerHTML = ("");
            console.log("Telefono Correcto");
            resultado2 = true;
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-?]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            errorEmail.setAttribute("class","text-danger")
            errorEmail.innerHTML = ("Correo electronico invalido");
            console.log("Correo electronico Invalido");
            resultado3 = false;
        } else {
            errorEmail.innerHTML = ("");
            console.log("email Correcto");
            resultado3 = true;
        }
        if (!(/^\w{8,}$/.test(Contraseña.value))) {
            errorContraseña.setAttribute("class","text-danger")
            errorContraseña.innerHTML = ("Contraseña invalida");
            console.log("Contraseña invalida");
            console.log(Contraseña.value);
            resultado4 = false;
        } else {
            errorContraseña.innerHTML = ("");
            console.log("Contraseña Correcto");
            if (Contraseña.value !== confirmarContraseña.value) {
                errorConfcontraseña.setAttribute("class","text-danger")
                errorConfcontraseña.innerHTML = ("Las contraseñas no coinciden");
                console.log("Contraseñas diferentes");
            } else {
                errorConfcontraseña.innerHTML = ("");
                console.log("Contraseñas iguales");
            }
            resultado4 = true;
        }
    if (resultado && resultado2 && resultado3 && resultado4) {
        alert("Registro Exitoso");
        console.log("Registro Exitoso")
        prueba();
        return true;
    } else {
        console.log("Algo salio mal:(")
        return false;
    }
}

//Funcion para guardar datos con LocalStorage
function prueba() {

    let arreg = [];
    arreg = JSON.parse(localStorage.getItem('datos'));

    const registro = document.getElementById('Registro');
    const nombre = document.getElementById('nombre');
    const apellidoPaterno = document.getElementById('apellidoPaterno');
    const apellidoMaterno = document.getElementById('apellidoMaterno');
    const callePrincipal = document.getElementById('callePrincipal');
    const Cruzamiento = document.getElementById('Cruzamiento');
    const Colonia = document.getElementById('Colonia');
    const Municipio = document.getElementById('Municipio');
    const codigoPostal = document.getElementById('codigoPostal');
    const Telefono = document.getElementById('Telefono');
    const email = document.getElementById('email');
    const Contraseña = document.getElementById('Contraseña');
    const confirmarContraseña = document.getElementById('confirmarContraseña');

    //Objeto
    let reg =
        {
            name: nombre.value,
            primerApellido: apellidoPaterno.value,
            segundoApellido: apellidoMaterno.value,
            callePrinc: callePrincipal.value,
            cruzamiento: Cruzamiento.value,
            colonia: Colonia.value,
            municipio: Municipio.value,
            codPostal: codigoPostal.value,
            telefono: Telefono.value,
            Email: email.value,
            contraseña: Contraseña.value,
            confContraseña: confirmarContraseña.value
        };

        arreg.push(reg);
    //console.log(reg);
    localStorage.setItem('datos', JSON.stringify(arreg));
}