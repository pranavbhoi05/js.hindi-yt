// OBJECT LITERALS :
//its nothing just creating the simple object
//nothing just store

// const user = {
//     username : "pranav",
//     logincount : 5,
//     signedin : true,

//     getUserDatails : function () {
//         console.log("thank god");
//         console.log(`username: ${this.username}`);
//         console.log(this);  //we show current context  
        
//     } 
// }

// console.log(user["username"])
// console.log(user.getUserDatails())

//  console.log(this); //we tried to run it in globle execution,if we print this statement it will give empty {} parenthises in output,but if you print same thing in browser it will give more results like window and many things in globle execution

// ##################################################################
//  what if i wanted to create user two , 
// im gonna have to repeat the same task,putting
//  the values all the time(so that we use constuctor)

//$$$$$$$$$$$$$$$$$$$$$constructor function $$$$$$$$$$$$$$$

function user1(username,logincout,isloggedin){
    this.username = username
    this.logincount = logincout
    this.isloggedin = isloggedin

    //we can also write method in here
    this.greeting = function() {
        console.log(`welcome ${this.username}`);
        
    }
    return this //(we have passed on object,whatever happen in function , (.this) will handle this)
}


// console.log(user1); 

const userone = new user1("pranav",5,true)
console.log(userone)

const usertwo = user1("chaiaurcode",88,false) if we perform this slid values will be override, 
//instead*******
// to avoid it we use constructor function (new) keyword : it always give new instance , so from now on values will not overwrite
const usertwo = new user1("chaiaurcode",88,false)
console.log(usertwo)

// console.log(userone.constructor); to see properties of consturctor use .constructor , it will give reference of your own function
;
  

// *******************************************************************
// (NEW) KEYWORD :

//1.wherever we use new keyword, we get empty {}(new instance) object created which we call instance
//2.constructor function calls cause of new keyword (packed all the argument and give it to us)
//3. 3.by using this kewordd all aruments which we have given will injecte in newly created variable and Automatically returns the new object 
//4.  we can stop overwritting values in function by using this


// *****************instanceof**********************

// instanceof in Plain Words:
// It’s like asking: "Is this thing made from that mold?"

// ***********************************************
// For example:
//1. If you have a toy car, you can ask: "Is this toy car made from the Car mold?"
//2. If yes, the answer is true.
//3. If no, the answer is false.


// **********************************************************
// class Car {} // This is the "mold" for making cars.
// const myCar = new Car(); // This is a toy car made from the Car mold.

// console.log(myCar instanceof Car); // true, because myCar is made from the Car mold.
// console.log(myCar instanceof Object); // true, because everything in JavaScript is an Object.
// console.log(myCar instanceof Array); // false, because myCar is not an array.

// **********************************************************8
// When to Use:
// Use it to check what something is before working with it.