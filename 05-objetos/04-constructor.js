//{id:1, recuperarClave: function(){}}
function Usuario(){
    this.id = 1;
    this.recuperarClave = function () { //metodos
        console.log('Recuperanado');
    }
}

let usuario = new Usuario()
console.log(usuario);