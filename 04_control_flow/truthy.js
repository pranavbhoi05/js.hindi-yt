const useremail = "pran@gmail.com"

if (useremail) {
    console.log(`is looged in`);
}else {
    console.log(`not logged in`);
}

// falsy values
// false , 0 , -0 , BigInt , "" , null , undefined , NAN
// *********************************************************
// truthy values
// "0" , `false` " " , [] , {} , function(){}

if (useremail.length === 0) {
    console.log(`empty`);
    
} 

const empthyobj = {}
if (Object.keys(empthyobj).length === 0) {
    console.log(`obj is empty`);
    
}

// ****************************************************
// nullish coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20
// it checks safty value if its null or undefined and if its then it will take another value which was preserved 

console.log(val1);
// *********************************************************************

// terniary operator

// condition ? true : false

 
const iceteaprice = 100
iceteaprice <= 80 ? console.log(`price is less than 80`) : console.log(`price is greater than 80`);


 