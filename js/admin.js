import { cerrarSesion, miInformacion } from "./main.js";
import { Usuario } from "./Usuario.js";
import { Artista } from "./Artista.js";
import { Cancion } from "./Cancion.js";
import { Podcast } from "./Podcast.js";
import { NodoMD } from "./Nodos/NodoMD.js";
import { NodoDoble } from "./Nodos/NodoDoble.js";

let btn_cargarUsuarios = document.getElementById("subirUsuarios_btn");
let btn_cargarArtistas = document.getElementById("subirArtistas_btn");
let btn_cargarCanciones = document.getElementById("subirCanciones_btn");
let btn_cargarPodcasts = document.getElementById("subirPodcasts_btn");
let btn_cargarPrograma = document.getElementById("subirPrograma_btn");

let miUsuarioNuevo;
let miArtistaNuevo;
let miCancionNueva;
let miPodcastNuevo;
let miProgramaNuevo;

if (btn_cargarUsuarios) {
    btn_cargarUsuarios.addEventListener('change', () => {
        let file = btn_cargarUsuarios.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            let usuarios = JSON.parse(reader.result);
            usuarios.forEach(usuario => {
                miUsuarioNuevo = new Usuario(usuario.dpi, usuario.name, usuario.username, usuario.password, usuario.phone, usuario.admin);
                miInformacion.miLista.agregarNodo(miUsuarioNuevo);
            });
            console.log(miInformacion.miLista);
        }
    });
}

if (btn_cargarArtistas) {
    btn_cargarArtistas.addEventListener('change', () => {
        let file = btn_cargarArtistas.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            let artistas = JSON.parse(reader.result);
            artistas.forEach(artista => {
                miArtistaNuevo = new Artista(null, null, null);
                miArtistaNuevo.setName(artista.name);
                miArtistaNuevo.setAge(artista.age);
                miArtistaNuevo.setCountry(artista.country);
                let miNodo = new NodoDoble(miArtistaNuevo);
                miInformacion.getMiListaDoble().insertarArtista(miNodo);
            });
            console.log(miInformacion.getMiListaDoble());
        }
    });
}

if (btn_cargarCanciones) {
    let numeroCanciones = 0;
    btn_cargarCanciones.addEventListener('change', () => {
        let file = btn_cargarCanciones.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            let canciones = JSON.parse(reader.result);
            canciones.forEach(cancion => {
                miCancionNueva = new Cancion(cancion.artist, cancion.name, cancion.duration, cancion.gender);
                miInformacion.getMiListaDoble().insertarCancion(miCancionNueva.getArtista(), miCancionNueva);
                miInformacion.getMisCanciones().agregarNodo(miCancionNueva);
            });
            console.log(miInformacion.getMiListaDoble());
        }
    });
}

if (btn_cargarPodcasts) {
    btn_cargarPodcasts.addEventListener('change', () => {
        let file = btn_cargarPodcasts.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            let podcasts = JSON.parse(reader.result);
            console.log("hola");
            podcasts.forEach(podcast => {
                miPodcastNuevo = new Podcast(podcast.name, podcast.topic, podcast.guests, podcast.duration);
                miInformacion.getMiArbolBinario().agregarNodo(miPodcastNuevo);
            });
            console.log(miInformacion.getMiArbolBinario());
        }
    });
}

if (btn_cargarPrograma) {
    btn_cargarPrograma.addEventListener('change', () => {
        let file = btn_cargarPrograma.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            let programa = JSON.parse(reader.result);
            programa.forEach(programa => {
                miProgramaNuevo = new NodoMD(programa.song, programa.month, programa.day, programa.artist);
                miInformacion.getMiMatrizDispersa().agregarNodo(miProgramaNuevo);
            });
            console.log(miInformacion.getMiMatrizDispersa());
        }
    });
}

let btnLogout = document.getElementById("logout_btn");

if (btnLogout) {
    btnLogout.addEventListener('click', () => {
        cerrarSesion("vistaAdmin");
    });
}


let btnGraficaUsuarios = document.getElementById("graficaUsuarios_btn");
let btnGraficaArtistas = document.getElementById("graficaArtistas_btn");
let btnGraficaPodcasts = document.getElementById("graficaPodcasts_btn");
let btnGraficaPrograma = document.getElementById("graficaPrograma_btn");


let contenedor = document.getElementById("contenedorGraficas");

