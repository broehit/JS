// for loop

for ( let i = 1; i <= 10; i++ ) {
    console.log(`OUTER LOOP: ${i}`);
    for ( let j = 1; j <= 10; j++ ) {
        // console.log(`Inner loop: ${j}`);
        // console.log(i + " * " + j + " = " + (i * j));
    }
}

let myArray = [flash, superman, batman, wonderWoman, aquaman]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]; // here myArray.lenght is kept < and not <= as the index of original array is just 2
    console.log(element);
    
}

//continue and break statements
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping number 5");
        continue; // Skip the rest of the loop when i is 5
    }
    if (i === 8) {
        console.log("Breaking at number 8");
        break; // Exit the loop when i is 8
    }
    console.log(i);
}
