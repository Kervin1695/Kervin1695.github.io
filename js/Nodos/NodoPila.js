export class NodoPila{
    constructor(usuario){
        this.usuario = usuario;
        this.siguiente = null;
    }

    getSiguiente(){
        return this.siguiente;
    }

    setSiguiente(siguiente){
        this.siguiente = siguiente;
    }

    getUsuario(){
        return this.usuario;
    }

    setUsuario(usuario){
        this.usuario = usuario;
    }
}