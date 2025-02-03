//  if statement

const temp = 50
if (temp === 50 ) {   
//     console.log(`temp is less than 50 `);
   }   else

{
       console.log(`temp is grater than 50`);
}

 // ********************************

 const score = 200 

 if(score > 100){
        const power = "fly"
       //  console.log(`user power : ${power}`);

 }

//  ******************************************
// shorthand notation (implicite scope)
// to write code in one line we use this method and we dont use breces

// const points = 1000
// if (points > 500) console.log(`points are greater than 500`);

// ********************************************************
// while cheaking multiple conditions

// const balance = 1000
// if (balance < 500) {
//        console.log(`balance is  less than 500`);
// }else if (balance < 700) {
//        console.log(`balance is  less than 700`);
// }else if (balance < 1000) {
//        console.log(`balance is  less than 1000`);
// }else
// {
// console.log(`balance is  less than 1200`);
// }

// **************************************************************
// reallife use of checking multiple conditions

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if (userloggedin && debitcard && 2 > 3) 
       //&& : (and operator) in this oprator all condition must be true
       {
       console.log(`allow to bu course`);
       }
       if (loggedinfromemail || loggedinfromgoogle) 
        //  || : or operator even if single condition cames true the code will be execute
       {
              console.log(`user is logged in`);
       }
  