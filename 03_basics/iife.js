// Immediately Invoked Function Expression (IIFE)
   
(function trip(){
    console.log("Trip ")  // named iife
})();  // ; was needed so as to stop the parser from thinking that the function is a function declaration

( (name) =>{
    console.log(`Trip Completed ${name}`)
} )("Rohit")

// IIFE with parameters




