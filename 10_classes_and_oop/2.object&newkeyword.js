// function multiplieby5(num) {
//     return num*5
// }
// multiplieby5.whatever = 2
// console.log(multiplieby5(5));
// console.log(multiplieby5.prototype);
// console.log(multiplieby5.whatever);

//In this specific code, whatever is just a simple example of how functions in JavaScript can also act as objects with properties. It doesn’t directly influence the function's logic.

// ##################################################
//IN THIS CODE:
// Constructor Functions: Used to create multiple objects with the same structure and behavior.

// Prototype Methods: Shared across all instances, saving memory and ensuring consistency.
// ###############################################
// This code is a great example of how JavaScript's prototype-based inheritance works. By defining methods on the prototype, all instances of createuser share the same methods, making the code efficient and scalable. This pattern is foundational for understanding object-oriented programming in JavaScript and is often used in real-world applications. 

function createuser(username,score) {
    this.username = username,
    this.score = score 
}

createuser.prototype.increment = function(){
    this.score++
}

createuser.prototype.printme =function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createuser("pran",25)
const tea = new createuser("gauri",24)


chai.increment()
chai.printme()
console.log(chai);
console.log(tea);

/* behind the scenes
   A new object is created : the new keyword initiates the creation of new javascript object.

   A prototype is linked: The newly created object gets linked
 to the prototype property of the constructor function. This
 means that it has access to properties and methods defined
 on the constructor's prototype.

 The constructor is called: The constructor function is
 called with the specified arguments and this is bound to
 the newly created object. If no explicit return value is
 specified from the constructor, ļavaScript assumes this,
 the newly created object, to be the intended return value.

The new object is returned: After the constructor function
has been called, if it doesn't return a non-primitive value
(object, array, function, etc.), the newly created object
is returned.

*/
