import { Usuario } from './Usuario.js';
import { Prueba } from './Prueba.js';

export let miInformacion = new Prueba();

document.getElementById("vistaAdmin").style.display = "none";
document.getElementById("vistaUser").style.display = "none";
document.getElementById("playlist").style.display = "none";
document.getElementById("amigos").style.display = "none";
document.getElementById("vistaArtistas").style.display = "none";
document.getElementById("opcionesMusica").style.display = "none";

let login_btn = document.getElementById("btn_login");
let register_btn = document.getElementById("btn_registro");

let nombreUsuario;
let password;
let admin;

if (login_btn) {
    login_btn.addEventListener('click', () => {
        nombreUsuario = document.getElementById("usuario_login").value;
        password = document.getElementById("password_login").value;
        admin = document.getElementById("admin_login").checked;

        if (miInformacion.miLista.revisarLista(nombreUsuario, password, admin)) {
            console.log("Usuario correcto");
            if (admin) {
                document.getElementById("vistaMain").style.display = "none";
                document.getElementById("vistaAdmin").style.display = "block";
            } else {
                document.getElementById("vistaMain").style.display = "none";
                document.getElementById("vistaUser").style.display = "block";
            }
            miInformacion.setUsuarioActual(miInformacion.miLista.buscarUsuario(nombreUsuario));
        } else {
            alert("Usuario o contraseña incorrectos");
        }
        document.getElementById("usuario_login").value = "";
        document.getElementById("password_login").value = "";
    });

}

if (register_btn) {
    register_btn.addEventListener('click', () => {
        nombreUsuario = document.getElementById("usuario_registro").value;
        password = document.getElementById("password_registro").value;
        admin = false;
        let dpi = document.getElementById("DPI_registro").value;
        let nombre = document.getElementById("nombre_registro").value;
        let telefono = document.getElementById("telefono_registro").value;
        let miUsuario = new Usuario(dpi, nombre, nombreUsuario, password, telefono, admin);
        miInformacion.getMiLista().agregarNodo(miUsuario);
        console.log(miInformacion.miLista);

        document.getElementById("usuario_registro").value = "";
        document.getElementById("password_registro").value = "";
        document.getElementById("DPI_registro").value = "";
        document.getElementById("nombre_registro").value = "";
        document.getElementById("telefono_registro").value = "";
    });
}

export function cerrarSesion(divID) {
    document.getElementById(divID).style.display = "none";
    document.getElementById("vistaMain").style.display = "block";
}
