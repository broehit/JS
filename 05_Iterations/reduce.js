const myNums = [1, 2, 3 ];

const total= myNums.reduce((acc,current)=>{
        console.log(`Accumulator: ${acc}, current value: ${current}`)
    return acc + current;
}, 0 )

console.log(total)

const Cart= [
    { name: "Apple", price: 1.2, quantity: 3 },
    { name: "Banana", price: 0.5, quantity: 5 },
    { name: "Orange", price: 0.8, quantity:2 },
    { name: "Mango", price: 1.5, quantity: 4 }                     
]

const pay= Cart.reduce((acc, item) => {return acc + item.price
},0)

console.log(pay)