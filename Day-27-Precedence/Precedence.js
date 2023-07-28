//Operator precedence describes the order in which operations are performed in an arithmetic expression.

//Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

let x = 100 + 50 * 3; //here first multiplication takes place then it is added because * has higher precedence than +
console.log(x);

let y = (100+50) * 3;//here expression inside paranthesis done first then outside the paranthesis because paranthesis has higher precedence
console.log(y);

let z = 100 / 50 * 3; //Operations with the same precedence (like * and /) are computed from left to right:
console.log(z);