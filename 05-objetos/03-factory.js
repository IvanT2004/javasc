
function crearUsuario (name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function (){
            console.log('recuperando clave');
        },
    };
}

let user=crearUsuario('nicolas','ivan@gmail.com')
console.log(user);