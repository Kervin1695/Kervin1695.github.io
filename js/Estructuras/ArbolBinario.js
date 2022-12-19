import { NodoArbolBinario } from "../Nodos/NodoArbolBinario.js";

export class ArbolBinario{

    constructor(){
        this.raiz = null;
    }

    getRaiz(){
        return this.raiz;
    }

    setRaiz(raiz){
        this.raiz = raiz;
    }

    agregarNodo(podcast){
        let nuevoNodo = new NodoArbolBinario(podcast);
        if (this.raiz == null){
            this.raiz = nuevoNodo;
        } else {
            this.agregarNodosHijos(this.raiz, nuevoNodo);
        }
    }

    agregarNodosHijos(nodoActual, nuevoNodo){
        if (nuevoNodo.getPodcast().getName() < nodoActual.getPodcast().getName()){
            if (nodoActual.getHijoIzquierdo() == null){
                nodoActual.setHijoIzquierdo(nuevoNodo);
                nuevoNodo.setNodoPadre(nodoActual);
            } else {
                this.agregarNodosHijos(nodoActual.getHijoIzquierdo(), nuevoNodo);
            }
        } else {
            if (nodoActual.getHijoDerecho() == null){
                nodoActual.setHijoDerecho(nuevoNodo);
                nuevoNodo.setNodoPadre(nodoActual);
            } else {
                this.agregarNodosHijos(nodoActual.getHijoDerecho(), nuevoNodo);
            }
        }
    }
}