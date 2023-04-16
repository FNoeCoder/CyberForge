    // Seleccionar los campos de entrada y los botones de guardar
    const inputs = document.querySelectorAll(".dato");
    const buttons = document.querySelectorAll(".save");

    // Agregar un event listener a cada campo de entrada
    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            // Habilitar el botón de guardar correspondiente y agregar la clase active
            buttons[index].disabled = false;
            buttons[index].classList.add("active");
        });
    });


const ojo = document.getElementById("ojo")
const contra = document.getElementById("contra")

ojo.addEventListener("click", ()=> {
    if (ojo.className === "fa-solid fa-eye"){
        ojo.className = "fa-sharp fa-solid fa-eye-slash"
        contra.type = "text"
    }else{
        ojo.className = "fa-solid fa-eye"
        contra.type = "password"
    }
})