//Map
//Map is used to transform data
//It creates a new array with the results of calling a provided function on every element in the
 //also it doesn't check if the input is true or fasle

const myNums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums= myNums.map( (num)=> {return num +10} )

const newNums= myNums.map((num)=> num*19)
                      .map((num)=> num+2)
                      .filter((num=> num>=56))
console.log(newNums)