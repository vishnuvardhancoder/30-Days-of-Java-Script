let num = 12;
let result;
// if(num%2===0)
//     result = "Even";
// else
//     result = "Odd";
// console.log(result);

//instead of using if else code of four lines we can use a single line of ternary operator code which is ?.

result = num%2===0 ? "Even" : "Odd";
console.log(result);

//if condition is true the thing after the question mark is returned , if condition is false after : will be returned