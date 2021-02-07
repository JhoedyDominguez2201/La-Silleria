
function obtenerUsuario(){
    
    var queryDict = {}
    queryDict = location.search.substring(1);
    var id = parseInt(queryDict[0]);
    

    var datos = JSON.parse(localStorage.getItem('datos')); 
    var mostrar = document.getElementById("Mostrar");
    mostrar.setAttribute("class", "container");

    var img = document.createElement("img");
    img.setAttribute("src", "/fotos/Logo.jpeg");
    img.setAttribute("class","logo");
    mostrar.appendChild(img);

    var pCuenta = document.createElement("h3");
    var contenidoCuenta = document.createTextNode("Información Personal");
    pCuenta.setAttribute("class","text-center");
    pCuenta.appendChild(contenidoCuenta);
    mostrar.appendChild(pCuenta);

    var divPrincipal = document.createElement("div");
    divPrincipal.setAttribute("class","divPrincipal");
    mostrar.appendChild(divPrincipal);
    //
    var form = document.createElement("form");
    form.setAttribute("class","form");
    divPrincipal.appendChild(form);

    var div = document.createElement("div");
    div.setAttribute("class","form-row");
    form.appendChild(div);

    var div2 = document.createElement("div");
    div2.setAttribute("class","form-group");
    div.appendChild(div2);

    var labelNombre = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Nombre:");
    labelNombre.appendChild(contenidoCuenta);
    div2.appendChild(labelNombre);

    var inputName = document.createElement("input");
    inputName.setAttribute("class", "form-control");
    inputName.setAttribute("placeholder", datos[id].name);
    inputName.setAttribute("id", "inputName");
    div2.appendChild(inputName);

    var labelApellido1 = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Apellido Paterno:");
    labelApellido1.appendChild(contenidoCuenta);
    div2.appendChild(labelApellido1);

    var inputPrimerA = document.createElement("input");
    inputPrimerA.setAttribute("placeholder", datos[id].primerApellido);
    inputPrimerA.setAttribute("class","form-control");
    div2.appendChild(inputPrimerA);   

    var labelApellido2 = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Apellido Materno:");
    labelApellido2.appendChild(contenidoCuenta);
    div2.appendChild(labelApellido2);

    var inputSegundoA = document.createElement("input");
    inputSegundoA.setAttribute("placeholder", datos[id].segundoApellido);
    inputSegundoA.setAttribute("class","form-control");
    div2.appendChild(inputSegundoA);

    var labelCalle = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Calle Principal:");
    labelCalle.appendChild(contenidoCuenta);
    div2.appendChild(labelCalle);

    var inputCalle = document.createElement("input");
    inputCalle.setAttribute("placeholder", datos[id].callePrinc);
    inputCalle.setAttribute("class","form-control");
    div2.appendChild(inputCalle);
    
    var labelCruzamiento = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Cruzamiento:");
    labelCruzamiento.appendChild(contenidoCuenta);
    div2.appendChild(labelCruzamiento);
    
    var inputCruzamiento = document.createElement("input");
    inputCruzamiento.setAttribute("class", "form-control");
    inputCruzamiento.setAttribute("placeholder", datos[id].cruzamiento);
    div2.appendChild(inputCruzamiento);

    var labelColonia = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Colonia:");
    labelColonia.appendChild(contenidoCuenta);
    div2.appendChild(labelColonia);

    var inputColonia = document.createElement("input");
    inputColonia.setAttribute("placeholder", datos[id].colonia);
    inputColonia.setAttribute("class", "form-control");
    div2.appendChild(inputColonia);  

    var labelMunicipio = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Municipio:");
    labelMunicipio.appendChild(contenidoCuenta);
    div2.appendChild(labelMunicipio);

    var inputMunicipio = document.createElement("input");
    inputMunicipio.setAttribute("class", "form-control");
    inputMunicipio.setAttribute("placeholder", datos[id].municipio);
    div2.appendChild(inputMunicipio);

    var labelCodPostal = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Codigo Postal:");
    labelCodPostal.appendChild(contenidoCuenta);
    div2.appendChild(labelCodPostal);

    var inputCodigo = document.createElement("input");
    inputCodigo.setAttribute("placeholder", datos[id].codPostal);
    inputCodigo.setAttribute("class", "form-control");
    div2.appendChild(inputCodigo);  

    var labelTelefono = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Telefono:");
    labelTelefono.appendChild(contenidoCuenta);
    div2.appendChild(labelTelefono);

    var inputTelefono = document.createElement("input");
    inputTelefono.setAttribute("placeholder", datos[id].telefono);
    inputTelefono.setAttribute("class", "form-control");
    div2.appendChild(inputTelefono); 

    var labelEmail = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Correo electronico:");
    labelEmail.appendChild(contenidoCuenta);
    div2.appendChild(labelEmail);

    var inputEmail = document.createElement("input");
    inputEmail.setAttribute("placeholder", datos[id].Email);
    inputEmail.setAttribute("class", "form-control");
    div2.appendChild(inputEmail);  

    var labelContraseña = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Contraseña:");
    labelContraseña.appendChild(contenidoCuenta);
    div2.appendChild(labelContraseña);

    var inputContraseña = document.createElement("input");
    inputContraseña.setAttribute("placeholder", datos[id].contraseña);
    inputContraseña.setAttribute("size",100);
    inputContraseña.setAttribute("class", "form-control");
    div2.appendChild(inputContraseña);  

    //Cambiar contraseña
    var btnModificar = document.createElement("button");
    var textModificar = document.createTextNode("Cambiar contraseña");
    btnModificar.setAttribute("class", "btn btn-primary margen2");
    btnModificar.setAttribute("onclick",  "Actualizar(" + id +");");
    btnModificar.appendChild(textModificar);
    mostrar.appendChild(btnModificar);

    //Eliminar
    var btnEliminar = document.createElement("button");
    var textEliminar = document.createTextNode("Eliminar cuenta");
    btnEliminar.appendChild(textEliminar);
    btnEliminar.setAttribute("class", "btn btn-danger margen");
    btnEliminar.setAttribute("onclick", "Eliminar(" + id +");");
    mostrar.appendChild(btnEliminar);
}

