//factorial 5! = 5*4*3*2*1
//n! = n*(n-1)!
//0!=1


function fact(n){
    if(n===0){
        return 1;
    }
    else{
        return n*fact(n-1); //fact function is calling itself again with minus 1 so 5*5-1 likewise it repeatedly calls itself if it becomes 0 it returns 1.
    }
}
number = 5;
let result = fact(number);
console.log("Factorial of",number,"is",result);