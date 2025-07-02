//for of
// ['','','']
// [{},{},{}]

const arr= [1, 2, 3, 4, 5]


for (const val of arr) {
    
    // console.log(`Value of element is ${val}`)
    
}

//

const greetings= "Hello World";

for (const greet of greetings) {
    
    
// console.log(`Each char is ${greet}`)
    
}

//Maps
 //Known for unique values
 //also keeps insertion order
//  Maps are iterable
const map = new Map()
map.set("name", "John");
map.set("name2", "Doe");
map.set("name3", "Smith");
// map.set("name3", "Smith"); // duplicates will not be added

for (const [key, value] of map) {
    console.log(key," : ",value)
    
}

const myObject = {
    name: "John",      // Objects are not iteratable by default
    age: 30,             
    city: "New York"
};

// for (const [, value] of myObject) {
//     console.log(key,value)
// }                   // Object are not iteratable here in for of loop

