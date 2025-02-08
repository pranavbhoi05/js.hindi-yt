// i have given the example of foreach loop here
// problem with this loop is it cannot return the value
// in for each i was only able to print value, 
// in for each we cannot apply condition on seperate value , e.g i want to applay condition on "san" down below
//  so we gonna use filter methos insted of foreach


// ********************************************************************************************************
// without filter method:
// const nat = ["pran","lan","san","xian"]
// const nn = nat.forEach( (para) => {
//     console.log(para);
//     return para
// });

// console.log(nn);


// ******************************************************************************************
// with filter method

// const hi = ["pran","lan","san","xian"]
// const bb = hi.filter((para) => para)
// console.log(bb);



// another example
// **************************************************************
//  filter()
//  filter can also callback in itself and also return value
//each value will be access in filter , then we need to give condition
//  if we satisfies the condition and if its true then those value will be return
// const myNums = [1,2,3,4,5,6,7,8,9,10]

//  we took variable here so that our values will be store in that
// const newnums = myNums.filter(  (num) => num > 4)

// **********************************************************
// another method by using brackets{} and (retuen) keyword

// const newnums = myNums.filter(  (num) => {
//     return num > 4
// })

// console.log(newnums);
// console.log(myNums);

// ************************************************************************
// ***************************************************************************
// 2nd method by using foreach
// in this method we need to declear 2nd empty array in here

// const myar = [1,2,3,4,5,6,7,8,9,10]
// const newnumss = []

// myar.forEach((num) => {
//     if(num > 4)
//         newnumss.push(num)
// })
// console.log(newnumss);


// ********************************************************************************************
// ********************************************************************************************

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
 
 const userbooks = books.filter( (bk) => bk.genre === 'Fiction' && bk.edition > 2000)
//  i used && cause i wanted to sort more list with (genre and edition)
 console.log(userbooks);
 
//  can also use using return{}
// const userbooks = books.filter( (bk) => { return bk.genre === 'Fiction' && bk.edition > 2000})

// console.log(userbooks);
