import { miInformacion } from "./main.js";
import { cambiarVista } from "./user.js";
import { Cancion } from "./Cancion.js";
import { Artista } from "./Artista.js";
import { NodoMD } from "./Nodos/NodoMD.js";
import { Podcast } from "./Podcast.js";
import { graficarPodcasts, graficarArtistas, graficarPrograma } from "./admin.js";
import { NodoDoble } from "./Nodos/NodoDoble.js";

let btnRegresar = document.getElementById("volverOpciones_btn_opciones");
let btnPublicarCancion = document.getElementById("publicarCancion_btn_opciones");
let btnProgramarCancion = document.getElementById("programarCancion_btn_opciones");
let btnPublicarPodcast = document.getElementById("publicarPodcast_btn_opciones");

let inputNombreCancion = document.getElementById("nombreCancion_btn_opciones");
let inputNombreCancionProgramada = document.getElementById("nombreCancionProgramada_btn_opciones");
let inputNombreArtistaProgramada = document.getElementById("nombreArtistaProgramada_btn_opciones");
let inputMesProgramada = document.getElementById("mesProgramada_btn_opciones");
let inputDiaProgramada = document.getElementById("diaProgramada_btn_opciones");
let inputNombrePodcast = document.getElementById("nombrePodcast_btn_opciones");
let inputTemaPodcast = document.getElementById("temaPodcast_btn_opciones");
let inputDuracionPodcast = document.getElementById("duracionPodcast_btn_opciones");
let inputInvitadoPodcast = document.getElementById("invitadoPodcast_btn_opciones");


if (btnRegresar){
    btnRegresar.addEventListener('click', () => {
        cambiarVista("opcionesMusica", "vistaUser");
    });
}

if (btnPublicarCancion){
    btnPublicarCancion.addEventListener('click', () => {
        let nombreCancion = inputNombreCancion.value;
        console.log(nombreCancion);
        let nombreArtista = miInformacion.getUsuarioActual().getUsuario().getName();
        let nuevaCancion = new Cancion(nombreArtista, nombreCancion, null, null);
        console.log(nuevaCancion);
        let nuevoArtista = new Artista(nombreArtista, null, null);
        let nuevoNodoDoble = new NodoDoble(nuevoArtista);

        miInformacion.getMiListaDoble().insertarArtista(nuevoNodoDoble);
        miInformacion.getMiListaDoble().insertarCancion(nombreArtista, nuevaCancion);
        miInformacion.getMisCanciones().agregarNodo(nuevaCancion);
        console.log(miInformacion)

        graficarArtistas("graficarArtistas_opciones");

        inputNombreCancion.value = "";
    });
}

if (btnProgramarCancion){
    btnProgramarCancion.addEventListener('click', () => {
        let nombreCancion = inputNombreCancionProgramada.value;
        let nombreArtista = inputNombreArtistaProgramada.value;
        let mes = inputMesProgramada.value;
        let dia = inputDiaProgramada.value; 

        let nuevoPrograma = new NodoMD(nombreCancion, mes, dia,nombreArtista);
        miInformacion.getMiMatrizDispersa().agregarNodo(nuevoPrograma);
        console.log(miInformacion);

        graficarPrograma("graficarPrograma_opciones");

        inputNombreCancionProgramada.value = "";
        inputNombreArtistaProgramada.value = "";
        inputMesProgramada.value = "";
        inputDiaProgramada.value = "";
    });
}

if (btnPublicarPodcast){
    btnPublicarPodcast.addEventListener('click', () => {
        let nombrePodcast = inputNombrePodcast.value;
        let tema = inputTemaPodcast.value;
        let duracion = inputDuracionPodcast.value;
        let invitados = [];
        let invitado = inputInvitadoPodcast.value;
        invitados.push(invitado);

        let nuevoPodcast = new Podcast(nombrePodcast, tema, invitados, duracion);
        miInformacion.getMiArbolBinario().agregarNodo(nuevoPodcast);

        graficarPodcasts("graficaPodcast_opciones");
        
        inputNombrePodcast.value = "";
        inputTemaPodcast.value = "";
        inputDuracionPodcast.value = "";
        inputInvitadoPodcast.value = "";
    });
}





/*<h2>Opciones Musica</h2>
        <div id="publicarCanciones">
            <input type="text" id="nombreCancion_btn_opciones" placeholder="Nombre de la Cancion"><br>
            <button id="publicarCancion_btn_opciones">Publicar Cancion</button>
        </div>

        <div id="programarMusica">
            <input type="text" id="nombreCancionProgramada_btn_opciones" placeholder="Nombre de la Cancion"><br>
            <input type="text" id="nombreArtistaProgramada_btn_opciones" placeholder="Nombre del Artista"><br>
            <input type="text" id="mesProgramada_btn_opciones" placeholder="Mes"><br>
            <input type="text" id="diaProgramada_btn_opciones" placeholder="Dia"><br>
            <button id="programarCancion_btn_opciones">Programar Cancion</button>
        </div>

        <div id="publicarPodcasts">
            <input type="text" id="nombrePodcast_btn_opciones" placeholder="Nombre del Podcast"><br>
            <input type="text" id="temaPodcast_btn_opciones" placeholder="Tema"><br>
            <input type="text" id="duracionPodcast_btn_opciones" placeholder="Duracion"><br>
            <input type="text" id="invitadoPodcast_btn_opciones" placeholder="Invitado"><br>
            
            <button id="publicarPodcast_btn_opciones">Publicar Podcast</button>
        </div>*/