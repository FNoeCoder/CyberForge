const img_usuario = document.getElementById("img_usuario")

var img_largo = img_usuario.clientWidth
var img_alto = img_usuario.clientHeight

if (img_largo > img_alto){
    img_usuario.style.height = "100%"
    console.log("largo");
}
else if (img_alto > img_largo){
    img_usuario.style.width = "100%"
    console.log("ancho");
}else{
    img_usuario.style.height = "100%"
}