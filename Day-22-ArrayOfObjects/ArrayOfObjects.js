//ArrayOfObjects - objects which is key and value pairs within array that is an array contains multiple objects in it.

const books =[ //here we created books array which holds multiple objects within it
    {
        title:"Book1",
        author:"Author1"
    },
    {
        title:"Book2",
        author:"Author2"
    },
    {
        title:"Book3",
        author:"Author3"
    }
]

console.log(books[0]);//it gives first object completely
console.log(books[0].title);//it gives only the first objects title property alone

//looping through array of objects.

for(const book of books){
    console.log(`${book.title} by ${book.author}`);
}