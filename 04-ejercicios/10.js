let longitud = 7;

function crearAray(n) {
    if (n <=0 ){
        return[]
    }
    let arr = []
    for (let  i = 0; i < n; i++){
        arr[i] = i + 1;
    }
    return arr
}
let resultado = crearAray(longitud)
console.log(resultado);