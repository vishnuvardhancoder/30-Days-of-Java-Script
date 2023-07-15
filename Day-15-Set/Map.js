//Map is a collection of key and value pair which is very powerful for data storing.

let map = new Map(); //Map is also an object so we want to create object for it.

map.set("Name","a");//set is used to add data and data should be key value pairs.
map.set("rollno",23);//rollno is key.
map.set("Name","b");//this value will be updated to key Name thats why we using .set rather than using .add 
console.log(map.keys());//keys provide keys in the map
console.log(map.values());//values provide values 
console.log(map.has('rollno'));//has returns true if the value is present in the map you cannot give value here the value is mapped to a key so pass the key here.
console.log(map.get("Name"));//if you want get the value of the key.

for(let [k,v] of map){ //here we need both key and value so we using two variables k,v
    console.log(k,":",v);
}

map.forEach((k,v)=>console.log(k,"-",v)) //in foreach first value is passed then index then array so here it takes value as first then the keys as index.