export function graficarUsuario(areaGraficar) {
    let codigodot = "digraph G{\nlabel=\" Usuarios \";\nnode [shape=box];\n graph [rankdir = LR];";
    let temporal = miInformacion.getMiLista().cabeza;
    let conexiones = "";
    let nodos = "";
    let rango = "rank = same;";
    let numnodo = 0;
    while (temporal != null) {
        nodos += "NA" + numnodo + "[label=\"" + temporal.getUsuario().getName() + "\" ];\n";
        rango += "NA" + numnodo + ";";
        if (temporal.siguiente != null) {
            let auxnum = numnodo + 1
            conexiones += "NA" + numnodo + " -> NA" + auxnum + ";\n";
        }
        temporal = temporal.getSiguiente();
        numnodo++;
    }
    codigodot += "//agregando nodos\n"
    codigodot += nodos + "\n"
    codigodot += "//agregando conexiones o flechas\n"
    codigodot += "{\n" + conexiones + "\n}"
    codigodot += "//agregando rango\n"
    codigodot += "{\n" + rango + "\n}\n}"
    //console.log(codigodot)
    d3.select("#" + areaGraficar).graphviz()
        .width("100%")
        .renderDot(codigodot)
}

if (btnGraficaUsuarios) {
    document.getElementById("contenedorGraficas").innerHTML = "";
    btnGraficaUsuarios.addEventListener('click', () => {
        graficarUsuario("contenedorGraficas");
    });
}

export function graficarArtistas(areaGraficar) {
    let codigodot = "digraph G{\nlabel=\" Artistas \";\nnode [shape=box];\n graph [rankdir = both];\n size = \"18,8\";\n";
    let temporal = miInformacion.getMiListaDoble().cabeza;
    let conexiones = "";
    let nodos = "";
    let rango = "rank = same;";
    let numnodo = 0;
    let auxnum2 = 0;
    while (temporal != null) {
        nodos += "NA" + numnodo + "[label=\"" + temporal.getArtista().getName() + "\" ];\n";
        rango += "NA" + numnodo + ";";
        if (temporal.siguiente != null) {
            let auxnum = numnodo + 1
            conexiones += "NA" + numnodo + " -> NA" + auxnum + ";\n";
            conexiones += "NA" + auxnum + " -> NA" + numnodo + ";\n";
            let aux2 = temporal.getCanciones();
            if (aux2 != null) {
                nodos += "NC" + auxnum2 + "[label=\"" + aux2.getArtista().getNombre() + "\" ];\n";
                conexiones += "NA" + numnodo + " -> NC" + auxnum2 + ";\n";
                conexiones += "NC" + auxnum2 + " -> NA" + numnodo + ";\n";
                while (aux2.getSiguiente() != null) {
                    let auxnum3 = auxnum2 + 1;
                    nodos += "NC" + auxnum3 + "[label=\"" + aux2.getSiguiente().getArtista().getNombre() + "\" ];\n";
                    conexiones += "NC" + auxnum2 + " -> NC" + auxnum3 + ";\n";
                    conexiones += "NC" + auxnum3 + " -> NC" + auxnum2 + ";\n";
                    aux2 = aux2.getSiguiente();
                    auxnum2++;
                }
                auxnum2++;
            }
        }
        temporal = temporal.getSiguiente();
        numnodo++;
    }
    codigodot += "//agregando nodos\n"
    codigodot += nodos + "\n"
    codigodot += "//agregando conexiones o flechas\n"
    codigodot += "{\n" + conexiones + "\n}"
    codigodot += "//agregando rango\n"
    codigodot += "{\n" + rango + "\n}\n}"
    console.log(codigodot)
    d3.select("#" + areaGraficar).graphviz()
        .width("100%")
        .height(500)
        .renderDot(codigodot)
}

if (btnGraficaArtistas) {
    document.getElementById("contenedorGraficas").innerHTML = "";
    btnGraficaArtistas.addEventListener('click', () => {
        graficarArtistas("contenedorGraficas");
    });
}

export function graficarPodcasts(areaGraficar) {
    let codigodot = "digraph G{\nlabel=\" Podcasts \";\nnode [shape=ellipse];\n graph [rankdir = TB];";
    let temporal = miInformacion.getMiArbolBinario().raiz;
    let conexiones = "";
    let nodos = "";
    let numnodo = 0;
    nodos += "NA" + numnodo + "[label=\"" + temporal.getPodcast().getName() + "\" ];\n";
    let misrespuestas = agregarNodosHijosDot(temporal, numnodo, numnodo);
    numnodo++;
    nodos += misrespuestas[0];
    conexiones += misrespuestas[1];
    codigodot += "\n//agregando nodos\n"
    codigodot += nodos + "\n"
    codigodot += "//agregando conexiones o flechas\n"
    codigodot += "{\n" + conexiones + "\n}\n}"
    console.log(codigodot)
    d3.select("#" + areaGraficar).graphviz()
        .width("100%")
        .renderDot(codigodot)
}

if (btnGraficaPodcasts) {
    document.getElementById("contenedorGraficas").innerHTML = "";
    btnGraficaPodcasts.addEventListener('click', () => {
        graficarPodcasts("contenedorGraficas");
    });
}

