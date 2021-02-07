function inicioSesion() {
  //Obtiene datos de inputs
  const email = document.getElementById('emailSesion');
  const contraseña = document.getElementById('contraseñaSesion');
  const botonConf = document.getElementById('iniciarSesion');
  const labelIniciar = document.getElementById('labelIniciar');

  const divIniciarSesion = document.getElementById('divIniciarSesion');

  //Esta vacio
  if (email.value == "" || contraseña.value == "") {
    swal({
      title: "Campos vacios",
      text: "Verifique llenar todos los campos",
      icon: "error",
      dangerMode: true,
      button: "OK",
  });    
  console.log("Favor de llenar todos los campos");
  } else {
    //
    var guardado = localStorage.getItem('datos');
    console.log('objetoObtenido: ', JSON.parse(guardado));
    //Guarda localStorage en variable
    var datos = JSON.parse(guardado);

    var emailFin = "";
    var contraseñaFinal = "";
    var posicion = 0;
    for (var i = 0; i < datos.length; i++) {

      var emailTemp = datos[i].Email;
      var contraseñaTemp = datos[i].contraseña;
      //
      if (emailTemp == email.value && contraseñaTemp == contraseña.value) {
        console.log("Bien :)");
        console.log(i);
        emailFin = datos[i].Email;
        contraseñaFinal = datos[i].contraseña;
        posicion = i;
      }
    }
    if (emailFin == "" && contraseñaFinal == "") {
      swal({
        title: "ERROR",
        text: "Contraseña o correo electronico incorrectos",
        icon: "error",
        dangerMode: true,
        button: "OK",
    });
      console.log("Contraseña o correo electronico incorrectos");
    } else {
      console.log(posicion);


      console.log("Email: ", emailFin);
      console.log("Contraseña: ", contraseñaFinal);


      while (divIniciarSesion.firstChild) {
        divIniciarSesion.removeChild(divIniciarSesion.firstChild);
      }

      var img = document.createElement("img");
      img.setAttribute("src", "/fotos/Logo.jpeg");
      img.setAttribute("class","logo");
      divIniciarSesion.appendChild(img);

      var plabel = document.createElement("h3");
      plabel.setAttribute("class", "text-center");
      var contenidolabel = document.createTextNode("¡Bienvenido!");
      plabel.appendChild(contenidolabel);
      divIniciarSesion.appendChild(plabel);

      var pInicio = document.createElement("h4");
      pInicio.setAttribute("class", "text-center");
      var contenidoTextoInicio = document.createTextNode("Iniciaste sesion");
      pInicio.appendChild(contenidoTextoInicio);
      divIniciarSesion.appendChild(pInicio);

      var pInicio2 = document.createElement("p");
      pInicio2.setAttribute("class", "text-center");
      var contenidoTextoInicio2 = document.createTextNode("Si desea cambiar su configuracion de click en Configuracion, de lo contrario puede regresar a la pagina principal");
      pInicio2.appendChild(contenidoTextoInicio2);
      divIniciarSesion.appendChild(pInicio2);

      var config = document.createElement("a");
      var contenido = document.createTextNode("Configuracion");
      config.appendChild(contenido);
      config.setAttribute("class", "btn btn-primary");
      config.setAttribute("href", "cuenta.html?" + posicion);
      divIniciarSesion.appendChild(config);
    }
  }
}

