function inicioSesion() {
    const iniciarSesion = document.getElementById('iniciarSesion');
    //Obtiene datos de inputs
    const email = document.getElementById('emailSesion');
    const contraseña = document.getElementById('contraseñaSesion');

    //Esta vacio
    if (email.value == "" || contraseña.value == "") {
      alert("Favor de llenar todos los campos");
      console.log("Favor de llenar todos los campos");
    } else {
      //
      var guardado = localStorage.getItem('datos');
      console.log('objetoObtenido: ', JSON.parse(guardado));
      //Guarda localStorage en variable
      var datos = JSON.parse(guardado);

      var emailFin = "";
      var contraseñaFinal = "";

      for (var i = 0; i < datos.length; i++) {

        var emailTemp = datos[i].Email;
        var contraseñaTemp = datos[i].contraseña;
        //
        if (emailTemp == email.value && contraseñaTemp == contraseña.value) {
          console.log("Bien :)");
          emailFin = datos[i].Email;
          contraseñaFinal = datos[i].contraseña;
        } 
      }
      if(emailFin == "" && contraseñaFinal =="" ){
        alert("Contraseña o correo electronico incorrectos");
        console.log("Contraseña o correo electronico incorrectos");
      }else{
        console.log("Email: ", emailFin);
        console.log("Contraseña: ", contraseñaFinal);
      }
    }
  }