const { spy } = require("chai");

function receivesAFunction(callback){
    callback(spy)
}

function returnsANamedFunction(){
    return function namedFunction(){
    }
}

function returnsAnAnonymousFunction(){
    return function (){

    }
}

const funct = returnsANamedFunction()
console.log(funct.name)
const func = returnsAnAnonymousFunction()
console.log(func.name)