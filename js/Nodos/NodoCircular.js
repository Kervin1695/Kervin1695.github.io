export class NodoCircular{
    constructor(cancion){
        this.cancion = cancion;
        this.siguiente = null;
        this.anterior = null;
    }

    getSiguiente(){
        return this.siguiente;
    }

    setSiguiente(siguiente){
        this.siguiente = siguiente;
    }

    getAnterior(){
        return this.anterior;
    }

    setAnterior(anterior){
        this.anterior = anterior;
    }

    getCancion(){
        return this.cancion;
    }

    setCancion(cancion){
        this.cancion = cancion;
    }

}
