export class Artista{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getCountry(){
        return this.country;
    }

    setName(newName){
        this.name = newName;
    }

    setAge(newAge){
        this.age = newAge;
    }

    setCountry(newCountry){
        this.country = newCountry;
    }
}