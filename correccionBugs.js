//Contar las vocales en un mensaje de texto.

const analyzeMessage = (message) => {
    message = message.toLowerCase()
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for (let i = 0; i < message.length; i++) {
        if (vowels.includes(message[i])) {
            vowelCount++;
        }
    }
    return vowelCount;
};

console.log(analyzeMessage("eello World"));



function countVowels(message) {
    let count = 0;
    let arr = message.split('');
    arr.forEach(letter => {
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            count++
        }
    })
    return count;
}

console.log(countVowels('hola mundo hermoso'))





// Ejercicio 2: El Reordenador de Zombis 🧟‍♂️
// Tienes razón, a primera vista el código parece funcionar perfectamente. Pero si te fijas bien, hay un pequeño error de concepto en el código.

// JavaScript

const zombis = [
    { name: 'Gordy', strength: 8 },
    { name: 'Pato', strength: 4 },
    { name: 'Zeke', strength: 7 },
    { name: 'Kiki', strength: 3 }
];

const strongZombies = (zombies) => {
    const result = zombies.filter(zombie => zombie.strength > 5);
    return result.map(zombie => zombie.name);
};

console.log(strongZombies(zombis));

//Considero que zombie.strength > 5 es un poco ambiguo ya que si de repente todos o casi todos tus zombies superan los 5 entoncs todos van a ser los más fuertes. Lo importante acá es rearmar el sistema de fuerza para que solo muestre los que son realmente fuertes sin importar su fuerza. 

const zombiesFuertes = function (zombies) {
    return zombies.reduce((acc, curr) => {
        if (acc.strength < curr.strength) {
            return curr
        }
        else {
            return acc;
        }
    })
}

console.log(zombiesFuertes(zombis))





// Ejercicio 3: La Base de Datos de Supervivientes 👤
// El objetivo de esta función es tomar un array de objetos de "supervivientes", y para cada uno, crear un nuevo objeto que combine la información de su perfil básico con una lista de sus habilidades. El código usa el operador rest (...) y un bucle for...of.




const survivors = [
    { id: 1, name: 'Jess', role: 'Scout' },
    { id: 2, name: 'Max', role: 'Medic' }
];

const survivorSkills = {
    1: ['agile', 'stealth'],
    2: ['first aid', 'surgery']
};

const getSurvivorsWithSkills = (survivors, skills) => {
    const result = [];
    for (let survivor of survivors) {
        const survivorId = survivor.id;
        const survivorSkills = skills[survivorId];
        result.push({ ...survivor, skills: survivorSkills });
    }
    return result;
};

console.log(getSurvivorsWithSkills(survivors, survivorSkills));

//1-const survivor en un bucle for?
//2-el bucle estaba mal, habia que usar bucle for of no bucle for in





// Ejercicio 4: El Decodificador de Mensajes 🤫
// Aquí está el código que debería invertir un string, como si estuvieras descifrando un mensaje de un enemigo en un juego.


const decodeMessage = (secret) => {
    let decoded = "";
    for (let i = 0; i < secret.length; i++) { //se contradecia tener el <= de length con el length -1 abajo. 
        decoded += secret[secret.length - 1 - i];
    }
    return decoded;
};

console.log(decodeMessage("dlrow olleh"));




// Ejercicio 5 (Versión 2.0): El Rastreador de Zombis 🧟‍♂️
// El objetivo de esta función es buscar zombis por su nombre dentro de un array de objetos. El código debería devolver el objeto del zombi si lo encuentra.

const zombieHorde = [
    { name: 'Gordy', strength: 8 },
    { name: 'Pato', strength: 4 },
    { name: 'Zeke', strength: 7 }
];

const findZombie = (zombies, name) => {
    let obj = {}
    zombies.forEach(zombie => {
        return Object.values(zombie).some(z => {
            if (typeof z == 'string' && z.toLowerCase() == name) {
                obj.name = zombie.name,
                    obj.strength = zombie.strength
            }
        })
    });
    return obj
};

console.log(findZombie(zombieHorde, 'pato'));




// Ejercicio 6: El Registro de Puntuaciones 🕹️
// El objetivo es crear una función que tome un array de objetos, donde cada objeto representa un jugador con su nombre y puntuación. La función debe:
// Sumar todas las puntuaciones de los jugadores.
// Devolver un objeto con el nombre del jugador que tiene el puntaje más alto.




const players = [
    { name: 'Jess', score: 120 },
    { name: 'Max', score: 150 },
    { name: 'Chloe', score: 85 },
];

function analyzeScores(players) {

    return players.reduce((acc, curr) => {
        let total = acc.score + curr.score;
        if (acc.score > curr.score) {
            return {...acc, total}
        }
        else {
            return {...curr, total}
        }

    })

}

console.log(analyzeScores(players));




// Ejercicio 7: El Sistema de Defensa 🛡️


const defenseSystem = [
  { name: 'Pistol', power: 25, ammo: 100 },
  { name: 'Shotgun', power: 50, ammo: 50 },
  { name: 'Rifle', power: 100, ammo: 20 },
];

function calculateTotalPower(weapons) {
  let totalPower = 0;
  for (const weapon of weapons) {
    totalPower += weapon.power;
  }
  return totalPower;
}

console.log(calculateTotalPower(defenseSystem));