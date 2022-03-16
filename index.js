function saludar(nombre) {
    let mensaje = ""
    // si es vacio y mostrar un mensaje para que introduzca el nombre 
    if (nombre != "") {
        mensaje = "Hola " + nombre
    } else {
        mensaje = "Introduce un nombre"
    }

    alert(mensaje)
}

function ingresarUsuario(callback) {
    var nombre = prompt("Ingresa tu nombre");
    console.log("Nombre: " + nombre)
    //comprobar si es null no ejecutar el callback
    if (nombre) {
        callback(nombre);
    }
}

ingresarUsuario(saludar);