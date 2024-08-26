let array = [{
    id:1,
    name:'Felipe',
},{
    id:2,
    name:'Ivan',
},{
    id:3,
    name:'Andres',
}
]
function toPairs(arr){
    let pairs=[];
    for (idx in arr){
        let elemento = arr [idx]
        pairs [idx] = [elemento.id, elemento];
    }
    return pairs
}

let resultado = toPairs(array);
console.log(resultado);