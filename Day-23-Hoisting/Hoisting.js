//Hoisting is JavaScript's default behavior of moving declarations to the top
//In JavaScript, a variable can be declared after it has been used.
x=6;//assigning x to value 6
var x;//declaring variable x
console.log(x);

//Variables defined with let and const are hoisted to the top of the block, but not initialized.

y=4
let y
console.log(y);//gives error same for const keyword

//JavaScript only hoists declarations, not initializations.

var a=5//initialized a with 5
var sum = a+b //now a is 5 but b is undefined
var b=6//b is initalized after performing operation so that initializations are not hoisted
console.log(sum);//no output

//Declare Your Variables At the Top 