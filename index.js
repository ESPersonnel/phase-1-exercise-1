function outer(greeting, msg = "It's a fine day to learn"){
    const innerFunction = function(name, lang = "Python"){
        return `${greeting} ${name}! ${msg} ${lang}`
    }
    return innerFunction
}

outer("Hello")("student", "Javascript")

// Arrow Functions

// const printBook = function(book){
//     return book
// }

const printBookArrow = (book, author) => [book, author]

// printBook("Eloquent Javascript")
printBookArrow("You don\'t know JS", "Kyle Simpson")

function iInvokeThings (thing) {
    return thing();
}

iInvokeThings(function (){return 4+5})
iInvokeThings(function(){return 'Hello, ' + 'world!'})

// Arrays
let letters = ['a', 'b', 'c', 'd', 'e']
console.log(letters[0]);
console.log(letters[1]);
console.log(letters[2]);

letters[0] = 'z';
letters[1] = true;
letters[2] = 1
console.log(letters);

// Objects
let book = {
    title: 'Eloquent Javascript',
    author: 'Kyle Simpson',
    publisher: 'O\'Reilly'
}

console.log(book.title);
console.log(book.author);

book.title = 'You don\'t know JS'
book['author'] = 'George RR Martin'
console.log(book);

// More Array Methods
const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
planets[4] = 'pluto'
console.log(planets);
planets.push('pluto') // add to end
console.log(planets);
planets.pop() // remove from end
console.log(planets);
planets.shift() // remove from beginning
console.log(planets);
planets.unshift('pluto') // add to beginning
console.log(planets);
planets[4] = 'jupiter' // replace
console.log(planets);
planets.splice(4, 1, 'saturn') // replace
console.log(planets);
planets.shift()     // remove from beginning
console.log(planets);
planets.unshift('mercury')  // add to beginning
console.log(planets);
planets[4] = 'jupiter'; // replace
console.log(planets);
planets.push('pluto'); // add to end
console.log(planets);
// spread, denoted by three dots
// can be safely used to clone non-nested arrays
const newPlanets = [...planets]
console.log(newPlanets);

// Nested Arrays
const nestedArray = [
    ['a', 'b', 'c'],
    [1, 2, 3],
    ['I', 'II', 'III', ['IV', 'V', 'VI']]
]
console.log(nestedArray[0][1]);
console.log(nestedArray[2][3][1]);

let globalVariable= 'global';
// let variable = 'global scope';

function functionalScope(){
    let variable = 'functional scope';
    // Block scope
    if(true){
        let variable = 'block scope';
        console.log(variable);
    }
    console.log(variable);
}


const address = {
    name: "P. Sherman",
    street2: "42 Wallaby Way"
};

// We use console.log(key) to access the value of the key.

for (const key in  address) {
    console.log(key);
}

const artistInfo = {
    name: 'Daft Punk',
    age: 'unknown',
    genre: 'electronic',
    albums: [
        {
            title: 'Random Access Memories',
            year: '1994'
        },
        {
            title: 'Human After All',
            year: '1997'
        },
        {
            title: 'Discovery',
            year: '2002'
        }]
}
console.log(artistInfo.albums[1].title);
console.log(artistInfo.genre);

let artists = [
    "Daft Punk",
    "The Beatles",
    "Led Zeppelin",
    "Pink Floyd",
    "The Rolling Stones",
]
// searching for artists with names containing the letter "t"
let artistsWithT = artists.filter(artist => artist.startsWith("T"))
// We use .filter to create a new array of artists with names containing the letter "t"
console.log(artistsWithT);

let artists2 = [
    "Daft Punk",
    "The Beatles",
    "Led Zeppelin",
    "Pink Floyd",
    "The Rolling Stones",
]
// searching for the first artist with names containing the letter "T"
let firstArtistWithT = artists2.find(artist => artist.startsWith("T"))

const string = "Hello World";
string.toUpperCase();
console.log(string.toUpperCase());
console.log(string);

// Examples of slice and splice
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers.slice(0, 3));
console.log(numbers.slice(3, 6));

console.log(numbers.splice(3, 6)); // removes from 3 to 6
console.log(numbers); 

// Another example using slice and spread

const menu = [
    'pizza',
    'pasta',
    'salad',
    'bread',
    'soup',
    'dessert'
]

const newMenu = [...menu.slice(0, 3), 'burger', ...menu.slice(3)]
// slice(0, 3) returns an array of the first 3 elements
// 'burger' is added to the end of the array
// ...menu.slice(3) returns an array of the remaining elements
console.log(newMenu);


// That's enough for this file.