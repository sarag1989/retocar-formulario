/* Autor: Sara Gharafi Abalkais
Version:1.00
*/

function validarFormulario() {
	if (!validarNombre()) {
		return false;
	}
	if (!validarEmail()) {
		return false;
	}
	if (!validarEdad()) {
		return false;
	}
	return true;
}

let nombre = document.getElementById("nametxt");
let correo = document.getElementById("emailtxt");
let edad = document.getElementById("edadnum");

// let expRegNombre = /^[0-9.;#€|¡!~$%\/()=?¿:,<>\[\]{}"'`\^]+/; // let er = /^[A-Za-zÑñÁÉÍÓÚáéíóúÇçÜü\s]*$/;
// let expRegEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

function validarNombre() {
  if (nombre.value === null ||nombre.value === "" ||nombre.value.length > 20 ||/\d+/.test(nombre.value)) {
    nombre.className = "mal";
    return false;
  } else {
    nombre.className = "bien";
    return true;
  }
}

function validarEmail() {
  if (correo.value === null ||correo.value === "") {
    correo.className = "mal";
    return false;
  } else if (/\w+@\w+\.+[a-z]/.test(correo.value)) {
    correo.className = "bien";
    return true;
  }
}

function validarEdad() {
  if (edad.value === null ||edad.value === "" ||edad.value<18 ||edad.value>120) {
      edad.className = "mal";
      return false;
  // } else if(edad.value<18 ||edad.value>120) {
  //     edad.className = "mal";
  //     return false;
  } else {
    edad.className = "bien";
    return true;
  }
}