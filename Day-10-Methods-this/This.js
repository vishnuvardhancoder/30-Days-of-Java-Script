//this - it is a keyword which refers to the current object 

let laptop ={
    ram : 4,
    gen : 'i5',
    brand : 'dell',

    lap : function(){
        console.log(laptop.ram);//it works fine but instead of using object name use this it is very useful when you working with multiple objects.
        console.log(this.ram);
    }
}
laptop.lap();