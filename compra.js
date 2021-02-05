window.addEventListener("load",cargarDatos);

function cargarDatos(){

    if(localStorage.getItem("nombresG")){
    let nombre = localStorage.getItem("nombresG");
    let precio = localStorage.getItem("precio");
    console.log(nombre);
    document.getElementById("h2name").innerHTML = nombre;
    document.getElementById("pprecio").innerHTML = precio;
    document.getElementById("boton").onclick = validar;
    }else{
        console.log("no hay datos en local")
    }

    
}
function validar(){
    const tarjeta = document.getElementById('tarjeta').value;
    const cvv = document.getElementById('CVV').value;
    const año = document.getElementById('año').value;
    const mes = document.getElementById('mes').value;
    var month = /^1|2|3|4|5|6|7|8|9|10|11|12$/;
    var year = /^2017|2018|2019|2020|2021|2022|2023|2024|2025|2026|2027|2028|2029|2030|2031$/;
    var resultado;
    var resultado2;
    var resultado3;
    var resultado4;

    
        if (!(/^([0-9]{16})$/.test(tarjeta))) {
            alert("Numero de tarjeta Invalido");
            resultado = false;
        } else {
            resultado = true;
        }
        if (!(/^([0-9]{3,3})$/.test(cvv))) {
            alert("Numero de cvv Invalido");
            resultado2 = false;
        } else {
            resultado2 = true;
        }

        if (year.test(año)) {
            resultado3 = true;
        } else{
            alert("ya caduco tu tarjeta");
            resultado3 = false;
        }

        if (!month.test(mes)) {
            alert("no existe ese mes");
            resultado4 = false;
        } else {
            resultado4 = true;
        }

        if(resultado==true && resultado2==true && resultado3== true && resultado4==true){
            alert("datos de tarjeta correctos");
        }
        
    
}
