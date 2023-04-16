const imgs_products = document.getElementsByClassName("img_producto")
const titulos_products = document.getElementsByClassName("nombre_produc")

for(let i=0; i<imgs_products.length;i++){
    let img_largo = imgs_products[i].clientWidth
    let img_alto = imgs_products[i].clientHeight
    
    if (img_largo > img_alto){
        imgs_products[i].style.width = "100%"
    }
    else if (img_alto > img_largo){
        imgs_products[i].style.height = "100%"
    }else{
        imgs_products[i].style.width = "100%"
    }
}





