/*function sum (a, b){
    return a + b;
}
console.log(sum(5, 5));

function sum (a, b){
    var value = 0;
    for (var i = 0; i < arguments.length; i++){
    value += arguments[1];
    }
return value;
}
console.log(sum(5, 5, 5, 2, 3));*/

// rest operator ...
function sum(...args){
    return args.reduce((acc, value) => acc + value, 0)
}
console.log(sum(5, 5, 5, 2, 3));