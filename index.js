//create an array of cats
let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

//add a cat to the end of the cats array
// then call it 
function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat('Ralph');

//add a cat to the beginning of the cats array
//then call it
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat('Bob');

//remove the last cat from the array
//then call it

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat('Ralph');

//remove the first cat from the array
//then call it

function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat('Bob');

//append a cat to the end of the cats array and return a new array
function appendCat(name) {
    return [...cats, name];
}
appendCat("Broom");

//prepend a cat to the beginning of the cats array and return a new array
function prependCat(name) {
    return [name, ...cats];
}
prependCat("Arnold");

//remove the last cat in the cats array and return a new array
function removeLastCat() {
     return cats.slice(0, -1);
}
removeLastCat("Broom");

//remove the first cat in the cats array and return a new array
function removeFirstCat() {
    return cats.slice(1);
}
removeFirstCat("Arnold");

