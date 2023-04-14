const img_usuario = document.getElementById("img_usuario")

var img_largo = img_usuario.clientWidth
var img_alto = img_usuario.clientHeight

if (img_largo > img_alto){
    img_usuario.style.height = "100%"
    console.log("Es mas largo");
}
else if (img_alto > img_largo){
    img_usuario.style.widows = "100%"
    console.log("Es mas alto");
}else{
    img_usuario.style.widows = "100%"
    img_usuario.style.height = "100%"
    console.log("Es un cuadrado");
}