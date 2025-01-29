//scope

let a = 100

if(true){
let a = 1
const b = 2
console.log("inner:",a);

}
// console.log(a);
// console.log(b);
// console.log(c);

// there is diffence in scope from broswer tab(inspect) and node.js

// ***********************************************************************
// vid no 22

function one(){
    const username = "pranav"

    function two(){
        const website = "yt"
        console.log(username);
        
    }
    // console.log(website); 
//child can access parents element but parents cannot access childs element
    // two()
    
}
// one()

// another example

if(true){
    const username = "pran"
    if (username ==="pran") {
        const website = "yt"
        // console.log(username + website);
        
    }
    // console.log(website);  will not work
    
}

// console.log(username); will not work



// **************************interesting*********************

//exp no.1

console.log(addone(5))
function addone(num){
    return num + 1
}
 // we can declear console log before declearing function 


// exp No.2
addtwo()
const addtwo = function(num){
    return num + 1
}

//in this case we have store value in variable
//but in this case function wont work if we run console log before declearing function 
