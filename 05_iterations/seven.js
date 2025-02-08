// map() is callback function  
// i use map insted foreach cause its way to easy  

// const mynumbers = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynumbers.filter( (lll) => lll * 5 )
// automatically returns value

// console.log(newnums);

// ******************************************************
// chaninig

const score = [1,2,3,4,5,6,7,8,9,10]

const bb = score
                .map((mm) => mm * 5)
                .map((mm) => mm + 5)  
                .map((mm) => mm + 5)
                .filter((mm) => mm >= 40) //in here i have add filter methos to get value after 40 or 40
                // in filter we only chech condition true and false 

            // in chainig parameters takes newly created array's value and perform task on new arrray value
                console.log(bb);
                 
