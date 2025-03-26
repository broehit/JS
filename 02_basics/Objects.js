const mysym= Symbol("key1");

const JsUser= {
    name:"Rohit",
    [mysym]: "Mykey2",
    age:22,
    email:"rohit@gmail.com",
    LoggedIn: true,
    city: "Mumbai",
}

// console.log(JsUser.name); // Rohit
// console.log(JsUser["name"]); // Rohit
// console.log(JsUser["age"]); // 22
// console.log(JsUser[mysym]); 


JsUser.email= "rohit@xyz.com";
// Object.freeze(JsUser);
JsUser.city= "Pune";
console.log(JsUser.city); // Mumbai
// console.log(JsUser)
// Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

//Function 
JsUser.greet= function(){
    console.log("Hello ")
}

JsUser.greet2= function(){
    console.log(`Hello Js User ${this.name}`)
}

console.log(JsUser.greet2()); // Hello Js User Rohit    
