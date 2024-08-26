// perspnaje

let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "DemonSlayer",
    edad: 16,
};
console.log(personaje)
console.log(personaje['anime'])
console.log(personaje.anime);

personaje.edad = 15;
personaje['edad'] = 17;

delete personaje.anime;

console.log(personaje)


