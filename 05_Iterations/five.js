// For-each loop 
// in for each the call back function takes three arguments
// (item, index, array)
const coding= ["JavaScript","Python", "Ruby", "Java"]

// coding.forEach( function (item){
//     console.log(`I love ${item}`)

// } )  // using callback function

// coding.forEach((val) => {
//     console.log(`i love ${val}`);
    
// })
 //>>> using arrow function

//  coding.forEach( (item, index, arr) => {

//     console.log(item,index,arr)

//  }) //>> using arrow function with index and array

const mycoding= [
    {name: "JavaScript", type: "Dynamic"},
    {name: "Python", type: "Dynamic"},
    {name: "Ruby", type: "Dynamic"},
    {name: "Java", type: "Static"}  
]

mycoding.forEach( (item)=> {
    console.log( item.name);
} )

