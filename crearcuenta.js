/*
function validar() {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const codigoPostal = document.getElementById('codigoPostal');
    const Contraseña = document.getElementById('Contraseña');
    const Telefono = document.getElementById('Telefono');
    var resultado;
    var resultado2;
    var resultado3;

    form.addEventListener("submit", e=>{
        e.preventDefault()
        if (/^\w+([\.-]?\w+)*@\w+([\.-?]?\w+)*(\.\w{2,3})+$/.test(email)) {
            alert("Correo electronico Invalido");
            resultado = false;
        } else {
            console.log("email Correcto");
            resultado = true;
        } 
        if (!/^(?:\d{5})$/.test(codigoPostal)) {
            alert("Codigo Postal Invalido");
            resultado2 = false;
        } else {
            console.log("Cogigo Postal Correcto");
            resultado2 = true;
        }
        if (!(/^([0-9]{10})$/.test(Telefono))) {
            alert("Numero de telefono Invalido");
            resultado3 = false;
        } else {
            console.log("Telefono Correcto");
            resultado3 = true;
        }
    })
}
*/

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

registro.addEventListener('submit', function (event) {
    event.preventDefault();
    let reg = Array(
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
        }
    );
    //console.log(reg);
    localStorage.setItem('datos', JSON.stringify());
    //var guardado = localStorage.getItem('datos');

    //console.log('objetoObtenido: ', JSON.parse(guardado));
});

function prueba() {
    
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


    let reg = Array(
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
        });
    //console.log(reg);
    localStorage.setItem('datos', JSON.stringify(reg));

}