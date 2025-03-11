// how to create promise 

// there are 2 parts of promises (resolve and reject)
    
//do an async task
//database calls,cryptography,network


//why we take settimeout in  promises ??
//SetTimeout: Great for simple delays, but not for handling async tasks.
// Promises: Use them for async operations like API calls, file I/O, or
//  database queries. They make your code cleaner, more readable, and easier to maintain.

//method 1 :
// const promiseone = new Promise(function(resolve,reject){
// setTimeout(function(){
//         console.log(`async task is complete`)
//         resolve()
//     },1000)
// })

// promiseone.then(function () {
//     console.log("im done")
// })
// ##############################################

//method 2:
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("im done")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("with lap");
    
// })

// ###############################################

// method 3: //resolve is directly connected to then, we arnt going to use settimeout all the time and console log ,what if data come outof from network, and ill also need to pass that data
//in this methos we learn how to pass values from resolve to then

//  const promisetwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({myname : "name" , email : "pran@gmail.com"})
//      } ,1000)
//  })

//  // whatever you pass parameter in resolve it by default pass to then

//  promisetwo.then((function(hii){
//     console.log(hii);
    
//  }))

//########################################################

// method 4: 

// const promisefour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error) {
//             resolve({username : "name" , email : "mygmai.com"});
//         }else{
//             reject(`ERROR : somthing went wrong`);
//         }
//     },1000)
// })

// promisefour.then((user) =>{
//     console.log(user);
//     return user.username
// }).then((username) =>{         //we did chanining here    //take any name in parameters,
//     console.log("user us logged");
// }).catch((saz)=>{             //take any name in parameters,
// console.log("error");
// }).finally(()=>{
//     console.log("the promise is either rsolved or rejectes");    
// })  //finally is default in promise

// ##########################################################

// BY USING ASYNCAWAIT SYNTAX: 
// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//                 let error = true
//                 if(!error) {
//                     resolve({username : "javascript" , password : "123"});
//                 }else{
//                     reject(`ERROR : JS went wrong`);
//                 }
//             },1000)
// })

// async function consumepromisefive(){
//    try {
//     const response =  await promisefive
//    console.log(response);
//    } catch (error) {
//     console.log(error);
//    }
// }
// consumepromisefive()

// ###########################################################

// FETCH METHOD USING ASYNCWAIT :

// async function getallusers() {
//    try {

//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data  = await response.json() //we convert this data in json , there are more ways to convert into json fotmat too
//     console.log(data);
//    } catch (error) {
//     console.log("e : erroe");
//    }
// }
// getallusers()

// ###################################################################3

// FETCH METHOD BY USING .THEN AND .CATCH METHOD

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
                let error = true
                if(!error) {
                    resolve({username : "javascript" , password : "123"});
                }else{
                    reject(`ERROR : JS went wrong`);
                }
            },1000)
}) 

fetch('https://jsonplaceholder.typicode.com/users')
.then((responce)=> {
    return responce.json()  //we convert this data in json , there are more ways to convert into json fotmat too
}).then((data)=> {
    console.log(data);
})
.catch((error)=> console.log(error))