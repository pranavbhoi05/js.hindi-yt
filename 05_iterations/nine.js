// reduce
// Note :
// At the first callback, there is no return value from the previous callback.
// Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
// If an initial value is supplied, this is used, and the iteration starts from array element 0.
// *****************************************************************************************************************************************

// example to understand properly

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4

// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue, 0 );

// console.log(sumWithInitial);
// Expected output: 10

// ****************************************************************************************************************


//  lets start coding



// const myarr = [1,2,3,4,5]

// asume : accumulator for acc
//         currentvalue for curval

// **************************************************
// with arrorfunction
// const newarr = myarr.reduce((Acc,curval) => Acc + curval , 0)  //dont forget to declear value o or else as per requirment e.g shopping cart item accumulator
//  console.log(newarr);


// *************************************************
// withoutarrow function

// const onearray = myarr.reduce( function (acc,curval) {
//     console.log(`acc is ${acc} and curval is ${curval}`);
//     return acc + curval
// },5)  //dont forget to declear value o or else as per requirment e.g shopping cart item accumulator
// console.log(onearray);


// *******************************************************************************************
// another example:

const shoppingcart =    [
    {
         itemName: "js course",
         price: 5999
    },
    
    {
         itemName: "python",
         price: 999
    },
    
    {
         itemName: "mobile dev",
         price: 7999
    },
    
    {
         itemName: "data science",
         price: 12999
    },
    
]


const pricetopay = shoppingcart.reduce((acc,item) => acc + item.price ,0 )

console.log(pricetopay);
