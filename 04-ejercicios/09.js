let pairs = [
    [1, {name: 'Nicolas'}],
    [2, {name: 'Felipe'}],
    [3, {name: 'Ivan'}],
];

function toCollection(arr) {
    let colletion = [];
    for (idx in arr){
        let elemento = arr[idx];
        colletion[idx] = elemento[1];
        colletion[idx].id = elemento[0]
    }
    return colletion
}

let resultado = toCollection(pairs)
console.log(resultado);