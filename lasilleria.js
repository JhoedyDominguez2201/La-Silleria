
window.onload = traerdatos();
function traerdatos() {


    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos2.json', true);
    xhttp.send();
    xhttp.onload = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var datos = JSON.parse(xhttp.responseText);

            for (var i = 0; i < datos.length; i++) {

                var divCatalogo = document.getElementById("divcard");

                var divCol = document.createElement("div");
                divCol.setAttribute("class", "col");
                divCatalogo.appendChild(divCol);

                var divCard = document.createElement("div");
                divCard.setAttribute("class", "card");
                divCol.appendChild(divCard);

                var img = document.createElement('img');
                img.setAttribute("src", datos[i].foto);
                img.setAttribute("class", "img-producto");
                divCard.appendChild(img);


                var divText = document.createElement("div");
                divText.setAttribute("class", "card-body");
                divCard.appendChild(divText);


                var h5 = document.createElement("h5");
                h5.setAttribute("class", "card-title");

                var contenidoNombre = document.createTextNode(datos[i].nombre);
                h5.appendChild(contenidoNombre);
                divText.appendChild(h5);

                var p = document.createElement("p");
                p.setAttribute("class", "card-text");

                var contenidoPrecio = document.createTextNode(datos[i].precio);
                p.appendChild(contenidoPrecio);
                divText.appendChild(p);

                var a = document.createElement("a");
                var verMas = document.createTextNode("Ver más");
                a.appendChild(verMas);
                a.setAttribute("class", "btn btn-primary");
                a.setAttribute("id", "btnVer");
                a.setAttribute("href", "ProductoSillas.html?" + i);
                divText.appendChild(a);

            }
        }
    }
}

function expresionregular() {

    var nombre = document.getElementById("nombreInput").value;
    var apellido = document.getElementById("apellidoInput").value;
    var email = document.getElementById("emailInput").value;
    var telefono = document.getElementById("telefonoInput").value;
    var mensaje = document.getElementById("mensajeInput").value;

    var pnombre = document.getElementById("p-nombre");
    var papellido = document.getElementById("p-apellido");
    var pemail = document.getElementById("p-email");
    var ptelefono = document.getElementById("p-telefono");
    var pmensaje  = document.getElementById("p-mensaje");

    var resultadonombre = false;
    var resultadoapellido = false;
    var resultadoemail = false;
    var resultadotelefono = false;
    var resutladomensaje = false;




    if (!(/^([a-zA-Z ñáéíóú]{2,60})$/.test(nombre))) { 
        pnombre.setAttribute("class", "text-danger")
        pnombre.innerHTML = ("Nombre incorrecto");
        resultadonombre = false;

    } else {
        pnombre.setAttribute("class", "text-success")
        pnombre.innerHTML = ("Nombre correcto");    
        resultadonombre = true;

    }
    if (!(/^([a-zA-Z ñáéíóú]{2,60})$/.test(apellido))) {
        papellido.setAttribute("class", "text-danger")
        papellido.innerHTML = ("Apellido incorrecto");
        resultadoapellido = false;

    } else {
        papellido.setAttribute("class", "text-success")
        papellido.innerHTML = ("Apellido correcto");
        resultadoapellido = true;

    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
        pemail.setAttribute("class", "text-danger")
        pemail.innerHTML = ("Email incorrecto");
        resultadoemail = false;

        
    } else {
        pemail.setAttribute("class", "text-success")
        pemail.innerHTML = ("Email correcto");
        resultadoemail = true;

    }
    if (!(/^(983|984|987|997|998)([0-9]){7}$/.test(telefono))) {
        ptelefono.setAttribute("class", "text-danger")
        ptelefono.innerHTML = ("Telefono incorrecto");
        resultadotelefono = false;

    } else {
        ptelefono.setAttribute("class", "text-success")
        ptelefono.innerHTML = ("Telefono correcto");
        resultadotelefono = true;

    }
    if (!(/^([a-zA-Z ñáéíóú !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{2,350})$/.test(mensaje))) {
        pmensaje.setAttribute("class", "text-danger")
        pmensaje.innerHTML = ("Mensaje incorrecto");
        resutladomensaje = false;

    } else {
        pmensaje.setAttribute("class", "text-success")
        pmensaje.innerHTML = ("Mensaje correcto");
        resutladomensaje = true;
    }

    if(resultadonombre && resultadoapellido && resultadoemail && resultadotelefono && resutladomensaje){
        swal({
            title: "Mensaje enviado",
            text: "Tu mensaje fue enviado con exito",
            icon: "success",
            button: "OK",
            
          });
    }
    else{
        swal({
            title: "Campo invalido",
            text: "Verifica que todo este escrito correctamente",
            icon: "error",
            dangerMode: true,
            button: "OK",
          });
    }
}
