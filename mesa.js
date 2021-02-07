
window.addEventListener("load", obtenerdatos);

function obtenerdatos() {
    var queryDict = {}
    queryDict = location.search.substring(1).split("&");
    valor = parseInt(queryDict[0]);


    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos.json', true);
    xhttp.send();
    xhttp.onload = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var datos = JSON.parse(xhttp.responseText);
            var mesas = document.getElementById("mesas");
            var productcontent = document.createElement("div");
            productcontent.setAttribute("class", "product-content product-wrap clearfix product-deatil");
            mesas.appendChild(productcontent);

            var row1 = document.createElement("div");
            row1.setAttribute("class", "row");
            productcontent.appendChild(row1);

            var col = document.createElement("div");
            col.setAttribute("class", "col-md-5 col-sm-12 col-xs-12");
            row1.appendChild(col);

            var img = document.createElement('img');
            img.setAttribute("src", datos[valor].foto);
            img.setAttribute("class", "card-img-top");
            col.appendChild(img);



            var col2 = document.createElement("div");
            col2.setAttribute("class", "col-md-6 col-md-offset-1 col-sm-12 col-xs-16");
            row1.appendChild(col2);

            var h2 = document.createElement("h2");
            h2.setAttribute("class", "name");
            var contenidoNombre = document.createTextNode(datos[valor].nombre);
            h2.appendChild(contenidoNombre);
            col2.appendChild(h2);

            var h3 = document.createElement("h3");
            h3.setAttribute("class", "precio");
            var contenidoPrecio = document.createTextNode(datos[valor].precio);
            h3.appendChild(contenidoPrecio);
            col2.appendChild(h3);


            var h3 = document.createElement("h3");
            h3.setAttribute("class", "h3");
            var subtitulo = document.createTextNode("Descripcion:");
            h3.appendChild(subtitulo);
            col2.appendChild(h3);


            var p = document.createElement("p");
            p.setAttribute("class", "p");
            var contenidoDesc = document.createTextNode(datos[valor].descripcion);
            p.appendChild(contenidoDesc);
            col2.appendChild(p);


            var a = document.createElement("a");
            a.setAttribute("class", "btn btn-success btn-lg");
            var contenidoa = document.createTextNode("Comprar");
            a.appendChild(contenidoa);
            a.setAttribute("href", "compra.html");
            col2.appendChild(a);


            let nombre = datos[valor].nombre;
            let precio = datos[valor].precio;

            localStorage.setItem("nombresG", nombre);
            localStorage.setItem("precio", precio);


        }
    }

    
}
