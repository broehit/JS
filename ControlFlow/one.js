if (2 ==='2') {
  console.log('This is true');
}

 // === is a strict equality operator that checks both value and  data type
// == is a loose equality operator that checks only value
//!== // is a strict inequality operator that checks both value and data type
// != // is a loose inequality operator that checks only value

// const score= 200;
// if (score > 100) {
//   let power= 'Fly' // let is block scoped
//   console.log(`You have obtained the power to ${power} `);
// }
// else{
//     console.log('You have not obtained any power');
// }

// console.log(power); --- // ReferenceError: power is not defined if we use let datatype then the scope is block level wheresas if we use var datatype then the scope is global level 

// console.log(power); // ReferenceError: power is not defined

// const balance = 1500;
// if (balance > 1000) console.log('You are eligible for a loan'), console.log('Please submit your application.'); --- // This is a single line if statement with multiple statements separated by commas higily unproductive and not recommended  

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2==3) {
    console.log('You can make a purchase');

}

if ( loggedInFromGoogle || loggedInFromEmail) {
    console.log('User Logged In Successfully');
}
 

