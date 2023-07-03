let x = 5;
let y = 7;
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);

//comparing only data - use ==
let a = 5;
let b = 5;
console.log(a==b); //true

//comparing data and type - use === (best practice)
let num1 = 6;
let num2 = 6;
console.log(num1===num2);


let num3 = '5';
let num4 = 5;
console.log(num3==num4); //the output should be false as num3 is string and num4 is int so we use === to avoid such cases.

console.log(num3===num4);