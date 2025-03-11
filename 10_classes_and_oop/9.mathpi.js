//can we change Math.Pi value in js and how ?
//and if not then why?



// topic behind the scene:
// is there any posibility where i cannot change properties of object and why i cannot change? and what are the reason

//getOwnPropertyDescriptor shows hidden things in object
// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

// opt:
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,       
//     configurable: false      
//   }
// ######################################################################

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailbale : true,
    sayhi: function(){
      console.log("code fat gaya");
      
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//is there any way that if someone trys make changes in our freameworks and we wanted to prevent this changes
Object.defineProperty(chai , "name", {
    // writable : false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai , "name"));
// NOTE : whenever we make changes in enumerable and writable loop will not work

for (const [key , value] of  Object.entries(chai)) {
  if(typeof value !== "function"){
    console.log(`${key} : ${value}`);
  }
} 
 // If value is not a function (typeof value !== "function"), the condition is true, and the code inside the if block executes.
  // If value is a function (typeof value === "function"), the condition is false, and the code inside the if block is skipped.
  //this will work if there is function it present in object then code wont work
  //so we need to add condition here

 