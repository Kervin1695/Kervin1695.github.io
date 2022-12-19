export class Podcast{
    constructor(name, topic, invitados, duracion){
        this.name = name;
        this.topic = topic;
        this.invitados = invitados;
        this.duracion = duracion;
    }

    getName(){
        return this.name;
    }

    getTopic(){
        return this.topic;
    }

    getInvitados(){
        return this.invitados;
    }

    getDuracion(){
        return this.duracion;
    }

    setName(name){
        this.name = name;
    }

    setTopic(topic){
        this.topic = topic;
    }

    setInvitados(invitados){
        this.invitados = invitados;
    }

    setDuracion(duracion){
        this.duracion = duracion;
    }
}