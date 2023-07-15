//set - it stores multiple values like arrays but it does not hold duplicate values where array can have duplicates.
//set doesnt have index values.

let set = new Set(); //set is a object so we creating instance for it.

set.add(1); //add is used to add elements in the set.
set.add(3);
set.add(3);//this 3 will be not added because set has only unique values.
set.add("aaa");//set can have different data types.

console.log(set);
console.log(set.has(1));//has mehtod returns true if the value passed is present in the set else it returns false.
set.forEach(a=>console.log(a)); //like array foreach can also be used in set for printing each element individually;
