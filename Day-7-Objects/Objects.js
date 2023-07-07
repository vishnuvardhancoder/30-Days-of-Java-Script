//object is a real world entity.Define object within curly braces,it is in key : value form
let input = 'name'
let Employee = {
    name : "aaa",
    eid : 1,
    dept : "bbb"
}
console.log(Employee);//displays all the properties in the object
console.log(Employee.name)//using dot operator particular property can be fetched.
console.log(Employee['name'])//you can also give key in square bracket instead using dot operator but dot operator is preferred.
console.log(Employee.input)//if you want to use the inputted key its not possible with dot operator so use it in square bracket.
console.log(Employee[input]);//Now thats works fine.

