//sometimes we need a blueprint to create many objects of same type here were constructor comes into place.

function Person(name,age){ //Use uppercase to constructors first letter
    this.name = name,
    this.age = age;
}
const Father = new Person("aaa",45);//You can create multiple objects with single blueprint Person which is a constructor.
const Mother = new Person("bbb",38);

console.log(Father);
console.log(Mother);