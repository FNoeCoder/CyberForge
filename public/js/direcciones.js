const Beditar = document.getElementById("editar");
const guardar_direc = document.getElementById("contenedor_botones_direc");
const datos_direc_guar = document.getElementsByClassName("datos_direc_guar");
const datos_direc = document.getElementsByClassName("datos_direc");

Beditar.addEventListener("click", () => {
    for (let i = 0; i < datos_direc.length; i++) {
        const texto = datos_direc_guar[i].innerText;
        const indice = texto.indexOf(":") + 1;
        datos_direc[i].value = texto.slice(indice).trim();
    }

    guardar_direc.innerHTML = `<button type="button" id="cancelar">Cancelar</button>
                                <button type="submit" id="guardar_dirc" name="add_update" value="guardar">GUARDAR</button>`;
    document.getElementById("cancelar").addEventListener("click", ()=>{
        guardar_direc.innerHTML = `<button id="agregar_dirc" name="add_update" value="agregar">AGREGAR DIRECCION</button>`
        for (let i = 0; i < datos_direc.length; i++) {
            datos_direc[i].value = ""
        }
    })
});