export function graficarPrograma(areaGraficar) {
    let codigodot = "digraph G{\nlabel=\" Programa \";\nnode [shape=box];\n ";
    let temporal = miInformacion.getMiMatrizDispersa().getCabeza();
    let conexiones = "";
    let nodos = "";
    let rangoRaiz = "{rank = same;";
    let numnodo = 0;
    let auxnum2 = 0;


    nodos += "NA" + temporal.getMes() + temporal.getDia() + "[label=\"" + temporal.getMes()
        + "\", group =0, fixedsize=true, width=1.5, height=0.75];\n";
    rangoRaiz += "NA" + temporal.getMes() + temporal.getDia() + ";";

    while (temporal != null) {
        let rango2 = "{rank = same; ";
        if (temporal.getMes() == "Raiz") {
            let aux2 = temporal.getNodoDerecha();
            if (aux2 != null) {
                nodos += "NA" + aux2.getMes() + aux2.getDia() + "[label=\"" + aux2.getDia() + "\", group="
                    + aux2.getDia() + ", fixedsize=true, width=1.5, height=0.75];\n";
                rangoRaiz += "NA" + aux2.getMes() + aux2.getDia() + ";";
                conexiones += "NA" + temporal.getMes() + temporal.getDia() + " -> NA" + aux2.getMes() + aux2.getDia() + ";\n";
                conexiones += "NA" + aux2.getMes() + aux2.getDia() + " -> NA" + temporal.getMes() + temporal.getDia() + ";\n";
                while (aux2.getNodoDerecha() != null) {
                    let idAux2 = aux2.getMes() + aux2.getDia();
                    let idAux2Derecha = aux2.getNodoDerecha().getMes() + aux2.getNodoDerecha().getDia();
                    nodos += "NA" + idAux2Derecha + "[label=\"" + aux2.getNodoDerecha().getDia() + "\", group="
                        + aux2.getNodoDerecha().getDia() + ", fixedsize=true, width=1.5, height=0.75];\n";
                    rangoRaiz += "NA" + idAux2Derecha + ";";
                    conexiones += "NA" + idAux2 + " -> NA" + idAux2Derecha + ";\n";
                    conexiones += "NA" + idAux2Derecha + " -> NA" + idAux2 + ";\n";
                    aux2 = aux2.getNodoDerecha();
                }
                rangoRaiz += "};\n";
            }

            if (temporal.getNodoAbajo() != null) {
                let idTemporalAbajo = temporal.getNodoAbajo().getMes() + temporal.getNodoAbajo().getDia();
                nodos += "NA" + idTemporalAbajo + "[label=\"" + temporal.getNodoAbajo().getMes() + "\", group="
                    + temporal.getNodoAbajo().getDia() + ", fixedsize=true, width=1.5, height=0.75];\n";
                conexiones += "NA" + temporal.getMes() + temporal.getDia() + " -> NA" + idTemporalAbajo + ";\n";
                conexiones += "NA" + idTemporalAbajo + " -> NA" + temporal.getMes() + temporal.getDia() + ";\n";
            }
            temporal = temporal.getNodoAbajo();
        } else {
            if (temporal.getDia() == 0) {
                rango2 += "NA" + temporal.getMes() + temporal.getDia() + ";";
                let aux2 = temporal.getNodoDerecha();
                if (aux2 != null) {
                    let labelAux2 = aux2.getArtista() + "\\n" + aux2.getCancion();
                    nodos += "NA" + aux2.getMes() + aux2.getDia() + "[label=\"" + labelAux2 + "\", group=" + aux2.getDia() +
                        ", fixedsize=true, width=1.5, height=0.75];\n";
                    conexiones += "NA" + temporal.getMes() + temporal.getDia() + " -> NA" + aux2.getMes() + aux2.getDia() + ";\n";
                    conexiones += "NA" + aux2.getMes() + aux2.getDia() + " -> NA" + temporal.getMes() + temporal.getDia() + ";\n";
                    rango2 += "NA" + aux2.getMes() + aux2.getDia() + ";";
                    while (aux2.getNodoDerecha() != null) {
                        let idAux2 = aux2.getMes() + aux2.getDia();
                        let idAux2Derecha = aux2.getNodoDerecha().getMes() + aux2.getNodoDerecha().getDia();
                        let labelAux2Derecha = aux2.getNodoDerecha().getArtista() + "\\n" + aux2.getNodoDerecha().getCancion();
                        nodos += "NA" + idAux2Derecha + "[label=\"" + labelAux2Derecha + "\", group=" + aux2.getNodoDerecha().getDia()
                            + ", fixedsize=true, width=1.5, height=0.75];\n";
                        conexiones += "NA" + idAux2 + " -> NA" + idAux2Derecha + ";\n";
                        conexiones += "NA" + idAux2Derecha + " -> NA" + idAux2 + ";\n";
                        let idNodoArriba = aux2.getNodoArriba().getMes() + aux2.getNodoArriba().getDia();
                        conexiones += "NA" + idAux2 + " -> NA" + idNodoArriba + ";\n";
                        conexiones += "NA" + idNodoArriba + " -> NA" + idAux2 + ";\n";
                        rango2 += "NA" + idAux2Derecha + ";";

                        aux2 = aux2.getNodoDerecha();
                    }
                    let idAux2 = aux2.getMes() + aux2.getDia();
                    let idNodoArriba = aux2.getNodoArriba().getMes() + aux2.getNodoArriba().getDia();
                    conexiones += "NA" + idAux2 + " -> NA" + idNodoArriba + ";\n";
                    conexiones += "NA" + idNodoArriba + " -> NA" + idAux2 + ";\n";
                    rango2 += "}\n";
                    rangoRaiz += rango2;
                }
                if (temporal.getNodoAbajo() != null) {
                    let idTemporalAbajo = temporal.getNodoAbajo().getMes() + temporal.getNodoAbajo().getDia();
                    nodos += "NA" + idTemporalAbajo + "[label=\"" + temporal.getNodoAbajo().getMes() +
                        "\", group = 0, fixedsize=true, width=1.5, height=0.75];\n";
                    conexiones += "NA" + temporal.getMes() + temporal.getDia() + " -> NA" + idTemporalAbajo + ";\n";
                    conexiones += "NA" + idTemporalAbajo + " -> NA" + temporal.getMes() + temporal.getDia() + ";\n";
                }
                temporal = temporal.getNodoAbajo();
            }
        }
    }

    codigodot += "//agregando nodos\n"
    codigodot += nodos + "\n"
    codigodot += "//agregando conexiones o flechas\n"
    codigodot += "{\n" + conexiones + "\n}"
    codigodot += "//agregando rango\n"
    codigodot += "\n" + rangoRaiz + "\n}\n}"
    console.log(codigodot)
    d3.select("#" + areaGraficar).graphviz()
        .width("100%")
        .height(500)
        .renderDot(codigodot)
}

