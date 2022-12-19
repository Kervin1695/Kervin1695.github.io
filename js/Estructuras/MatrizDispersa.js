import { NodoMD } from "../Nodos/NodoMD.js";

export class MatrizDispersa {
    constructor() {
        this.cabeza = new NodoMD(null, "Raiz", 0);
        this.meses = ["Raiz", "January", "February", "March", "April", "May", "June", "July", "August", "September",
            "October", "November", "December"]
    }

    getCabeza() {
        return this.cabeza;
    }

    agregarNodo(nuevoNodo) {
        //let nuevoNodo = new NodoMD(cancion, mes, dia, artista);

        let nodoGuiaDia = this.cabeza;
        let nodoGuiaMes = this.cabeza;
        let nuevoIndiceMes;
        let nuevoIndiceDia;

        let valorMesNuevoNodo = this.meses.indexOf(nuevoNodo.getMes());
        let valorMesGuia = this.meses.indexOf(nodoGuiaMes.getMes());

        while (valorMesGuia <= valorMesNuevoNodo) {
            if (valorMesGuia < valorMesNuevoNodo) {
                if (nodoGuiaMes.getNodoAbajo() != null) {
                    if (this.meses.indexOf(nodoGuiaMes.getNodoAbajo().getMes()) > valorMesNuevoNodo) {
                        nuevoIndiceMes = new NodoMD(null, nuevoNodo.getMes(), 0, null);
                        nodoGuiaMes.getNodoAbajo().setNodoArriba(nuevoIndiceMes);
                        nuevoIndiceMes.setNodoArriba(nodoGuiaMes);
                        nuevoIndiceMes.setNodoAbajo(nodoGuiaMes.getNodoAbajo());
                        nodoGuiaMes.setNodoAbajo(nuevoIndiceMes);
                    }
                } else if (nodoGuiaMes.getNodoAbajo() == null) {
                    nuevoIndiceMes = new NodoMD(null, nuevoNodo.getMes(), 0, null);
                    nuevoIndiceMes.setNodoArriba(nodoGuiaMes);
                    nodoGuiaMes.setNodoAbajo(nuevoIndiceMes);
                }
                nodoGuiaMes = nodoGuiaMes.getNodoAbajo();
                valorMesGuia = this.meses.indexOf(nodoGuiaMes.getMes());
            } else if (valorMesGuia == valorMesNuevoNodo) {
                let diaGuia = nodoGuiaDia.getDia();
                while (diaGuia <= nuevoNodo.getDia()) {
                    if (diaGuia < nuevoNodo.getDia()) {
                        if (nodoGuiaDia.getNodoDerecha() != null) {
                            if (nodoGuiaDia.getNodoDerecha().getDia() > nuevoNodo.getDia()) {
                                nuevoIndiceDia = new NodoMD(null, "Raiz", nuevoNodo.getDia(), null);
                                nodoGuiaDia.getNodoDerecha().setNodoIzquierda(nuevoIndiceDia);
                                nuevoIndiceDia.setNodoDerecha(nodoGuiaDia.getNodoDerecha());
                                nodoGuiaDia.setNodoDerecha(nuevoIndiceDia);
                                nuevoIndiceDia.setNodoIzquierda(nodoGuiaDia);
                            }
                        } else if (nodoGuiaDia.getNodoDerecha() == null) {
                            nuevoIndiceDia = new NodoMD(null, "Raiz", nuevoNodo.getDia(), null);
                            nodoGuiaDia.setNodoDerecha(nuevoIndiceDia);
                            nuevoIndiceDia.setNodoIzquierda(nodoGuiaDia);
                        }
                        nodoGuiaDia = nodoGuiaDia.getNodoDerecha();
                        diaGuia = nodoGuiaDia.getDia();
                    } else if (diaGuia == nuevoNodo.getDia()) {
                        while (this.meses.indexOf(nodoGuiaDia.getMes()) < valorMesNuevoNodo) {
                            if (nodoGuiaDia.getNodoAbajo() == null) {
                                nodoGuiaDia.setNodoAbajo(nuevoNodo);
                                nuevoNodo.setNodoArriba(nodoGuiaDia);
                            } else {
                                if (this.meses.indexOf(nodoGuiaDia.getNodoAbajo()) > valorMesNuevoNodo) {
                                    nodoGuiaDia.getNodoAbajo().setNodoArriba(nuevoNodo);
                                    nuevoNodo.setNodoAbajo(nodoGuiaDia.getNodoAbajo());
                                    nodoGuiaDia.setNodoAbajo(nuevoNodo);
                                    nuevoNodo.setNodoArriba(nodoGuiaDia);
                                    nodoGuiaDia = nodoGuiaDia.getNodoAbajo();
                                } else {
                                    nodoGuiaDia = nodoGuiaDia.getNodoAbajo();
                                }
                            }
                        }
                        while (nodoGuiaMes.getDia() < nuevoNodo.getDia()) {
                            if (nodoGuiaMes.getNodoDerecha() == null) {
                                nodoGuiaMes.setNodoDerecha(nuevoNodo);
                                nuevoNodo.setNodoIzquierda(nodoGuiaMes);
                            } else if (nodoGuiaMes.getNodoDerecha().getDia() > nuevoNodo.getDia()) {
                                nodoGuiaMes.getNodoDerecha().setNodoIzquierda(nuevoNodo);
                                nuevoNodo.setNodoDerecha(nodoGuiaMes.getNodoDerecha());
                                nodoGuiaMes.setNodoDerecha(nuevoNodo);
                                nuevoNodo.setNodoIzquierda(nodoGuiaMes);
                                nodoGuiaMes = nodoGuiaMes.getNodoDerecha();
                            } else {
                                nodoGuiaMes = nodoGuiaMes.getNodoDerecha();
                            }
                        }
                        diaGuia = diaGuia + 1;
                    }
                }
                valorMesGuia = valorMesGuia + 1;
            }

        }

    }
}