
// let a = 300 //global scope

if (true){

    let a = 20;
    const b = 38;
    var c = 49;  // var acts as a global scope
    console.log("Inner: ", a)

}

console.log (a)
// console.log (b)
// console.log (c)
  

/******** Scopes extended**********/

function one (){
    const username= "ROHIT"
    
    function two (){
         const wesbite= "youtube"
         console.log(username, wesbite)
    }
    console.log (username);
}
//two() // this will not work as two is not in the scope of one

one() // this will work as one is in the scope of two

/********* Hoisting **********/
console.log(a) // undefined 
var a = 10; // hoisting happens for var and function declarations
console.log(a) // 10
function hoist(){
    console.log(b) // undefined
    var b = 20; // hoisting happens for var and function declarations
    console.log(b) // 20
}   
if (true){
    const name= "Rohit";
    if (true){
        const website = " youtube";
        console.log(name + website)
    }
    //console.log(website)
}
//console.log(name) // this will not work as name is not in the scope of if

//***************************/

add1(5); // 6 can access 'add1' before initialization
// function declaration is hoisted 
function add1(num){

    return console.log(num + 1);
}


//add2(5); cannot access 'add2' before initialization   
const add2= function (num){
    return console.log(num +2);
}
add2(5); 
