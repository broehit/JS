const promiseOne = new Promise (function(resolve, reject){
    // do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compketed');
        resolve()}, 1000)
        
})


promiseOne.then(function(){
    console.log('Promise is consumed');
})

const PromiseTwo= new Promise(function (resolve,reject){

    setTimeout(function(){
        console.log('async task 2');
        resolve()

    },1000)
})
 PromiseTwo.then(function(){
    console.log('Async 2 resolved')
 });


 const PromiseThree= new Promise(function(resolve,reject){ 
    setTimeout(function(){
        resolve({username: "Broehit",
                email: "123@gmail.com"
        })

    } ,1000)
 })

 PromiseThree.then(function(user){
    console.log(user)

 })

 const PromiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username: "Rohit",
                Password: "123@"
            })
            } else{
                reject('ERROR: something went wromg')
            }
        },1000)
 })

PromiseFour.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{

    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("Promise is resolved or rejected")
})


PromiseFive= new Promise (function(resolve,reject){
    setTimeout(function(){

        let error=true;
        if(!error){
            resolve({username: "javscript", password: "123@rohit"})
        }else{
            reject("Error: Js went wrong")
        }
    },1000)
});

async function consumePromise(){
   try {
     const response= await PromiseFive
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}

consumePromise()

async function getAllusers(){
    await fetch('https://jsonplaceholder.typicode.com/users')
}