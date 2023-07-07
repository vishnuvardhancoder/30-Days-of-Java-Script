let Employee ={
    name : "aaa",
    eid : 1,
    laptop : {  //object inside object
        ram : 8,
        cpu : "i5",
        brand : "dell"
    }
}

for(let key in Employee){
    console.log(key,Employee[key])
}

//for in loops are used to iterate over the objects.