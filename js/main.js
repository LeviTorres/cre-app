/*
const form = document.getElementById("form");

const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const asunto = document.getElementById("subject");
const mensaje = document.getElementById("message");


const regexName = /^[a-zA-Z0-9À-ÿ\s]{1,100}$/;
const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regexSubject = /^[a-zA-ZÀ-ÿ\s]{1,100}$/;
const regexMessage = /^[a-zA-ZÀ-ÿ\s]{1,500}$/;
const regexVacio = /^\s*$/;

const errorName = document.getElementById("name_error");
const errorEmail = document.getElementById("email_error");
const errorSubject = document.getElementById("subject_error");
const errorMessage = document.getElementById("message_error");


const pintarMensajeError = (errores) => {
    errores.forEach(element => {
        element.tipo.style.display="block";
        element.tipo.textContent = element.msg;
    });
}

const pintarMensajeExito = () => {
    
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const errores = [];

    if(!regexName.test(nombre.value) || !nombre.value.trim()){
        nombre.style.borderColor = "red";
        errores.push ({
            tipo: errorName,
            msg: "Nombre requerido"
        })
    } else {
        nombre.style.borderColor = "darkgrey";
        errorName.style.display="none";
    }

    if(!regexEmail.test(correo.value)){
        correo.style.borderColor = "red";
        errores.push ({
            tipo: errorEmail,
            msg: "Email invalido"
        })
    } else {
        errorName.style.display="none";
        correo.style.borderColor = "darkgrey";
    }

    if(!correo.value.trim()){
        correo.style.borderColor = "red";
        errores.push ({
            tipo: errorEmail,
            msg: "Email requerido"
        })
    } else {
        errorEmail.style.display="none";
        correo.style.borderColor = "darkgrey";
    }

    if(!regexSubject.test(asunto.value) || !asunto.value.trim()){
        asunto.style.borderColor = "red";
        errores.push ({
            tipo: errorSubject,
            msg: "Asunto requerido"
        })
    }else {
        errorSubject.style.display="none";
        asunto.style.borderColor = "darkgrey";
    }

    if(!regexMessage.test(mensaje.value) || !mensaje.value.trim()){
        mensaje.style.borderColor = "red";
        errores.push ({
            tipo: errorMessage,
            msg: "Mensaje requerido"
        })
    }else {
        errorMessage.style.display="none";
        mensaje.style.borderColor = "darkgrey";
    }

    if(errores.length !== 0 ){
        pintarMensajeError(errores);
        return;
    }

    pintarMensajeExito();
    

})
*/