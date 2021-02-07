
function obtenerdatos() {
    var queryDict = {}
    queryDict = location.search.substring(1);
    id = parseInt(queryDict[0]);
    console.log(id);

    var guardado = JSON.parse(localStorage.getItem('productos'));


    var divSillas = document.getElementById("divSillas");

    //Primer div
    var productcontent = document.createElement("div");
    productcontent.setAttribute("class", "product-content product-wrap clearfix product-deatil");
    divSillas.appendChild(productcontent);

    var row1 = document.createElement("div");
    row1.setAttribute("class", "row");
    productcontent.appendChild(row1);

    var col = document.createElement("div");
    col.setAttribute("class", "col-md-5 col-sm-12 col-xs-12");
    row1.appendChild(col);

    var productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image");
    col.appendChild(productImage);

    var img = document.createElement('img');
    img.setAttribute("src", guardado[id].foto);
    img.setAttribute("class", "card-img-top");
    productImage.appendChild(img);


    //segundo div

    var col2 = document.createElement("div");
    col2.setAttribute("class", "col-md-6 col-md-offset-1 col-sm-12 col-xs-12");
    row1.appendChild(col2);

    var h2 = document.createElement("h2");
    h2.setAttribute("class", "name");
    var contenidoNombre = document.createTextNode(guardado[id].nombre);
    h2.appendChild(contenidoNombre);
    col2.appendChild(h2);

    var hr = document.createElement("HR");
    h2.appendChild(hr);

    var h3 = document.createElement("h3");
    h3.setAttribute("class", "price-container");
    var contenidoPrecio = document.createTextNode(guardado[id].precio);
    h3.appendChild(contenidoPrecio);
    col2.appendChild(h3);

    var hr = document.createElement("HR");
    h3.appendChild(hr);

    var h4 = document.createElement("h4");
    h4.setAttribute("class", "h4descripcion");
    var subtitulo = document.createTextNode("Descripcion:");
    h4.appendChild(subtitulo);
    col2.appendChild(h4);


    var p = document.createElement("p");
    p.setAttribute("class", "pdescripcion");
    var contenidoDesc = document.createTextNode(guardado[id].descripcion);
    p.appendChild(contenidoDesc);
    col2.appendChild(p);

    var hr = document.createElement("HR");
    col2.appendChild(hr);

    var a = document.createElement("a");
    a.setAttribute("class", "btn btn-success btn-lg");
    var contenidoa = document.createTextNode("Comprar");
    a.appendChild(contenidoa);
    col2.appendChild(a);
}


