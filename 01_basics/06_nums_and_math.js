const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
//we call it object function , you can also check in browser


console.log(balance.toString().length); //never miss()for methos


console.log(balance.toFixed(2)); 
//to give precision value like 100.00 its mostly use in banking software


const othervalue = 23.54841
console.log(othervalue.toPrecision(2));
//output will be : 24 

//another e.g if we take three value
const othervalue1 = 123.54841
console.log(othervalue1.toPrecision(6));
//output will be : 24 


//  in precision value we calculate roundof of value
//   if its 10.567 somthing it will consider 11
//  or is its 10.446 then it will consider 10
// it depends you can also control round of value
//  if you wants if value is 10.8 or more than 10.8 then it will be consider as 11 



const hundred = 100000000
console.log(hundred.toLocaleString(`en-in`));
// output will be : 10,00,00,000
// in usa format it will be : 100,000,000
//it gives value in indian or more constries format

  

//***************MATHS*******************

 console.log(Math);  // also inspect in browser
 console.log(Math.abs(-4)); 
 //opt will be 4 it changes sign but positive stays positive ,only negative changes

 console.log(Math.round(4.3));  // it makes roundof 
 console.log(Math.ceil(4.2));  // it will roundof to 5
 console.log(Math.floor(4.8));  // it will roundof to 4
console.log(Math.sqrt(25));  //for squreroot will be 5
console.log(Math.max(4,5,3,7,9)); //to find highest value in array
console.log(Math.min(4,5,3,7,9));//to find lowset value in array

console.log(Math.random()); //it give value inbetween 0 and 1

console.log(Math.random()*10);






 
 

 
 
 
  



