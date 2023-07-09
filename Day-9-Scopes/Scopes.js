let user = "aa" //Global variable - it can be used anywhere in the program even inside a function
function greet(user){ //passing value when defining a function is called parameters
    let num = 5 //Local variable - it cannot be used outside a function it can be used only inside a function
    console.log(num)
    console.log(user)
    return `Hello ${user}`
}
// console.log(num) //it will give error because num is locally defined inside greet function we cant use outside the function.
console.log(greet(user)); //passing value when calling a function is called arguments.  