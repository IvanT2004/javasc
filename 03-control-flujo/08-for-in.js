let user = {
    id : 1,
    name : 'felipe',
    age: 20,
};

for (let prop in user){
    console.log(prop, user[prop]);
}

let animales = ['perro','gato','raton']
for(let indice in animales){
    console.log(indice, animales[indice]);
}