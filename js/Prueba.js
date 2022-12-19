import { ListaSimple } from './Estructuras/ListaSimple.js';
import { Usuario } from './Usuario.js';
import { ListaDoble } from './Estructuras/ListaDoble.js';
import { ArbolBinario } from './Estructuras/ArbolBinario.js';
import { MatrizDispersa } from './Estructuras/MatrizDispersa.js';

export class Prueba{
    constructor(){
        this.miLista = new ListaSimple();
        this.miListaDoble = new ListaDoble();
        this.miArbolBinario = new ArbolBinario();
        this.miMatrizDispersa = new MatrizDispersa();
        this.misCanciones = new ListaSimple();
        let miAdmin = new Usuario(2654568452521, "Oscar Armin", "EDD", "123", "+502 (123) 123-4567", true);
        this.miLista.agregarNodo(miAdmin);
        this.usuarioActual = null;
    }

    getMiLista(){
        return this.miLista;
    }

    getMiListaDoble(){
        return this.miListaDoble;
    }

    getMiArbolBinario(){
        return this.miArbolBinario;
    }

    getMiMatrizDispersa(){
        return this.miMatrizDispersa;
    }

    setMiLista(miLista){
        this.miLista = miLista;
    }

    setMiListaDoble(miListaDoble){
        this.miListaDoble = miListaDoble;
    }

    setMiArbolBinario(miArbolBinario){
        this.miArbolBinario = miArbolBinario;
    }

    setMiMatrizDispersa(miMatrizDispersa){
        this.miMatrizDispersa = miMatrizDispersa;
    }

    getMisCanciones(){
        return this.misCanciones;
    }

    setMisCanciones(misCanciones){
        this.misCanciones = misCanciones;
    }

    getUsuarioActual(){
        return this.usuarioActual;
    }

    setUsuarioActual(usuarioActual){
        this.usuarioActual = usuarioActual;
    }
}





