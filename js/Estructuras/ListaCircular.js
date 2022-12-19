import { NodoCircular } from "../Nodos/NodoCircular.js";

export class ListaCircular{
    constructor(){
        this.cabeza = null;
    }

    agregarNodo(cancion){
        let auxiliar = new NodoCircular(cancion);

        let temporal = this.cabeza;

        if (this.cabeza == null){
            this.cabeza = auxiliar;
            auxiliar.siguiente = this.cabeza;
            this.cabeza.anterior = auxiliar;
        } else {
            while(temporal.siguiente != this.cabeza){
                temporal = temporal.siguiente;
            }

            temporal.siguiente = auxiliar;
            auxiliar.anterior = temporal;
            auxiliar.siguiente = this.cabeza;
            this.cabeza.anterior = auxiliar;
        }
    }

    // eliminarNodo(nodoEliminar){
    //     let temporal = this.cabeza;

    //     if (this.cabeza == null){
    //         console.log("La lista esta vacia")
    //     } else {
    //         while(temporal.siguiente != this.cabeza){
    //             if (nodoEliminar.cancion.getNombre() == temporal.cancion.getNombre()){
    //                 if (nodoEliminar == this.cabeza){
    //                     this.cabeza = temporal.siguiente;
    //                     temporal.anterior.siguiente = temporal.siguiente;
    //                     temporal.siguiente.anterior = temporal.anterior;
    //                     temporal.anterior = null;
    //                     temporal.siguiente = null;
    //                 }
    //                 temporal.anterior.siguiente = temporal.siguiente;
    //                 temporal.siguiente.anterior = temporal.anterior;
    //                 temporal.anterior = null;
    //                 temporal.siguiente = null;
    //             }
    //             temporal = temporal.siguiente;
    //         }
    //     }
    // }

    imprimirNodos(){
        let temporal = this.cabeza;

        if (this.cabeza == null){
            console.log("La lista esta vacia")
        } else {
            while(temporal.siguiente != this.cabeza){
                console.log(temporal.cancion.getNombre())
                temporal = temporal.siguiente;
            }
            console.log(temporal.cancion.getNombre())
        }
    }

    getCabeza(){
        return this.cabeza;
    }

    setCabeza(cabeza){
        this.cabeza = cabeza;
    }
}
