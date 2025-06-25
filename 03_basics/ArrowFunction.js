const user= {
    username: "Rohit",
    price: 999,

    welcomeMessage: function(){
        console .log(`${this.username} , Welcome to website`)
        // console.log(this)
    }
}
// user.welcomeMessage();
// console.log(this)

// function rohit(){
//     let username = "Rohit"
//     console.log(this.username)
    
// }
// rohit() 

// const rohit = function(){  
//     let username = "Rohit"     
//     console.log(this.username)
// }
// rohit ()

const rohit = () => {
    let username = "Rohit"
    console.log(this)
}
// rohit()

// const add= (num1, num2) =>{
//     return num1 + num2
// }
// console.log(add(2, 3))

// const add= (num1, num2) => (num1 + num2)
const add= (num1, num2) => ({username: "Rohit"})
console.log(add(2, 3))
