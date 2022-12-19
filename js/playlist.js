import { cerrarSesion, miInformacion } from "./main.js";
import { cambiarVista } from "./user.js";
import { ListaCircular } from "./Estructuras/ListaCircular.js";

let btnRegresar = document.getElementById("volverAmigos_btn_playlist");
let btnAnteriorPlaylist = document.getElementById("playlistAnterior_btn");
let btnSiguientePlaylist = document.getElementById("playlistSiguiente_btn");
let inputArtistaPlaylist = document.getElementById("nombreArtistaPlaylist_input");
let inputCancionPlaylist = document.getElementById("nombreCancionPlaylist_input");
let btnAgregarCancionPlaylist = document.getElementById("agregarCancionPlaylist_btn");

let cancionActualPlaylist;

if (btnRegresar){
    btnRegresar.addEventListener('click', () => {
        cambiarVista("playlist", "vistaUser");
    });
}

if (btnAnteriorPlaylist){
    btnAnteriorPlaylist.addEventListener('click', () => {
        mostrarCancionPlaylist(cancionActualPlaylist.getAnterior(), "imagenPlaylist");
        cancionActualPlaylist = cancionActualPlaylist.getAnterior();
    });
}

if (btnSiguientePlaylist){
    btnSiguientePlaylist.addEventListener('click', () => {
        mostrarCancionPlaylist(cancionActualPlaylist.getSiguiente(), "imagenPlaylist");
        cancionActualPlaylist = cancionActualPlaylist.getSiguiente();
    });
}

function agregarCancionPlaylist(artista, cancion){
    let aux = miInformacion.getMisCanciones().getCabeza();
    while (aux != null){
        if (aux.getUsuario().getArtista() == artista && aux.getUsuario().getNombre() == cancion){
            miInformacion.getUsuarioActual().getPlaylists().agregarNodo(aux.getUsuario());
            return;
        }
        aux = aux.getSiguiente();
    }
}

if (btnAgregarCancionPlaylist){
    btnAgregarCancionPlaylist.addEventListener('click', () => {
        agregarCancionPlaylist(inputArtistaPlaylist.value, inputCancionPlaylist.value);
        mostrarCancionPlaylist(miInformacion.getUsuarioActual().getPlaylists().getCabeza().getAnterior(), "imagenPlaylist");
        cancionActualPlaylist = miInformacion.getUsuarioActual().getPlaylists().getCabeza().getAnterior();
    });
}

function mostrarCancionPlaylist(NodoCircularCancion, areaGraficar){
    let codigodot = "digraph G{\nlabel=\" Lista de Reproduccion \";\nnode [shape=box];\n graph [rankdir = LR];\n";
    let nodos = "NActual [label=\"" + NodoCircularCancion.getCancion().getNombre() + 
        " \n " + NodoCircularCancion.getCancion().getArtista() + "\n Cancion Actual\" ];\n"
    nodos += "NSiguiente [label=\"" + NodoCircularCancion.getSiguiente().getCancion().getNombre() + 
        " \n " + NodoCircularCancion.getSiguiente().getCancion().getArtista() + "\" ];\n"
    nodos += "NAnterior [label=\"" + NodoCircularCancion.getAnterior().getCancion().getNombre() +   
        " \n " + NodoCircularCancion.getAnterior().getCancion().getArtista() + "\" ];\n"
    codigodot += nodos + "\n"
    let conexiones = "NActual -> NSiguiente;\n"
    conexiones += "NActual -> NAnterior;\n"
    conexiones += "NSiguiente -> NActual;\n"
    conexiones += "NAnterior -> NActual;\n"
    codigodot += conexiones + "\n}\n"
    console.log(codigodot)
    d3.select("#" + areaGraficar).graphviz()
        .width("100%")
        .renderDot(codigodot)
}