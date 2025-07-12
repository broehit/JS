// const mycoding= ["JavaScript", "Python", "Ruby", "Java"]

// const Values= mycoding.forEach( (item) => {
    
//     console.log(`I love ${item}`);
//     return item; // This will not return anything to Values
//     // forEach does not return a value
// })

// console.log(Values) // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums= myNums.filter((num) => num > 4 )
// const newNums= myNums.filter( (num) => {
//     return num> 4
// } )


// console.log(newNums) // [5, 6, 7, 8, 9, 10]

// const newNums =  []

// myNums.forEach( () => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// })

// console.log(newNums)

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", published: 1925, genre: "Fiction", edition: 2004},
    { title: "To Kill a Mockingbird", author: "Harper Lee", published: 1960, genre: "Fiction", edition: 2010},
    { title: "1984", author: "George Orwell", published: 1949, genre: "Dystopian", edition: 2003},
    { title: "Pride and Prejudice", author: "Jane Austen", published: 1813, genre: "Romance", edition: 2018},
    { title: "The Catcher in the Rye", author: "J.D. Salinger", published: 1951, genre: "Fiction", edition: 1991},
    { title: "The Hobbit", author: "J.R.R. Tolkien", published: 1937, genre: "Fantasy", edition: 2001}  
]

// const userBooks= books.filter( (bk) => bk.genre==="Fiction" )

// console.log(userBooks)

const userBooks = books.filter( (bk)  => {
    

    return bk.published >=1950 && bk.genre ==="Fiction"  } )

console.log(userBooks)