//JavaScript Classes are templates for JavaScript Objects.
//Using class keyword class is created and always add a method named constructor() in your class if you not define constructor js will add an empty constructor itself.

class Laptop{ //this creates a class called laptop which has two initial properties
    constructor(ram,brand){
        this.ram = ram;
        this.brand = brand;
    }
}

const lap1 = new Laptop(4,"dell");//it uses Laptop class to create lap 1 object by passing two values.

//the constructor method inside the class is called automatically when a new object is created

console.log(lap1);
