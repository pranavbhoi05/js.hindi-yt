//A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output

// function_functionname()_function systax

//definition of function

function sayMyName () {
 console.log("p");
 console.log("r");
 console.log("a");
 console.log("n");
 console.log("a");
 console.log("v");

}

//down below there is reference and  exectue
// sayMyName ()

                       //parameters  
// function functionname(number1, number2){

//     console.log(number1 + number2);
   

// }


function addTwoNumberse(number1, number2){

    //metod no.1
   // let result = number1 + number2
   // return result

   //method no.2 is easy
   return number1 + number2

   //once we return the function ,other values wont work: e.g down below
   console.log("pranav");
}
                  //arguments
const result = addTwoNumberse(4,5)
//we can also store function in variable

// console.log("result", result);


function loginUserMessage(username = "pran"){ //we took = pran for e.g
    // if (username === undefined) {   //also (!username) and (===undefined) are same 
    if(!username){   
    console.log("please enter a username");
        return
    }
    return `${username} "just logged in"`

}
// console.log(loginUserMessage("pranav"));

// console.log(loginUserMessage());


***************************************************************************

// 2nd topic

function calculatecartprice(...number) //we used (rest/sprade) oprator so that we can put multiplevalue
{
    return number
}

// console.log(calculatecartprice(200,400,500,600));


const ggg={
    name :"pranav",
    email : "god@gmail.com"
}
function fname(unpleasent){
    console.log(`his name is ${unpleasent.name} and its mail id is ${unpleasent.email}`);
    return
} 

// console.log(fname(ggg));

// also*********************there is another method

// 2nd method : its not necessary to create object the way we create on top of the code

// fname({
//     name:"pranav",
//     email: "god@gmail.com"
// })

// function with array*************************************************


// const ary = [1,2,3,4]
function arrayfunction(arrayobj){
    return arrayobj[2]
        
}

// console.log(arrayfunction(ary));

 console.log(arrayfunction([1,2,3,4]));
