import { NodoCola } from "../Nodos/NodoCola.js";

export class Cola{
    constructor(){
        this.cabeza = null;
    }

    encolar(usuario){
        let auxiliar = new NodoCola(usuario);

        let temporal = this.cabeza;

        if (this.cabeza == null){
            this.cabeza = auxiliar;
        } else {
            while(temporal.siguiente != null){
                temporal = temporal.siguiente;
            }
            temporal.siguiente = auxiliar;
        }
    }

    desencolar(){
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