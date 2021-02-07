class Productos {

    constructor(foto, nombre, precio, descripcion) {
        this.foto = foto;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }

    crear() {

        var guardado = JSON.parse(localStorage.getItem('productos'));

        let newObj =
        {
            foto: this.foto,
            nombre: this.nombre,
            precio: this.precio,
            descripcion: this.descripcion
        }

        guardado.push(newObj);
        localStorage.setItem('productos', JSON.stringify(guardado));
    }
}

class Mensaje {

    constructor(nombre, apellido, email, telefono, mensaje) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.mensaje = mensaje;
    }

    validar() {
        var pnombre = document.getElementById("p-nombre");
        var papellido = document.getElementById("p-apellido");
        var pemail = document.getElementById("p-email");
        var ptelefono = document.getElementById("p-telefono");
        var pmensaje = document.getElementById("p-mensaje");

        var resultadonombre = false;
        var resultadoapellido = false;
        var resultadoemail = false;
        var resultadotelefono = false;
        var resutladomensaje = false;

        if (!(/^([a-zA-Z ñáéíóú]{2,60})$/.test(this.nombre))) {
            pnombre.setAttribute("class", "text-danger")
            pnombre.innerHTML = ("Nombre incorrecto");
            resultadonombre = false;

        } else {
            pnombre.setAttribute("class", "text-success")
            pnombre.innerHTML = ("Nombre correcto");
            resultadonombre = true;

        }
        if (!(/^([a-zA-Z ñáéíóú]{2,60})$/.test(this.apellido))) {
            papellido.setAttribute("class", "text-danger")
            papellido.innerHTML = ("Apellido incorrecto");
            resultadoapellido = false;

        } else {
            papellido.setAttribute("class", "text-success")
            papellido.innerHTML = ("Apellido correcto");
            resultadoapellido = true;

        }
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email))) {
            pemail.setAttribute("class", "text-danger")
            pemail.innerHTML = ("Email incorrecto");
            resultadoemail = false;


        } else {
            pemail.setAttribute("class", "text-success")
            pemail.innerHTML = ("Email correcto");
            resultadoemail = true;

        }
        if (!(/^(983|984|987|997|998)([0-9]){7}$/.test(this.telefono))) {
            ptelefono.setAttribute("class", "text-danger")
            ptelefono.innerHTML = ("Telefono incorrecto");
            resultadotelefono = false;

        } else {
            ptelefono.setAttribute("class", "text-success")
            ptelefono.innerHTML = ("Telefono correcto");
            resultadotelefono = true;

        }
        if (!(/^([a-zA-Z ñáéíóú !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{2,350})$/.test(this.mensaje))) {
            pmensaje.setAttribute("class", "text-danger")
            pmensaje.innerHTML = ("Mensaje incorrecto");
            resutladomensaje = false;

        } else {
            pmensaje.setAttribute("class", "text-success")
            pmensaje.innerHTML = ("Mensaje correcto");
            resutladomensaje = true;
        }

        if (resultadonombre && resultadoapellido && resultadoemail && resultadotelefono && resutladomensaje) {
            swal({
                title: "Mensaje enviado",
                text: "Tu mensaje fue enviado con exito",
                icon: "success",
                button: "OK",

            });
        }
        else {
            swal({
                title: "Campo invalido",
                text: "Verifica que todo este escrito correctamente",
                icon: "error",
                dangerMode: true,
                button: "OK",
            });
        }

    }

}



function expresionregular() {

    var nombre = document.getElementById("nombreInput");
    var apellido = document.getElementById("apellidoInput");
    var email = document.getElementById("emailInput");
    var telefono = document.getElementById("telefonoInput");
    var mensaje = document.getElementById("mensajeInput");
    //console.log(nombre.value);

    var datos = new Mensaje(nombre.value, apellido.value, email.value, telefono.value, mensaje.value);

    datos.validar();



}


