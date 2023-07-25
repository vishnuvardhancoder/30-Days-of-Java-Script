//JavaScript, promises are used to handle asynchronous operations and help manage the flow of data in a more organized and readable way. Imagine you have some tasks that take time to complete, such as fetching data from a server, reading a file, or making an API call. Instead of blocking the program and waiting for these tasks to finish, promises allow you to define what should happen once the task is completed or if there is an error.

const event = new Promise((resolve,reject)=>{   //promise is just a class we just invoked it and store it in event variable now event is our promise. promise takes two parameters resolve for success and reject for failure
    var user = "vishnu";
    if(user=="vishnu"){
        resolve(user);//this line calls then.
    }else{
        reject("user is not vishnu");//this line calls catch.
    }
});

event.then((user)=>{ //control comes when resolved
    console.log(user);
}).catch((err)=>{ //control comes when rejected
    console.log(err);
})
.finally(()=>{ //finally would run compulsorily even if the condition is failed.
    console.log("Promise ends");
})