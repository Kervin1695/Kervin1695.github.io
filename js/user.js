import { cerrarSesion, miInformacion } from "./main.js";
import { graficarUsuario, graficarArtistas, graficarPodcasts, graficarPrograma } from "./admin.js";

let btnCerrarSesion = document.getElementById("logout_btn_user");
let btnVerAmigos = document.getElementById("verAmigos_btn_user");
let btnVerPlaylist = document.getElementById("verPlaylist_btn_user");
let btnGraficarUsuarios = document.getElementById("graficarUsuarios_btn_user");
let btnGraficarArtistas = document.getElementById("graficarArtistas_btn_user");
let btnGraficarPodcasts = document.getElementById("graficarPodcasts_btn_user");
let btnGraficarPrograma = document.getElementById("graficarPrograma_btn_user");
let btnOpcionesMusica = document.getElementById("verOpcionesMusica_btn_user");

let btnOrdenarAscendente = document.getElementById("ordenarAscendente_btn_user");
let btnOrdenarDescendente = document.getElementById("ordenarDescendente_btn_user");

if (btnCerrarSesion){
    btnCerrarSesion.addEventListener('click', () => {
        cerrarSesion("vistaUser");
    });
}

export function cambiarVista(vista1, vista2){
    document.getElementById(vista1).style.display = "none";
    document.getElementById(vista2).style.display = "block";
}

if (btnVerAmigos){
    btnVerAmigos.addEventListener('click', () => {
        cambiarVista("vistaUser", "amigos");
    });
}

if (btnVerPlaylist){
    btnVerPlaylist.addEventListener('click', () => {
        cambiarVista("vistaUser", "playlist");
    });
}

if (btnOpcionesMusica){
    btnOpcionesMusica.addEventListener('click', () => {
        cambiarVista("vistaUser", "opcionesMusica");
    });
}

if (btnGraficarUsuarios){
    document.getElementById("contenedorGraficas_user").innerHTML = "";
    btnGraficarUsuarios.addEventListener('click', () => {
        document.getElementById("contenedorGraficas_user").style.display = "block";
        graficarUsuario("contenedorGraficas_user");
    });
}

if (btnGraficarArtistas){
    document.getElementById("contenedorGraficas_user").innerHTML = "";
    btnGraficarArtistas.addEventListener('click', () => {
        cambiarVista("contenedorGraficas_user", "vistaArtistas");
        graficarArtistas("contenedorGraficaArtistas_user");
    });
}

if (btnGraficarPodcasts){
    document.getElementById("contenedorGraficas_user").innerHTML = "";
    btnGraficarPodcasts.addEventListener('click', () => {
        document.getElementById("contenedorGraficas_user").style.display = "block";
        graficarPodcasts("contenedorGraficas_user");
    });
}

if (btnGraficarPrograma){
    document.getElementById("contenedorGraficas_user").innerHTML = "";
    btnGraficarPrograma.addEventListener('click', () => {
        document.getElementById("contenedorGraficas_user").style.display = "block";
        graficarPrograma("contenedorGraficas_user");
    });
}

function ordenarAscendente(){
    miInformacion.getMiListaDoble().ordenarAscendente();
    document.getElementById("contenedorGraficaArtistas_user").innerHTML = "";
    graficarArtistas("contenedorGraficaArtistas_user");
}

if (btnOrdenarAscendente){
    btnOrdenarAscendente.addEventListener('click', () => {
        ordenarAscendente();
    });
}

function ordenarDescendente(){
    miInformacion.getMiListaDoble().ordenarDescendente();
    document.getElementById("contenedorGraficaArtistas_user").innerHTML = "";
    graficarArtistas("contenedorGraficaArtistas_user");
}

if (btnOrdenarDescendente){
    btnOrdenarDescendente.addEventListener('click', () => {
        ordenarDescendente();
    });
}
