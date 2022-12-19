import { miInformacion } from "./main.js";
import { cambiarVista } from "./user.js";
import { graficarUsuario } from "./admin.js";

let btnRegresar = document.getElementById("volverAmigos_btn_amigos");
let btnVerUsuarios = document.getElementById("verUsuarios_btn_amigos");
let btnGraficarAmigos = document.getElementById("graficarAmigos_btn_amigos");
let btnGraficarBloqueados = document.getElementById("graficarBloqueados_btn_amigos");
let btnAgregarAmigo = document.getElementById("agregarAmigo_btn");
let btnBloquearAmigo = document.getElementById("bloquearAmigo_btn");
let btnDesbloquearAmigo = document.getElementById("desbloquearAmigo_btn");

let inputNombreAmigo = document.getElementById("nombreAmigo_input");

if (btnRegresar){
    btnRegresar.addEventListener('click', () => {
        cambiarVista("amigos", "vistaUser");
    });
}

if (btnVerUsuarios){
    btnVerUsuarios.addEventListener('click', () => {
        graficarUsuario("contenedorUsuarios_amigos");
    });
}

if (btnGraficarAmigos){
    btnGraficarAmigos.addEventListener('click', () => {
        graficarAmigos();
    });
}

function graficarAmigos(){
    document.getElementById("contenedorGraficas_amigos").innerHTML = "";
    let amigos = miInformacion.getUsuarioActual().getAmigos();
    let aux = amigos.getCabeza();

    while (aux != null){
        let div = document.createElement("div");
        div.innerHTML = aux.getUsuario().getUsername();
        div.style.width = "100px";
        div.style.height = "30px";
        div.style.backgroundColor = "blue";
        div.style.border = "1px solid black";
        div.style.color = "white";
        document.getElementById("contenedorGraficas_amigos").appendChild(div);
        aux = aux.getSiguiente();
    }

}

if (btnAgregarAmigo){
    btnAgregarAmigo.addEventListener('click', () => {
        agregarAmigo(inputNombreAmigo.value);
    });
}

function agregarAmigo(nombreUsuario){   
    let usuario = miInformacion.getMiLista().buscarUsuario(nombreUsuario);
    if (usuario != null){
        miInformacion.getUsuarioActual().getAmigos().push(usuario.getUsuario());
    }

    graficarAmigos();
}

if (btnBloquearAmigo){
    btnBloquearAmigo.addEventListener('click', () => {
        bloquearAmigo();
    });
}

function bloquearAmigo(){
    let usuario = miInformacion.getUsuarioActual().getAmigos().pop();
    if (usuario != null){
        miInformacion.getUsuarioActual().getBloqueados().encolar(usuario.getUsuario());
    }

    graficarBloqueados();
    graficarAmigos();
}

function graficarBloqueados(){
    document.getElementById("contenedorBloqueados_amigos").innerHTML = "";
    let bloqueados = miInformacion.getUsuarioActual().getBloqueados();
    let aux = bloqueados.getCabeza();

    while (aux != null){
        let div = document.createElement("div");
        div.innerHTML = aux.getUsuario().getUsername();
        div.style.width = "60px";
        div.style.height = "100px";
        div.style.backgroundColor = "red";
        div.style.border = "1px solid black";
        div.style.color = "white";
        div.style.float = "left";
        document.getElementById("contenedorBloqueados_amigos").appendChild(div);
        aux = aux.getSiguiente();
    }

}

if (btnGraficarBloqueados){
    btnGraficarBloqueados.addEventListener('click', () => {
        graficarBloqueados();
    });
}

if (btnDesbloquearAmigo){
    btnDesbloquearAmigo.addEventListener('click', () => {
        desbloquearAmigo();
    });
}

function desbloquearAmigo(){
    let usuario = miInformacion.getUsuarioActual().getBloqueados().desencolar();
    if (usuario != null){
        miInformacion.getUsuarioActual().getAmigos().push(usuario.getUsuario());
    }

    graficarAmigos();
    graficarBloqueados();
}

