//forof loop is used in arrays. forin loop is used in objects key-value pairs.

let nums = [];
nums[0] = 4;
nums[99]=9;
console.log(nums);

for(let x of nums){ //for storing each element in the array a variable x is used here
    console.log(x);
}

// for(let key in nums){  //it only gives 0 and 99 because it is considered as keys.
//     console.log(key);
// }