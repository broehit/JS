function Biodata(){
    console.log("Name: John Doe");
    console.log("Age: 30");
    console.log("Location: New York");
    console.log("Occupation: Software Developer");
}

// Biodata()

// function addition(a,b){
//     console.log(a + b)
// }

// addition(2,4) // no datatype of the parameters is checked

// addition(2, "4") // 24
// addition(2, null) // 2null
// addition(2, "a") // 2a
// addition("a",5) 
``
function addition(a,b){

    let result= a + b
    return result
}
const result=  addition(3,4)

// console.log("result: ", result)

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `Welcome ${username}`
}

// console.log(loginUserMessage("Rohit"))

function CalculateCartPrice (...num1){     // by adding the Rest Operator (... ) we can accept multiple inputs
    return num1
}

// console.log( CalculateCartPrice(100, 200))

const user = {
    name: "John",
    price: 999,
}

function getUserInfo(object){

console.log(`Username is ${object.name} and price is ${object.price}`)};

// getUserInfo(user)

getUserInfo ({
    name: "Rohit",
    price: 999
})

const Array =[200, 300, 500, 100]

function getsecondArray(anyArray){
    return anyArray[1];
}

console.log(getsecondArray(Array))