// ******************************
// foreach loop: (interesting)
// its higher order function

// ********************************************************
// sometimes some loops are directly added into property
// ***********************************************************
// we can inspect in browser to see its prototpe

const coding = ["js","rb","cpp","python","java"] 

//in this loop we wil see default function working in loop**********************
// in this current loop automatically execute and all time array elemets will store in(item) as parameter
// note : in this loop there will not be name of function

// coding.forEach(function (item) {
//     console.log(item);
// })


// ******************************************************
// 2nd method :  by using arrow function:

// coding.forEach( (item)=> {
//     console.log(item); 
// } )

// *********************************************************8
// 3rd method : by declearing function at first,and can also be callback in here

// give its reference , dont execute()

// function printe(item){
//     console.log(item);  
// }
// coding.forEach(printe)

// *******************************************************

// coding.forEach((item, index, array) => {
//     console.log(item,index,array);  
// })

// foreach loop dont just hold the one parameter access but 
// also it can access (index of array) and (entire array list) which we have declear in list
// every index value gets access of entire array list

// *****************************************************************

// there is also comman senario in array:
//  we take objects in array just like this [{}, {}, {}]
// in this code will take access of objects in array by using (foreachloop)

const myobj = [{
    languagename : "javascript",
    languagefilename : "js"
},
    {
    languagename : "java",
    languagefilename : "java"
    },
    {
    languagename : "python",
    languagefilename : "py"
    }
]

myobj.forEach( (item)=> {
    console.log(item.languagename);
    
} )

// in this code we cant just write (item) only
//  use (.) after item
//  e.g = item.languagename

// by doing this you can easily get access of 
// object in array which is really complex thing in itself
