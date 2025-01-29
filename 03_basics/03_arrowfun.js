const user = {
    username : "pran",
    price : 000,

    WelcomeMessage : function(){
        console.log(`${this.username} , welcome to web`);
        // console.log(this);    (for example)
        

     //this means current context, we use this only in {} 
     //this refers to current context   {}  
    }

}

// user.WelcomeMessage() 
// user.username = "sam"
// user.WelcomeMessage()

// console.log(this);  (for experiment)

// inspect in browser by login : console.log(this)
// once upon a time when java used to have only one engine which was in browser
//but after few years multiple environment came out like node,dino
//but now we have standalone engine

// **********IMP******************
// all the globle objects in browser are window object and thats how we can catch all the windows event like (click and formsubmit)


// ****************ARROWFUNCTION*************************************

// function chai(){
//     let username = "pran"
//     console.log(this.username);
    
// }
//  chai()
 //we cannot access this in function
 //when we run (this) in node environment we get diffrent values

//  ***********************************************************
// another example
//same will happen with variable

// const chai = function(){
//     let username = "pran"
//     console.log(this.username);

// }
// chai()

// *****************************************************************
// arrow function (=>)

// const chai = () => {
//         let username = "pran"
//         console.log(this);
    
//     }
//     chai()
// whats diffrence between normal function anf arrowfunction?

// with arrow functions there are no binding of this .
//  In regular functions the (this) keyword represented the object that
//  called the function, which could be the window,
//  the document, a button or whatever.
//  With arrow functions the (this) keyword
//  always represents the object that defined the arrow function

// ****************************************************

// syntax for arrowfunction is () =>{}

    // const addtwo = (num1,num2) =>{
    //     return num1 + num2
    // }
    // console.log(addtwo(5,5))

    // **********************************************************
    // implesit return method
    // in this method we dont use  parenthices () and also implicite means assue,
    //  i assume that i have only one line code, also dont need to return 
    // in this method we remove : {} and return keyword  
    //  if we use parenthices() then we dont need to write down return keyword
    // same if we use brecec{} we gonna need to write return

    // const addtwo = (num1,num2) => (num1 + num2) 
    // console.log(addtwo(5,5))  
    
    // ***********************************************
    //same goes to explisite we use return and {} 

    // *******************************************************888
    // while addind object in arrowfunction
    const addone = (num1,num2) => ({username : "pran"})

    console.log(addone(5,5))

    // const myarray = [2,3,4,5,6]

    // myarray.forEach()
