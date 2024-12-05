//  why java is statically language ?
//  ans : One of the most significant advantages of static typing is the ability to catch errors early in the development process.

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

// objects are stored in {} 
let myObj = {
    name: "hitesh",
    age: 22,
}


//function() can be also declare in variables 
const myFunction = function(){
    console.log("Hello world");
}
     
// typeof of datatypes:
 

console.log(typeof id);         //symbol=symbol
console.log(typeof false);      //boolean=boolean
console.log(typeof undefined);  //undefined=undefined
console.log(typeof String);     //string=string
console.log(typeof null);       //null=object
console.log(typeof score);      //number=number
console.log(typeof myFunction);  

//all non-primitive datatypes are all function and
// function datatype is called as  function-object


// https://262.ecma-international.org/5.1/#sec-11.4.3   