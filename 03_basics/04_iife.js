
// ********************************************8
// IIFE 
//syntax : use () from start of function

// why we use?

// to prevent pollution from global scope to normal funcion

(function tea(){
console.log(`DB CONNECED`);

})
();

//SEMICOLAN (;) IS MUST AT THE END, WHILE CALLING FUNCTION

// now we have invoked the function

// ********************************************
//in arrowfunction stle

((name) => {
    console.log(`DB CONNECTED2 ${name}`);
    
}) (`pranav`);

// IMP**************************************
// SOMETIMES INTERVIEWER ASK TO WTITE NAMED IIFE

// named iife mean function with name and declear with iife thats it
// unnamed iife is written without name of function by using arrow function

// parameters passed iife is also asked by interviewer

( (poll) =>{
    console.log(`hello ${poll}`);
    
})("pran")

//semicolan is must*****************************************
