const arr= ["Rohit", 22, "Mumbai", "India"];
console.log(arr[0]); // Rohit

// Array Methods
arr.push("Developer");
console.log(arr); // ["Rohit", 22, "Mumbai", "India", "Developer"]
arr.pop();
arr.unshift("Mr.");
console.log(arr); // ["Mr.", "Rohit", 22, "Mumbai", "India"]    
arr.shift();
console.log(arr); // ["Rohit", 22, "Mumbai", "India"]   

arr.splice(2, 0, "Maharashtra");
console.log(arr); // ["Rohit", 22, "Maharashtra", "Mumbai", "India"]
arr.splice(2, 1);   
console.log(arr); // ["Rohit", 22, "Mumbai", "India"]   

arr.slice(1, 3);
console.log(arr); // ["Rohit", 22, "Mumbai", "India"]   

// differece between slice and splice
// slice() - returns the selected elements in an array, as a new array object.
// splice() - adds/removes items to/from an array, and returns the removed item(s).

const Rohit= ["Loser","Weak","Addict"]
const Rohit_future= ["Alined","Strong","Independent"]

Rohit_future.push(Rohit)
console.log(Rohit_future); // ["Alined", "Strong", "Independent", ["Loser", "Weak", "Addict"]]      

// const New_rohit= Rohit_future.concat(Rohit)
// console.log(New_rohit)

// ****SPREAD OPERATOR***

const New_rohit= [...Rohit_future, ...Rohit]
console.log(New_rohit); // ["Alined", "Strong", "Independent", "Loser", "Weak", "Addict"]