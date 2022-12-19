import { NodoDoble } from "../Nodos/NodoDoble.js";

export class ListaDoble {

    constructor() {
        this.cabeza = null;
        this.size = 0;
    }

    getCabeza() {
        return this.cabeza;
    }

    setCabeza(cabeza) {
        this.cabeza = cabeza;
    }

    insertarArtista(artista) {
        if (this.cabeza == null) {
            this.cabeza = artista;
        } else {
            let aux = this.cabeza;
            while (aux.getSiguiente() != null) {
                if (aux.getArtista().getName() != artista.getArtista().getName()) {
                    aux = aux.getSiguiente();
                } else {
                    return 0;
                }
                
            }
            aux.setSiguiente(artista);
            artista.setAnterior(aux);
        }
        this.size++;
    }

    insertarCancion(nombreArtista, cancion) {
        let aux = this.cabeza;

        let nuevoNodo = new NodoDoble(cancion);
        while (aux.getArtista().getName() != nombreArtista) {
            if (aux.getSiguiente() == null) {
                //alert("No se encontro el artista" + nombreArtista);
                console.log("No se encontro el artista " + nombreArtista);
                return 0;
            }
            aux = aux.getSiguiente();
        }

        if (aux.getCanciones() == null) {
            aux.setCanciones(nuevoNodo);
        } else {
            aux = aux.getCanciones();
            while (aux.getSiguiente() != null) {
                aux = aux.getSiguiente();
            }
            aux.setSiguiente(nuevoNodo);
        }
    }

    ordenarAscendente() {
        let aux = null;
        let aux2 = null;
        let contador = 0;

        if (this.getCabeza() == null) {
            return 0;
        } else {
            for(aux = this.getCabeza(); aux.getSiguiente() != null; aux = aux.getSiguiente()){
                for(aux2 = aux.getSiguiente(); aux2 != null; aux2 = aux2.getSiguiente()){
                    if(aux.getArtista().getName() > aux2.getArtista().getName()){
                        let temp = aux.getArtista();
                        let temp2 = aux.getCanciones();
                        aux.setArtista(aux2.getArtista());
                        aux.setCanciones(aux2.getCanciones());
                        aux2.setArtista(temp);
                        aux2.setCanciones(temp2);
                    }
                }
            }
        }

        // while (aux != null) {
        //     aux = this.getCabeza();
        //     // if(contador < this.size){
        //     //     let contador2 = 0;
        //     //     while (contador2 < contador){
        //     //         aux = aux.getSiguiente();
        //     //         contador2++;
        //     //     }
        //     // } else {
        //     //     return 0;
        //     // }
        //     // while (aux2 != null) {
        //     //     if (aux.getArtista().getName() < aux2.getArtista().getName()) {
        //     //         if (aux == this.getCabeza()) {
        //     //             if (aux2.getSiguiente() != null) {
        //     //                 aux2.getSiguiente().setAnterior(aux);
        //     //             }
        //     //             aux.setSiguiente(aux2.getSiguiente());
        //     //             aux2.setSiguiente(aux);
        //     //             aux.setAnterior(aux2);
        //     //             aux2.setAnterior(null);
        //     //             this.setCabeza(aux2);

        //     //         } else {
        //     //             let temp = aux.getAnterior();
        //     //             let temp3 = aux2.getAnterior();
        //     //             let temp2 = aux.getSiguiente();
        //     //             let temp4 = aux2.getSiguiente();

        //     //             if (temp4 != null) {
        //     //                 temp4.setAnterior(aux);
        //     //             }

        //     //             if (temp2 != aux2) {
        //     //                 temp.setSiguiente(aux2);
        //     //                 aux2.setAnterior(temp);

        //     //                 aux2.setSiguiente(temp2);
        //     //                 temp2.setAnterior(aux2);

        //     //                 aux.setAnterior(temp3);
        //     //                 temp3.setSiguiente(aux);

        //     //                 aux.setSiguiente(temp4);

        //     //             } else {
        //     //                 aux.setSiguiente(temp4);

        //     //                 temp.setSiguiente(aux2);
        //     //                 aux2.setAnterior(temp);

        //     //                 aux2.setSiguiente(aux);
        //     //                 aux.setAnterior(aux2);
        //     //             }

        //     //         }
        //     //     }
        //     //     aux2 = aux2.getSiguiente();
        //     // }
        //     // aux2 = this.cabeza;
        //     // contador++;
        // }
    }

    ordenarDescendente() {
        if (this.cabeza == null) {
            return;
        }

        if (this.cabeza.getSiguiente() == null) {
            return;
        }

        let numeroArtistas = 0;
        let aux = this.cabeza;
        while (aux != null) {
            numeroArtistas++;
            aux = aux.getSiguiente();
        }

        aux = this.cabeza;
        let artistasIzquierda = new ListaDoble();
        let artistasDerecha = new ListaDoble();
        let contador = 0;

        while (contador < numeroArtistas / 2) {
            contador++;
            aux = aux.getSiguiente();
        }

        let pivote = aux;
        let aux2 = this.cabeza;
        let contador2 = 0;

        while (aux2 != null) {
            if (aux2.getArtista().getName() > pivote.getArtista().getName()) {
                artistasIzquierda.insertarArtista(aux2);
                console.log(aux2.getArtista().getName());
            } else if (aux2.getArtista().getName() < pivote.getArtista().getName()) {
                artistasDerecha.insertarArtista(aux2);
                console.log(aux2.getArtista().getName());
            }
            aux2 = aux2.getSiguiente();
        }

        artistasIzquierda.ordenarDescendente();
        artistasDerecha.ordenarDescendente();

        let aux3 = artistasIzquierda.getCabeza();
        let aux4 = artistasDerecha.getCabeza();

        this.setCabeza(aux3);

        this.insertarArtista(pivote);

        while (aux4 != null) {
            this.insertarArtista(aux4);
            aux4 = aux4.getSiguiente();
        }

    }
}