// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return[...cats,name];
}

function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"]
    return[name, ...cats]
}
const newcats = [... cats]
function removeLastCat(name) {
    return newcats.slice(0,cats.length-1)
}
function removeFirstCat(name) {
    return newcats.slice(1)
}
