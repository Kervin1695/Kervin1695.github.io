export class Usuario{
    constructor(dpi, name, username, password, phone, admin){
        this.dpi = dpi;
        this.name = name;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.admin = admin;
    }

    getDpi(){
        return this.dpi;
    }

    getName(){
        return this.name;
    }

    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }

    getPhone(){
        return this.phone;
    }

    getAdmin(){
        return this.admin;
    }

    setDpi(dpi){
        this.dpi = dpi;
    }

    setName(name){
        this.name = name;
    }

    setUsername(username){
        this.username = username;
    }

    setPassword(password){
        this.password = password;
    }

    setPhone(phone){
        this.phone = phone;
    }

    setAdmin(admin){
        this.admin = admin;
    }

}