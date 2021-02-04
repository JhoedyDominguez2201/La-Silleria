
window.onload = traerdatos();
function traerdatos() {


    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos.json', true);
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


    if (!(/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])/.test(nombre))){
        alert("Nombre invalido");
       
    } else {
        alert("Nombre valido");
        
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
        alert("email invalido");
    } else {
        alert("email valido");

    }
}
