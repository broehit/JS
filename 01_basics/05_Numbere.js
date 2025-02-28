let num= 500
console.log(num)

let newNum= new Number(500)
console.log(newNum)

console.log(num.toString())
console.log(typeof num)

let u= 3452.453453166344

console.log(u.toFixed(3))

const h= 2909809790
console.log(h.toLocaleString('en-IN'))

/********************MATHS******************************/

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));
console.log(Math.ceil(Math.random()*10));
console.log(Math.round(Math.random()*10));

const min= 10
const max= 50

console.log(Math.floor(Math.random()*(max-min+1)+min))