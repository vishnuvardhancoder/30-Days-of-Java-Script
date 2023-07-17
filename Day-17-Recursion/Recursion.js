//Recursion - A function that calls itself is called Recursion.

let num = 1;//for checking how many times the function getting called we printing from 1.
function demo(){  //function definition
    console.log("Demo", num);
    num++;
    demo();//recursion function calls itself
}

demo(); //function calling

//this function calls itself for about 10349 times it varies upon different computers.After 10346 times it throw an error called stackoverflow .