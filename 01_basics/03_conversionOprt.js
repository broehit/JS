let score="23abhc"

console.log(typeof (score));

let valueInNum = Number(score)
console.log (typeof valueInNum )
console.log(valueInNum)

/* "23"= 23
   "23abhc"= NaN
   true=1, false=0 */

   let LogedIn= 0

   let booleanValue= Boolean(LogedIn)
   console.log(booleanValue)
     
   console.log(typeof (booleanValue))
   /* 1= true
   09= false
   ''=false
   'rohit'= true */

   /**************************OPERATIONS************************************** */



   let a = 3
   let b = 4
    b= a++              //postfix increment

      console.log(b)

   let x=5
   let y=6
   y= ++x              //prefix increment
   console.log(`x: ${x}, y: ${y})`) 