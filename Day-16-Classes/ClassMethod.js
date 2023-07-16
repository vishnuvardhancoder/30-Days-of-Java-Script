//inside a class we can create methods for specific tasks methods are functions 

class Laptop{
    constructor(ram,brand){
        this.ram = ram;
        this.brand = brand;
    }
    getBrand(){ //this is a method inside a class which is used to return brand of the laptop
        return this.brand;
    }
}

const lap1 = new Laptop(4,"dell");
console.log(lap1.getBrand());//calling the method for lap1.