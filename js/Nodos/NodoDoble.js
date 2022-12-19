export class NodoDoble{

    constructor(artista){
        this.artista = artista;
        this.siguiente = null;
        this.anterior = null;
        this.misCanciones = null;
    }

    getArtista(){
        return this.artista;
    }

    getSiguiente(){
        return this.siguiente;
    }

    getAnterior(){
        return this.anterior;
    }

    setSiguiente(siguiente){
        this.siguiente = siguiente;
    }

    setAnterior(anterior){
        this.anterior = anterior;
    }

    setArtista(artista){
        this.artista = artista;
    }

    getCanciones(){
        return this.misCanciones;
    }

    setCanciones(canciones){
        this.misCanciones = canciones;
    }
}