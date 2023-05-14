
const advertencia = document.getElementById("advertencia")

const usuario = document.getElementById("usuario")
const botonEnviar = document.getElementById("botonSubmit")

const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")
const correo = document.getElementById("correo")

const contra1 = document.getElementById("contra1")
const contra2 = document.getElementById("contra2")

usuario.addEventListener("input", ()=>{
    usuario.value = usuario.value.replace(" ","")
    if(usuario.value.length > 15){
        advertencia.innerText = "Caracteres en usuario en maximo de 15"
        botonEnviar.disabled = true;
    }else{
        advertencia.innerText = ""
        botonEnviar.disabled = false;
    }
})
usuario.addEventListener("blur", ()=>{
    const miString = "abc123DEF456";

    const patron = /^[a-zA-Z0-9]+$/;
    
    if (patron.test(usuario.value)) {
        advertencia.innerText = ""
        botonEnviar.disabled = false;
    } else {
        advertencia.innerText = "El usuario solo puede tener letras y números"
        botonEnviar.disabled = true;
    }
})
function nombreLargo(){
    if(nombre.value.length + apellidos.value.length > 100){
        advertencia.innerText = "Nombre demaciado largo"
        botonEnviar.disabled = true;
    }else{
        advertencia.innerText = ""
        botonEnviar.disabled = false;
    }
}
nombre.addEventListener("input", ()=>{
    nombreLargo()
})
apellidos.addEventListener("input", ()=>{
    nombreLargo()
})

correo.addEventListener("input", ()=>{
    let miCorreo = correo.value;
    let patron = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    
    if (!patron.test(miCorreo)) {
        advertencia.innerText = "Correo no valido"
        botonEnviar.disabled = true;
    } else {
        advertencia.innerText = ""
        botonEnviar.disabled = false;    
    }
        
})
contra1.addEventListener("blur",()=>{
    if(contra1.value.length < 8 || contra1.value.length >45){
        advertencia.innerText = "La contraseña debe estar en un rango entre 8-45"
        botonEnviar.disabled = true;       
    }else{
        advertencia.innerText = ""
        botonEnviar.disabled = false;   
    }
})

contra2.addEventListener("blur", ()=>{
    if(contra1.value === contra2.value){
        advertencia.innerText = ""
        botonEnviar.disabled = false;
    }else{
        advertencia.innerText = "Las contraseñas no son iguales"
        botonEnviar.disabled = true;
    }
})


