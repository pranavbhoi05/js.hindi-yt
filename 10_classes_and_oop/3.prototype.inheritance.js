//  let mname = "pran    "
//  console.log(mname.length); 
 //we can count remove extralenght by using trim, but if there are multiple string i want to trim
 // in that case we use truelenght

// ###########################################################
// in here i have take array and object 
 
let myhero= ["thor","spinderman"]

let heropower = {
    thor : "hammer",
    spiderman: "slingshot",

    getspiderpower: function(){
        console.log(`spidys power is ${this.spiderman}`);       
    }
}

//i give power to object(pranav) cause all strings , array, functions passes THROUGH object then (null)

//  here i also can use object datatype and create object with it, in created pranav named function and give it (ALL POWERS OF FUNCTION)

//in here we access top level hirarchy then create new property in object(pranav) so i can use that in array,string, functions and all)
Object.prototype.pranav = function(){
    console.log("here i am");   
}

Array.prototype.heypranav = function(){
    console.log("hey pranav");   
}

// heropower.pranav() 
myhero.pranav() 
myhero.heypranav()
// heropower.heypranav()  //THIS WILL NOT WORK EXPLAINATION DOWN BELOW:
//IN THIS CASE I HAVE GIVEN POWER TO ONLY ARRAY, SO FUNCTIONS, STING CANT HAVE ACCESS OF NEWLY CREATED ARRAY'S OBJECT

// ################################################################
//CONCLUSSION : The pranav method logs "here i am" and works for both the heropower object and the myhero array.
// The heypranav method logs "hey pranav" and works only for the myhero array.


// #############################################################

//inheritance

const simple = {
    pname : "pranav"
}

const girl = {
   name: "gauri",
   __proto__ :simple
}

const collabe = {
    name3 : "im three",
    
}
Object.setPrototypeOf(collabe,simple)

// ##############################################

let anotherusername = "chaiaurcode   "

 //cause i wanted apply the same chaneges in all strings and upcomming strings
//i create strings object property (in other words i give full poewer of object)
    
String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}
anotherusername.trueLenght()
"pranav  ".trueLenght()
"gauri    ".trueLenght()
