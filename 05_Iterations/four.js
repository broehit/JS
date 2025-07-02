//iterating over an object using for-in loop
// Objects are not iterable by default, but we can use for-in loop to iterate over their
 
const myObject= {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    java: "Java",
}

for (const key in myObject) {

    // console.log(`${key} is the shortcut of ${myObject[key]}`)

} 

// Iterating over an array using for-in loop

const programming = ["js", "py", "rb", "java"];


for (const key in programming) {
    // console.log(programming[key])

}

// Iterating over a Map using for-in loop
// const map = new Map()
// map.set("name", "John");
// map.set("name2", "Doe");      
// map.set("name3", "Smith");


// for (const key in map) {
//    console.log(key)    
//      }   
       // This will not work as expected, since Map is not iterable with for-in loop.
