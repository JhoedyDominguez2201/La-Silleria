class cuenta {
    constructor(nombre, apellidoMaterno, apellidoPaterno, callePrincipal, Cruzamiento,
        Colonia, Municipio, codigoPostal, Telefono, email, Contraseña, confirmarContraseña) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.callePrincipal = callePrincipal;
        this.Cruzamiento = Cruzamiento;
        this.Colonia = Colonia;
        this.Municipio = Municipio;
        this.codigoPostal = codigoPostal;
        this.Telefono = Telefono;
        this.email = email;
        this.Contraseña = Contraseña;
        this.confirmarContraseña = confirmarContraseña;
    }

    validar() {
        console.log("HOLA");
        const errorCodPostal = document.getElementById('errorCodPostal');
        const errorTel = document.getElementById('errorTel');
        const errorEmail = document.getElementById('errorEmail');
        const errorContraseña = document.getElementById('errorContraseña');
        const errorConfcontraseña = document.getElementById('errorConfcontraseña');
        var resultado = false;
        var resultado2 = false;
        var resultado3 = false;
        var resultado4 = false;

        //Expresiones regulares
        if (!(/^(77)\d{3}$/.test(this.codigoPostal))) {
            errorCodPostal.setAttribute("class", "text-danger")
            errorCodPostal.innerHTML = ("Codigo postal invalido");
            console.log("Codigo Postal Invalido");
            resultado = false;
        } else {
            errorCodPostal.innerHTML = ("");
            console.log("Codigo Postal Correcto");
            resultado = true;
        }
        if (!(/^(983|984|987|997|998)\d{7}$/.test(this.Telefono))) {
            errorTel.setAttribute("class", "text-danger")
            errorTel.innerHTML = ("Numero de telefono invalido");
            console.log("Numero de telefono Invalido");
            resultado2 = false;
        } else {
            errorTel.innerHTML = ("");
            console.log("Telefono Correcto");
            resultado2 = true;
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-?]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
            errorEmail.setAttribute("class", "text-danger")
            errorEmail.innerHTML = ("Correo electronico invalido");
            console.log("Correo electronico Invalido");
            resultado3 = false;
        } else {
            errorEmail.innerHTML = ("");
            console.log("email Correcto");
            resultado3 = true;
        }
        if (!(/^\w{8,}$/.test(this.Contraseña))) {
            errorContraseña.setAttribute("class", "text-danger")
            errorContraseña.innerHTML = ("Contraseña invalida");
            console.log("Contraseña invalida");
            console.log(Contraseña.value);
            resultado4 = false;
        } else {
            errorContraseña.innerHTML = ("");
            console.log("Contraseña Correcto");
            if (this.Contraseña !== this.confirmarContraseña) {
                errorConfcontraseña.setAttribute("class", "text-danger")
                errorConfcontraseña.innerHTML = ("Las contraseñas no coinciden");
                console.log("Contraseñas diferentes");
            } else {
                errorConfcontraseña.innerHTML = ("");
                console.log("Contraseñas iguales");
                resultado4 = true;
            }
        }
        if (resultado && resultado2 && resultado3 && resultado4) {
            console.log("Registro Exitoso")
            return true;
        } else {
            console.log("Algo salio mal:(")
            return false;
        }
    }

    prueba() {
        console.log("HOLAAA");
        let arreg = [];
        arreg = JSON.parse(localStorage.getItem('datos'));
        var existencia = false;
        //Objeto
        let reg =
        {
            name: this.nombre,
            primerApellido: this.apellidoPaterno,
            segundoApellido: this.apellidoMaterno,
            callePrinc: this.callePrincipal,
            cruzamiento: this.Cruzamiento,
            colonia: this.Colonia,
            municipio: this.Municipio,
            codPostal: this.codigoPostal,
            telefono: this.Telefono,
            Email: this.email,
            contraseña: this.Contraseña,
            confContraseña: this.confirmarContraseña
        };
        if (arreg != null) {
            for (var i = 0; i < arreg.length; i++) {
                if (reg.Email == arreg[i].Email) {
                    existencia = true;
                    swal({
                        title: "ERROR",
                        text: "Correo electronico ya existente",
                        icon: "error",
                        dangerMode: true,
                        button: "OK",
                    }); 
                }
            }
        } else {
            arreg = [];
        }

        if (existencia == false) {
            arreg.push(reg);
            console.log(arreg);
            swal({
                title: "Registro exitoso",
                text: "Se ha creado correctamente su cuenta",
                icon: "success",
                button: "OK",
            });
            localStorage.setItem('datos', JSON.stringify(arreg));
            setTimeout("direccionamiento()",2000);
        }
    }
}

function crearCuenta() {
    console.log("Hola");
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

    var objCuenta = new cuenta(nombre.value, apellidoMaterno.value, apellidoPaterno.value,
        callePrincipal.value, Cruzamiento.value, Colonia.value, Municipio.value, codigoPostal.value,
        Telefono.value, email.value, Contraseña.value, confirmarContraseña.value);
    var objValidar = objCuenta.validar();
    if (objValidar) {
        objCuenta.prueba();
    }
}

function direccionamiento(){
    window.location = "iniciarsesion.html";
}