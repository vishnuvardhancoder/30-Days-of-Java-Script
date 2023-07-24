//"use strict"; Defines that JavaScript code should be executed in "strict mode".
//Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
//Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode)

"use strict";//without this line it will not throw error but this line makes enable strict mode so the variable x should be declared first 
x=2
console.log(x);


//Using a variable, without declaring it, is not allowed
//Using an object, without declaring it, is not allowed
//The "use strict" directive is only recognized at the beginning of a script or a function.