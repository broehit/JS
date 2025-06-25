const userEmail = '';

if (userEmail) {
  console.log("User email is set");
}
else {
  console.log("User email is not set");
}


// falsy values

// -0, 0, "", null, undefined, NaN, false, bigint(0), Symbol(), 0n   

// truthy values

// "0", " ", [], {}, true, 1, -1, Infinity, -Infinity, bigint(1), Symbol(''), 0n, function(){}

if (userEmail.length === 0){
    console.log("Array is empthy"); 
};

const emptyObject = {}
if (Object.keys (emptyObject).length === 0 ) {
    console.log("object is empty"); 
}

//Nullish Coalescing Operator (??) - returns the right-hand operand when the left-hand operand is null or undefined, otherwise returns the left-hand operand

const userName = null;
const defaultName = "Guest";
const displayName = userName ?? defaultName;    
console.log(displayName); // Output: Guest

// Ternary Operator - a shorthand for if-else statements

// condition ? expressionIfTrue : expressionIfFalse;

const age = 18;
const canVote = age >= 18 ? "You can vote" : "You cannot vote";

console.log(canVote); // Output: You can vote