function traerdatos() {
    let miObjeto = [
        {
            "foto": "/fotos/silla1.jpg",
            "nombre": "Silla verde",
            "precio": "$200",
            "descripcion": "Silla color verde hecha a mano"
        },
        {
            "foto": "/fotos/silla2.jpg",
            "nombre": "Silla Colores",
            "precio": "$50",
            "descripcion": "Silla de colores hecha a mano"

        },
        {
            "foto": "/fotos/silla3.jpg",
            "nombre": "Silla blanca con negro",
            "precio": "$800",
            "descripcion": "Silla para jardin blanco y negro"

        },
        {
            "foto": "/fotos/silla4.jpg",
            "nombre": "Silla mesedora",
            "precio": "$500",
            "descripcion": "Mesedora color azul para jardin"

        },
        {
            "foto": "/fotos/silla5.jpg",
            "nombre": "Silla blanca ",
            "precio": "$100",
            "descripcion": "Silla blanca hecha a mano para terraza"

        },
        {
            "foto": "/fotos/silla6.jpg",
            "nombre": "Silla gris",
            "precio": "$300",
            "descripcion": "Silla color gris hecha a mano"

        },
        {
            "foto": "/fotos/silla7.jpg",
            "nombre": "Silla tipo sofa",
            "precio": "$3200",
            "descripcion": "Silla tipo sofa elegante "

        },
        {
            "foto": "/fotos/silla8.jpg",
            "nombre": "Silla naranja",
            "precio": "$50",
            "descripcion": "Silla color naranja hecha a mano"

        },
        {
            "foto": "/fotos/silla9.jpg",
            "nombre": "Silla rosa",
            "precio": "$800",
            "descripcion": "Silla para jardin color rosa"

        },
        {
            "foto": "/fotos/silla10.jpg",
            "nombre": "Silla azul",
            "precio": "$500",
            "descripcion": "Silla color azul ideal para niños"

        }

    ]

    if (localStorage.getItem('productos') == null) {

        localStorage.setItem('productos', JSON.stringify(miObjeto));

    }
    var guardado = JSON.parse(localStorage.getItem('productos'));

    for (var i = 0; i < guardado.length; i++) {

        var divCatalogo = document.getElementById("divcard");

        var divCol = document.createElement("div");
        divCol.setAttribute("class", "col");
        divCatalogo.appendChild(divCol);

        var divCard = document.createElement("div");
        divCard.setAttribute("class", "card");
        divCol.appendChild(divCard);

        var img = document.createElement('img');
        img.setAttribute("src", guardado[i].foto);
        img.setAttribute("class", "img-producto");
        divCard.appendChild(img);


        var divText = document.createElement("div");
        divText.setAttribute("class", "card-body");
        divCard.appendChild(divText);


        var h5 = document.createElement("h5");
        h5.setAttribute("class", "card-title");

        var contenidoNombre = document.createTextNode(guardado[i].nombre);
        h5.appendChild(contenidoNombre);
        divText.appendChild(h5);

        var p = document.createElement("p");
        p.setAttribute("class", "card-text");

        var contenidoPrecio = document.createTextNode(guardado[i].precio);
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




function obtenerdatos() {
    var guardado = JSON.parse(localStorage.getItem('productos'));

    for (var i = 0; i < guardado.length; i++) {


        var divCatalogo = document.getElementById("divcard");

        var divCol = document.createElement("div");
        divCol.setAttribute("class", "col");
        divCatalogo.appendChild(divCol);

        var divCard = document.createElement("div");
        divCard.setAttribute("class", "card");
        divCol.appendChild(divCard);

        var img = document.createElement('img');
        img.setAttribute("src", guardado[i].foto);
        img.setAttribute("class", "img-producto");
        img.setAttribute("id", "imgproducto" + i);
        divCard.appendChild(img);


        var divText = document.createElement("div");
        divText.setAttribute("class", "card-body");
        divCard.appendChild(divText);


        var h5 = document.createElement("h5");
        h5.setAttribute("class", "card-title");
        h5.setAttribute("id", "idh5" + i);
        var contenidoNombre = document.createTextNode(guardado[i].nombre);
        h5.appendChild(contenidoNombre);
        divText.appendChild(h5);

        var p = document.createElement("p");
        p.setAttribute("class", "card-text");
        p.setAttribute("id", "pprecio" + i);
        var contenidoPrecio = document.createTextNode(guardado[i].precio);
        p.appendChild(contenidoPrecio);
        divText.appendChild(p);

        var p2 = document.createElement("p");
        p2.setAttribute("class", "card-text");
        p2.setAttribute("id", "pdesc" + i);
        var contenidoPrecio = document.createTextNode(guardado[i].descripcion);
        p2.appendChild(contenidoPrecio);
        divText.appendChild(p2);

        var a = document.createElement("a");
        var modificar = document.createTextNode("Modificar");
        a.appendChild(modificar);
        a.setAttribute("class", "btn btn-warning");
        a.setAttribute("id", "btnModificar");
        a.setAttribute("onclick", "modificar(" + i + ");");
        divText.appendChild(a);


        var a2 = document.createElement("button");
        var eliminar = document.createTextNode("Eliminar");
        a2.appendChild(eliminar);
        a2.setAttribute("class", "btn btn-danger");
        a2.setAttribute("id", "btnEliminar" + i);
        a2.setAttribute("onclick", "eliminar(" + i + ");");
        divText.appendChild(a2);
    }

}

function eliminar(id) {

    var guardado = JSON.parse(localStorage.getItem('productos'));
    guardado.splice(id, 1);
    localStorage.setItem('productos', JSON.stringify(guardado));
    setTimeout("redireccionarPagina()",2000);


}

function modificar(id) {
    var guardado = JSON.parse(localStorage.getItem('productos'));
    console.log(guardado[id].nombre);

    var titulo = document.getElementById("idh5" + id);
    var pprecio = document.getElementById("pprecio" + id);
    var pdesc = document.getElementById("pdesc" + id);
    var imgproducto = document.getElementById("imgproducto" + id);

    var input = document.createElement("input");
    input.setAttribute("placeholder", guardado[id].nombre);
    input.setAttribute("id", "inputnombre");
    titulo.replaceWith(input);

    var btnEliminar = document.getElementById("btnEliminar" + id);
    var btnGuardar = document.createElement("button");
    var contenidoguardar = document.createTextNode("Guardar");
    btnGuardar.setAttribute("id", "btnGuardar");
    btnGuardar.setAttribute("class", "btn btn-success");
    btnGuardar.setAttribute("onclick", "guardar(" + id + ");");

    btnGuardar.appendChild(contenidoguardar);
    btnEliminar.replaceWith(btnGuardar);


    var inputprecio = document.createElement("input");
    inputprecio.setAttribute("placeholder", guardado[id].precio);
    inputprecio.setAttribute("id", "inputprecio");

    pprecio.replaceWith(inputprecio);

    var inputdes = document.createElement("input");
    inputdes.setAttribute("placeholder", guardado[id].descripcion);
    inputdes.setAttribute("id", "inputdes");

    pdesc.replaceWith(inputdes);

    var inputfoto = document.createElement("input");
    inputfoto.setAttribute("placeholder", guardado[id].foto);
    inputfoto.setAttribute("id", "inputfoto");

    imgproducto.replaceWith(inputfoto);



}

function guardar(id) {
    var guardado = JSON.parse(localStorage.getItem('productos'));
    var guardado = JSON.parse(localStorage.getItem('productos'));
    var inputnombre = document.getElementById("inputnombre");
    var inputfoto = document.getElementById("inputfoto");
    var inputprecio = document.getElementById("inputprecio");
    var inputdesc = document.getElementById("inputdes");


    let newObj =
    {
        foto: inputfoto.value,
        nombre: inputnombre.value,
        precio: inputprecio.value,
        descripcion: inputdesc.value
    }

    guardado.splice(id, 1, newObj);
    localStorage.setItem('productos', JSON.stringify(guardado));
    setTimeout("redireccionarPagina()",2000);


}

function crearproducto() {

    var infoto = document.getElementById("infoto");
    var innombre = document.getElementById("innombre");
    var inprecio = document.getElementById("inprecio");
    var indesc = document.getElementById("indesc");

    if (infoto.value == '' && innombre.value == '' && inprecio.value == '' && indesc.value == '') {
        swal({
            title: "Campos vacios",
            text: "Verifica que todos los campos esten llenos",
            icon: "error",
            dangerMode: true,
            button: "OK",
        });
    }
    else {

        var producto = new Productos(infoto.value, innombre.value, inprecio.value, indesc.value);

        producto.crear();

        swal({
            title: "Producto creado",
            text: "Tu producto fue creado correctamente",
            icon: "success",
            button: "OK",

        });

        setTimeout("redireccionarPagina()",2000);
    }


}

function Reset() {
    var guardado = JSON.parse(localStorage.getItem('productos'));
    localStorage.clear(guardado);
    window.location = "catalogo.html"
}

function redireccionarPagina(){
    window.location = "modificar.html";
}