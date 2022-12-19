export class NodoMD{
    constructor(cancion, mes, dia, artista){
        this.cancion = cancion;
        this.mes = mes;
        this.dia = dia;
        this.artista = artista;
        this.nodoArriba = null;
        this.nodoAbajo = null;
        this.nodoIzquierda = null;
        this.nodoDerecha = null;
    }

    getCancion(){
        return this.cancion;
    }

    setCancion(nuevaCancion){
        this.cancion = nuevaCancion;
    }

    getMes(){
        return this.mes;
    }

    setMes(nuevoMes){
        this.mes = nuevoMes;
    }

    getDia(){
        return this.dia;
    }

    setDia(nuevoDia){
        this.dia = nuevoDia;
    }

    getNodoArriba(){
        return this.nodoArriba;
    }

    setNodoArriba(nuevoNodo){
        this.nodoArriba = nuevoNodo;
    }

    getNodoAbajo(){
        return this.nodoAbajo;
    }

    setNodoAbajo(nuevoNodo){
        this.nodoAbajo = nuevoNodo;
    }

    getNodoDerecha(){
        return this.nodoDerecha;
    }

    setNodoDerecha(nuevoNodo){
        this.nodoDerecha = nuevoNodo;
    }

    getNodoIzquierda(){
        return this.nodoIzquierda;
    }

    setNodoIzquierda(nuevoNodo){
        this.nodoIzquierda = nuevoNodo;
    }

    getArtista(){
        return this.artista;
    }

    setArtista(nuevoArtista){
        this.artista = nuevoArtista;
    }

}