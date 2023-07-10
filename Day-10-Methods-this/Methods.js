//functions within objects are called as methods.

let laptop ={
    ram : 4,
    gen : 'i5',
    brand : 'dell',

    lap : function(){
        console.log("This is lap method");
    }
}
laptop.lap();//lap method is inside laptop object 