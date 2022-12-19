import { ListaCircular } from "../Estructuras/ListaCircular.js";
import { Pila } from "../Estructuras/Pila.js";
import { Cola } from "../Estructuras/Cola.js";

export class NodoSimple{
    constructor(usuario){
        this.usuario = usuario;
        this.siguiente = null;
        this.amigos = new Pila();
        this.bloqueados = new Cola();
        this.playlists = new ListaCircular();
    }

    getUsuario(){
        return this.usuario;
    }

    getSiguiente(){
        return this.siguiente;
    }

    setSiguiente(siguiente){
        this.siguiente = siguiente;
    }

    setUsuario(usuario){
        this.usuario = usuario;
    }

    getAmigos(){
        return this.amigos;
    }

    getBloqueados(){
        return this.bloqueados;
    }

    getPlaylists(){
        return this.playlists;
    }

    setAmigos(amigos){
        this.amigos = amigos;
    }

    setBloqueados(bloqueados){
        this.bloqueados = bloqueados;
    }

    setPlaylists(playlists){
        this.playlists = playlists;
    }

    
}