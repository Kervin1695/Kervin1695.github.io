import { NodoSimple } from "../Nodos/NodoSimple.js";

export class ListaSimple{
    constructor(){
        this.cabeza = null;   
    }

    agregarNodo(usuario){
        let auxiliar = new NodoSimple(usuario);
        if(this.cabeza == null){
            this.cabeza = auxiliar;
        }else{
            let temporal = this.cabeza;
            while(temporal.getSiguiente() != null){
                temporal = temporal.getSiguiente();
            }
            temporal.setSiguiente(auxiliar);
        }
    }

    revisarLista(nombreUsuario, password, admin){
        let temporal = this.cabeza;
        while(temporal != null){
            if (temporal.getUsuario().getUsername() == nombreUsuario && temporal.getUsuario().getPassword() == password) {
                if (temporal.getUsuario().getAdmin() == admin) {
                    return true;
                } else {
                    alert("No tiene permisos para ingresar");
                    return false;
                }

            } else {
            temporal = temporal.getSiguiente();
            }
        }
        return false;
    }

    getCabeza(){
        return this.cabeza;
    }

    setCabeza(cabeza){
        this.cabeza = cabeza;
    }

    buscarUsuario(nombreUsuario){
        let temporal = this.cabeza;
        while(temporal != null){
            if (temporal.getUsuario().getUsername() == nombreUsuario) {
                return temporal;
            } else {
                temporal = temporal.getSiguiente();
            }
        }
        return null;
    }
}