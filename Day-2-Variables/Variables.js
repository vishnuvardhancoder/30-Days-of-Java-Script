num = 2+2;
console.log(num);
console.log(num+3);

//var - is a keyword for declaring variables used in js from 1995 to 2015.

var num1 = 5;
console.log(num1);

//let - is a keyword for declaring variables in js it is introduced in 2015

let num2 = 6;
console.log(num2);

//const - is a keyword for declaring constant variables which does not change throughout the program

//Area of a circle 

let radius = 5;
const pi = 3.14;
let area;

radius = 6;
area = pi * radius * radius;
console.log(area);

//here in this above code radius can be changed because we use let to declare it but we can't change value of pi because we declare it as const, if you try to change it error will be thrown..