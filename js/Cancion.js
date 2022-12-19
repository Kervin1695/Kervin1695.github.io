export class Cancion{
    constructor(artista, nombre, duracion, genero){
        this.artista = artista;
        this.nombre = nombre;
        this.duracion = duracion;
        this.genero = genero;
    }

    getArtista(){
        return this.artista;
    }
    
    setArtista(newArtista){
        this.artista = newArtista;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(newNombre){
        this.nombre = newNombre;
    }

    getDuracion(){
        return this.duracion;
    }

    setDuracion(newDuracion){
        this.duracion = newDuracion;
    }

    getGenero(){
        return this.genero;
    }

    setGenero(newGenero){
        this.genero = newGenero;
    }
}