//go through all methods in string so that interviews would be eas to crack

const name = "pranav"
const repocount = 50

console.log(name + repocount + " any");

//avoid using this syntax cause its outdated xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


//insted use this method to merge to strings : use    (`${}`)

console.log(`hello my name is ${name} and my repocount is ${repocount} `);


// //(new) keyword use to crete new object in class
// //also try to check results in browser inspect console
const gamename = new String("pranav/pb/db")

// console.log(gamename [0]);   
//  // its not array it key of string it starts from 0 to ...........so on

// console.log(gamename.__proto__);     //syntax for object

console.log(gamename.length);        //for lenght we show how many char in index

// console.log(gamename.toUpperCase());  // will show string in uppercase



console.log(gamename.charAt(2));  //by using chatat we can see, on what index character is spotted

console.log(gamename.indexOf('a'));  //by using indexof we can see, on which position character is spoted



const newstring = gamename.substring(0,4)
console.log(newstring);
// //here we took new variable
// //last value wont include and will only print pran which is start from 0


const anotherstring = gamename.slice(-8,4)
console.log(anotherstring);
// // we use slice for reversing value

const newstringone = "  pranav  "
console.log(newstringone);     //  pranav
console.log(newstringone.trim());
// //The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
// // trimstart and trimend both options are avi=ailable in trim



//to replace value in string (link)
//browser dont understand spaces,so browser automatically enter diffent value in that space e.g(%)
const url = "https://pranavbhoir.com/%20bhaoir"
console.log(url.replace("%20","-"));  
//we replace (%20) into (-)
// outputwill be:   https://pranavbhoir.com/-bhaoir




//we"ll use include to check if that keyword is present in that url.  if its present it will give opt in (true and false.)
console.log(url.includes("bro"))



console.log(gamename.split('-'));

// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

//you can also check changes which i made in variable (gamename)
// if i give this ("pranav-pb-db") in variable output will be this [ 'pranav', 'pb', 'db' ]
// if this ("pranav/pb/db") output will be this  [ 'pranav/pb/db' ]
//it givr=es value in array format


