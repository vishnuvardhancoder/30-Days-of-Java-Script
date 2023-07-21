//Before ES6 var is used to declare variables after ES6 let and const is introduced to declare variables.
//var - is functional scope which can be used inside a function and globally accessible if declared outside the function.
//let and const are block scope variables which can be used inside a block only
var test = "Outside function global var"
function Test(){
    var test = "Inside function-var"
    console.log(test);
}
Test()
console.log(test);

if(true){
    let letvariable = 3
}
console.log(letvariable);///error because let is block scope variable which can be used only inside the block where it is declared.

if(true){
    var varvariable = 7
}
console.log(varvariable);//it is possible because var is functional scope it can be used outside a block

const num = 5
num = 6
console.log(num);//error because you cant change the value of const variable once it is declared but you can modify data in arrays and objects when it is declared with const

const person = {
    name : "aa",
}
person.name = "bb"//it can be changed 
console.log(person);