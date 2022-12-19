export class Calendario{
    constructor(month, day, song, artist){
        this.month = month;
        this.day = day;
        this.song = song;
        this.artist = artist;
    }

    getMonth(){
        return this.month;
    }

    setMonth(nuevoMes){
        this.month = nuevoMes;
    }

    getDay(){
        return this.day;
    }

    setDay(nuevoDia){
        this.day = nuevoDia;
    }

    getSong(){
        return this.song;
    }

    setSong(nuevaCancion){
        this.song = nuevaCancion;
    }

    getArtist(){
        return this.artist;
    }

    setArtist(nuevoArtista){
        this.artist = nuevoArtista;
    }

}