function Eliminar(i){
    var eliminar = JSON.parse(localStorage.getItem('datos'));
    eliminar.splice(i,1);
    localStorage.setItem('datos',JSON.stringify(eliminar));

    swal({
        title: "Cuenta eliminada",
        text: "La cuenta fue eliminada",
        icon: "success",
        button: "OK",
    });  

    setTimeout("direccionamiento()",2000);

}

function Actualizar(i){
    var actualizar = JSON.parse(localStorage.getItem('datos'));

    var mostrar = document.getElementById("Mostrar");

    while(mostrar.firstChild){
        mostrar.removeChild(mostrar.firstChild);
    }

    var img = document.createElement("img");
    img.setAttribute("src", "/fotos/Logo.jpeg");
    img.setAttribute("class","logo");
    mostrar.appendChild(img);


    var divPrincipal = document.createElement("div");
    divPrincipal.setAttribute("class","divPrincipal");
    mostrar.appendChild(divPrincipal);


    var pCambio = document.createElement("h3");
    var contenidoCuenta = document.createTextNode("Cambio de contraseña");
    pCambio.setAttribute("class","text-center");
    pCambio.appendChild(contenidoCuenta);
    divPrincipal.appendChild(pCambio);
   
    var labelContraseña = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Ingresar nueva contraseña:");
    labelContraseña.appendChild(contenidoCuenta);
    divPrincipal.appendChild(labelContraseña);

    var inputContraseña = document.createElement("input");
    inputContraseña.setAttribute("placeholder", actualizar[i].contraseña);
    inputContraseña.setAttribute("id", "inputContraseña");
    inputContraseña.setAttribute("class", "form-control");
    divPrincipal.appendChild(inputContraseña);

    var labelConfcontraseña = document.createElement("label");
    var contenidoCuenta = document.createTextNode("Confirmar contraseña:");
    labelConfcontraseña.appendChild(contenidoCuenta);
    divPrincipal.appendChild(labelConfcontraseña);

    var inputConfirmarContraseña = document.createElement("input");
    inputConfirmarContraseña.setAttribute("placeholder", actualizar[i].confContraseña);
    inputConfirmarContraseña.setAttribute("id", "inputConfirmarContraseña");
    inputConfirmarContraseña.setAttribute("class", "form-control");
    divPrincipal.appendChild(inputConfirmarContraseña);  

    var Guardar = document.createElement("button");
    var contenidoGuardar = document.createTextNode("Guardar");
    Guardar.appendChild(contenidoGuardar);
    Guardar.setAttribute("id","botonGuardar");
    Guardar.setAttribute("class", "btn btn-primary margen3");
    Guardar.setAttribute("onclick","GuardarContraseña("+ i +");");
    mostrar.appendChild(Guardar);

}

function GuardarContraseña(i){
    var guardar = JSON.parse(localStorage.getItem('datos'));
    var inputContraseña = document.getElementById("inputContraseña").value;
    var inputConfirmarContraseña = document.getElementById("inputConfirmarContraseña").value;

    let newObj = guardar[i];
    newObj.contraseña = inputContraseña;
    newObj.confContraseña = inputConfirmarContraseña;

    guardar.splice(i,1,newObj);
    localStorage.setItem('datos',JSON.stringify(guardar));
    swal({
        title: "Cambio de contraseña",
        text: "La contraseña ha sido cambiada exitosamente",
        icon: "success",
        button: "OK",
    });  
    setTimeout("direccionamiento()",2000);

}

function direccionamiento(){
    window.location = "iniciarsesion.html";
}
