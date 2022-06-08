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

let letters = ['a', 'b', 'c', 'd', 'e']
console.log(letters[0]);
console.log(letters[1]);
console.log(letters[2]);

let book = {
    title: 'Eloquent Javascript',
    author: 'Kyle Simpson',
    publisher: 'O\'Reilly'
}

console.log(book.title);
console.log(book.author);