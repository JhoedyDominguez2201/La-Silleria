
window.addEventListener("load", pagnosotros);
//datos
var jefe = {
    "puesto": "jefe",
    "name": "fernando",
    "apellido": "diasbarriga",
    "edad": 30
}

var empleado1 = {
    "foto": "/fotos/empleado1.jpg",
    "puesto": "tejedor",
    "name": "julio",
    "apellido": "perez",
    "edad": 38

}

var empleado2 = {
    "puesto": "vendedor",
    "name": "luis",
    "apellido": "parra",
    "edad": 20
}
var opcion1 ={
    "valor":1
}
//inicio pag nosotros

function pagnosotros() {
    document.getElementById('datos').style.display = "none";
    document.getElementById('datos2').style.display = "none";
    document.getElementById('datos3').style.display = "none";

    document.getElementById("nosotros").innerHTML = "NOSOTROS";
    document.getElementById("jefe").innerHTML = "fernando";
    document.getElementById("persona1").innerHTML = "julio perez";
    document.getElementById("persona2").innerHTML = "luis parra";
    document.getElementById("persona1").onclick = datos1;
    document.getElementById("jefe").onclick = datos2;
    document.getElementById("persona2").onclick = datos3;
}


    function datos1() {
        document.getElementById('datos').style.display = "block";
        document.getElementById('datos2').style.display = "none";
        document.getElementById('datos3').style.display = "none";
        x = empleado1.puesto;
        document.getElementById("puesto").innerHTML = "puesto:" + " " + x;
        y = empleado1.name;
        document.getElementById("nombre").innerHTML = "nombre:" + " " + y;
        z = empleado1.apellido;
        document.getElementById("apellido").innerHTML = "apellido:" + " " + z;
        w = empleado1.edad;
        document.getElementById("edad").innerHTML = "edad:" + " " + w;
    }
    function datos2() {
        document.getElementById('datos2').style.display = "block";
        document.getElementById('datos').style.display = "none";
        document.getElementById('datos3').style.display = "none";
        x = jefe.puesto;
        document.getElementById("puesto2").innerHTML = "puesto:" + " " + x;
        y = jefe.name;
        document.getElementById("nombre2").innerHTML = "nombre:" + " " + y;
        z = jefe.apellido;
        document.getElementById("apellido2").innerHTML = "apellido:" + " " + z;
        w = jefe.edad;
        document.getElementById("edad2").innerHTML = "edad:" + " " + w;
    }
    function datos3() {
        document.getElementById('datos3').style.display = "block";
        document.getElementById('datos').style.display = "none";
        document.getElementById('datos2').style.display = "none";
        x = empleado2.puesto;
        document.getElementById("puesto3").innerHTML = "puesto:" + " " + x;
        y = empleado2.name;
        document.getElementById("nombre3").innerHTML = "nombre:" + " " + y;
        z = empleado2.apellido;
        document.getElementById("apellido3").innerHTML = "apellido:" + " " + z;
        w = empleado2.edad;
        document.getElementById("edad3").innerHTML = "edad:" + " " + w;
    }



    //fin pag nosotros
    
   




   

