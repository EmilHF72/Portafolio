

function validador(){
const nombre = document.getElementById('nombre').value;
const email = document.getElementById("email").value;
const asunto = document.getElementById("asunto").value;
const mensaje = document.getElementById("mensaje").value;

const ExReg=/\w+@\w+\.+[a-z]/;

if(nombre === "" || email==="" || asunto==="" || mensaje===""){
    alert("Debe completar todos los campos");
    return false;
}

else if(nombre.length >30){
    alert("su nombre no debe tener más de 30 caracteres");
    return false;
}


else if(!ExReg.test(email)){
    alert("El correo no es valido");
    return false;
}


else if(asunto.length >50){
    alert("su asunto no debe tener más de 50 caracteres");
    return  false;
}
else if(mensaje.length >150){
    alert("su asunto no debe tener más de 150 caracteres");
    return  false;
}


};