//filter method is used to filter something you want in the array it returns only the true values.

let nums =[23,44,53,56,12];
console.log(nums.filter(n=>n%2===0)); 
//it will filter the even number alone in the given array
//we dont need to put () if we have only one parameter and we dont need to put{} if we have only one return statement.

//it will filter according to age should be greater than 18
const ages = [12,15,19,23,10,54];
const checkAdult = age => age >=18;
const result = ages.filter(checkAdult);
console.log(result);
