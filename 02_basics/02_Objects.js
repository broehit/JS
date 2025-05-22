// const tinderUser = new Object() singleton
const tinderUser = {

    id: 2343,
    name: "Rohit",
    age: 22,
    email:"xyz@gmail.com",
    loggedIn: false,}
  
// console.log(tinderUser)

const user={
    city: "Mumbai",
     fullname:{
        username:{
            firstName: "Rohit",
            lastName: "Manal",
        }
     }
}
//  console.log(user.fullname.username); // Rohit

// const obj1= { 1: "a", 2:"b"}
// const obj2= { 3: "a", 3: "b"}

// const obj3={ ...obj1, ...obj2}
// const obj3= Object.assign( obj1, obj2) 

// console.log(obj3) // { 1: a, 2: b, 3: a, 4: b}

const obje4= [
    { id: 1, name: "Rohit", age: 22 },
    { id: 2, name: "Azlehm", age: 22 },
    { id: 3, name: "Reyna", age: 22 },
    { id: 4, name: "Mohit", age: 22 },
]

//  console.log(obje4[3].name) // Rohit


// Destructuring //
const course = {

    courseName: "Js for Beginners",
    price: "999"
}

// console.log(course.courseName)
const {courseName: name}= course

console.log(name) 