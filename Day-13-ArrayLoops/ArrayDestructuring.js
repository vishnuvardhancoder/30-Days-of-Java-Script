let num = [4,5,6];
let [a,b,c] =num; //array is destructured and each value is assigned to a variable,
console.log(a);
console.log(b);
console.log(c);

//swapping of numbers using destructuring arrays.

let num1=7;
let num2=8;
[num1,num2] = [num2,num1]
//[7,8] = [8,7]
console.log(num1,num2);


//strings

let words = "this is java script".split(' '); //split is used to split a string and make it as an array
let [e,,...g]=words;//three dots ... which means rest of the element
console.log(g);