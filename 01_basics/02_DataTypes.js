// "use strict"; //to apply new version of js

// alert(6+9) // since we are working in node js alert wont work here but will work in browser


// let  name="Rohit"
// let age=53
// let lie=true
// null // standalone value that 

//Primitive dataypes
//Primitive datatypes means that they are not objects and they do not have any methods
//Primitive datatypes are immutable
//Primitive datatypes are stored in stack
//Primitive datatypes are copied by value
//Primitive datatypes are passed by value
//Primitive datatypes are simple data types
//Primitive datatypes are faster than non primitive datatypes
//Primitive datatypes are limited in size
//Primitive datatypes are 7 types : strings, numbers, boolean, null, undefined, symbol, bigint
//explaination of primitive datatypes
//strings: used to store text
//numbers: used to store numbers
//boolean: used to store true or false
//null: used to store nothing
//undefined: used to store undefined
//symbol: used to store unique values
//bigint: used to store large numbers   //bigint is a new datatype in js    


/*************NON PRIMITIVE************************* */
//non primitive datatypes (Reference Datatypes): objects, arrays, functions
//non primitive datatypes are stored in heap
//non primitive datatypes are copied by reference
//non primitive datatypes are passed by reference
//non primitive datatypes are complex data types
//non primitive datatypes are slower than primitive datatypes
//non primitive datatypes are large in size
//non primitive datatypes are 3 types: objects, arrays, functions
//non primitive datatypes means that they are objects and they have methods

//non primitive datatypes (Reference Datatypes): objects, arrays, functions

//strings
let name1="Rohit"
let name2='Rohit'
let name3=`Rohit` //backticks   //template literals
console.log(name1)
console.log(name2)
console.log(name3)  //template literals     
//template literals are used to write multiline strings and also to write strings with variables
console.log(`My name is ${name1}`) //template literals
console.log(`My name is ${name2} `) //template literals
//numbers
let number1=23
let num2=23.23
console.log(number1)
console.log(num2)
//boolean
let lie1=true
let lie2=false
console.log(lie1)
console.log(lie2)
//null
let nullValue=null
console.log(nullValue)
//undefined
let undefinedValue
console.log(undefinedValue)
//symbol
let sym1=Symbol()
let sym2=Symbol()
console.log(sym1)
console.log(sym2)
//bigint    //used to store large numbers
let bigInt= 8769868
console.log(bigInt)
//objects
let myObj={
    name:"Rohit",
    age:23
}
console.log(myObj)
//arrays
let myArr=[1,2,3,4,5]
console.log(myArr)
//functions
let myFunc=function(){
    console.log("This is a function")
}
console.log(myFunc)
//typeof operator
console.log(typeof name1)
console.log(typeof number1)
console.log(typeof lie1)
console.log(typeof nullValue)
console.log(typeof undefinedValue)
console.log(typeof sym1)
console.log(typeof bigInt)          //bigint
console.log(typeof myObj)
console.log(typeof myArr)
console.log(typeof myFunc)
//type conversion
let str="123"
let num=Number(str)
console.log(num)
console.log(typeof num)
let str1="123abc"
let num1=Number(str1)
console.log(num1)
console.log(typeof num1)

//******************************************************** */

// Stack (Primitive) and Heap (Non Primitive)
// Stack: stores primitive datatypes, stores variables, stores function calls
// Heap: stores non primitive datatypes, stores objects, arrays, functions
// Stack is faster than heap    //stack is faster because it is a simple data structure
// Heap is slower than stack
// Stack is limited in size
// Heap is large in size

let x= "Rohit"
let y= x
console.log(x)
console.log(y)

let rohitm={
    email:"rohit@google.com",
    age:23
}
 let rohitn = rohitm
 rohitn.email="demo@gmail.com"
console.log(rohitm)
console.log(rohitn)


//Stack stores primitive datatypes which is a copy of the reference while heap stores the reference of the non primitive datatypes 
 //example: x and y are stored in stack and rohitm and rohitn are stored in heap
 //x and y are stored in stack and are copies of the reference
 //rohitm and rohitn are stored in heap and are references
 //when we change the value of x, y remains the same
 //when we change the value of rohitm, rohitn also changes
 //this is because x and y are copies of the reference while rohitm and rohitn are references
 //this is called shallow copy
 //to create a deep copy we use spread operator

 /***************STRINGS************/

 let user= "Rohit"

 console.log(user.length) //length of the string
 console.log(user.toUpperCase()) //converts to uppercase
 console.log(user.toLowerCase()) //converts to lowercase
 console.log(user.substr(1,3)) //substring
 console.log(user.substring(1,3)) //substring
 console.log(user.slice(1,3)) //substring

 let user1="  Rohit   "

 console.log(user1)
 console.log(user1.trim()) //removes the extra spaces