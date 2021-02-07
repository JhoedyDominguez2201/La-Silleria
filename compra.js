window.addEventListener("load", cargarDatos);

function cargarDatos() {

    if (localStorage.getItem("nombresG")) {
        let nombre = localStorage.getItem("nombresG");
        let precio = localStorage.getItem("precio");
        console.log(nombre);
        document.getElementById("h2name").innerHTML = nombre;
        document.getElementById("pprecio").innerHTML = precio;
        document.getElementById("boton").onclick = validar;
    } else {
        console.log("no hay datos en local")
    }
    document.getElementById("boton2").onclick = mostrar;
    document.getElementById('listatarjetas').style.display = "none";


}
var month = /^1|2|3|4|5|6|7|8|9|10|11|12$/;
var year = /^2017|2018|2019|2020|2021|2022|2023|2024|2025|2026|2027|2028|2029|2030|2031$/;

function validar() {

    const tarjeta = document.getElementById('tarjeta').value;
    const cvv = document.getElementById('CVV').value;
    const año = document.getElementById('año').value;
    const mes = document.getElementById('mes').value;
    const nombres = document.getElementById('nombres').value;
    
    const ver = new validador(tarjeta);
    const resultado = ver.comprobartar();
    
    const ver3 = new validador(cvv);
    const resultado2 = ver3.comprobarcvv();
    ///////////////////////

    
    const ver5 = new validador(año);
    const resultado3 = ver5.comprobaraño();
    
    const ver7 = new validador(mes);
    const resultado4 = ver7.comprobarmes();

    const ver8 = new validador(nombres);
    const resultado5 = ver8.comprobarname();

    if (resultado == false) {
        alert("tarjeta no valida");
    }
    if (resultado2 == false) {
        alert("cvv no valido");
    }
    if (resultado3 == false) {
        alert("ya caduco tu tarjeta");
    }
    if (resultado4 == false) {
        alert("mes no reconocido");
    }
    if (resultado5 == false) {
        alert("el nombre esta vacio")
    }
    if (resultado == true && resultado2 == true && resultado3 == true && resultado4 == true && resultado5 == true) {
        alert("datos de tarjeta correctos");
        guardar();
    }
}
//pruebas
class validador {
    constructor(t) {
        this.t = t;
    }
    comprobartar() {
        let t2 = this.t;
        if (!(/^([0-9]{16})$/.test(t2))) {
            return t2 = false;
        } else {
            return t2 = true;
        }
    }
    comprobarcvv() {
        let t3 = this.t;
        if (!(/^([0-9]{3,3})$/.test(t3))) {
            return t3 = false;
        } else {
            return t3 = true;
        }
    }
    comprobaraño() {
        let t5 = this.t;
        if (year.test(t5)) {
            return t5 = true;
        } else {
            return t5 = false;
        }
    }
    comprobarmes() {
        let t7 = this.t;
        if (!month.test(t7)) {
            return t7 = false;
        } else {
            return t7 = true;
        }
    }
    comprobarname() {
        let t8 = this.t;
        if (t8 == "") {
            return t8 = false;
        } else {
            return t8 = true;
        }
    }
}

//crud
let arraytarjates = [];
function guardar() {
    const tarjeta = document.getElementById('tarjeta').value;
    const nombre = document.getElementById('nombres').value
    const cvv = document.getElementById('CVV').value;
    const año = document.getElementById('año').value;
    const mes = document.getElementById('mes').value;

    let tarj = {
        "tarjeta": tarjeta,
        "nombre": nombre,
        "CVV": cvv,
        "año": año,
        "mes": mes
    }

    arraytarjates.push(tarj);

    console.log(arraytarjates);

    localStorage.setItem("tarjetas", JSON.stringify(arraytarjates));
}

function mostrar() {
    arraytarjates = JSON.parse(localStorage.getItem('tarjetas'));
    console.log(arraytarjates);
    document.getElementById("listatarjetas").style.display = "block";
    if (arraytarjates === null) {
        arraytarjates = [];
    } else {
        
        for (var i = 0; i < arraytarjates.length; i++) {
            console.log(i);

            var divtarjeta = document.getElementById("listatarjetas");

            var div1 = document.createElement("div");
            div1.setAttribute("class", "alert alert-primary");
            //div1.setAttribute("role","alert");
            divtarjeta.appendChild(div1);

            var i1 = document.createElement("i");
            i1.setAttribute("class", "material-icons float-left mr-3");
            div1.appendChild(i1);

            var icono1 = document.createTextNode("credit_card");
            i1.appendChild(icono1);

            var tarjname = document.createElement("b");
            div1.appendChild(tarjname);

            var span1 = document.createElement("span");
            span1.setAttribute("class", "float-right");
            div1.appendChild(span1);

            var i2 = document.createElement("i");
            i2.setAttribute("class", "material-icons float-left mr-3");
            span1.appendChild(i2);

            var icono2 = document.createTextNode("deleted");
            i2.appendChild(icono2);


            let cadena = arraytarjates[i];
            let numero = cadena.tarjeta;
            let nombre = cadena.nombre;
            //let arregloDeSubCadenas = numero.split("");
            let final = numero.substring(16, 12);

            var final2= innerHTML = "el numero de tarjeta es: ****" + final + " " + "dueño:" + " " + nombre;
            var icono3 = document.createTextNode(final2);
            tarjname.appendChild(icono3);
            
        }
    }
    
}

