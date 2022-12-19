import { NodoPila } from "../Nodos/NodoPila.js";

export class Pila{
    constructor(){
        this.cabeza = null;
    }

    push(usuario){
        let auxiliar = new NodoPila(usuario);

        if (this.cabeza == null){
            this.cabeza = auxiliar;
        } else {
            auxiliar.siguiente = this.cabeza;
            this.cabeza = auxiliar;
        }
    }

    pop(){
        if (this.cabeza == null){
            console.log("La cola esta vacia")
        } else {
            let temporal = this.cabeza;
            this.cabeza = this.cabeza.siguiente;
            return temporal;
        }
    }

    getCabeza(){
        return this.cabeza;
    }

    setCabeza(cabeza){
        this.cabeza = cabeza;
    }
}