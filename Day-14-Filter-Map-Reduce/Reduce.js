let nums = [1,2,3,4,5];
console.log(nums.reduce((a,b)=>a+b)); 
//reduce - reduces the value in the above example we adding all the elements in the array which returns only one value so it is reducec.

//filter,map,reduce - together

let num = [1,2,3,4,5];
let result = num.filter(n => n%2===0)//filter filters even number which is 2,4
                .map(n => n*2) //map performs multiply operation for the filtered values then it becomes 4,8
                .reduce((a,b) => a+b); //reduce reduces the array into single value which is 4+8=12
console.log(result);