let Employee ={
    name : "aaa",
    eid : 1,
    laptop : {  //object inside object
        ram : 8,
        cpu : "i5",
        brand : "dell"
    }
}
console.log(Employee)
console.log(Employee.laptop.cpu)//cpu is inside laptop and laptop is inside employee so we used dot operator.
console.log(Employee.laptop1?.ram1) //? - to make it undefined without producing errors.laptop1 is not a property in employee so it throws error but by using ? we can avoid error.
delete Employee.eid //delete is used to delete a property
console.log(Employee)