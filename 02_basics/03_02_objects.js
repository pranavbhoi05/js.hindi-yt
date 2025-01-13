// singleton objects by using constructor********************


// const tinderuser = new Object() //singleton object

// both are same but whenever intreviwer ask question give em diffece

const tinderuser = {} //non singleton object

tinderuser.id = "123abc"
tinderuser.name = "pran"
tinderuser.isLoggedIn = false
    

// console.log(tinderuser);

const regularuser = {
    email : "sum@gmail.com",
    fullname : {
        userfullname: {
            firstname : "pranav",
            lastname : "bhoir"
        }
    }

} 

// console.log(regularuser.fullname.userfullname.firstname);


//merging two objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = {...obj1, ...obj2} //sprade operator
// console.log(obj3);



//whenever value come from database, it comes in this form :
const users = [
    {
        id : 1, 
        email : "pran@gmail.com"
    },
    {
        id : 1, 
        email : "mran@gmail.com"
    },
    {
        id : 1, 
        email : "lran@gmail.com"
    }
     
]

//we can access array value lie this
console.log(users[1].email);
 
console.log(tinderuser);



//methos in object*****************************

console.log(Object.keys(tinderuser));
// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
//opt : [ 'id', 'name', 'isLoggedIn' ]


console.log(Object.values(tinderuser));
// it gives value of givenkeys
//opt : [ '123abc', 'pran', false ]



console.log(Object.entries(tinderuser));
// will give in array format
// opt : [ [ 'id', '123abc' ], [ 'name', 'pran' ], [ 'isLoggedIn', false ] ]


console.log(tinderuser.hasOwnProperty(`isLoggedIn`));
// opt : true
// hasownproperty is the prototyp we can inspect in browser, there are more prototyp in inspect
//The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property
