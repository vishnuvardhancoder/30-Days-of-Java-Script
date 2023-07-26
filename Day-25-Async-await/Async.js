//synchronous is step by step execution one line is executed untill other lines should wait.
//asynchronous does not wait for any execution it executes all lines if one line takes more time to execute like fetching data from api it starts the function and moves to the next line when the process of previous line finished it will automatically return using callback functions or promises.

const event = new Promise((resolve, reject) => {
    var user = "vishnu";
    if (user === "vishnu") {
      resolve(user); // This line calls the "then" block.
    } else {
      reject("user is not vishnu"); // This line calls the "catch" block.
    }
  });
  
  async function handleEvent() { //async functions are declared with async keyword
    try {
      const user = await event; // Pauses here until the "event" promise resolves.//await keyword is used to wait untill promise is resolved await is only used inside a asynchronous function
      console.log(user);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Promise ends");
    }
  }
  
  handleEvent();
  