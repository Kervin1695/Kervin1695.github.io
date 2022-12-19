export class NodoArbolBinario{
    constructor(podcast){
        this.podcast = podcast;
        this.nodoPadre = null;
        this.hijoIzquierdo = null;
        this.hijoDerecho = null;
    }

    getNodoPadre(){
        return this.nodoPadre;
    }

    getHijoIzquierdo(){
        return this.hijoIzquierdo;
    }

    getHijoDerecho(){
        return this.hijoDerecho;
    }

    setNodoPadre(nodoPadre){
        this.nodoPadre = nodoPadre;
    }

    setHijoIzquierdo(hijoIzquierdo){
        this.hijoIzquierdo = hijoIzquierdo;
    }

    setHijoDerecho(hijoDerecho){
        this.hijoDerecho = hijoDerecho;
    }

    getPodcast(){
        return this.podcast;
    }

    setPodcast(podcast){
        this.podcast = podcast;
    }
}