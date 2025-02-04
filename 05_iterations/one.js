//  forloop

//  for initialize in   (let i = 0;)
//  then check condition  (i <= 3;)
//  (i++) increase value by one
// then it will start again

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);

}

// ****************************************************
//same thing by using (if statement)

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`5 is best`);
    }
    // console.log(element);
         
}

// ********************************************************************
// Another example of loops in loop (NESTED LOOP)
// there are multiple loops in single loop which we called neted loop ,Every inner loop execute with its outter's iteration,
// this are use to design complex data structure and pattern

for (let i = 1; i <= 10; i++) {
    // console.log(`outter loop ${i}`);
    // note: inner loops value hits multiple times, that make innerloop special
    for (let j = 1; j <= 10; j++) {
        // console.log(i + '*'+ j + '=' + i*j );
        
    //    console.log(`inner loop ${j} outter loop${i}`);
    }
}

// ***************************************************************
// using array

const myarray = ["pran","pran1","pran2","pran3"]
// console.log(myarray.length);


for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    // console.log(element);
    
}

// if we dont ++ to i (i++)  then loop wont stop and will crash the memory


// **************************************************************************8
// Break and Continue

// continue:

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log(`5 detected`);
        break
    }
     console.log(`value of i is ${i}`);
}
//********************************************************************** */  

// continue:

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log(`5 detected`);
        continue
    }
     console.log(`value of i is ${i}`);
     
}