if (btnGraficaPrograma) {
    document.getElementById("contenedorGraficas").innerHTML = "";
    btnGraficaPrograma.addEventListener('click', () => {
        graficarPrograma("contenedorGraficas");
    });

}


function agregarNodosHijosDot(nodoActual, numNodoActual, numnodo) {
    console.log(nodoActual);
    let nodos = "";
    let conexiones = "";

    if (nodoActual != null) {
        if (nodoActual.getHijoIzquierdo() != null) {
            numnodo++;
            nodos += "NA" + numnodo + "[label=\"" + nodoActual.getHijoIzquierdo().getPodcast().getName() + "\" ];\n";
            conexiones += "NA" + numNodoActual + " -> NA" + numnodo + ";\n";
            let mirespuesta = agregarNodosHijosDot(nodoActual.getHijoIzquierdo(), numnodo, numnodo);
            nodos += mirespuesta[0];
            conexiones += mirespuesta[1];
            numnodo = mirespuesta[2];
        } else if (nodoActual.getHijoIzquierdo() == null && nodoActual.getHijoDerecho() != null) {
            numnodo++;
            nodos += "NA" + numnodo + "[shape=point];\n";
            conexiones += "NA" + numNodoActual + " -> NA" + numnodo + ";\n";
            let mirespuesta = agregarNodosHijosDot(nodoActual.getHijoIzquierdo(), numnodo, numnodo);
            nodos += mirespuesta[0];
            conexiones += mirespuesta[1];
            numnodo++;
            numnodo = mirespuesta[2];
        }

        if (nodoActual.getHijoDerecho() != null) {
            numnodo++;
            nodos += "NA" + numnodo + "[label=\"" + nodoActual.getHijoDerecho().getPodcast().getName() + "\" ];\n";
            conexiones += "NA" + numNodoActual + " -> NA" + numnodo + ";\n";
            let mirespuesta = agregarNodosHijosDot(nodoActual.getHijoDerecho(), numnodo, numnodo);
            nodos += mirespuesta[0];
            conexiones += mirespuesta[1];
            numnodo++;
            numnodo = mirespuesta[2];
        } else if (nodoActual.getHijoDerecho() == null && nodoActual.getHijoIzquierdo() != null) {
            numnodo++;
            nodos += "NA" + numnodo + "[shape=point];\n";
            conexiones += "NA" + numNodoActual + " -> NA" + numnodo + ";\n";
            let mirespuesta = agregarNodosHijosDot(nodoActual.getHijoDerecho(), numnodo, numnodo);
            nodos += mirespuesta[0];
            conexiones += mirespuesta[1];
            numnodo++;
            numnodo = mirespuesta[2];
        }
    }
    let respuesta = [nodos, conexiones, numnodo];

    return respuesta;
}